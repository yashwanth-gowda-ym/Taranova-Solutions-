// EmailJS Configuration
// Get these values from your EmailJS Dashboard: https://dashboard.emailjs.com/

// REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
export const emailjsConfig = {
  serviceId: 'service_vqdzlbh',      // e.g., 'service_abc123'
  templateId: 'template_txiymed',    // e.g., 'template_xyz789'
  publicKey: 'VJocx-__WXGetRebX',      // e.g., 'user_abc123xyz456'
};

// Template Parameters Mapping (used in your EmailJS template)
// Make sure your EmailJS template has these variables:
// {{user_name}} - sender's name
// {{user_email}} - sender's email
// {{company}} - company name (optional)
// {{message}} - message content
// {{reply_to}} - sender's email for reply

export const templateParams = {
  user_name: 'formData.name',
  user_email: 'formData.email',
  company: 'formData.company',
  message: 'formData.message',
  reply_to: 'formData.email',
};
