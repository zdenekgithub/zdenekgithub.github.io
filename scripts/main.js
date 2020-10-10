var tlacitko = document.getElementById("button");
var nadpis = document.getElementById("title");

function setName() {

  var jmeno = prompt("Jaké je Vaše jméno?");
 
  
  if (!jmeno) {
    setName();
  } else {
    nadpis.innerHTML = "Vaše jméno je: " + jmeno;
    localStorage.setItem('name', jmeno);
  }
}

tlacitko.onclick=function()  {
  setName();
}