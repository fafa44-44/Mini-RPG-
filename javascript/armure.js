var armure;
class Armure {
	constructor(nom, protection) {
		this.nom = nom;
		this.protection = protection;
	}
}
function tirageArmure(){
	var armure;
	var rand=getRandomInt(4);
	switch(rand){
		case 0: armure=new Armure("plastron d'acier",200);
		break;
		case 1: armure=new Armure("plastron en or",250);
		break;
		case 2: armure=new Armure("côte de maille",100);
		break;
		case 3: armure=new Armure("armure enchantée",300);
	}
	return armure;
}
