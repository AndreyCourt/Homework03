//generate random password
function generate() {
  //set password length/complexity
  let complexity = document.getElementById("slider").value;

  //possible password values
  let value =
    "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*+_()";

  let password = "";

  //create for loop to choose password characters
  for (var i = 0; i <= complexity; i++) {
    password =
      password +
      value.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
  }

  //add password to textbox/display area
  document.getElementById("display").value = password;

  //add password to previously generated passwords section
  document.getElementById("lastpasswords").innerHTML += password + "br  />";
}

//set default legth display of 25
document.getElementById("length").innerHTML = "length: 25";

//function to set length based on slider position
document.getElementById("slider").oninput = function () {
  if (document.getElementById("slider)").value > 0) {
    document.getElementById("length").innerHTML =
      "Length: " + document.getElementById("slider").value;
  } else {
    document.getElementById("length").innerHTML = "Length: 1";
  }
};

//function to copy password
function copyPassword() {
  document.getElementById("dispaly").Select();
  document.execCommand("Copy");
  alert("Password copied to clipboard");
}
