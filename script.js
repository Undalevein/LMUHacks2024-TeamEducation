function getProfile() {
  window.location.href = 'profile.html';
}
const profileButton = document.getElementById("profileButton");
profileButton.addEventListener("click", getProfile)

function getDegree() {
  window.open('https://dw.lmu.edu/worksheets/WEB31');
}
const degButton = document.getElementById("degButton");
degButton.addEventListener("click", getDegree)

function getHousing() {
  window.open('https://lmu.starrezhousing.com/StarRezPortalX/InitiateLogin/StarNet.StarRez.AuthProviders.ADFSStudent')
}
const housingButton = document.getElementById("housingButton");
housingButton.addEventListener("click", getHousing)

function getWorkday() {
  window.open('https://www.myworkday.com/lmu/d/home.htmld');
}
const workButton = document.getElementById("workButton");
workButton.addEventListener("click", getWorkday)

function getBrightspace() {
  window.open('https://brightspace.lmu.edu/d2l/home#_');
}
const brightButton = document.getElementById("brightButton");
brightButton.addEventListener("click", getBrightspace)

function getProwl() {
  window.open('https://auth.lmu.edu/mysso/redirect/prowl.jsp')
}
const prowlButton = document.getElementById("prowlButton");
prowlButton.addEventListener("click", getProwl)

function getFinance() {
  window.open('https://lmutpg.lmu.edu/C20995_tsa/web/login.jsp')
}
const financeButton = document.getElementById("financeButton");
financeButton.addEventListener("click", getFinance)

function getLeo() {
  window.open('https://lmu.campuslabs.com/engage')
}
const leoButton = document.getElementById("leoButton");
leoButton.addEventListener("click", getLeo)

function getFaculty() {
  window.open('https://www.lmu.edu/academics/faculty/')
}
const facultyButton = document.getElementById("facultyButton")
facultyButton.addEventListener("click", getFaculty)

function getMail() {
  window.open('https://outlook.com/lmu.edu')
}
const mailButton = document.getElementById("mailButton")
mailButton.addEventListener("click", getMail)

const notesBox = document.getElementById("notesBox")
notesBox.addEventListener("input", saveText)

function saveText() {
  localStorage.setItem("notes", notesBox.value);
}

retrieveText()
function retrieveText() {
  // Retrieve the saved value from local storage
  var savedText = localStorage.getItem("notes");

  // Set the retrieved value back to the text field
  notesBox.value = savedText;
}

// function debounce(func, delay) {
//     let debounceTimer;
//     return function() {
//         const context = this;
//         const args = arguments;
//         clearTimeout(debounceTimer);
//         debounceTimer = setTimeout(() => func.apply(context, args), delay);
//     };
// }

