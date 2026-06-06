import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDQ66GtdUOqL4C_kKbWK4zxQ1NqCLoe_CA',
  authDomain: 'ecommerse-c49ba.firebaseapp.com',
  projectId: 'ecommerse-c49ba',
  storageBucket: 'ecommerse-c49ba.firebasestorage.app',
  messagingSenderId: '398354216970',
  appId: '1:398354216970:web:2152fd8459e696101a07f3',
  measurementId: 'G-7L8785B3WM',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
