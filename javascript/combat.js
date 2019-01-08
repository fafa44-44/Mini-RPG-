
function deroulementCombat(){
    while (joueur.hp > 0 && monstre.hp > 0){
        var degatJoueur=parseInt(2*joueur.force+joueur.arme.dommage);
        var degatMonstre=parseInt((20*monstre.dommage)/joueur.armure.protection);
        monstre.hp=monstre.hp-(degatJoueur);
        joueur.hp=joueur.hp-(degatMonstre);
        document.getElementById("dialog").innerHTML+="👹 Un "+monstre.nom+"  vous attaque et vous inflige "+degatMonstre+" hp, il vous reste "+joueur.hp+" hp 👹<br/>";
        document.getElementById("dialog").innerHTML+="👹 "+joueur.nom+" attaque "+monstre.nom+" et lui inflige "+degatJoueur+" hp, il lui reste "+monstre.hp+" hp 👹<br/>";
        }
        joueur.joueurMort();
        if(monstre.hp<1)
            document.getElementById("dialog").innerHTML+="☠️ Vous avez tué le "+monstre.nom+" . ☠️<br/>";
        joueur.getCaracteristiques();
}
function tirageCombat(){
    var boolCombat=false;
    var rand=getRandomInt(5);
    if(rand==0)
        boolCombat=true;
    return boolCombat;
}
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
