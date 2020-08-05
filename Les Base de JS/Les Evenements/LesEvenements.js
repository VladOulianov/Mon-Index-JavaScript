///// LES EVENMENTS /////

var cible;
var resultat;

cible = document.getElementById("cible");
resultat = document.getElementById("resultat");

cible.onclick = function () {
  resultat.innerHTML = "Click event!";
};
cible.onmouseout = function () {
  resultat.innerHTML = "Mouse Out!";
};
cible.addEventListener("mouseover", function (e) {
  resultat.innerHTML = "Mouse Over event!";
  console.log(e);
});
