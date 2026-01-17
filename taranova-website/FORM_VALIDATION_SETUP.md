# Form Validation Setup Guide

## Overview

The contact form now includes email and phone validation before submission:

- **Email Validation**: Uses QuickEmailVerification API to verify email existence and deliverability
- **Phone Validation**: Uses Big Data Cloud API to validate phone number format and country
- **EmailJS Integration**: Unchanged - continues to handle email sending
- **Security**: All API keys are stored on the backend (server.js) - never exposed in frontend code
- **UX**: Loading states, error messages, and graceful fallbacks for API failures

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This installs all dependencies including:
- Express.js (backend server)
- CORS (for cross-origin requests)
- dotenv (for environment variables)
- concurrently (for running dev server and backend simultaneously)

### 2. Get API Keys

#### QuickEmailVerification API
1. Sign up at: https://quickemailverification.com
2. Get your free API key from the dashboard
3. Free tier: 100 verifications per day

#### Big Data Cloud API
1. Sign up at: https://www.bigdatacloud.com
2. Get your free API key (credit card not required for free tier)
3. Free tier: 1,000 requests per day

### 3. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Add your API keys to `.env`:
   ```
   QUICK_EMAIL_VERIFICATION_API_KEY=your_api_key_here
   BIG_DATA_CLOUD_API_KEY=your_api_key_here
   PORT=5000
   ```

### 4. Run the Application

**Development Mode** (runs Vite dev server + validation API server):
```bash
npm run dev:full
```

**Backend Only** (validation API server):
```bash
npm run server
```

**Frontend Only** (Vite dev server):
```bash
npm run dev
```

**Production Build**:
```bash
npm run build
npm run preview
```

## How It Works

### Frontend Flow (Contact.jsx)

1. User fills out form (name, email, phone, message)
2. On submit:
   - Client-side validation (required fields, basic format check)
   - If errors found, display inline error messages
   - If valid, start validation API calls
3. Validation API calls:
   - POST to `/api/validate-email` with email
   - POST to `/api/validate-phone` with phone
4. If validation fails:
   - Show user-friendly error message
   - Prevent submission
5. If validation passes:
   - Send email via EmailJS
   - Show success message
   - Clear form

### Backend Flow (server.js)

1. `/api/validate-email` endpoint:
   - Receives email from frontend
   - Calls QuickEmailVerification API
   - Returns validation result
   - On API failure: Allows submission (graceful fallback)

2. `/api/validate-phone` endpoint:
   - Receives phone number from frontend
   - Calls Big Data Cloud API
   - Returns validation result and country info
   - On API failure: Allows submission (graceful fallback)

## Features

### ✅ Security
- API keys never exposed in frontend code
- All validation happens server-side
- Environment variables for sensitive data

### ✅ User Experience
- **Validation Loading**: Shows "Validating..." spinner
- **Inline Errors**: Field-specific error messages
- **Error Clearing**: Errors clear when user starts typing
- **Multiple States**:
  - Sending... (during EmailJS submission)
  - Message Sent! (success - green button)
  - Failed to Send (error - red button)
  - Sent (Validation Skipped) (API unavailable - yellow button)

### ✅ Graceful Degradation
- If validation API is down, form still submits
- Fallback messages for API failures
- Form works even without API keys configured

### ✅ Form Fields
- **Name** (required)
- **Email** (required, validated)
- **Phone** (optional, validated if provided)
- **Message** (required)

## Error Messages

### Client-Side Validation
- "Name is required"
- "Email is required"
- "Please enter a valid phone number" (basic format)
- "Message is required"

### Email Validation
- "Invalid email address"
- "This email address is disposable. Please use a valid email."
- "This email address is catch-all. Please use a valid email."

### Phone Validation
- "Phone number must have at least 10 digits"
- "This phone number is not valid. Please enter a valid number."

### API Failures
- "Email validation service temporarily unavailable"
- "Phone validation service temporarily unavailable"
- Fallback: Form submission proceeds

## API Endpoints

### POST /api/validate-email
```json
Request:
{
  "email": "user@example.com"
}

Response (Valid):
{
  "valid": true,
  "message": "Email verified"
}

Response (Invalid):
{
  "valid": false,
  "message": "This email address is invalid. Please use a valid email."
}
```

### POST /api/validate-phone
```json
Request:
{
  "phone": "+1 (555) 123-4567"
}

Response (Valid):
{
  "valid": true,
  "message": "Valid US number",
  "country": "US",
  "countryName": "United States"
}

Response (Invalid):
{
  "valid": false,
  "message": "This phone number is not valid. Please enter a valid number."
}
```

## Testing

### Test with Valid Data
- Name: "John Doe"
- Email: "john@gmail.com"
- Phone: "+1 (555) 123-4567"
- Message: "Test message"

### Test with Invalid Data
- Email: "invalid@invalid.test" (will be marked as invalid)
- Phone: "123" (will fail minimum digit check)

## Troubleshooting

### Port Already in Use
If port 5000 is already in use:
```bash
# Change PORT in .env file
PORT=3001
```

### API Key Not Working
1. Verify API key is correctly copied from provider
2. Check that API key is in `.env` file (not `.env.example`)
3. Make sure NODE_ENV is not set to "production" locally

### Validation Always Fails
1. Check if API keys are correctly configured
2. Verify API provider accounts are active
3. Check API quotas/rate limits
4. The form will still submit if API fails (graceful fallback)

### CORS Issues
The server has CORS enabled for all origins in development. For production, restrict CORS:
```javascript
// In server.js, update:
app.use(cors({
  origin: 'https://yourdomain.com',
  credentials: true
}));
```

## Production Deployment

### 1. Set Environment Variables
Set the following on your hosting provider:
- `QUICK_EMAIL_VERIFICATION_API_KEY`
- `BIG_DATA_CLOUD_API_KEY`
- `NODE_ENV=production`
- `PORT=5000` (or use provider's default)

### 2. Build Frontend
```bash
npm run build
```

### 3. Start Server
```bash
npm run server
```

Or use PM2 for process management:
```bash
npm install -g pm2
pm2 start server.js --name "validation-api"
pm2 save
pm2 startup
```

### 4. Configure Proxy (if needed)
If frontend and backend are on different ports, configure a reverse proxy (nginx/Apache) or update the frontend API calls to use the correct server URL.

## Additional Resources

- [QuickEmailVerification API Docs](https://quickemailverification.com/api)
- [Big Data Cloud API Docs](https://www.bigdatacloud.com/customers/api)
- [EmailJS Documentation](https://www.emailjs.com)
- [Express.js Documentation](https://expressjs.com)

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review server logs for error details
3. Verify API provider status and credentials
4. Contact API providers if validation is failing
