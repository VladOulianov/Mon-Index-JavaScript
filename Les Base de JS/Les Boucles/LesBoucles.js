
//// Les Boucles sever a lister des elements ou des resultas 
/// la boucle for
console.log("for");
for (let i = 1; i < 4; i++) {
    console.log(i)	
 }
 /// la boucle for dans un tableau
 console.log("boucle for tableau :");
 const monTableau = ["un","deux","trois"];
 // on utilise la propriété length On utilise la proproété length pour fixer l’indice de boucle final.
 for (let i = 0; i < monTableau.length; i++) {
    console.log(monTableau[i]);	
 }


 /// La méthode forEach() permet d’exécuter une fonction donnée sur chaque élément d’un tableau.
console.log("forEach :");
 var array1 = ['a', 'b', 'c'];
 
 array1.forEach(function(element) {
    
   console.log(element);
 });

 