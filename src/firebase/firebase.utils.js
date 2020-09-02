import firebase from 'firebase/app';
import 'firebases/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBOB57qdq0Iy4DdwCm3aP62vi4ahPoAu54",
  authDomain: "portfolio-f64f2.firebaseapp.com",
  databaseURL: "https://portfolio-f64f2.firebaseio.com",
  projectId: "portfolio-f64f2",
  storageBucket: "portfolio-f64f2.appspot.com",
  messagingSenderId: "495067692645",
  appId: "1:495067692645:web:6050ebe54d87b48967908c",
  measurementId: "G-BZSZFTWCVM"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () =>  auth.signInWithPopup(provider);

export default firebase;