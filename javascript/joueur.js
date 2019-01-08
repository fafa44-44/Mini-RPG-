var joueur;
var boss=new Monstre("Sauron",200,100);

class Joueur {
	constructor(nom, hp, force, intelligence, agilite,x,y) {
		this.nom = nom;
		this.hp = hp;
    	this.force=force;
    	this.intelligence=intelligence;
		this.agilite=agilite;
		this.x=x;
		this.y=y;
		this.arme=new Arme("Epée de bois",10);
		this.armure=new Armure("Plastron en cuir",50);
	}
	
	getCaracteristiques(){
	var caracteristiques='<fieldset><legend>Caractéristiques</legend><p>🤴 Nom = '+ this.nom +
						'<br>💖 Point de vie = ' + this.hp +
						'<br>💪 Force = ' + this.force +
						'<br>🐒 Agilité = ' + this.agilite +
						'<br>🧠 Intelligence = ' + this.intelligence +'</p></fieldset>';
	document.getElementById("caracteristiques").innerHTML = caracteristiques;
	document.getElementById("inventaire").innerHTML ="🗡️"+ joueur.arme.nom+",   dégât : "+joueur.arme.dommage+" 🗡️<br/>🛡️ "
													+joueur.armure.nom+",   protection : "+joueur.armure.protection+" 🛡️";
	}
	joueurMort(){
		if(this.hp<1){
			document.getElementById("dialog").innerHTML+="⚡☠️ "+this.nom+" est mort : vous avez perdu. ☠️⚡<br/>";
			document.getElementById("jeu").style.display="none";
			document.getElementById("formulaire").style.display="block";
		}
	}
}

function creationJoueur(){
	var nom=document.getElementById("nom").value;
	var hp=document.getElementById("hp").value;
	var force=document.getElementById("force").value;
	var intelligence=document.getElementById("intelligence").value;
	var agilite=document.getElementById("agilite").value;
	if(nom.length>1 && hp>299 && hp<501 && force>9 && force<21 && intelligence>9 && intelligence<21 && agilite>9 && agilite<21)
		joueur = new Joueur(nom,hp,force,intelligence,agilite,0,getRandomInt(10));
	else 
		document.getElementById("dialog").innerHTML ="⚠️ Le formulaire est mal remplit : votre pseudo doit contenir au moins 2 caractères, les caractéristiques du personnage doivent respecter les valeurs fixées par les zones de texte. ⚠️<br/>";
}
function monter(){
	if(joueur.y>0){
		joueur.y--;
		deplacement();
	}
}
function descendre(){
	if(joueur.y<tailleCarteY-1){
		joueur.y++;
		deplacement();
	}
}
function droite(){
	if(joueur.x<tailleCarteX-1){
		joueur.x++;
		deplacement();
	}
}
function gauche(){
	if(joueur.x>0){
		joueur.x--;
		deplacement();
	}
		
}
function deplacement(){
	carte();
	if(joueur.x==sortie.x && joueur.y==sortie.y)
		sortie.victoire();
	for(var k=0;k<coffre.length;k++){
		if(joueur.x==coffre[k].x && joueur.y==coffre[k].y)
			coffre[k].ouvrirCoffre();
	 }
	tiragePiege();
	var combat=tirageCombat();
	if(combat==true){
		monstre=tirageMonstre();
		deroulementCombat();
	}
	if((joueur.x==sortie.x-1 && joueur.y==sortie.y||joueur.x==sortie.x && joueur.y==sortie.y-1||joueur.x==sortie.x && joueur.y==sortie.y+1) && boss!="death"){
		monstre=boss;
		deroulementCombat();
		boss="death";
		carte();
	}
}
function sauvJou(){
   var sauvegarde = JSON.stringify(joueur);
   var sauvegarde = decodeURIComponent(sauvegarde);
    console.log(sauvegarde);
   var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        console.log("Voici la reponse");
            }
          };
   xhr.open("GET","http://localhost:8080/savePerso?" + sauvegarde,true);
   xhr.send();
  }
