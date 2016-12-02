/* eslint-disable no-console, import/prefer-default-export, import/first */
require('source-map-support').install();

import fetchLastMessageFn from './functions/fetchLastMessage';
import ErrorNotifier from './ErrorNotifier';

const errorNotifier = new ErrorNotifier();

const wrapper = f => async (event, context, callback) => {
  try {
    const response = await f(event, context);
    callback(null, response);
  } catch (err) {
    await errorNotifier.notify(err);
    callback(err);
  }
};

export const fetchLastMessage = wrapper(fetchLastMessageFn);

/* eslint-enable */
