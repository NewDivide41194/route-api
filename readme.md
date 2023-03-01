# ViaTick-Assignment

- **Technology stack**: This project primarly used [NodeJs], [Javascript] and [Sequelize] for database.
- **Status**: 1.1

## Dependencies
- "cors": "^2.8.5",
- "dotenv": "^16.0.3",
- "express": "^4.18.2",
- "mysql2": "^3.1.2",
- "sequelize": "^6.29.0"

## devDpendencies
- "nodemon": "^2.0.20",
- "sequelize-cli": "^6.6.0"

## Installation and Run

```bash
npm install
npm run db:reset
npm start
```

## Configuration
- NEXT_PUBLIC_FIREBASE_API_KEY = "your API Key"
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = "your Auth Domain"
- NEXT_PUBLIC_FIREBASE_DATABASE_URL="your Database URL"
- NEXT_PUBLIC_FIREBASE_PROJECT_ID = "Your Project ID"
- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = "Your Storage Bucket"
- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = "Your Sender ID"
- NEXT_PUBLIC_FIREBASE_APP_ID = "Your APP ID"
- NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = "Your Measurement ID"

## How to test the software
Send message with userId and use different userId for reply via 'live chat'.
Send notification via 'Firbase Cloud Messaging'.

## Create a Real-time Database
**Use Firebase Console**
1. Open the ‘Build’ menu
2. Click on 'Realtime Database' and then ‘Create Database’
3. After that, select the region you want to use
4. Finally, start the database in 'test mode'

## Get Configuration Details
**Use Firebase Console**
1. Click the Gear icon next to 'Project Overview'
2. Choose 'Project Settings'
3. Under ‘Your apps’, select ‘Web app’:
4. Enter a name for your application
5. Click on ‘Register App’
**Your application’s config values will then be visible in the ‘Your apps’ section**
6. Replace firebaseConfig with Your application values in util/firebase.

## Get FCM Key pair
**Use Firebase Console**
1. Click the Gear icon next to 'Project Overview'
2. Go to 'Project Setting'
3. Choose 'Cloud Messaging'
4. Enable both 'Firebase Cloud Messaging API (V1)' and 'Cloud Messaging API (Legacy)'
5. Under Web configuration, Click Generate New Private Key, then confirm by clicking Generate Key.
6. Replace vapidKey:'Your key pair' in utils/firebase.js

## Credits and references
1. https://sequelize.org/api/v6/class/src/data-types.js~geography
2. https://docs.mapbox.com/api/navigation/optimization-v1/