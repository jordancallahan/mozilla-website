const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox-black.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("#user-button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};

function showHide() {
  var img = document.getElementById("image");
  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}
