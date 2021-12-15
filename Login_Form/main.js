// Get the input values of the email and password

const handleForm = document.querySelector("form");
const btnHandle = document.querySelector(".login-account");
let nameSpace = document.querySelector(".name").value;
let result;
let detais;

console.log(nameSpace);

async function getUsername(username, password) {
  const url = "https://electronicmemo.herokuapp.com/api/login/";
  const url2 = "https://electronicmemo.herokuapp.com/api/memo/";
  data = {};
  data["username"] = username;
  data["password"] = password;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  //   result = response.status;
  //   details = response.json;

  //   data = await axios.get(url1);
  //   console.log(data);
}

handleForm.onsubmit = function handleSubmit(e) {
  console.log(e);
  const usernameValue = document.querySelector("#username").value;
  const passwordValue = document.querySelector("#password").value;
  getUsername(usernameValue, passwordValue);
  console.log("working");

  if (usernameValue === "HRADMIN" && passwordValue === "passwordhr") {
    //   window.location.replace("..dashboard/main.html");
    alert("correct");
    console.log("well");
  } else {
    alert("Invalid password");
  }
};

function myFunction() {
  var un = document.forms["myFome"]["username"].value;
  console.log(un);
}
