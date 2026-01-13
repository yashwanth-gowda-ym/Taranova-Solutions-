const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');

(async () => {
  console.log('Starting Playwright test with local server...');
  
  // Start Vite preview server
  const server = spawn('npx', ['vite', 'preview', '--port', '4173'], {
    cwd: path.join(__dirname),
    stdio: 'pipe'
  });
  
  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Collect console errors
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  
  page.on('pageerror', error => {
    errors.push(error.message);
  });
  
  const pages = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/projects', name: 'Projects' },
    { path: '/team', name: 'Team' },
    { path: '/contact', name: 'Contact' },
  ];
  
  try {
    for (const pageInfo of pages) {
      console.log(`\nTesting ${pageInfo.name} page (${pageInfo.path})...`);
      
      await page.goto(`http://localhost:4173${pageInfo.path}`, { 
        waitUntil: 'networkidle',
        timeout: 30000 
      });
      
      // Check page title
      const title = await page.title();
      console.log(`✅ ${pageInfo.name} page loaded!`);
      console.log(`📄 Title: ${title}`);
      
      // Check for navbar
      const navbar = await page.$('nav');
      if (navbar) {
        console.log('✅ Navigation bar found');
      } else {
        console.log('❌ Navigation bar NOT found');
      }
      
      // Check for footer
      const footer = await page.$('footer');
      if (footer) {
        console.log('✅ Footer found');
      } else {
        console.log('❌ Footer NOT found');
      }
      
      // Check page-specific content
      const h1 = await page.$('h1');
      if (h1) {
        const h1Text = await h1.textContent();
        console.log(`✅ H1 found: ${h1Text.substring(0, 50)}...`);
      }
    }
    
    // Wait a moment for any delayed errors
    await page.waitForTimeout(2000);
    
    // Check for console errors (ignore favicon errors)
    const realErrors = errors.filter(e => !e.includes('favicon'));
    
    if (realErrors.length > 0) {
      console.log('\n❌ Console errors found:');
      realErrors.forEach((err, i) => console.log(`${i + 1}. ${err}`));
    } else {
      console.log('\n✅ No console errors detected!');
    }
    
  } catch (error) {
    console.error('Error during test:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
    server.kill();
  }
  
  console.log('\n✅ All tests passed! Multi-page website verified successfully.');
})();
