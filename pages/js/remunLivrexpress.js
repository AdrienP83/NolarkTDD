/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Listener sur le bouton, calcul et affichage du résultat
 * 
 */
window.addEventListener("load", function () {
    // Déclaration de l'index de parcours
    let i;

    // tabInputs est une collection de <input>
    let tabInputs = window.document.querySelectorAll("input");

    // Parcours de tabInputs en s'appuyant sur le nombre de <input>
    for (i = 0; i < tabInputs.length; i++) {

        // Ajout d'un Listener sur tous les <input> sur l'évènement onKeyUp
        tabInputs[i].addEventListener("keyup", calcRemu);
    }
});

/**
 * Fonction principale qui s'occupe de récupérer les valeurs, calculer le montant
 * de la rémunération et qui s'occupe ensuite de l'afficher
 * 
 * @returns {undefined}
 */
function calcRemu() {

    // Déclaration et affectation des variables
    let nbAncien = recupValeur("#num_ancien");
    let km = recupValeur("#num_km");
    let nbAccident = recupValeur("#nb_accident");
    let remuneration = recupPrimeAnciennete(nbAncien) + recupPrimeDistance(km);
    let remuneFinale = recupPrimeAccident(nbAccident,remuneration);

    // Affichage du résultat
    afficheRemu(remuneFinale);
}
function recupValeur(id) {
    var valeur = parseInt(window.document.querySelector(id).value);
    if (isNaN(valeur)) {
        window.document.querySelector(id).value = 0;
        return 0;
    } else {
        return valeur;
    }
}
function afficheRemu(nombre) {
    window.document.querySelector("#remuneration").innerHTML =
            "La prime sera de : " + nombre + " €";
}
function recupPrimeDistance(km){
    const prix = 0.01;
    const plafond = 900;
    val = prix*km;
    if (val > plafond){
        return plafond;
    }
    else {
        return val; 
    } 
}
function recupPrimeAnciennete(nbAncien){
    val = 0;
    if (nbAncien>=4){
        val = 300 + (nbAncien-4)*30;    
    }
    else {
        return 0;
    }
    return val;
}
function recupPrimeAccident(nbAccident,remuneration){
    if (nbAccident === 1){
        remuneration = remuneration /2;
    }
    else if (nbAccident === 2) {
         remuneration = remuneration /3;
    }
    else if (nbAccident === 3) {
         remuneration = remuneration /4;
    }
    else if (nbAccident >=4) {
        remuneration = 0;
    }
    return remuneration;

}


