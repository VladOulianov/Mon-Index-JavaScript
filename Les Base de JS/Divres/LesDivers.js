//// LES DIVERS /////


/// Copier un élément dans le presse-papier ///
var bouton1 = document.getElementById("copy-button");
var contentHolder = document.getElementById("content-holder");
 bouton1.addEventListener("click", function() {
  var range = document.createRange();  
  range.selectNode(contentHolder);  
  window.getSelection().addRange(range);
  document.execCommand('copy'); 
}, false);


/// Ajouter un fichier CSS ///

document.getElementById("p2").style.color = "blue";