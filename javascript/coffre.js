var coffre=[];

class Coffre {
	constructor(nom,x,y,arme,armure,ouvert) {
		this.nom = nom;
    this.x=x;
		this.y=y;
		this.arme=arme;
		this.armure=armure;
		this.ouvert=ouvert;
	}
	ouvrirCoffre(){
		this.ouvert=true;
		armure=tirageArmure();
		arme=tirageArme();
		if(arme.dommage>joueur.arme.dommage)
			joueur.arme=arme;
		if(armure.protection>joueur.armure.protection)
			joueur.armure=armure;
		var ouverture='🎁 Vous avez ouvert un '+ this.nom +' contenant une ' + arme.nom +' et une ' + armure.nom+" 🎁<br/>";
		document.getElementById("dialog").innerHTML += ouverture;
		document.getElementById("inventaire").innerHTML ="🗡️"+ joueur.arme.nom+",   dégât : "+joueur.arme.dommage+" 🗡️<br/>🛡️ "
													+joueur.armure.nom+",   protection : "+joueur.armure.protection+" 🛡️";
	}
}
function creationCoffre() {
  for(var i=0;i<10;i++){
    var coffreX=4+getRandomInt(tailleCarteX-6);
    var coffreY=getRandomInt(tailleCarteY);
		coffre[i]=new Coffre("Coffre magique",coffreX,coffreY,arme,armure,false);
  }
}