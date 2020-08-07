import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCHXuTv7zGrXqw_zqEr6p7OQ3MuyWWz9i0",
  authDomain: "ikea-clone.firebaseapp.com",
  databaseURL: "https://ikea-clone.firebaseio.com",
  projectId: "ikea-clone",
  storageBucket: "ikea-clone.appspot.com",
  messagingSenderId: "367106611274",
  appId: "1:367106611274:web:56db0a538ebf4b30d2eeb3",
  measurementId: "G-XGZTVRQD36"
})

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };