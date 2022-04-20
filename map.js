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
//1 : route
//2 : personnage
//4 : clefs
//30 - 39: pnj
//6 : porte
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
        [10 ,1 ,1 ,13 ,0 ,0 ,0 ,11 ,1 ,0 ,0 ,0 ,0 ,9 ,1 ,1 ,10 ,1 ,1],
        [10 ,1 ,1 ,7 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10 ,1 ,1 ,10 ,1 ,1],
        [10 ,1 ,1 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,9 ,1 ,10 ,1 ,1 ,10 ,1 ,8],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,1 ,10 ,1 ,12 ,0 ,0 ,11 ,1 ,10],
        [10 ,1 ,1 ,1 ,1 ,1 ,1 ,2 ,1 ,1 ,1 ,10 ,1 ,1 ,1 ,1 ,1 ,1 ,10],
        [12 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,9 ,1 ,1 ,8 ,0 ,0 ,0 ,0 ,0 ,0 ,11]
    ],
    [
        [0,0,0,0,0,0,0,0,0],
        [3,1,1,1,1,1,1,1,3],
        [3,1,1,1,1,1,1,1,3],
        [3,1,1,1,1,1,1,1,3],
        [3,1,1,1,1,1,1,1,3],
        [3,1,1,1,1,1,1,1,3],
        [3,1,1,1,1,1,1,1,3],
        [3,1,1,1,1,1,1,1,3],
        [0,0,0,0,0,0,0,0,0]
    
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
        [7,3,3,3,3,3,3,3,3],
        [7,1,1,1,1,1,1,1,3],
        [7,1,1,1,1,1,1,1,3],
        [7,1,1,1,1,1,1,1,3],
        [7,1,1,1,1,1,1,1,3],
        [7,1,1,1,1,1,1,1,3],
        [7,1,1,1,1,1,1,1,3],
        [7,1,1,1,1,1,1,1,3],
        [0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0],
        [3,1,1,1,1,1,1,1,3],
        [3,1,1,1,1,1,1,1,3],
        [3,1,1,1,1,1,1,1,3],
        [3,1,1,1,1,1,1,1,3],
        [3,1,1,1,1,1,1,1,3],
        [3,1,1,1,1,1,1,1,3],
        [3,1,1,1,1,1,1,1,3],
        [0,0,0,0,0,0,0,0,0]
    
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
]
    // fin Ligne 2