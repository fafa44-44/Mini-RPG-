function nettoyer(){
    document.getElementById("dialog").innerHTML ="";
}
function initialisation(){
    creationJoueur();
    creationCoffre();
    joueur.getCaracteristiques();
    document.getElementById("formulaire").style.display="none";
    document.getElementById("jeu").style.display="block";
    boss=new Monstre("Sauron",200,40);
    carte();
}