const admin = require("firebase-admin");
const serviceAccount = require("./test-line-bot-e06b0-firebase-adminsdk-ytkpy-a4ba4deeaa.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });
module.exports = db;
