/* eslint-disable import/prefer-default-export */

export const twilio = {
  apiBaseUrl: 'https://api.twilio.com/2010-04-01',
  apiKeySid: process.env.TWILIO_API_KEY_SID,
  apiKeySecret: process.env.TWILIO_API_KEY_SECRET,
  accountSid: process.env.TWILIO_ACCOUNT_SID,
};

export const sentry = {
  dsn: process.env.SENTRY_DSN,
};

/* eslint-enable */
