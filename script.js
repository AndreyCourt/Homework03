//global variables
var slider = document.getElementById("slider");
var lengthLabel = document.getElementById("length");

//generate random password
function generate() {
  //set password length/complexity
  let complexity = slider.value;

  //possible password outcomes
  let value =
    "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*+_()";

  let password = "";

  //Loop to choose password characters
  for (var i = 0; i <= complexity; i++) {
    password =
      password +
      value.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
  }

  //add password to textbox/display area
  document.getElementById("display").value = password;

  //add password to previously generated passwords section
  document.getElementById("lastpasswords").innerHTML += password + "<br  />";
}

//set default legth display of 25
lengthLabel.innerHTML = "Length: 25";

//function to set length based on slider position
document.getElementById("slider").oninput = function () {
  if (slider.value > 0) {
    lengthLabel.innerHTML = "Length: " + slider.value;
  } else {
    lengthLabel.innerHTML = "Length: 1";
  }
};

//function to copy password
function copyPassword() {
  var display = document.getElementById("display");
  display.select();
  display.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  alert("Password copied to clipboard");
}
