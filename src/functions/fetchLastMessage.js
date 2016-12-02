import { pick } from 'lodash';
import fetch from 'node-fetch';
import { twilio } from '../config';

const {
  apiBaseUrl: twilioApiBaseUrl,
  apiKeySid: twilioApiKeySid,
  apiKeySecret: twilioApiKeySecret,
  accountSid: twilioAccountSid,
} = twilio;

async function fetchTwillioMessages() {
  const authStr = `${twilioApiKeySid}:${twilioApiKeySecret}`;
  const authStrBase64 = new Buffer(authStr).toString('base64');
  const response = await fetch(`${twilioApiBaseUrl}/Accounts/${twilioAccountSid}/Messages.json`, {
    headers: {
      Authorization: `Basic ${authStrBase64}`,
    },
  });
  const messages = await response.json();
  return messages;
}

async function fetchLastMessage() {
  const messages = await fetchTwillioMessages();
  return messages.messages[0];
}

function formatMessage(message) {
  return pick(message, 'sid', 'to', 'from', 'body', 'date_sent');
}

export default async () => ({
  statusCode: 200,
  body: JSON.stringify(formatMessage(await fetchLastMessage())),
});
