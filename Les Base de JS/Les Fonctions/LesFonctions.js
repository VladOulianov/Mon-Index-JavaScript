///// Les Fonctions /////

//// Les types de fonctions

/// Les Fonctions Type Nommées 
function message(){
    alert('Hello');
}
//On l’appelle en ajoutant des parenthèses
message();


/// Les Fonctions Type annonymes
//function(){ alert('Hello');}

//Une fonction anonyme peut être attribuée à une variable
const maFonction = function(a,b){
    return a+b;
   }
   maFonction(5,3); //8
   console.log(maFonction(5,3));
   //Une fonction anonyme peut être utilisée comme argument dans une fonction
   setTimeout(function(){
   console.log("Message effacé");
   },1000);
 
   
/// Les Fonctions Type Immédiates
(function(){ alert('Hello');})(); // la fonction est auto appelante
(function(arg){ alert('Hello ' + arg);})("World");  //avec des arguments




//// Les Fonctions Vriadiques
//Une fonction variadique est une fonction qui accepte un nombre variable d’arguments.

//Javascript met à disposition un pseudo-tableau ” arguments”.(On ne peut pas faire une boucle For pour le balayer)
function moyenne(){
	let somme = 0;
	for (let i=0; i < arguments.length; i++) {
		somme += arguments[i];
	}
	let result = (somme / arguments.length) || 0;
	console.log(result);
}
moyenne(12, 8, 13); // expecté 11
moyenne(); // expecté 0