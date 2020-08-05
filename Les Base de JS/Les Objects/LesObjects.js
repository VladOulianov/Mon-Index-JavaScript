///// LES OBJECTS /////

///Structure – propriétés, méthodes

var personne ={
   nom:"DUPONT", // propriété
   prénom:"Roger", // propriété
   direBonjour:function(){
   console.log("Bonjour"); // méthode
   }
}
//Notations – par points – en crochets
const person = {nom: 'Bob'};

// Notation par points
const y = person.nom;

// Notation en crochets
const x = person["nom"];

//----------------------
// |Proprété  |  Valeur|
// ---------------------
// |nom       |  DUPONT|
// |prénom    |  Roger |
// ---------------------


/// Les propriétés

// Mise à jour d’une propriété

var personne ={
   nom:"DUPONT", // propriété
   prénom:"Roger", // propriété
   age: 35,
   direBonjour:function(){
   console.log("Bonjour"); // méthode
   }
};
personne.age = 36;
//Ajouter une propriété
 //             personne.adresse :"Paris";
//Supprimer une propriété
                delete personne.adresse;

/// Les méthodes

var personne ={
   nom:"DUPONT",
   prénom:"Roger",
   direBonjour:function(){
   console.log("Bonjour"); // Bonjour
   }
};
personne.direBonjour();


/// Création différée d'un objet

var personne ={};
personne.nom="DUPONT";
personne.prenom="Roger";
personne.direBonjour=function(){
    console.log("Bonjour"); // Bonjour
};


/// La valeur this

var personne ={
   nom:"DUPONT",
   prénom:"Roger",
   afficheNom:function(){
       console.log("nom : " + this.nom); // DUPONT
   }
};
//On affiche la propriété "nom" de l'objet courant


/// Le constructeur

//On utilise une fonction pour créer un objet

function Personne(){
   this.nom ="DUPONT";
   this.prenom ="Roger";
}
var personne = new Personne();

console.log(personne.nom);

//On utilise une fonction et on passe des paramètres pour créer un objet.

function Personne(p_nom,p_prenom){
   this.nom = p_nom;
   this.prenom = p_prenom;
}
var nom_personne ="DUPONT";
var prenom_personne ="Roger";
var personne = new Personne(nom_personne,prenom_personne);
    console.log(personne.nom); // DUPONT 

/// L'objet Object

// Object est l'objet de base implémenté par l'ensemble des objets Javascript. Tous les objets Javascript héritent de Object.

var obj={};
var obj= new Object();

