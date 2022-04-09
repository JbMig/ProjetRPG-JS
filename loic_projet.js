// Les maps
let map1 = [   
            [1,4,2,0,0],
            [0,0,0,2,3],
            [0,2,0,0,0],
            [2,0,0,2,0],
            [7,0,2,0,0],
];

let map2 = [   
            [0,0,0,2,0],
            [3,2,2,0,0],
            [0,2,0,0,0],
            [0,0,0,0,2],
            [0,0,2,5,2],
];

let map3 = [   
            [0,4,2,3,2],
            [0,0,0,0,2],
            [0,2,0,0,0],
            [4,0,0,0,0],
            [0,4,2,0,2],
];

// Légendes :
//            1 : Joueur
//            2 : NPC
//            3 : Porte traversable
//            0 : Herbe
//            4 : Objet
//            5 : Porte fermée
//            7 : Objet rare 

// Afficher la map, sans faire faire console log;
function affichageMap () {
    for ( let k = 0; k < 5 ; k++) {
        console.log(currentMap[k]);
    }
}

let inventaire = [];
let i = 0;
let j = 0;
let spritePosition = "bas";
let currentMap = map1;
let placeMap = "Map 1"
affichageMap();
// Connaître si le joueur se tourne vers une certaine direction
function typePosition(event) {
    let touche = event.key;
    if (touche == "ArrowRight") {
        spritePosition = "droite";
    }
    else if (touche == "ArrowLeft") {
        spritePosition = "gauche";
    }
    else if (touche == "ArrowDown") {
        spritePosition = "bas";
    }
    else if (touche == "ArrowUp") {
        spritePosition = "haut";
    }
}

// Pour se déplacé sur la map, dans la console
function deplacementMap(event) {
    let touche = event.key;
    if ( touche == "i") {
        console.log(inventaire);
    }
    // Touche "a" pour intéragir avec les éléments
    else if( touche == "a" ) {
        if (spritePosition == "droite" && currentMap[i][j+1] == 2) {   
            alert("Bonjour, vous parlez à un npc");
        }
        else if (spritePosition == "gauche" && currentMap[i][j-1] == 2) {   
            alert("Bonjour, vous parlez à un npc");
        }
        else if (spritePosition == "bas" && i < 4) {
            if ( currentMap[i+1][j] == 2 ) {   
            alert("Bonjour, vous parlez à un npc");
            }
            // Ouvrir la porte fermé si on possède la clé
            else if ( currentMap[i+1][j] == 5) {
                if (inventaire.includes("clé")) {
                    alert("Vous avez ouvert la porte !");
                    currentMap[i+1].splice(3,1,3);
                    affichageMap();
                }
                else {
                    alert("Vous n'avez pas la clé !");
                }
            }
        }
        else if (spritePosition == "haut" && i > 0 && currentMap[i-1][j] == 2) {   
            alert("Bonjour, vous parlez à un npc");
        }

    }
    // Flèche  Droite   
    else if ( touche == "ArrowRight" ) {
        // Changement de map1 à map2
        if ( currentMap[i][j] == currentMap[1][4] && currentMap != map2) { 
            map2[1].splice(0,1,currentMap[i][j]);
            currentMap = map2;
            placeMap = "Map 2";
            console.log(placeMap);
            affichageMap();
            i = 1;
            j = 0;
        }
        else if (j < 4 && currentMap[i][j+1] != 2) {
            // Obtient un objet
            if (currentMap[i][j+1] == 4) {
            inventaire.push("vanille");
            console.log(inventaire);
            console.log(placeMap);
            alert("Vous avez obtenu un vanille");
            }
            // Se déplacer vers la droite dans la map
            currentMap[i].splice(j,2,0,currentMap[i][j]);
            console.log("Je suis dans " + placeMap);
            console.log("Vers la droite");
            affichageMap();
            spritePosition = "droite";
            j++;
            
        }
    }
    // Flèche  Gauche
    else if ( touche == "ArrowLeft" ) {
        // Changement de map2 à map1
        if ( currentMap[i][j] == currentMap[1][0] && currentMap != map1) {
            map1[1].slice(4,1,currentMap[i][j]);
            currentMap = map1;
            placeMap = "Map 1";
            console.log(placeMap);
            affichageMap();
            i = 1;
            j = 4;

        }
        else if ( j > 0 && currentMap[i][j-1] != 2 ) { 
            // Obtient un objet
            if ( currentMap[i][j-1] == 4) {
                inventaire.push("vanille");
                console.log(inventaire);
                console.log(placeMap);
                alert("Vous avez obtenu un vanille");
            }
            // Obtient une clé pour ouvrir une porte
            else if ( currentMap[i][j-1] == 7) {
                inventaire.push("clé");
                console.log(inventaire);
                console.log(placeMap);
                alert("Vous avez obtenu une clé");
            }
            // Se déplacer vers la gauche dans la map
            currentMap[i].splice(j-1,2,currentMap[i][j],0);
            console.log("Je suis dans " + placeMap);
            console.log("Vers la gauche");
            affichageMap();
            spritePosition = "gauche";
            j--;
        
        }
    }
    // Flèche  Bas
    else if ( touche == "ArrowDown" ){
        // Changement de map2 à map3
        if ( currentMap == map2 && currentMap[i][j] == currentMap[4][3]) {
            map3[0].splice(3,1,currentMap[i][j]);
            currentMap = map3;
            placeMap = "Map 3";
            console.log(placeMap);
            affichageMap();
            i = 0;
            j = 3;
        }
        // Permettre que la porte reste numéro 3
        else if ( currentMap == map3 && currentMap[i][j] == currentMap[0][3]) {
            currentMap[i+1].splice(j,1,1);
            currentMap[i].splice(j,1,3);
            console.log(placeMap);
            affichageMap();
            i++;
        }
        // Permettre que la porte reste numéro 3
        else if ( currentMap == map1 && currentMap[i][j] == currentMap[1][4]) {
            currentMap[i+1].splice(j,1,1);
            currentMap[i].splice(j,1,3);
            console.log(placeMap);
            affichageMap();
            i++;
        }
        // Permettre que la porte reste numéro 3
        else if ( currentMap == map2 && currentMap[i][j] == currentMap[1][0]) {
            currentMap[i+1].splice(j,1,1);
            currentMap[i].splice(j,1,3);
            console.log(placeMap);
            affichageMap();
            i++;
        }
        else if ( i < 4 && currentMap[i+1][j] != 2 && currentMap[i+1][j] != 5) {
            // Obtient une objet
            if ( currentMap[i+1][j] == 4) {
                inventaire.push("vanille");
                console.log(inventaire);
                console.log(placeMap);
                alert("Vous avez obtenu un vanille");
            }
            // Se déplacer vers le bas dans la map
            currentMap[i+1].splice(j,1,currentMap[i][j]);
            currentMap[i].splice(j,1,0);
            console.log("Je suis dans " + placeMap);
            console.log("Vers le bas");
            affichageMap();
            spritePosition = "bas";
            i++;
        }
    }
    // Flèche  Haut
    else if ( touche == "ArrowUp" ) { 
        // Changement de map3 à map2
        if ( currentMap == map3 && currentMap[i][j] == currentMap[0][3]) {
            map2[4].splice(3,1,currentMap[i][j]);
            currentMap = map2;
            placeMap = "Map 2";
            console.log(placeMap);
            affichageMap();
            i = 4;
            j = 3;
        }
        // Permettre que la porte reste numéro 3
        else if ( currentMap == map2 && currentMap[i][j] == currentMap[4][3]) {
            currentMap[i-1].splice(j,1,1);
            currentMap[i].splice(j,1,3);
            console.log(placeMap);
            affichageMap();
            i--;
        }
        // Permettre que la porte reste numéro 3
        else if ( currentMap == map1 && currentMap[i][j] == currentMap[1][4]) {
            currentMap[i-1].splice(j,1,1);
            currentMap[i].splice(j,1,3);
            console.log(placeMap);
            affichageMap();
            i--;
        }
        // Permettre que la porte reste numéro 3
        else if ( currentMap == map2 && currentMap[i][j] == currentMap[1][0]) {
            currentMap[i-1].splice(j,1,1);
            currentMap[i].splice(j,1,3);
            console.log(placeMap);
            affichageMap();
            i--;
        }
        else if (i > 0 && currentMap[i-1][j] != 2 ) {
            // Obtient une objet
            if ( currentMap[i-1][j] == 4) {
                inventaire.push("vanille");
                console.log(inventaire);
                console.log(placeMap);
                alert("Vous avez obtenu un vanille");
            }    
            // Se déplacer vers le haut dans la map
            currentMap[i-1].splice(j,1,currentMap[i][j]);
            currentMap[i].splice(j,1,0);
            console.log("Je suis dans " + placeMap);
            console.log("Vers le haut");
            affichageMap();
            spritePosition = "haut";
            i--;
        }
    }
}
document.onkeydown = typePosition;
document.onkeyup = deplacementMap;