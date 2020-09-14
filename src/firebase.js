import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC6v5K-wCw_Zw3cikLWOse37gUBEZrx6Wo",
    authDomain: "facebook-clone-f34d7.firebaseapp.com",
    databaseURL: "https://facebook-clone-f34d7.firebaseio.com",
    projectId: "facebook-clone-f34d7",
    storageBucket: "facebook-clone-f34d7.appspot.com",
    messagingSenderId: "1090382964961",
    appId: "1:1090382964961:web:8b1b9ad2fcdd88992cefa0"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  
  export {auth,provider};
  export default db;