/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Tests unitaire du projet Alcoolémie
 * Created by Adrien Poignard étudiant en BTS SIO du Lycée Bonaparte à Toulon
 * email: poignard.adiren@gmail.com
 */
MesTestsUnitaires = TestCase('AlcoolemieTest');
MesTestsUnitaires.prototype.testsGetAlcoolPur = function(){
    assertEquals('0 verre',0,getAlcoolPur(0));
    assertEquals('1 verre',10,getAlcoolPur(1));
}
MesTestsUnitaires.prototype.testsGetCoefDiffusion = function() {
 assertEquals('Homme', 0.7, getCoefDiffusion('homme'));
 assertEquals('Femme', 0.6, getCoefDiffusion('femme'));
};

MesTestsUnitaires.prototype.testsGetAlcoolemie = function() {
 assertEquals('Homme 100 kg 1 verre', 0.14, getAlcoolemie('homme', 100, 1));
 assertEquals('Femme 100 kg 1 verre', 0.17, getAlcoolemie('femme', 100, 1));
};

