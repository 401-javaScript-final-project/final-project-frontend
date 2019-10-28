import firebase from  'firebase';

const  firebaseConfig = {
  apiKey: "AIzaSyD6V5NJuARE4KF7PIqG3OJmg7TjcDw3K5U",
  authDomain: "tippyapp-bfa13.firebaseapp.com",
  databaseURL: "https://tippyapp-bfa13.firebaseio.com",
  projectId: "tippyapp-bfa13",
  storageBucket: "tippyapp-bfa13.appspot.com",
  messagingSenderId: "681548376807",
  appId: "1:681548376807:web:898c99aaa7e4cf3402d042",
  measurementId: "G-S4VTX8GR8X"
};

firebase.initializeApp(firebaseConfig)

export const f = firebase;
export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();