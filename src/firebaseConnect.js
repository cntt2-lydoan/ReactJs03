import * as firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCAq8OfMSfSVFtUz5b1LDUdTxld8-OkyIs",
    authDomain: "notereactfedu-ca3a3.firebaseapp.com",
    databaseURL: "https://notereactfedu-ca3a3.firebaseio.com",
    projectId: "notereactfedu-ca3a3",
    storageBucket: "",
    messagingSenderId: "96968095002",
    appId: "1:96968095002:web:56e704da1b85cbaf"
  };
  // Initialize Firebase
 
  export const firebaseConnect = firebase.initializeApp(firebaseConfig);

  var data = firebase.database().ref('dataForNote/');
  data.once('value').then(function(snapshot){
    console.log(snapshot.val());
  })