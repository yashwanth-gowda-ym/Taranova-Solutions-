// Backend API server for form validation
// Uses Hunter.io API and Abstract Phone Validation API

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Keys from environment variables
const HUNTER_API_KEY = process.env.HUNTER_API_KEY;
const ABSTRACT_PHONE_API_KEY = process.env.ABSTRACT_PHONE_API_KEY;
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'API server is running' });
});

/**
 * Email Validation Endpoint
 * Uses Hunter.io API to validate email existence and deliverability
 */
app.post('/api/validate-email', async (req, res) => {
  try {
    const { email } = req.body;

    console.log('📧 Validating email:', email);

    // Basic validation
    if (!email || !email.includes('@')) {
      console.log('❌ Invalid email format');
      return res.status(400).json({ message: 'Invalid email format' });
    }

    if (!HUNTER_API_KEY) {
      console.error('❌ HUNTER_API_KEY not configured');
      return res.status(400).json({ message: 'Email verification service not configured.' });
    }

    // Call Hunter.io Email Verifier API
    const apiUrl = `https://api.hunter.io/v2/email-verifier?email=${encodeURIComponent(email)}&api_key=${HUNTER_API_KEY}`;
    console.log('🔍 Calling Hunter.io API...');
    
    const response = await fetch(apiUrl);

    console.log('📊 Hunter.io Response Status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Hunter.io API error:', response.status, errorText);
      return res.status(400).json({ message: 'Could not verify email address. Please try again.' });
    }

    const data = await response.json();
    console.log('📦 Hunter.io Full Response:', JSON.stringify(data, null, 2));

    if (!data.data) {
      console.error('❌ No data in response');
      return res.status(400).json({ message: 'Invalid email verification response.' });
    }

    const emailData = data.data;

    console.log('✉️  Email Status:', emailData.status);
    console.log('📬 Email Result:', emailData.result);
    console.log('📊 Email Score:', emailData.score);
    console.log('🗑️  Disposable:', emailData.disposable);

    // RELAXED VALIDATION: Accept valid emails even if result is "unknown"
    if (emailData.status === 'valid') {
      if (emailData.result === 'deliverable' || emailData.result === 'unknown' || emailData.result === 'risky') {
        console.log('✅ Email accepted:', emailData.result);
        return res.status(200).json({ 
          valid: true, 
          message: 'Email verified successfully',
          score: emailData.score,
          result: emailData.result
        });
      } else if (emailData.result === 'undeliverable') {
        console.log('❌ Email undeliverable');
        return res.status(400).json({
          valid: false,
          message: 'This email address is undeliverable. Please use a valid email.',
        });
      }
    } else if (emailData.status === 'invalid') {
      console.log('❌ Email invalid');
      return res.status(400).json({
        valid: false,
        message: 'This email address is invalid. Please check and try again.',
      });
    }

    if (emailData.disposable) {
      console.log('❌ Disposable email detected');
      return res.status(400).json({
        valid: false,
        message: 'Disposable email addresses are not allowed.',
      });
    }

    console.log('⚠️  Uncertain result, accepting email');
    return res.status(200).json({ 
      valid: true, 
      message: 'Email verified',
      score: emailData.score,
      result: emailData.result 
    });

  } catch (error) {
    console.error('❌ Email validation error:', error);
    res.status(400).json({ message: 'Email validation failed. Please try again.' });
  }
});

/**
 * Phone Validation Endpoint
 * Uses Abstract Phone Validation API (supports global phone numbers)
 */
app.post('/api/validate-phone', async (req, res) => {
  try {
    const { phone } = req.body;

    console.log('📱 Validating phone:', phone);

    // Basic validation
    const phoneDigits = phone.replace(/\D/g, '');
    if (!phoneDigits || phoneDigits.length < 8) {
      console.log('❌ Phone too short:', phoneDigits.length, 'digits');
      return res.status(400).json({ message: 'Phone number must have at least 8 digits' });
    }

    if (!ABSTRACT_PHONE_API_KEY) {
      console.error('❌ ABSTRACT_PHONE_API_KEY not configured');
      return res.status(400).json({ message: 'Phone verification service not configured.' });
    }

    // Call Abstract Phone Validation API
    const apiUrl = `https://phonevalidation.abstractapi.com/v1/?api_key=${ABSTRACT_PHONE_API_KEY}&phone=${encodeURIComponent(phone)}`;
    console.log('🔍 Calling Abstract Phone Validation API...');
    
    const response = await fetch(apiUrl);

    console.log('📊 Abstract API Response Status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Abstract API error:', response.status, errorText);
      return res.status(400).json({ message: 'Could not verify phone number. Please try again.' });
    }

    const data = await response.json();
    console.log('📦 Abstract API Full Response:', JSON.stringify(data, null, 2));

    // Abstract Phone Validation Response:
    // {
    //   "phone": "+14152007986",
    //   "valid": true,
    //   "format": {
    //     "international": "+1 415-200-7986",
    //     "local": "(415) 200-7986"
    //   },
    //   "country": {
    //     "code": "US",
    //     "name": "United States",
    //     "prefix": "+1"
    //   },
    //   "location": "California",
    //   "type": "mobile",
    //   "carrier": "T-Mobile USA, Inc."
    // }

    // Check for API errors
    if (data.error) {
      console.error('❌ Abstract API error:', data.error);
      return res.status(400).json({
        valid: false,
        message: data.error.details || 'Phone verification failed.',
      });
    }

    // Check if phone is valid
    if (data.valid === true) {
      console.log('✅ Phone number valid');
      console.log('🌍 Country:', data.country?.name);
      console.log('📞 Type:', data.type);
      console.log('📡 Carrier:', data.carrier);
      
      return res.status(200).json({
        valid: true,
        message: `Valid ${data.country?.name || 'phone'} number`,
        country: data.country?.code,
        countryName: data.country?.name,
        phoneType: data.type,
        carrier: data.carrier,
        internationalFormat: data.format?.international
      });
    } else {
      console.log('❌ Phone number invalid');
      return res.status(400).json({
        valid: false,
        message: 'This phone number is not valid. Please enter a valid number.',
      });
    }
  } catch (error) {
    console.error('❌ Phone validation error:', error);
    res.status(400).json({ message: 'Phone validation failed. Please try again.' });
  }
});

// Test endpoint for phone validation
app.get('/test-phone', async (req, res) => {
  try {
    const testPhone = '+919876543210'; // Indian number for testing
    const apiUrl = `https://phonevalidation.abstractapi.com/v1/?api_key=${ABSTRACT_PHONE_API_KEY}&phone=${encodeURIComponent(testPhone)}`;
    
    console.log('Testing Abstract Phone Validation API with:', testPhone);
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    res.json({
      status: response.status,
      apiKeyPresent: !!ABSTRACT_PHONE_API_KEY,
      apiKeyLength: ABSTRACT_PHONE_API_KEY?.length,
      testNumber: testPhone,
      response: data
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

/**
 * reCAPTCHA Verification Endpoint
 * Verifies Google reCAPTCHA tokens
 */
app.post('/api/verify-captcha', async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ success: false });
    }

    const googleURL = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`;

    const response = await fetch(googleURL, { method: 'POST' });
    const data = await response.json();

    return res.json({ success: data.success });

  } catch (error) {
    console.error('Captcha error:', error);
    res.status(500).json({ success: false });
  }
});

// Test endpoint for email validation
app.get('/test-email', async (req, res) => {
  try {
    const testEmail = 'test@gmail.com';
    const apiUrl = `https://api.hunter.io/v2/email-verifier?email=${testEmail}&api_key=${HUNTER_API_KEY}`;
    
    console.log('Testing Hunter.io Email API...');
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    res.json({
      status: response.status,
      apiKeyPresent: !!HUNTER_API_KEY,
      apiKeyLength: HUNTER_API_KEY?.length,
      response: data
    });
  } catch (error) {
    res.json({ error: error.message });
  }
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({ message: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Validation API server running on http://localhost:${PORT}`);
  console.log('📍 Endpoints:');
  console.log('   POST /api/validate-email - Validate email address');
  console.log('   POST /api/validate-phone - Validate phone number (global)');
  console.log('   POST /api/verify-captcha - Verify reCAPTCHA token');
  console.log('   GET  /health - Health check');
  console.log('   GET  /test-email - Test email API');
  console.log('   GET  /test-phone - Test phone API');
  console.log('\n🔑 API Keys Status:');
  console.log('   Hunter.io:', HUNTER_API_KEY ? '✅ Configured' : '❌ Missing');
  console.log('   Abstract Phone:', ABSTRACT_PHONE_API_KEY ? '✅ Configured' : '❌ Missing');
  console.log('   reCAPTCHA Secret:', RECAPTCHA_SECRET_KEY ? '✅ Configured' : '❌ Missing');
  console.log('\n🌍 Phone validation supports all countries globally');
  console.log('💡 Get Abstract API key: https://app.abstractapi.com/api/phone-validation');
});

export default app;