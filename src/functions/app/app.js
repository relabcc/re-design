import * as functions from 'firebase-functions';

import server from '../server';

const nextApp = functions.https.onRequest(server);

export { nextApp };
