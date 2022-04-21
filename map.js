// arière plan de la carte
let layer = [
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12],
    [12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12]
]
// Toute les interaction de la carte
//0/10/8/9/11/12/13/14 : murs
//15: pilier
//16 : fontaine
//17 : lave
//18 : acide
//1 : route
//2 : personnage
//4 : clefs
//30-39: pnj
//44: mur invisible golem
//6/3 : porte
//23 : void
//99 :mur invisible
let MapGlobal = 
[
   [ // ligne 1
    [
        [8 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,9],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,8 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,1 ,1 ,10],
        [10 ,0 ,0 ,0 ,0 ,0 ,1 ,10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,8 ,0 ,0],
        [10 ,1 ,1 ,13 ,0 ,0 ,0 ,11 ,1 ,0 ,0 ,0 ,18 ,9 ,1 ,1 ,10 ,1 ,1],
        [10 ,1 ,1 ,7 ,36 ,35 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10 ,1 ,1 ,10 ,1 ,1],
        [10 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,17 ,17 ,17 ,9 ,1 ,10 ,1 ,1 ,10 ,1 ,8],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,99 ,99 ,99 ,10 ,1 ,12 ,0 ,0 ,11 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [12 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,9 ,1 ,1 ,8 ,0 ,0 ,0 ,0 ,0 ,0 ,11]
    ],
    [
        [8 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,9],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,16 ,1 ,16 ,1 ,35 ,1 ,1 ,16 ,1 ,16 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,99 ,1 ,99 ,1 ,1 ,1 ,1 ,99 ,1 ,99 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,35 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 , 1,34 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [1 ,1 ,1 ,1 ,1 ,1 ,1 ,44 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [1 ,1 ,1 ,35 ,15 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,15 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,99 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,99 ,1 ,35 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [12 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,11]
    
    ],
    [
        [0,0,0,0,0,0,0,0,0],
        [3,1,1,1,1,1,1,1,7],
        [3,1,1,1,1,1,1,1,7],
        [3,1,1,1,1,1,1,1,7],
        [3,1,1,1,1,1,1,1,7],
        [3,1,1,1,1,1,1,1,7],
        [3,1,1,1,1,1,1,1,7],
        [3,1,1,1,1,1,1,1,7],
        [0,0,0,0,0,0,0,0,0]
        ]
    ]
    // fin Ligne 1
,
[
    // Ligne 2
    [
        [8 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,9 ,1 ,1 ,8 ,0 ,0 ,0 ,0 ,0 ,0 ,9],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10 ,6 ,3 ,10 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,12 ,1 ,1 ,11 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,16 ,1 ,1 ,1 ,1 ,16 , ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,99 ,1 ,1 ,1 ,1 ,99 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,30 ,4 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,16 ,1 ,1 ,1 ,1 ,16 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,99 ,1 ,1 ,1 ,1 ,99 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [12 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,11]
    ],
    [
        [8 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,9],
        [10 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,23 ,1 ,1 ,1 ,1 ,1 ,23 ,23 ,23 ,23 ,23 ,23 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,23 ,1 ,1 ,1 ,1 ,1 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,1 ,1 ,1,1,1],
        [10 ,23 ,1 ,1 ,1 ,1 ,1 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,1 ,1 ,1,1],
        [10 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,1 ,1 ,10],
        [10 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,23 ,1 ,10],
        [12 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,11]
    
    ],
    [
        [8 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,9],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [12 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,11]
        ]
]
]
    // fin Ligne 2