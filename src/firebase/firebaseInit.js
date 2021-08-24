import firebase from 'firebase/app'
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyBGMyk9SaBupCGAxyyk-d9dIHYamjyBPUM",
    authDomain: "myblogs-29220.firebaseapp.com",
    projectId: "myblogs-29220",
    storageBucket: "myblogs-29220.appspot.com",
    messagingSenderId: "823330834956",
    appId: "1:823330834956:web:1d6befb1ec7a16e33cbc29"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp }

export default firebaseApp.firestore();