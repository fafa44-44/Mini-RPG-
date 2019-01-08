var sortie;

class Sortie {
	constructor(nom,x,y) {
		this.nom = nom;
        this.x=x;
		this.y=y;
    }
    victoire(){
        document.getElementById("dialog").innerHTML += "🎉 Vous vous êtes échappés du mordor 🎉<br/>🤴 Vous pouvez recréer un personnage pour recommencer une partie 🤴<br/>" ;
        document.getElementById("jeu").style.display="none";
		document.getElementById("formulaire").style.display="block";
    }
 }
sortie = new Sortie("la faille du mordor",tailleCarteX-1,getRandomInt(10));