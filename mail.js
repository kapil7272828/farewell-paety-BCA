const firebaseConfig = {
    apiKey: "AIzaSyBRYDk0RqKmqccecqQMm9FJn5xEdjFrE0U",
    authDomain: "farewellparty-24000.firebaseapp.com",
    databaseURL: "https://farewellparty-24000-default-rtdb.firebaseio.com",
    projectId: "farewellparty-24000",
    storageBucket: "farewellparty-24000.firebasestorage.app",
    messagingSenderId: "777145542347",
    appId: "1:777145542347:web:e4e846fd98189b28371d4e"
  };
  firebase.initializeApp(firebaseConfig);
var reviewFormDB = firebase.database().ref('reviewForm');
 document.getElementById('reviewForm').addEventListener('submit',submitForm);

 function submitForm(e){
  e.preventDefault();

  var name = getElementVal('name');
  var email = getElementVal('email');
  var phone = getElementVal('phone');
  var star5 = getElementVal('star5');
  var star4= getElementVal('star4');
  var star3= getElementVal('star3');
  var star2 = getElementVal('star2');
  var star1 = getElementVal('star1');
  var message = getElementVal('message');

  saveMessages(name,email,phone,star5,star4,star3,star2,star1,message);
 }
 
 const saveMessages = (name,email,phone,star5,star4,star3,star2,star1,message) =>{
    var newReviewForm = reviewFormDB.push();
    newReviewForm.set({
        name:name,
        email:email,
        phone:phone,
        star5:star5,
        star4:star4,
        star3:star3,
        star2:star2,
        star1:star1,
        message:message,
    })
 }




 const getElementVal = (id) =>{
    return document.getElementById(id).value;
    
 }

