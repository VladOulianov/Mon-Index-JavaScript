//// Les Tableaux 

 /// Déclarer un tableau
 
 // type 1 Régulier
/*
monTableauRegulier[0] = "un";
monTableauRegulier[1] = "deux";
monTableauRegulier[2] = "trois";
*/
// type 2 Condensé
var monTableauCondense = new Array("un","deux","trois");
var chiffre = monTableauCondense[0];
document.write("tableau type Condensé : ",chiffre); // un

// type 3 Littéral
var monTableauLitteral = [1,2,3];
 
/// Un tableau peut contenir des nombres, des chaines de caractères, des fonctions 
console.log("TABLEAU :");
var a = ["Pierre", "Paul", "Jacques", "Michel",
function(){
    alert("Hello");
}];

/// Remplir un tableau
monTableau[1] = "deux"; // Ajoute ou modifie l'élément 1 s'il existait 

/// Lire un tableau
// avec for 
console.log("LIRE MON TABLEAU :");
for(var i=0; i < a.length; i++ ){
    console.log(a[i]);   
 }
 
// ou 
console.log("LIRE MON TABLEAU :");
for(i in a){
    console.log(a[i]);
}

// Les Propriétés des Tableau
var a = ["Pierre", "Paul", "Jacques", "Michel",function(){alert("Hello");}];
a[a.length]= "Julie"; // ajouter un élément à la fin du tableau
a.push("Angie"); // ajouter un élément à la fin du tableau
a.splice(3,2); // supprimer les éléments d'index 3 et 4
a.pop(); // supprimer le dernier élément du tableau
const removedLastElement = a.pop(); // supprimer et mémoriser le dernier élément
a.unshift("Julie"); // ajouter un élément au début du tableau
a.shift(); // supprimer le premier élément
const removedFirstElement = a.shift(); // // supprimer et mémoriser le premier élément