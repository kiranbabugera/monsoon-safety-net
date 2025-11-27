const fs = require('fs');

// This reads the secret keys from Netlify's environment variables
const config = {
    GEMINI_API_KEY: process.env.GEMINI_API_KEY,
    OWM_API_KEY: process.env.OWM_API_KEY,
    firebaseConfig: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID
    }
};

// This creates the file content formatted as a JS module
const fileContent = `export const config = ${JSON.stringify(config)};`;

// This writes the file to the disk on the server
fs.writeFileSync('config.js', fileContent);
console.log('config.js generated successfully with environment variables!');