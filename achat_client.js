//déclaration des variables 

let budget_client = 20000 ;
let prix_unitaire_cahier = 1500 ;
let quantité_cahier = 4 ;
prix_unitaire_stylo = 500
quantité_stylo = 3 ;
let montant_des_cahiers = prix_unitaire_cahier * quantité_cahier ;
let montant_des_stylos =prix_unitaire_stylo * quantité_stylo ;
montant_total_achat =  montant_des_cahiers + montant_des_stylos ;

// Affichage des résultats 

console.log("==== CAISSE ====");
console.log("Cahiers :", montant_des_cahiers, "FCFA");
console.log("Stylos :", montant_des_stylos, "FCFA");
console.log("Total :", montant_total_achat, "FCFA");
console.log("Budget :", budget_client, "FCFA");
if (montant_total_achat <= budget_client) {
    console.log("Budget suffisant");
} else {
    console.log("Budget insuffisant");
}
console.log("")
//Affichage des nombres de 1 à 5 avec le message : Achat numéro 

for (let i=1;i<=5;i++) {
    console.log("Achat numéro", i);
}