import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBSE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	// databaseURL: process.env.REACT_APP_FIREBSE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBSE_PROJECT_ID,
	// storageBucket: process.env.REACT_APP_FIREBSE_STORAGE_BUCKET,
	appId: process.env.REACT_APP_FIREBSE_APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);
