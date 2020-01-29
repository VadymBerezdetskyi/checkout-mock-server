import * as functions from 'firebase-functions';
import server from './server';

const apiConfig = {
  memory: '2GB',
  timeoutSeconds: 120,
};

export const api = functions.runWith(apiConfig as functions.RuntimeOptions).https.onRequest(server);