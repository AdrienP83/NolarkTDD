/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Projet alcoolémie Nolark dans le but de sensibilisé les utilisaeur sur l'accolémie
 * Created by Adrien Poignard étudiant en BTS SIO à Toulon
 * mail: poignard.adrien@gmail.com
 */


/**
 * Fonction qui retourne l'accol pur ingérer en fonction du nombre 
 * de verres
 * @param {int} nbVerres
 * @return {int}
 */
function getAlcoolPur(nbVerres){
    const unitAlcool = 10;
    return nbVerres * unitAlcool;
}
