import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyAFsC_qw1QIIoGMd4RvasmgH2CV8OHt0zQ",
    authDomain: "login-ff0a4.firebaseapp.com",
    projectId: "login-ff0a4",
    storageBucket: "login-ff0a4.appspot.com",
    messagingSenderId: "524610927263",
    appId: "1:524610927263:web:016007f805d263e47700aa",
    measurementId: "G-WJZ0PE62GG"
  };
  
  const fire =firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;