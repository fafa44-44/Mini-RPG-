function tiragePiege(){
    var degat;
    var text="";
	var rand=getRandomInt(10);
	switch(rand){
        case 0: 
        degat=10;
        joueur.hp=joueur.hp-degat;
        text="💣 Vous êtes tombé dans un piège à loup et avez perdu "+ degat+" hp il vous reste donc "+joueur.hp+" hp 💣<br/>";
        break;
        case 1:
        degat=20;
        joueur.hp=joueur.hp-degat;
        text="💣 Vous êtes tombé dans un piège a ours et avez perdu "+ degat+" hp il vous reste donc "+joueur.hp+" hp 💣<br/>";
        break;
  }
  document.getElementById("dialog").innerHTML+=text;
  joueur.joueurMort();
  joueur.getCaracteristiques();
}