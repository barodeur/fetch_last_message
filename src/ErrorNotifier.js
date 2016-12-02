import { Client as RavenClient } from 'raven';
import { sentry as sentryConfig } from './config';

export default class ErrorNotifier {
  constructor() {
    if (sentryConfig.dsn) {
      this.enabled = true;
      this.sentryClient = new RavenClient(sentryConfig.dsn);
    }
  }

  notify = err => new Promise((resolve) => {
    if (this.enabled) {
      this.sentryClient.captureException(err, (result) => {
        resolve(result);
      });
    }
  })
}
