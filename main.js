var somme =0;
let nombre= prompt("Veuillez saisir un nombre pour calculer le factorielle:")

for (let i =1; i < nombre ; i++) {
 /*somme =i + somme ; */
 somme = addition(i ,somme);
 console.log(somme);

}

function addition (a,b) {
    let c = 0;
    c = a + b
    return c;
    
    }

    