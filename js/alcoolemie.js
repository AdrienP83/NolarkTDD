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