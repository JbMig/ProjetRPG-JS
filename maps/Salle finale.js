(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("Salle finale",
{ "compressionlevel":-1,
 "height":12,
 "infinite":false,
 "layers":[
        {
         "data":[0, 193, 193, 193, 193, 193, 193, 193, 193, 193, 193, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
            0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 1026, 1026, 1026, 1026, 1026, 1026,
            0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 1026, 1026, 1026, 1026, 1026,
            0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 194, 1026, 1026, 1026, 1026,
            130, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 357, 357, 357, 1026, 1026, 1026, 1026,
            130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 357, 130, 357, 130, 1026, 1026, 1026,
            0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 357, 357, 357, 130, 1026, 1026, 1026,
            0, 130, 130, 130, 130, 130, 130, 130, 130, 131, 130, 130, 130, 130, 130, 130, 194, 1026, 1026,
            0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
            0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
            0, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130],
         "height":12,
         "id":2,
         "name":"Floor",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":19,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 2147484387, 2147484386, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 2147484419, 2147484418, 0, 0, 0, 0, 0, 628, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":12,
         "id":5,
         "name":"Objets et pnj",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":19,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 227, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 228,
            0, 259, 35, 68, 67, 35, 35, 35, 35, 67, 35, 35, 35, 35, 67, 35, 35, 100, 260,
            0, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257,
            0, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257,
            228, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257,
            3221225475, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257,
            0, 258, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 257,
            0, 258, 0, 0, 0, 0, 0, 0, 129, 129, 129, 129, 129, 129, 129, 0, 0, 0, 257,
            0, 291, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 292,
            0, 34, 34, 34, 34, 100, 34, 34, 34, 34, 34, 68, 34, 34, 34, 35, 34, 35, 36],
         "height":12,
         "id":1,
         "name":"Walls",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":19,
         "x":0,
         "y":0
        }],
 "nextlayerid":6,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.8.4",
 "tileheight":16,
 "tilesets":[
        {
         "firstgid":1,
         "source":"Tileset\/0x72_DungeonTilesetII_v1.3.tsx"
        }, 
        {
         "firstgid":1025,
         "source":"Tileset\/Black square.tsx"
        }, 
        {
         "firstgid":1026,
         "source":"Tileset\/Black square.tsx"
        }],
 "tilewidth":16,
 "type":"map",
 "version":"1.8",
 "width":19
});