function getHome(){
   window.location.href = 'index.html';
}
const homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click", getHome)

function getOneCard(){
  window.open('https://eacct-lmu-sp.transactcampus.com/myLMU/AccountSummary.aspx?menu=0')
}


const oneCardButton = document.getElementById("oneCardButton");
oneCardButton.addEventListener("click", getOneCard)

