import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDAeQwi0PCy7wZUos-cCsizWZGOBgS9FWM',
  authDomain: 'appdb2781.firebaseapp.com',
  databaseURL: 'https://appdb2781.firebaseio.com',
  projectId: 'appdb2781',
  storageBucket: 'appdb2781.appspot.com',
  messagingSenderId: '190544008603',
  appId: '1:190544008603:web:8f73f3914ec31046fffd3e',
  measurementId: 'G-3HXR37MGKZ'
});

export default app;
