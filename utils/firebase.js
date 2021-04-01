import * as admin from 'firebase-admin';

if(!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS)),
        databaseURL: "https://courseff-c2e4b-default-rtdb.firebaseio.com"
    });
}

export const auth = admin.auth();
export const database = admin.database();