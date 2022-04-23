let objetNonTraversable = [ 0, 30 , 6 , 7 , 8 , 31, 32 , 33 , 34 , 35 , 36 , 37 , 38 , 39 ,40, 41, 42, 43, 10 , 12 , 11 , 14 , 9, 13, 3, 50, 51, 52, 23, 15, 16, 17, 18, 19, 20, 21, 22, 24, 99];
let objetObtenable = [ 4 , 60 , 61 , 62, 63];
let monstreTuable = [ 34,35,40,41,42,43, 50, 51,52,];








function teleport() {
	// on cherche le joueur sur la carte
	let case_joueur
	for(let i=0; i < map.length; i++){
		for(let j=0; j<map[i].length; j++){
			if (map[i][j] == 2){
				case_joueur = [i,j]
			}
		}
	}
	// il tourne sur lui-même
	let k = 0;
	while (k < 12){
		setTimeout(function(){
			SpritePosition ='haut';
			affmap();
		}, 3000 + 100*(k+1));
		setTimeout(function(){
			SpritePosition ='gauche';
			affmap();
		}, 3000 + 100*(k+2));
		setTimeout(function(){
			SpritePosition ='bas';
			affmap();
		}, 3000 + 100*(k+3));
		setTimeout(function(){
			SpritePosition ='droite';
			affmap();
		}, 3000 + 100*(k+4));
		k+=4;
	}
	// et il disparait !
	setTimeout(function(){
		map[case_joueur[0]][case_joueur[1]] = 1;
		affmap();
	}, 3000 + 100*(k+4));
}









function move() {
    
    action = window.event;
    isDialogue = false;
    suppDialogue();
    // Si le joueur clique sur la flèche haut ou sur 'z'
    if (action.keyCode == '38' || action.keyCode =='90') {
        // Change la position du sprite pour le tourner dans la direction du déplacement
        SpritePosition ='haut'
        // Parcourt la carte pour savoir où est le joueur
        for(let i=0; i < map.length; i++){
            for(let j=0; j<map[i].length; j++){
                // regarde où est le joueur sur la carte
                if (map[i][j] == 2){
                    // Regarde s'il y a un changement de carte
                    if (i == 0){
                        map[i][j] = CasePlayer
                        CasePlayer = 1 // pas d'autre choix que de le mettre en brut
                        k--;
                        map = MapGlobal[k][m]
                        map[map.length - 1][j] = 2
                        affmap()
                        return;
                    }
                    // Bloque le joueur s'il atteint les limites de la carte
                    // ou s'il y a un pnj ou une porte
                    else if (!objetNonTraversable.includes(map[i-1][j])){
                        if (objetObtenable.includes(map[i-1][j])){
                            // Si le joueur marche sur une clef, cela la rajoute dans son inventaire
                            obtenirObjet(map[i-1][j]);
                            console.log(inventory)
                            map[i-1][j] = 1
                        }
                        // Remplace la case de la clef par une case neutre
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
        // Change la position du sprite pour le tourner dans la direction du déplacement
        SpritePosition ='bas'
        // Parcourt la carte pour savoir où est le joueur
        for(let i=0; i < map.length; i++){
            for(let j=0; j<map[i].length; j++){
                // regarde où est le joueur sur la carte
                if (map[i][j] == 2){
                    // Regarde s'il y a un changement de carte
                    if (i==map.length-1){
                        map[i][j] = CasePlayer
                        CasePlayer = 1 // pas d'autre choix que de le mettre en brut
                        k++;
                        map = MapGlobal[k][m]
                        
                        map[0][j] = 2
                        affmap()
                        return;
                    }
                    // Bloque le joueur s'il atteint les limites de la carte
                    // ou s'il y a un pnj ou une porte
                    else if (!objetNonTraversable.includes(map[i+1][j])){
                    if (objetObtenable.includes(map[i+1][j])){
                        // Si le joueur marche sur une clef, cela la rajoute dans son inventaire
                        obtenirObjet(map[i+1][j])
                        map[i+1][j] = 1
                    }
                        // Remplace la case de la clef par une case neutre
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
        // Change la position du sprite pour le tourner dans la direction du déplacement
        SpritePosition ='gauche'
        // Parcourt la carte pour savoir où est le joueur
        for(let i=0; i < map.length; i++){
            for(let j=0; j<map[i].length; j++){
                // regarde où est le joueur sur la carte
                if (map[i][j] == 2){
                    // Regarde s'il y a un changement de carte
                    if (j == 0){
                        map[i][j] = CasePlayer
                        CasePlayer = 1 // pas d'autre choix que de le mettre en brut
                        m--;
                        map = MapGlobal[k][m]
                        map[i][map[i].length-1] = 2
                        affmap()
                        return;
                    }
                    // Bloque le joueur s'il atteint les limites de la carte
                    // ou s'il y a un pnj ou une porte
                    else if (!objetNonTraversable.includes(map[i][j-1])){
                        // Si le joueur marche sur une clef, cela la rajoute dans son inventaire
                        if (objetObtenable.includes(map[i][j-1])){
                            obtenirObjet(map[i][j-1])
                            map[i][j-1] = 1
                        }
                        // Remplace la case de la clef par une case neutre
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
        // Change la position du sprite pour le tourner dans la direction du déplacement
        SpritePosition ='droite'
        // Parcourt la carte pour savoir où est le joueur
        for(let i=0; i < map.length; i++){
            for(let j=0; j<map[i].length; j++){
                if (map[i][j] == 2){
                    // Regarde s'il y a un changement de carte
                    if (j==map[i].length-1){
                        map[i][j] = CasePlayer
                        CasePlayer = 1 // pas d'autre choix que de le mettre en brut
                        m++;
                        map = MapGlobal[k][m]
                        map[i][0] = 2
                        affmap()
                        return;
                }
                    // Bloque le joueur s'il atteint les limites de la carte
                    // ou s'il y a un pnj ou une porte
                    else if (!objetNonTraversable.includes(map[i][j+1])){
                        // Si le joueur marche sur une clef, cela la rajoute dans son inventaire
                        if (objetObtenable.includes(map[i][j+1])){
                            obtenirObjet(map[i][j+1]);
                            map[i][j+1] = 1
                        }
                        // Remplace la case de la clef par une case neutre
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
    // Barre d'espace ou touche d'action
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
                                    map[i-1][j] = 96
                                    map[i-1][j-1] = 98
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
// Pour parler avec un pnj
function pnj(chiffre){
    let zoneTexte = document.querySelector("#bas");
    if ( isDialogue == true ) {
        if ( chiffre == 30) {
			// dino 1ère salle
			// C'est le 1er et aussi le 6e et dernier monstre à aller voir.
			// Il explique la quête au début et permet de terminer le jeu quand on a toutes les potions.

			// inventory = [" potion verte"," potion rouge"," potion bleue"," potion jaune"]		// pour les tests
			if (inventory.includes(" potion verte"," potion rouge"," potion bleue"," potion jaune")) {
				zoneTexte.innerHTML = "<p id='breathe_fire' > Dino : La princesse est dans un autre don - Ah ! Tu as rassemblé les 4 potions ! <br>Bravo ! Va donc sauver ta princesse ! </p>";
				teleport();
				setTimeout(function(){
					window.location.assign("end.html");
				}, 6500);
			}
            else {
				zoneTexte.innerHTML = "<p id='breathe_fire' > Dino : La princesse est dans un autre donjon. Apporte-moi 4 potions de couleurs différentes <br>et je te ferai une potion de téléportation pour te rendre au bon endroit.</p>";
            }
        }

        else if ( chiffre == 34 || chiffre == 50) {
			// gros monstre avec une feuille, 3e salle
			// C'est le 4e monstre à aller voir.
			// Il donne une potion verte si on a déjà une potion rouge.
			if (inventory.includes(" potion verte")) {
                zoneTexte.innerHTML ="<p id='breathe_fire' > Golem : La princesse est dans un autre donjon. </p>"
            }
			else if (inventory.includes(" potion rouge") && !inventory.includes(" potion verte")) {
                zoneTexte.innerHTML = "<p id='breathe_fire' > Golem : Oh ! Une potion rouge ! <br>Tiens, comme promis, en voilà une verte ! </p>"
                inventory.push(" potion verte");
			}
            else {
                zoneTexte.innerHTML = "<p id='breathe_fire' > Golem : Moi aussi, je m'ennuie. On va jouer à un jeu. Explore le donjon. <br>Si tu trouves une potion rouge, je t'en donnerai une verte ! </p>"
            }
        }
        else if ( chiffre == 40 || chiffre == 41) {
			// petits monstres, 2e, 3e et 5e salles
			// Ce sont les 2nds monstres à aller voir.
			// Il faut leur parler plusieurs fois, jusqu'à ce que l'un d'eux nous donne une potion bleue.
			if (inventory.includes(" potion bleue")) {
                zoneTexte.innerHTML ="<p id='breathe_fire' > Petit : La princesse est dans un autre donjon. </p>"
            }
            else {
				const nombre_aléatoire = Math.ceil(Math.random() * 5)
				if ((nombre_aléatoire == 1) || (nombre_aléatoire == 2)) {
					zoneTexte.innerHTML = "<p id='breathe_fire' > Petit : Tu veux jouer ? L'un de nous a une potion bleue ! <br>Mais on se l'échange sans arrêt donc tu vas avoir du mal à trouver qui l'a ! Hihi."
				}
				else if ((nombre_aléatoire == 3) || (nombre_aléatoire == 4)) {
					zoneTexte.innerHTML = "<p id='breathe_fire' > Petit : Et non, ce n'est pas moi qui ai la potion ! Essaye un de mes amis. Hihi."
				}
				else if (nombre_aléatoire == 5) {
					zoneTexte.innerHTML = "<p id='breathe_fire' > Petit : Oh mince ! Comment tu as su que c'était moi qui l'avais ? Bon, voilà la potion. Reviens jouer quand tu veux ! Hihi."
                    inventory.push(" potion bleue");
				}
				else {
					zoneTexte.innerHTML = "<p id='breathe_fire' > Petit : Heu... Problème d'aléatoire. Voir JS à partir de la ligne 346."

				}
                
            }
        }
        else if ( chiffre == 42 || chiffre == 51) {
			// gros monstre, 5e salle
			// C'est le 5e monstre à aller voir.
			// Il donne une potion jaune si on a déjà une potion verte.
			if (inventory.includes(" potion jaune")) {
                zoneTexte.innerHTML ="<p id='breathe_fire' > Ogre : La princesse est dans un autre donjon. </p>"
            }
			else if (inventory.includes(" potion verte") && !inventory.includes(" potion jaune")) {
                zoneTexte.innerHTML = "<p id='breathe_fire' > Ogre : ZZzz.. Hein ? Oh une potion verte ! Je ne pensais pas que tu en trouverais une... <br>J'aime bien ma potion jaune, elle m'aide à dormir. Enfin, ce qui est dit est dit. Je te la donne quand-même. </p>"
                inventory.push(" potion jaune");
			}
            else {
                zoneTexte.innerHTML = "<p id='breathe_fire' > Ogre : ZZzz.. Hein ? Oui, je dors debout. Tu trouves ça bizarre ? <br>Tu sais quoi, montre-moi une potion verte et je t'en donnerai une jaune. ..zzZZ </p>"
            }
        }
        else if ( chiffre == 43 || chiffre == 52) {
			// gros monstre rouge, dernière salle
			// C'est le 3e monstre à aller voir.
			// Il donne une potion rouge si on a déjà une potion bleue.
			if (inventory.includes(" potion rouge")) {
                zoneTexte.innerHTML ="<p id='breathe_fire' > Géant rouge : La princesse est dans un autre donjon. </p>"
            }
			else if (inventory.includes(" potion bleue") && !inventory.includes(" potion rouge")) {
                zoneTexte.innerHTML = "<p id='breathe_fire' > Géant rouge : Oh tu as joué avec les petits ? Tiens ! Une potion rouge pour te remercier. </p>"
                inventory.push(" potion rouge");
			}
            else {
                zoneTexte.innerHTML = "<p id='breathe_fire' > Géant rouge : Les petits s'ennuient. Tu veux bien jouer avec eux s'il te plait ? </p>"
            }
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
        inventory.push(" potion bleue")
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
        zoneTexte.innerHTML = "<p id='breathe_fire'> Vous n'avez rien dans votre inventaire. </p>"
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
    // Permet de remplir un canvas par rapport à la liste de layers
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
    // Remplit les interactions de la map au-dessus du layer
    // Utilise le même principe que pour le layer pour remplir le canvas

    for (let i=0; i<map.length; i++){
        for (let j=0; j<map[i].length; j++){

            // Définit l'image qu'il faut par rapport au nombre qui correspond dans la liste map

            // mur horizontal haut
            if (map[i][j] == 0){
                ctx.drawImage(img,36,157,22,19,x,y,width,height);
                
            }
            // différents types de sol
            else if (map[i][j] == 71){
                ctx.drawImage(img,32,63,17,15,x,y,33,33);         
            }
            else if (map[i][j] == 72){
                ctx.drawImage(img,49,63,17,15,x,y,33,33);         
            }
            else if (map[i][j] == 73){
                ctx.drawImage(img,18,80,17,15,x,y,33,33);         
            }
            else if (map[i][j] == 74){
                ctx.drawImage(img,49,80,17,15,x,y,33,33);         
            }
            else if (map[i][j] == 75){
                ctx.drawImage(img,18,96,17,15,x,y,33,33);         
            }
            else if (map[i][j] == 76){
                ctx.drawImage(img,35,96,17,15,x,y,33,33);         
            }
            // crâne
            else if (map[i][j] == 77){
                ctx.drawImage(img,290,323,13,10,x,y,30,20);         
            }
            else if (map[i][j] == 78){
                ctx.drawImage(img,95,143,16,15,x,y,33,33 );         
            }
            // mur vertical gauche
            else if (map[i][j] == 7){
                ctx.drawImage(img,32,140,4,19,x,y,10,height);         
            }
            // coin haut gauche
            else if (map[i][j] == 8){
                ctx.drawImage(img,28,125,12,19,x,y,width,height);
            }
            // coin haut droit
            else if (map[i][j] == 9){
                ctx.drawImage(img,55,125,12,16,x,y,width,height);
            }
            // mur vertical droit
            else if (map[i][j] == 10){
                ctx.drawImage(img,28.5,140,8,19,x,y,25,height);         
            }
            // coin bas droit
            else if (map[i][j] == 11){
                ctx.drawImage(img,55,157,12,16,x,y,width,height);
            }
            // coin bas gauche
            else if (map[i][j] == 12){
                ctx.drawImage(img,28.5,156.5,11,19,x,y,width,height);
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
                ctx.drawImage(hole,0,0,1,1,x,y,70,height);
            }
            // porte droite fermée
            else if (map[i][j] == 3){
                ctx.drawImage(img,46.5,220,18.5,35,x,y,width,70);
            }
            // porte gauche fermée
                else if (map[i][j] == 6){
                ctx.drawImage(img,28,220,18.5,35,x,y,width,70);                
            }
            // porte droite ouverte
            else if (map[i][j] == 96){
                ctx.drawImage(img,96,220,18.5,35,x,y,width,70);
            }
            // porte gauche ouverte
                else if (map[i][j] == 98){
                ctx.drawImage(img,80,220,18.5,35,x,y,width,70);                
            }
            // pilier
            else if (map[i][j] == 15){
                ctx.drawImage(img,80,85,14,33,x,y,width,70);
            }
            // pilier vide
            else if (map[i][j] == 19){
                ctx.drawImage(img,81,105,15,11,x,y,width,height);
            } 
            // fontaine
            else if (map[i][j] == 16){
                ctx.drawImage(img,79,46,19,23,x,y,width,70);
            }
            // lave
            else if (map[i][j] == 17){
                ctx.drawImage(img,66,12,11,29,x,y,width,70);
            }
            // acide
            else if (map[i][j] == 18){
                ctx.drawImage(img,63,78,15,19,x,y,width,height);
            }
            // drapeau rouge
            else if (map[i][j] == 20){
                ctx.drawImage(flag,0,7,55,63,x,y,width,height);
            }
            // drapeau bleu
            else if (map[i][j] == 21){
                ctx.drawImage(flag,55,7,55,63,x,y,width,height);
            }
            // drapeau vert
            else if (map[i][j] == 22){
                ctx.drawImage(flag,110,7,55,63,x,y,width,height);
            }
            // drapeau jaune
            else if (map[i][j] == 24){
            ctx.drawImage(flag,180,7,60,63,x,y,width,height);
            }
            // potion rouge
            else if (map[i][j] == 60){
                ctx.drawImage(img,290,227,15,13,x,y,30,35);
            }
            // potion bleue
            else if (map[i][j] == 61){
                ctx.drawImage(img,306,227,15,13,x,y,30,35);
            }
            // potion verte
            else if (map[i][j] == 62){
                ctx.drawImage(img,322,227,15,13,x,y,30,35);
            }
            // potion jaune
            else if (map[i][j] == 63){
                ctx.drawImage(img,339,227,15,13,x,y,30,35);
            }
            
            // personnage
            else if (map[i][j] == 2){
                if (SpritePosition == 'droite'){
                    ctx.drawImage(img,HeroLengthDroite,78,15,18,x,y,30,35)
                    HeroLengthDroite = HeroLengthDroite - 15.5;
                    if (HeroLengthDroite == 130){
                        HeroLengthDroite = 192;
                    }
                }
                else if (SpritePosition == 'haut'){
                    ctx.drawImage(img2,HeroLengthHaut,11,16,20,x,y,30,35)
                    HeroLengthHaut = HeroLengthHaut - 15.5;
                    if (HeroLengthHaut == 5){
                        HeroLengthHaut = 67;
                    }
                }
                else if (SpritePosition == 'bas'){
                    ctx.drawImage(img2,HeroLengthBas,35,14,20,x,y,30,35)
                    HeroLengthBas = HeroLengthBas - 15.5;
                    if (HeroLengthBas == 5){
                        HeroLengthBas = 67;
                    }
                }
                else {
                    ctx.drawImage(img3,HeroLengthGauche,78,15,18,x,y,30,35)
                    HeroLengthGauche = HeroLengthGauche - 15.5;
                    if (HeroLengthGauche == 258){
                        HeroLengthGauche = 320;
                    }
                }
                
            }
            // clef
            else if (map[i][j] == 4){
                ctx.drawImage(key,96,-10,30,40,x,y,30,30);
                
            }
            // tous les pnj

            // dinosaure
            
            else if (map[i][j] == 30){
                ctx.drawImage(img,DinoLength,237,16,19,x,y,30,35);
                DinoLength = DinoLength + 15.5;
                if (DinoLength == 192){
                    DinoLength = 130;
                }
            }
            // dinette
            else if (map[i][j] == 31){
                ctx.drawImage(img,128,205,17,25,x,y,30,35);

            }
            // mage
            else if (map[i][j] == 32){
                ctx.drawImage(img,130,177,15,14,x,y,30,35);
      
            }
            // sorcière
            else if (map[i][j] == 33){
                ctx.drawImage(img,128,140,15,25,x,y,30,35);
        
            }
            // golem
            else if (map[i][j] == 34){
                ctx.drawImage(img,BigMonsterLength,275,22,37,x,y,50,70);
                BigMonsterLength = BigMonsterLength + 32;
                if (BigMonsterLength == 182){
                    BigMonsterLength = 22;
                }
              
            }
            // ogre
            else if (map[i][j] == 35){
                ctx.drawImage(img,22,325,20,35,x,y,30,35);
             
            }
            // enfant
            else if (map[i][j] == 36){
                ctx.drawImage(img,370,81,13,18,x,y,30,35);
               
            }
            // fée garçon
            else if (map[i][j] == 37){
                ctx.drawImage(img,128,17,15,20,x,y,30,35);
        
            }
            // fée fille
            else if (map[i][j] == 38){
                ctx.drawImage(img,128,45,15,24,x,y,30,35);
          
            }
            // plante
            else if (map[i][j] == 39){
                ctx.drawImage(img,370,143,12,23,x,y,30,35);
        
            }
            // petit masque monstre
            else if (map[i][j] == 40){
                ctx.drawImage(img,LittleMonsterLength,175,15,18,x,y,30,35);
                LittleMonsterLength = LittleMonsterLength + 15;
                if (LittleMonsterLength == 430){
                    LittleMonsterLength = 370;
                }
            }
            // petit monstre
            else if (map[i][j] == 41){
                ctx.drawImage(img,LittleMonsterLength,208,15,18,x,y,30,35)
                LittleMonsterLength = LittleMonsterLength + 15;
                if (LittleMonsterLength == 430){
                    LittleMonsterLength = 370;
                }
            }
            // Gros ogre
            else if (map[i][j] == 42){
                ctx.drawImage(img,BigMonsterLength,326,22,37,x,y,50,70);
                BigMonsterLength = BigMonsterLength + 32;
                if (BigMonsterLength == 182){
                    BigMonsterLength = 22;
                }
            }
            // Géant rouge
            else if (map[i][j] == 43){
                ctx.drawImage(img,BigMonsterLength,369,22,37,x,y,70,105); 
                BigMonsterLength = BigMonsterLength + 32;
                if (BigMonsterLength == 182){
                    BigMonsterLength = 22;
                }
            }
            // coffre
            else if (map[i][j] == 44){
                ctx.drawImage(img,303,320,17,13,x,y,30,35)
            }
            // Séparation des éléments en lignes
            x=x+35;
        }
        // Séparation des éléments en colonnes

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
// gestion de l'inventaire
let inventory = []
let CasePlayer = 1;

// permet de mettre une image dans le canvas
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
let flag = new Image();
flag.src = './images_steven/drapeau.PNG'

var DinoLength = 130;
var LittleMonsterLength = 370;
var BigMonsterLength = 22;
var HeroLengthDroite = 192;
var HeroLengthHaut = 67;
var HeroLengthBas = 67;
var HeroLengthGauche = 320;
// Carte de base
let map = MapGlobal[k][m]
affmap()
setInterval(affmap, 100);
img.onload = function(){affmap();};
key.onload = function(){affmap();};
hole.onload = function(){affmap();};
flag.onload = function(){affmap();};

document.onkeydown = move;

var audio = new Audio('sounds/Stardew Valley OST - Mines (Icicles)-[AudioTrimmer.com].mp3');
audio.play();
audio.loop = true;
audio.playbackRate = 2;