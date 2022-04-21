let objetNonTraversable = [ 0, 30 , 6 , 7 , 8 , 31, 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 ,40, 41, 42, 43, 10 , 12 , 11 , 14 , 9, 13, 3, 50, 51, 52, 23, 15, 16, 17, 18, 19, 99];
let objetObtenable = [ 4 , 60 , 61 , 62, 63];
let monstreTuable = [ 34,35,40,41,42,43, 50, 51,52,];

function move() {
    
    action = window.event;
    isDialogue = false;
    suppDialogue();
    // Si le joueur clique sur la flèche haut ou sur 'z'
    if (action.keyCode == '38' || action.keyCode =='90') {
        // Change la position du sprite pour connaître la direction où il se tourne
        SpritePosition ='haut'
        //Parcours la carte pour savoir où est le joueur
        for(let i=0; i < map.length; i++){
            for(let j=0; j<map[i].length; j++){
                //regarde où est le joueur sur la carte
                if (map[i][j] == 2){
                    // Regarde s'il y a un changement de carte
                    if (i == 0){
                        map[i][j] = CasePlayer
                        CasePlayer = 1 //pas le choix de le mettre en brut
                        k--;
                        map = MapGlobal[k][m]
                        map[map.length - 1][j] = 2
                        affmap()
                        return;
                    }
                    // Bloque le joueur s'il atteind les limites de la carte
                    //ou s'il y a un pnj ou une porte
                    else if (!objetNonTraversable.includes(map[i-1][j])){
                        if (objetObtenable.includes(map[i-1][j])){
                            // Si le joueur marche sur une clef la rajoute dans son inventaire
                            obtenirObjet(map[i-1][j]);
                            console.log(inventory)
                            map[i-1][j] = 1
                        }
                        //Remplace la case de la clef par une case neutre
                        map[i][j] = CasePlayer;
                        CasePlayer = map[i-1][j]
                        map[i-1][j] = 2;
                        affmap()
                        return;
                    }    
                }
            }
        }
        affmap()
    }
    // Si le joueur clique sur la flèche bas ou sur 's'
    else if (action.keyCode == '40' || action.keyCode =='83') {
        // Change la position du sprite pour connaître la direction où il se tourne
        SpritePosition ='bas'
        //Parcours la carte pour savoir où est le joueur
        for(let i=0; i < map.length; i++){
            for(let j=0; j<map[i].length; j++){
                //regarde où est le joueur sur la carte
                if (map[i][j] == 2){
                    // Regarde s'il y a un changement de carte
                    if (i==map.length-1){
                        map[i][j] = CasePlayer
                        CasePlayer = 1 //pas le choix de le mettre en brut
                        k++;
                        map = MapGlobal[k][m]
                        
                        map[0][j] = 2
                        affmap()
                        return;
                    }
                    // Bloque le joueur s'il atteind les limites de la carte
                    //ou s'il y a un pnj ou une porte
                    else if (!objetNonTraversable.includes(map[i+1][j])){
                    if (objetObtenable.includes(map[i+1][j])){
                        // Si le joueur marche sur une clef la rajoute dans son inventaire
                        obtenirObjet(map[i+1][j])
                        map[i+1][j] = 1
                    }
                        //Remplace la case de la clef par une case neutre
                        map[i][j] = CasePlayer
                        CasePlayer = map[i+1][j]
                        map[i+1][j] = 2;
                        affmap()
                        return;
                    }
                }
            }
        }
        affmap()
    }

    // Si le joueur clique sur la flèche gauche ou sur 'q'
    else if (action.keyCode == '37' || action.keyCode =='81') {
        // Change la position du sprite pour connaître la direction où il se tourne
        SpritePosition ='gauche'
        //Parcours la carte pour savoir où est le joueur
        for(let i=0; i < map.length; i++){
            for(let j=0; j<map[i].length; j++){
                //regarde où est le joueur sur la carte
                if (map[i][j] == 2){
                    // Regarde s'il y a un changement de carte
                    if (j == 0){
                        map[i][j] = CasePlayer
                        CasePlayer = 1 //pas le choix de le mettre en brut
                        m--;
                        map = MapGlobal[k][m]
                        map[i][map[i].length-1] = 2
                        affmap()
                        return;
                    }
                    // Bloque le joueur s'il atteind les limites de la carte
                    //ou s'il y a un pnj ou une porte
                    else if (!objetNonTraversable.includes(map[i][j-1])){
                        // Si le joueur marche sur une clef la rajoute dans son inventaire
                        if (objetObtenable.includes(map[i][j-1])){
                            obtenirObjet(map[i][j-1])
                            map[i][j-1] = 1
                        }
                        //Remplace la case de la clef par une case neutre
                        map[i][j] = CasePlayer
                        CasePlayer = map[i][j-1]
                        map[i][j-1] = 2;
                        
                    }
                    affmap()
                    return;
                }    
            }         
        }
        affmap()
    }
    // Si le joueur clique sur la flèche droite ou sur 'd'
    else if (action.keyCode == '39' || action.keyCode=='68') {
        // Change la position du sprite pour connaître la direction où il se tourne
        SpritePosition ='droite'
        //Parcours la carte pour savoir où est le joueur
        for(let i=0; i < map.length; i++){
            for(let j=0; j<map[i].length; j++){
                if (map[i][j] == 2){
                    // Regarde s'il y a un changement de carte
                    if (j==map[i].length-1){
                        map[i][j] = CasePlayer
                        CasePlayer = 1 //pas le choix de le mettre en brut
                        m++;
                        map = MapGlobal[k][m]
                        map[i][0] = 2
                        affmap()
                        return;
                }
                    // Bloque le joueur s'il atteind les limites de la carte
                    //ou s'il y a un pnj ou une porte
                    // [5,6,7,8,9,10].includes(5) -> true // [5,6,7,8,9,10].includes(3) -> false
                    // [5,6,7,8,9,10].includes(map[i][j+1]) -> true (pnj) ou false
                    // ![5,6,7,8,9,10].includes(map[i][j+1]) -> true (tout ce qui n'est pas pnj)
                    else if (!objetNonTraversable.includes(map[i][j+1])){
                    // else if (map[i][j+1] !=0 && map[i][j+1] !=7 && map[i][j+1] != 5  && map[i][j+1] != 6){
                        // Si le joueur marche sur une clef la rajoute dans son inventaire
                        if (objetObtenable.includes(map[i][j+1])){
                            obtenirObjet(map[i][j+1]);
                            map[i][j+1] = 1
                        }
                        //Remplace la case de la clef par une case neutre
                        map[i][j] = CasePlayer
                        CasePlayer = map[i][j+1]
                        map[i][j+1] = 2;
                        affmap()
                        return;
                    }
                }
            }
        }
        affmap()
    }
    else if (action.keyCode == '73') {
        openInventory();
    }
    // Barre d'space ou touche d'action
    else if (action.keyCode == '32'){
        for(let i=0; i < map.length; i++){
            for(let j=0; j<map[i].length; j++){
                if (map[i][j] == 2){
                    if (SpritePosition == "haut" ) {
                        // Si la case devant le personnage est un pnj
                        if (objetNonTraversable.includes(map[i-1][j])){
                            isDialogue = true;
                            pnj(map[i-1][j])
                            if (monstreTuable.includes(map[i-1][j]) && inventory.includes("UltraLaser")) {
                                map[i-1][j] = 1
                                affmap()
                            }
                        }
                        // Si la case devant le personnage est une porte
                        if (map[i-1][j] == 6 || map[i-1][j] == 3){
                            console.log(inventory)
                            if (inventory.includes('clef') && SpritePosition == 'haut'){
                                if (map[i-1][j] == 6){
                                map[i-1][j] = 1
                                map[i-1][j+1] = 1
                                }
                                else {
                                    map[i-1][j] = 1
                                    map[i-1][j-1] = 1
                                }
                                affmap()
                                porteOuvert();
                                }
                                else {
                                porteFermé();
                                }
                            
                        }
                    }
                    if (SpritePosition == "bas") {
                        // Si la case devant le personnage est un pnj
                        if (objetNonTraversable.includes(map[i+1][j])){   
                            isDialogue = true;
                            pnj(map[i+1][j])
                            if (monstreTuable.includes(map[i+1][j]) && inventory.includes("UltraLaser")) {
                                map[i+1][j] = 1
                                affmap()
                            }
                        }
                        if (map[i+1][j] == 6 || map[i+1][j] == 3){
                            // Si la case devant le personnage est une porte
                  
                                if (inventory.includes('clef') && SpritePosition == 'bas'){
                                    if (map[i+1][j] == 6){
                                        map[i+1][j] = 1
                                        map[i+1][j+1] = 1
                                    }
                                    else {
                                        map[i+1][j] = 1
                                        map[i+1][j-1] = 1
                                    }
                                    affmap()
                                    porteOuvert();
                                    }
                                else {
                                    porteFermé();
                                }    
                                
                                
                            }
                        }
                    
                    if (SpritePosition == "droite") {
                        // Si la case devant le personnage est un pnj
                        if (objetNonTraversable.includes(map[i][j+1])){
                            isDialogue = true;
                            pnj(map[i][j+1])
                            if (monstreTuable.includes(map[i][j+1]) && inventory.includes("UltraLaser")) {
                                map[i][j+1] = 1
                                affmap()
                            }
                        }
                        if (map[i][j+1] == 6 || map[i][j+1] == 3){
                            // Si la case devant le personnage est une porte
                     
                                if (inventory.includes('clef') && SpritePosition == 'droite'){
                                    if (map[i][j+1] == 6){
                                        map[i][j+1] = 1
                                        map[i+1][j+1] =1
                                    }
                                    else {
                                        map[i][j+1] = 1
                                        map[i-1][j+1] =1
                                    }
                                    affmap()
                                    porteOuvert();
                                }
                                else {
                                    porteFermé();
                                }
                        
                        }
                    }
                    if (SpritePosition == "gauche") {
                        // Si la case devant le personnage est un pnj
                        if (objetNonTraversable.includes(map[i][j-1])){   
                                isDialogue = true;
                                pnj(map[i][j-1])
                                if (monstreTuable.includes(map[i][j-1]) && inventory.includes("UltraLaser")) {
                                    map[i][j-1] = 1
                                    affmap()
                                }
                        }
                        if (map[i][j-1] == 6 || map[i][j-1] == 3){
                            // Si la case devant le personnage est une porte
                                if (inventory.includes('clef') && SpritePosition == 'gauche'){
                                    if (map[i][j-1] == 6){
                                        map[i][j-1] = 1
                                        map[i-1][j-1] = 1
                                    }
                                    else{
                                        map[i][j-1] = 1
                                        map[i+1][j-1] = 1
                                    }
                                    
                                    affmap()
                                    porteOuvert();
                                }
                                else {
                                    porteFermé();
                                }
                        }
                }
            }
            }
        }
    }
}
// Savoir si on est dans un dialogue ou non
let isDialogue = false;
// Pour parler avec un npc
function pnj(chiffre){
    let zoneTexte = document.querySelector("#bas");
    if ( isDialogue == true ) {
        if ( chiffre == 30) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Dino : La princesse est dans un autre donjon. </p>"
        }
        else if ( chiffre == 31) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Dinette : La princesse est dans un autre donjon. </p>"
        }
        else if ( chiffre == 32) {
            if (inventory.includes("potion bleue") && !inventory.includes("potion verte")) {
                zoneTexte.innerHTML ="<p id='breathe_fire' style='text-align:center'> Mage : C'était simple non ? Maintenant, hors de ma vue ! <br> Vous avez obtenu une potion verte !</p>"
                inventory.push("potion verte")
            }
            else if ( inventory.includes("potion verte")) {
                zoneTexte.innerHTML ="<p id='breathe_fire' style='text-align:center'> Mage : Vous avez vraiment rien à faire à venir m'enquiquiner ?? </p>"
            }
            else {
                zoneTexte.innerHTML = "<p id='breathe_fire'> Mage : Trouvez la potion bleue. Si vous ne l'avez pas, vous êtes vraiment pas doué. </p>"
            }
        }
        else if ( chiffre == 33) {
            if ( inventory.includes("potion rouge") && !inventory.includes("potion bleue")) {
                zoneTexte.innerHTML ="<p id='breathe_fire' style='text-align:center'> Sorcière : Vous avez réussi mon épreuve, voici votre récompense ! <br> Vous avez obtenu une potion bleue !</p>"
                inventory.push("potion bleue")
            }
            else if ( inventory.includes("potion bleue")) {
                zoneTexte.innerHTML ="<p id='breathe_fire' style='text-align:center'> Sorcière : Pourquoi vous êtes encore là ? Explorer un peu le donjon non ???  </p>"
            }
            else {
                zoneTexte.innerHTML = "<p id='breathe_fire'> Sorcière : Trouvez la potion rouge et je vous accorderez ma bénédiction :) </p>"
            }
        }
        else if ( chiffre == 34 || chiffre == 50) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Golem : La princesse est dans un autre donjon. </p>"
        }
        else if ( chiffre == 35) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Ogre : La princesse est dans un autre donjon. </p>"
        }
        else if ( chiffre == 36) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Enfant : La princesse est dans un autre donjon. </p>"
        }
        else if ( chiffre == 37) {
            if (inventory.includes("potion verte") && !inventory.includes("potion jaune")) {
                zoneTexte.innerHTML ="<p id='breathe_fire' style='text-align:center'> Fée Toto : Bien joué, jeune chenapan !  <br> Vous avez obtenu une potion jaune !</p>"
                inventory.push("potion jaune")
            }
            else if ( inventory.includes("potion jaune")) {
                zoneTexte.innerHTML ="<p id='breathe_fire' style='text-align:center'> Fée Toto : C'est bon, je sais que je suis magnifique mais pas la peine de m'harceler. </p>"
            }
            else {
                zoneTexte.innerHTML = "<p id='breathe_fire'> Fée Toto : Apportez la potion verte s'il vous plaît. </p>"
            }
        }
        else if ( chiffre == 38) {
            if (inventory.includes("potion verte","potion rouge","potion verte","potion jaune") && !inventory.includes("UltraLaser")) {
                zoneTexte.innerHTML ="<p id='breathe_fire' style='text-align:center'> Fée Lala : Oh héros de l'aube, je vous accorde le pouvoir de bannir le mal !  <br> Vous avez obtenu la capacité UltraLaser !</p>"
                inventory.push("UltraLaser")
            }
            else if ( inventory.includes("UltraLaser")) {
                zoneTexte.innerHTML ="<p id='breathe_fire' style='text-align:center'> Fée Lala : Sauver notre monde, élu de ce monde ! </p>"
            }
            else {
                zoneTexte.innerHTML = "<p id='breathe_fire'> Fée Lala : Apportez moi les 4 potions légendaires ! </p>"
            }
        }
        else if ( chiffre == 39) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Plante : La princesse est dans un autre donjon. </p>"
        }
        else if ( chiffre == 42 || chiffre == 51) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Gros Ogre : La princesse est dans un autre donjon. </p>"
        }
        else if ( chiffre == 43 || chiffre == 52) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Pieuvre : La princesse est dans un autre donjon. </p>"
        }
    }
}
// Message si on ne possède pas la clé
function porteFermé () {
    let zoneTexte = document.querySelector("#bas");
    zoneTexte.innerHTML = "<p id='breathe_fire'> Vous n'avez pas de clé, du balai ! <p/>"
}
// Message si la porte s'ouvre
function porteOuvert () {
    let zoneTexte = document.querySelector("#bas");
    zoneTexte.innerHTML = "<p id='breathe_fire'> Félicitation, la porte a disparu !  <p/>"
}
// Pour obtenir un objet lorsqu'on marche dessus
function obtenirObjet (number) {
    if ( number == 4) {
        inventory.push("clef")
    }
    else if ( number == 60) {
        inventory.push("potion rouge")
    }
    else if ( number == 61) {
        inventory.push("potion bleue")
    }
    else if ( number == 62) {
        inventory.push("potion verte")
    }
    else if ( number == 63) {
        inventory.push("potion jaune")
    }
 }
 // Ouvrir l'inventaire
 function openInventory () {
    let zoneTexte = document.querySelector("#bas");
    if (inventory.length == 0) {
        zoneTexte.innerHTML = "<p id='breathe_fire'> Vous avez rien dans votre inventaire ! </p>"
    }
    else {
    zoneTexte.innerHTML = "<p id='breathe_fire'> Inventaire : " + inventory + "</p>"
    }
}
// Supprimer le dialogue si on ne parle pas
function suppDialogue () {
    let zoneTexte = document.querySelector("#bas");
    if ( isDialogue == false ) {
        zoneTexte.innerHTML = "";
    } 
}
function affmap(){
    var x=0;
    var y=0;
    var width = 35;
    var height = 35;
    //Permet de remplir un canvas par rapport à la liste de layer
    for (let i=0; i<layer.length; i++){
        for (let j=0; j<layer[i].length; j++){
            if (layer[i][j] == 12){
                ctx.drawImage(img,18,63,17,17,x,y,width,height);
                
            }
            x=x+35;
        }

        x=0;
        y=y+35;
    }
    var x=0;
    var y=0; 
    // Remplie les interaction de la map au dessus du layer
    //Utilise le même principe que pour le layer pour remplir le canvas

    for (let i=0; i<map.length; i++){
        for (let j=0; j<map[i].length; j++){

            //Défini l'image qu'il faut par rapport au nombre qui correspond dans la liste map

            //mur horizontal haut
            if (map[i][j] == 0){
                ctx.drawImage(img,36,125,22,15,x,y,width,height);
                
            }
            //mur vertical gauche
            else if (map[i][j] == 7){
                ctx.drawImage(img,32,140,4,15,x,y,10,height);         
            }
            // coin haut gauche
            else if (map[i][j] == 8){
                ctx.drawImage(img,28,125,12,15,x,y,width,height);
            }
            // coin haut droit
            else if (map[i][j] == 9){
                ctx.drawImage(img,55,125,12,15,x,y,width,height);
            }
            //mur vertical droit
            else if (map[i][j] == 10){
                ctx.drawImage(img,28.5,140,8,15,x,y,25,height);         
            }
            // coin bas droit
            else if (map[i][j] == 11){
                ctx.drawImage(img,55,157,12,15,x,y,width,height);
            }
            //coin bas gauche
            else if (map[i][j] == 12){
                ctx.drawImage(img,28,156.5,12,18,x,y,width,height);
            }
            // intersection
            else if (map[i][j] == 13){
                ctx.drawImage(img,80,141,14,18,x,y,width,height);
            }
            // intersection 2
            else if (map[i][j] == 14){
                ctx.drawImage(img,70,140,10,17,x,y,25,height);
            }
            // vide
            else if (map[i][j] == 23){
                ctx.drawImage(hole,0,0,1,1,x,y,width,height);
            }
            //porte droite
            else if (map[i][j] == 3){
                ctx.drawImage(img,46.5,220,18.5,35,x,y,width,70);
            }
            //porte gauche
                else if (map[i][j] == 6){
                ctx.drawImage(img,28,220,18.5,35,x,y,width,70);                
            }
            // pilier
            else if (map[i][j] == 15){
                ctx.drawImage(img,80,85,14,33,x,y,width,70);
            }
            //pilier vide
            else if (map[i][j] == 19){
                ctx.drawImage(img,81,105,15,11,x,y,width,70);
            } 
            //fontaine
            else if (map[i][j] == 16){
                ctx.drawImage(img,79,46,19,23,x,y,width,70);
            }
            //lave
            else if (map[i][j] == 17){
                ctx.drawImage(img,66,12,11,29,x,y,width,70);
            }
            //acide
            else if (map[i][j] == 18){
                ctx.drawImage(img,63,78,15,19,x,y,width,height);
            }
            //potion rouge
            else if (map[i][j] == 60){
                ctx.drawImage(img,290,227,15,13,x,y,30,35);
            }
            //potion bleue
            else if (map[i][j] == 61){
                ctx.drawImage(img,306,227,15,13,x,y,30,35);
            }
            //potion verte
            else if (map[i][j] == 62){
                ctx.drawImage(img,322,227,15,13,x,y,30,35);
            }
            //potion jaune
            else if (map[i][j] == 63){
                ctx.drawImage(img,339,227,15,13,x,y,30,35);
            }
            
            //personnage
            else if (map[i][j] == 2){
                if (SpritePosition == 'droite'){
                    ctx.drawImage(img,178,78,15,18,x,y,30,35)
                }
                else if (SpritePosition == 'haut'){
                    ctx.drawImage(img2,52,11,16,20,x,y,30,35)
                }
                else if (SpritePosition == 'bas'){
                    ctx.drawImage(img2,67,35,14,20,x,y,30,35)
                }
                else {
                    ctx.drawImage(img3,320,78,15,18,x,y,30,35)
                }
                
            }
            //clef
            else if (map[i][j] == 4){
                ctx.drawImage(key,96,-10,30,40,x,y,30,30);
                
            }
            //tout les pnj

            //dinosaure
            else if (map[i][j] == 30){
                ctx.drawImage(img,130,237,16,19,x,y,30,35);
             
            }
            //dinette
            else if (map[i][j] == 31){
                ctx.drawImage(img,128,205,17,25,x,y,30,35);

            }
            //mage
            else if (map[i][j] == 32){
                ctx.drawImage(img,130,177,15,14,x,y,30,35);
      
            }
            //sorcière
            else if (map[i][j] == 33){
                ctx.drawImage(img,128,140,15,25,x,y,30,35);
        
            }
            //golem
            else if (map[i][j] == 34){
                ctx.drawImage(img,22,275,22,37,x,y,50,70);
              
            }
            //ogre
            else if (map[i][j] == 35){
                ctx.drawImage(img,22,325,20,35,x,y,30,35);
             
            }
            //enfant
            else if (map[i][j] == 36){
                ctx.drawImage(img,370,81,13,18,x,y,30,35);
               
            }
            //fée garçon
            else if (map[i][j] == 37){
                ctx.drawImage(img,128,17,15,20,x,y,30,35);
        
            }
            //fée fille
            else if (map[i][j] == 38){
                ctx.drawImage(img,128,45,15,24,x,y,30,35);
          
            }
            //plante
            else if (map[i][j] == 39){
                ctx.drawImage(img,370,143,12,23,x,y,30,35);
        
            }
            //petit masque monstre
            else if (map[i][j] == 40){
                ctx.drawImage(img,370,175,15,18,x,y,30,35);

            }
            //petit monstre
            else if (map[i][j] == 41){
                ctx.drawImage(img,370,208,15,18,x,y,30,35)
            }
            //Gros ogre
            else if (map[i][j] == 42){
                ctx.drawImage(img,22,326,22,37,x,y,50,70);  
            }
            //Pieuvre
            else if (map[i][j] == 43){
                ctx.drawImage(img,22,369,22,37,x,y,70,105);  
            }
            // Sépparationd des éléments en ligne
            x=x+35;
        }
        // Sépparationd des éléments en colonne

        x=0;
        y=y+35;
    }    
    console.log(map)
}


var canvas = document.querySelector('#plateau')
var ctx = canvas.getContext('2d');
let SpritePosition = 'droite';
let k = 1;
let m = 0;
// gestion de l'inventaire à voir de le mettre dans une classe
let inventory = []
let CasePlayer = 1;

//Ecriture qui permet de mettre une image dans le canvas
let img = new Image();
img.src='./images_steven/0x72_DungeonTilesetII_v1.4.png';
let img2 = new Image();
img2.src = './images_steven/sprite-haut-bas.png';
let img3 = new Image();
img3.src = './images_steven/image_gauche.png';
let key = new Image();
key.src = './images_steven/KeyIcons.png';
let  hole = new Image();
hole.src = './maps/Tileset/black_square_pnj.png';
// Carte de base
let map = MapGlobal[k][m]
affmap()
img.onload = function(){affmap();};
key.onload = function(){affmap();};
hole.onload = function(){affmap();};
document.onkeydown = move;