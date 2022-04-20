let objetNonTraversable = [ 0, 30 , 6 , 7 , 8 , 31, 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 , 10 , 12 , 11 , 14 , 9, 13 ];

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
                        if (map[i-1][j] ==4){
                            // Si le joueur marche sur une clef la rajoute dans son inventaire
                            inventory.push("clef")
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
                    if (map[i+1][j] ==4){
                        // Si le joueur marche sur une clef la rajoute dans son inventaire
                        inventory.push("clef")
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
                        if (map[i][j-1] ==4){
                            inventory.push("clef")
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
                        if (map[i][j+1] ==4){
                            inventory.push("clef")
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
    
    // Barre d'space ou touche d'action
    else if (action.keyCode == '32'){
        for(let i=0; i < map.length; i++){
            for(let j=0; j<map[i].length; j++){
                if (map[i][j] == 2){
                    if (SpritePosition == "haut" ) {
                        console.log("coucoué")
                        // Si la case devant le personnage est un pnj
                        if (objetNonTraversable.includes(map[i-1][j])){
                            isDialogue = true;
                            pnj(map[i-1][j])
                        }
                        // Si la case devant le personnage est une porte
                        if (map[i-1][j] == 6){
                            console.log("coucou")
                            console.log(inventory)
                            if (inventory.includes('clef') && SpritePosition == 'haut'){
                                map[i-1][j] = 1
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
                        }
                        if (map[i+1][j] == 6){
                            // Si la case devant le personnage est une porte
                  
                                if (inventory.includes('clef') && SpritePosition == 'bas'){
                                    map[i+1][j] = 1
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
                        }
                        if (map[i][j+1] == 6){
                            // Si la case devant le personnage est une porte
                     
                                if (inventory.includes('clef') && SpritePosition == 'droite'){
                                    map[i][j+1] = 1
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
                        }
                        if (map[i][j-1] == 6){
                            // Si la case devant le personnage est une porte
                                if (inventory.includes('clef') && SpritePosition == 'gauche'){
                                    map[i][j-1] = 1
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
        else if ( chiffre == 32) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Dinette : La princesse est dans un autre donjon. </p>"
        }
        else if ( chiffre == 31) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Mage : La princesse est dans un autre donjon. </p>"
        }
        else if ( chiffre == 33) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Sorcière : La princesse est dans un autre donjon. </p>"
        }
        else if ( chiffre == 34) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Golem : La princesse est dans un autre donjon. </p>"
        }
        else if ( chiffre == 35) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Ogre : La princesse est dans un autre donjon. </p>"
        }
        else if ( chiffre == 36) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Enfant : La princesse est dans un autre donjon. </p>"
        }
        else if ( chiffre == 37) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Fée Toto : La princesse est dans un autre donjon. </p>"
        }
        else if ( chiffre == 38) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Fée Lala : La princesse est dans un autre donjon. </p>"
        }
        else if ( chiffre == 39) {
            zoneTexte.innerHTML = "<p id='breathe_fire'> Plante : La princesse est dans un autre donjon. </p>"
        }
    }
}
function porteFermé () {
    let zoneTexte = document.querySelector("#bas");
    zoneTexte.innerHTML = "<p id='breathe_fire'> Vous n'avez pas de clé, du balai ! <p/>"
}
function porteOuvert () {
    let zoneTexte = document.querySelector("#bas");
    zoneTexte.innerHTML = "<p id='breathe_fire'> Félicitation, la porte a disparu !  <p/>"
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
            //mur vertical droit
            else if (map[i][j] == 10){
                ctx.drawImage(img,28.5,140,8,15,x,y,25,height);         
            }
            // coin haut gauche
            else if (map[i][j] == 8){
                ctx.drawImage(img,28,125,12,15,x,y,width,height);
            }
            // coin haut droit
            else if (map[i][j] == 9){
                ctx.drawImage(img,55,125,12,15,x,y,width,height);
            }
            // coin bas droit
            else if (map[i][j] == 11){
                ctx.drawImage(img,56,156.5,9.25,18,x,y,30,height);
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
            //personnage
            else if (map[i][j] == 2){
                if (SpritePosition == 'droite'){
                    ctx.drawImage(img,131,70,13,30,x,y,20,45)
                }
                else if (SpritePosition == 'haut'){
                    ctx.drawImage(img2,6,7,13,30,x,y,20,45)
                }
                else if (SpritePosition == 'bas'){
                    ctx.drawImage(img2,6,32,13,30,x,y,20,45)
                }
                else {
                    ctx.drawImage(img3,370,70,13,30,x,y,20,45)
                }
                
            }
            //clef
            else if (map[i][j] == 4){
                ctx.drawImage(key,96,-10,30,40,x,y,30,30);
                
            }
            //pnj
            else if (map[i][j] == 30){
                ctx.drawImage(img,130,235,13,25,x,y,20,45);
             
            }
            //pnj
            else if (map[i][j] == 31){
                ctx.drawImage(img,130,173,15,25,x,y,20,45);
      
            }
            //pnj
            else if (map[i][j] == 32){
                ctx.drawImage(img,128,205,17,25,x,y,20,45);
       
            }
            //pnj
            else if (map[i][j] == 33){
                ctx.drawImage(img,128,140,15,25,x,y,20,45);
        
            }
            //pnj
            else if (map[i][j] == 34){
                ctx.drawImage(img,22,275,20,37,x,y,20,45);
              
            }
            //pnj
            else if (map[i][j] == 35){
                ctx.drawImage(img,22,325,20,35,x,y,20,45);
             
            }
            //pnj
            else if (map[i][j] == 36){
                ctx.drawImage(img,370,81,13,18,x,y,20,45);
               
            }
            //pnj
            else if (map[i][j] == 37){
                ctx.drawImage(img,128,17,15,20,x,y,20,45);
        
            }
            //pnj
            else if (map[i][j] == 38){
                ctx.drawImage(img,128,45,15,24,x,y,20,45);
          
            }
            //pnj
            else if (map[i][j] == 39){
                ctx.drawImage(img,370,143,12,23,x,y,20,45);
        
            }
            //porte
            else if (map[i][j] == 6){
                ctx.drawImage(img,25,220,45,35,x,y,width,45);
                
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
let k = 0;
let m = 0;
// gestion de l'inventaire à voir de le mettre dans une classe
let inventory = []
let CasePlayer = 1;

//Ecriture qui permet de mettre une image dans le canvas
let img = new Image();
img.src='./images_steven/0x72_DungeonTilesetII_v1.4.png';
let img2 = new Image();
img2.src = './images_steven/sprite-haut-bas.png'
let img3 = new Image();
img3.src = './images_steven/image_gauche.png'
let key = new Image();
key.src = './images_steven/KeyIcons.png'
// Carte de base
let map = MapGlobal[k][m]
affmap()
img.onload = function(){affmap();};
key.onload = function(){affmap();};
document.onkeydown = move;