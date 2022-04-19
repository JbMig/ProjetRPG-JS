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
                    else if (map[i-1][j] !=0 && map[i-1][j] !=7 && map[i-1][j] != 5 && map[i-1][j] != 6){
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
                    else if (map[i+1][j] !=0 && map[i+1][j] !=7 && map[i+1][j] !=5 && map[i+1][j] !=6){
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
                        map[i][map.length-1] = 2
                        affmap()
                        return;
                    }
                    // Bloque le joueur s'il atteind les limites de la carte
                    //ou s'il y a un pnj ou une porte
                    else if (map[i][j-1] !=0 && map[i][j-1] !=7 && map[i][j-1] != 5 && map[i][j-1] != 6){
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
                    if (j==map.length-1){
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
                    else if (map[i][j+1] !=0 && map[i][j+1] !=7 && map[i][j+1] != 5  && map[i][j+1] != 6){
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
    else if (action.keyCode='32'){
        for(let i=0; i < map.length; i++){
            for(let j=0; j<map[i].length; j++){
                if (map[i][j] == 2){
                    if (SpritePosition == "haut" ) {
                        // Si la case devant le personnage est un pnj
                        if (map[i-1][j] == 5){
                            isDialogue = true;
                            pnj()
                        }
                        // Si la case devant le personnage est une porte
                    else if (map[i][j+1] == 6){
                        for(let n=0; n<inventory.length; n++){
                            if (inventory[n] == 'clef' && SpritePosition == 'haut'){
                                map[i][j+1] = 1
                                affmap()
                                }
                            }  
                        }
                    }
                    else if (SpritePosition == "bas") {
                        // Si la case devant le personnage est un pnj
                        if (map[i+1][j] == 5){   
                            isDialogue = true;
                            pnj()
                        }
                        else if (map[i+1][j] == 6){
                            // Si la case devant le personnage est une porte
                            for(let n=0; n<inventory.length; n++){
                                if (inventory[n] == 'clef' && SpritePosition == 'bas'){
                                    map[i][j+1] = 1
                                    affmap()
                                    }
                                }  
                            }
                        }
                    
                    else if (SpritePosition == "droite") {
                        // Si la case devant le personnage est un pnj
                        if (map[i][j+1] == 5){
                            isDialogue = true;
                            pnj()
                        }
                        else if (map[i][j+1] == 6){
                            // Si la case devant le personnage est une porte
                            for(let n=0; n<inventory.length; n++){
                                if (inventory[n] == 'clef' && SpritePosition == 'droite'){
                                    map[i][j+1] = 1
                                    affmap()
                                }
                            }  
                        }
                    }
                    else if (SpritePosition == "gauche") {
                        // Si la case devant le personnage est un pnj
                        if (map[i][j-1] == 5){   
                                isDialogue = true;
                                pnj()
                        }
                        else if (map[i][j-1] == 6){
                            // Si la case devant le personnage est une porte
                            for(let n=0; n<inventory.length; n++){
                                if (inventory[n] == 'clef' && SpritePosition == 'gauche'){
                                    map[i][j+1] = 1
                                    affmap()
                                }
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
function pnj(){
    let zoneTexte = document.querySelector("#bas");
    if ( isDialogue == true ) {
        zoneTexte.innerHTML = "<p id='breathe_fire' style='color:white'> Coucou, je suis un gentil dino </p>"
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
    var width = 50;
    var height = 50;
    //Permet de remplir un canvas par rapport à la liste de layer
    for (let i=0; i<layer.length; i++){
        for (let j=0; j<layer[i].length; j++){
            if (layer[i][j] == 12){
                ctx.drawImage(img,18,63,17,17,x,y,width,height);
                
            }
            x=x+50;
        }

        x=0;
        y=y+50;
    }
    var x=0;
    var y=0; 
    // Remplie les interaction de la map au dessus du layer
    //Utilise le même principe que pour le layer pour remplir le canvas

    for (let i=0; i<map.length; i++){
        for (let j=0; j<map[i].length; j++){

            //Défini l'image qu'il faut par rapport au nombre qui correspond dans la liste map
            //mur horizontal
            if (map[i][j] == 0){
                ctx.drawImage(img,35,160,20,15,x,y,width,height);
                
            }
            //personnage
            else if (map[i][j] == 2){
                if (SpritePosition == 'droite'){
                    ctx.drawImage(img,131,70,13,30,x,y,35,60)
                }
                else if (SpritePosition == 'haut'){
                    ctx.drawImage(img2,6,7,13,30,x,y,35,60)
                }
                else if (SpritePosition == 'bas'){
                    ctx.drawImage(img2,6,32,13,30,x,y,35,60)
                }
                else {
                    ctx.drawImage(img3,370,70,13,30,x,y,35,60)
                }
                
            }
            //clef
            else if (map[i][j] == 4){
                ctx.drawImage(img,285,15,25,15,x,y,40,height);
                
            }
            //pnj
            else if (map[i][j] == 5){
                ctx.drawImage(img,130,230,13,30,x,y,35,60);
                
            }
            //porte
            else if (map[i][j] == 6){
                ctx.drawImage(img,25,220,45,35,x,y,width,height);
                
            }
            //mur vertical
             else if (map[i][j] == 7){
                ctx.drawImage(img,11,125,15,20,x,y,width,height);
                
            }
            // Sépparationd des éléments en ligne
            x=x+50;
        }
        // Sépparationd des éléments en colonne

        x=0;
        y=y+50;
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

// Carte de base
let map = MapGlobal[k][m]
affmap()
img.onload = function(){affmap();};
document.onkeydown = move;