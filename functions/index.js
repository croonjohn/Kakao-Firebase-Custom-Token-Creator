const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const Promise = require('promise');

const app = express();
app.use(bodyParser.json());

// Firebase setup
const admin = require('firebase-admin');
// you should manually put your service-account.json in the same folder app.js
// is located at.
const serviceAccount = require('./service-account.json');

// Initialize FirebaseApp with service-account.json
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'your-own-Firebase-database-URL'
});

app.post('/verifyToken', (request, response) => {
    var userID = request.body.userID
    if (!userID) return response.status(400).send({error: 'There is no userID.'})
  .send({message: 'userID is a required parameter.'});
    console.log(`Verifying userID: ${userID}`);
    createFirebaseToken(userID).then((firebaseToken) => {
      response.send({firebase_token: firebaseToken});
    });
});



exports.app = functions.https.onRequest(app);

function createFirebaseToken(userID) {
  return admin.auth().createCustomToken(userID, {provider: 'Kakao'});
};