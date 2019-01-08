var monstre;

class Monstre {
	constructor(nom, hp, dommage) {
		this.nom = nom;
		this.hp = hp;
    this.dommage=dommage;
  }
}


function tirageMonstre(){
	var monstre;
	var rand=getRandomInt(4);
	switch(rand){
    case 0: monstre=new Monstre("Orque",75,15);
    break;
    case 1: monstre=new Monstre("Troll des montagnes",100,10);
    break;
    case 2: monstre=new Monstre("Magicien noir",150,25);
    break;
		case 3: monstre=new Monstre("Goblin",50,20);
  }
  return monstre;
}