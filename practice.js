
//ADD YOUR FIREBASE LINKS

const firebaseConfig = {
    apiKey: "AIzaSyAmLVhwshlxAQcMgYhmrevjFZD6J5LPCVk",
    authDomain: "kwitter-c6bfd.firebaseapp.com",
    databaseURL: "https://kwitter-c6bfd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-c6bfd",
    storageBucket: "kwitter-c6bfd.appspot.com",
    messagingSenderId: "787997029462",
    appId: "1:787997029462:web:c9bfddde0f87540513b7f7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function adduser() {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"adding user",
          user_name:user_name
      });
  }