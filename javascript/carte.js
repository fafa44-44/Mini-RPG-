var tailleCarteX=30,tailleCarteY=10;

function carte(){
  var carte="<table>";
  for(var i=0; i<tailleCarteY; i++){
    carte+="<tr>";
    for(var j=0;j<tailleCarteX;j++){
      if(j==joueur.x && i==joueur.y)
        carte+="<td>🤴</td>";
      else if(j==sortie.x && i==sortie.y)
        carte+="<td>🚪</td>";
      else if((j==sortie.x-1 && i==sortie.y||j==sortie.x && i==sortie.y-1||j==sortie.x && i==sortie.y+1) && boss!="death")
        carte+="<td>😈</td>";
      else if(verificationCoffre(i,j)==true)
        carte+="<td>🎁</td>";
      else carte+="<td>🌳</td>";
    }
    carte+="</tr>";
  }
   carte+="</table>";
   document.getElementById("carte").innerHTML = carte;
 }
function verificationCoffre(i,j){
 var presenceCoffre=false
  for(var k=0;k<coffre.length;k++){
    if(j==coffre[k].x && i==coffre[k].y && coffre[k].ouvert==false)
    presenceCoffre=true;
  }
  return presenceCoffre;
}
