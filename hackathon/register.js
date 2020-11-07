function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }
var Customerid;
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD178GpxoUG9kYf8XynDGP74w7M_1xWTqQ",
    authDomain: "exuberance-7652f.firebaseapp.com",
    databaseURL: "https://exuberance-7652f.firebaseio.com",
    projectId: "exuberance-7652f",
    storageBucket: "exuberance-7652f.appspot.com",
    messagingSenderId: "372705591782",
    appId: "1:372705591782:web:64b155546654b2eb9c9627"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var info = database.ref().child("Customer-information");
  var all_cities = database.ref().child("All-customers");
  function save_info() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    city = city.toLowerCase();
    document.getElementById("city").value = "";
    document.getElementById("email").value = "";
    document.getElementById("name").value = "";
    var city_belong = info.child(city);
    Customerid  = getRandomString(20);
    console.log(Customerid);
    city_belong.child(Customerid).child("Name").set(name);
    all_cities.child(Customerid).set(name);
    //city_belong.push(Customerid);
    sendkey(Customerid);
    alert("Your details have been recorded!");
};

function sendkey(key) {
    console.log("sending");
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    Email.send({

        Host: "smtp.gmail.com",
        Username: "shakedealhack@gmail.com",
        Password: "shakedeal123$",
        To: email,
        From: "shakedealhack@gmail.com",
        Subject: "Registration Confirmation",
        Body: "Hey " + name + "<br>" + "Your key is " + key,
    })
}

function validate(){
    console.log(document.getElementById("city_from").value);
    console.log(document.getElementById("cid").value);
    var val = document.getElementById("cid").value;
    all_cities.on("value", gotData);
    function gotData(data) {
        data = data.val();
        console.log(data);
        let keys = Object.keys(data);
        var present = keys.includes(val);
        if (present == true) {
            url = "india.html";
            console.log(present);
            window.location.replace(url);
        } else {
            alert("Stay Calm And Enter The Correct Key!");
        }
    }
}
