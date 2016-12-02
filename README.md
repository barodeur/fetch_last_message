# Fetch Last Message

Fetch the last message of a Twilio account.

# Install

```
npm install
```

# Configure
To configure the app, just rename the `.env.example.yml` file to `.env.yml` and set set the variables.

- `SERVICE_NAME`
- `TWILIO_ACCOUNT_SID`
- `TWILIO_API_KEY_SID`
- `TWILIO_API_KEY_SECRET`

## Optionally
### Setup error notification service
You can additionally add [Sentry.io](https://sentry.io) to catch runtime errors.
Just set `SENTRY_DSN` to setup the service.

# Deploy

```
serverless deploy
```
