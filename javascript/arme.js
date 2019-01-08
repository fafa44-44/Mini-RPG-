var arme;

class Arme {
	constructor(nom, dommage) {
		this.nom = nom;
    	this.dommage=dommage;
	}
}
function tirageArme(){
	var arme;
	var rand=getRandomInt(4);
	switch(rand){
		case 0: arme=new Arme("épée enchanté",30);
		break;
		case 1: arme=new Arme("épée longue",20);
		break;
		case 2: arme=new Arme("lance",50);
		break;
		case 3: arme=new Arme("arc",40);
	}
	return arme;
}
