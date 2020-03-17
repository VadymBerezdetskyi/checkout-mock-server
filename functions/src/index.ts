import * as functions from 'firebase-functions';
import CheckoutMockServer from './server';

const apiConfig = {
  memory: '2GB',
  timeoutSeconds: 120,
};

const server = new CheckoutMockServer();

export const api = functions.runWith(apiConfig as functions.RuntimeOptions).https.onRequest(server.getListener());