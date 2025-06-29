
const admin = require("firebase-admin")

const serviceAccount = require("../firebase-service.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "fir-94c3f.firebasestorage.app"
})

const bucket = admin.storage().bucket();

module.exports = bucket;
