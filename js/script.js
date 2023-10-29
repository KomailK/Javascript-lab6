
// Page 1 (Home Page)

// Question 2) //

var send = document.getElementById("send"); // get the element "send"
if (send !== null) {
  send.addEventListener("click", (userForm) => {
    var firstName = document.getElementById("Fname").value;
    var lastName = document.getElementById("Lname").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var membership = document.querySelector('input[name="membership"]:checked').value;

    var userInfoMessage =
      "Full Name : " + firstName + " " + lastName + "<br>" +
      "Email : " + email + "<br>" +
      "Address : " + address + ", " +
      city + ", " + province + "<br>" +
      "Membership : " + membership;

    document.getElementById("output").innerHTML = userInfoMessage;
  });
}

/*Page 2 (Excel Page) */

/*Question 5),6) */


var calculate = document.getElementById("calculate"); // get the element "calculate"
if (calculate !== null) {

  calculate.addEventListener("click", (myExcelFuns) => {
    var numberStr = document.getElementById("numbers").value;
    console.log(numberStr); //Displaying the elements entered by the user
    if (numberStr.trim() === "") {
      alert("Enter numbers separated by spaces");
    } else {
      var numberArr = numberStr.trim().split(" "); //Creating an array in which       we have the elements entered by the user
      console.log(numberArr);
      var finalnumericArray = [];
      for (var i = 0; i < numberArr.length; i++) {
        var numericValue = parseFloat(numberArr[i]);//Converting each elements in the array in a numeric value
        if (isNaN(numericValue) == false) {
          finalnumericArray.push(numericValue);
        }
        console.log(numericValue);
      }
      console.log(finalnumericArray);

      var res;

      if (document.getElementById("autoSum").checked) {
        res = finalnumericArray.reduce((a, b) => a + b);
      }
      else if (document.getElementById("average").checked) {
        res = finalnumericArray.reduce((a, b) => a + b) / finalnumericArray.length;
      }
      else if (document.getElementById("max").checked) {
        res = Math.max(...finalnumericArray);
      }
      else {
        res = Math.min(...finalnumericArray);
      }
      document.getElementById("output2").innerHTML = "Result : " + res;
    }

  });
}

/*Question 7) */


let darkMode = false;
let blueMode = false;
const darkWhiteButton = document.getElementById("darkWhiteButton");
const blueRedButton = document.getElementById("blueRedButton");

darkWhiteButton.addEventListener("click", toggleDarkWhiteMode);

function toggleDarkWhiteMode() {
  const body = document.getElementById("html");
  if (darkMode) {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }
  darkMode = !darkMode;
}

blueRedButton.addEventListener("click", toggleBlueRedMode);

function toggleBlueRedMode() {
  const body = document.getElementById("html");
  if (blueMode) {
    body.style.backgroundColor = "#DC143C";
    body.style.color = "#191970";
  } else {
    body.style.backgroundColor = "#191970";
    body.style.color = "#DC143C";

  }
  blueMode = !blueMode;
}

DefaultColor.addEventListener("click", DefaultMode);

function DefaultMode() {
  const body = document.getElementById("html");
  if (DefaultMode) {
    body.style.backgroundColor = "#00539C";
    body.style.color = "#EEA47F";
  }
  DefaultMode = !DefaultMode;
}
