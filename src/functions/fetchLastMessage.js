import { pick } from 'lodash';
import fetch from 'node-fetch';
import { twilio } from '../config';

const {
  apiBaseUrl: twilioApiBaseUrl,
  apiKeySecret: twilioApiKeySecret,
  accountSid: twilioAccountSid,
} = twilio;

async function fetchTwillioMessages() {
  const authStr = `${twilioAccountSid}:${twilioApiKeySecret}`;
  const authStrBase64 = new Buffer(authStr).toString('base64');
  const response = await fetch(`${twilioApiBaseUrl}/Accounts/${twilioAccountSid}/Messages.json`, {
    headers: {
      Authorization: `Basic ${authStrBase64}`,
    },
  });
  const { messages } = await response.json();
  console.log(messages);
  return messages;
}

async function fetchLastMessage() {
  const [message] = await fetchTwillioMessages();
  return message;
}

function formatMessage(message) {
  return {
    ...pick(message, 'sid', 'to', 'from', 'body', 'date_sent'),
    code: message.body.match(/(\d{6})/ig)[0],
  };
}

export default async () => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
  },
  body: JSON.stringify(formatMessage(await fetchLastMessage())),
});
