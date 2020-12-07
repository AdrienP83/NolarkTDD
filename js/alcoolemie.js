/**
 * Fonction qui retourne l'alcool pur intégré en fonction du nombre
 * de verre
 * 
 * @param {int} nbVerres
 * @return {int}
 */
function getAlcoolPur(nbVerres) {
    const uniteAlcool = 10;
    return uniteAlcool * nbVerres;
}

/**
 * Fonction qui retourne le coefficient de diffusion en fonction du sexe
 * 
 * @param {string} sexe
 * @return {float}
 */
function getCoefDiffusion(sexe){
    const coefDiffuH = 0.7, coefDiffuF = 0.6
    if (sexe === 'homme'){
        return coefDiffuH;
    } else{
        return coefDiffuF;
    }
}

/**
 * Fonction qui retourne l'alcoolémie en fonction du sexe, du poids et
 * du nombre de verres ingérés
 * 
 * @param {string} sexe
 * @param {int} poids
 * @param {int} nbVerres
 * @return {float}
 */
function getAlcoolemie(sexe, poids, nbVerres){
    // /!\ division par 0, NOPE
    return (getAlcoolPur(nbVerres) / (poids * getCoefDiffusion(sexe))).toFixed(2);
}