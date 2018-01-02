
var mode = "locked";
var mirroredge = true;
var up = false;
var down = false;
var left = false;
var right = false;
var colorcache = [];
var startgameboard = [
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,
0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,
0,2,0,4,4,0,1,0,4,4,4,0,1,0,0,1,0,4,4,4,0,1,0,4,4,0,2,0,
0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,
0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,
0,0,0,0,0,0,1,0,0,0,0,0,3,0,0,3,0,0,0,0,0,1,0,0,0,0,0,0,
4,4,4,4,4,0,1,0,0,0,0,0,3,0,0,3,0,0,0,0,0,1,0,4,4,4,4,4,
4,4,4,4,4,0,1,0,0,3,3,3,3,3,3,3,3,3,3,0,0,1,0,4,4,4,4,4,
4,4,4,4,4,0,1,0,0,3,0,0,0,9,9,0,0,0,3,0,0,1,0,4,4,4,4,4,
0,0,0,0,0,0,1,0,0,3,0,4,4,4,4,4,4,0,3,0,0,1,0,0,0,0,0,0,
3,3,3,3,3,3,1,3,3,3,0,4,4,4,4,4,4,0,3,3,3,1,3,3,3,3,3,3,
0,0,0,0,0,0,1,0,0,3,0,4,4,4,4,4,4,0,3,0,0,1,0,0,0,0,0,0,
4,4,4,4,4,0,1,0,0,3,0,0,0,0,0,0,0,0,3,0,0,1,0,4,4,4,4,4,
4,4,4,4,4,0,1,0,0,3,3,3,3,3,3,3,3,3,3,0,0,1,0,4,4,4,4,4,
4,4,4,4,4,0,1,0,0,3,0,0,0,0,0,0,0,0,3,0,0,1,0,4,4,4,4,4,
0,0,0,0,0,0,1,0,0,3,0,0,0,0,0,0,0,0,3,0,0,1,0,0,0,0,0,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,
0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,
0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,
0,2,1,1,0,0,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,0,0,1,1,2,0,
0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,
0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,
0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,
0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,
0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
]
var gameboardwalls = [
"S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S",
"S",0,0,0,0,0,0,0,0,0,0,0,0,"S","S",0,0,0,0,0,0,0,0,0,0,0,0,"S",
"S",0,"S","S","S","S",0,"S","S","S","S","S",0,"S","S",0,"S","S","S","S","S",0,"S","S","S","S",0,"S",
"S",0,"S",0,0,"S",0,"S",0,0,0,"S",0,"S","S",0,"S",0,0,0,"S",0,"S",0,0,"S",0,"S",
"S",0,"S","S","S","S",0,"S","S","S","S","S",0,"S","S",0,"S","S","S","S","S",0,"S","S","S","S",0,"S",
"S",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"S",
"S",0,"S","S","S","S",0,"S","S",0,"S","S","S","S","S","S","S","S",0,"S","S",0,"S","S","S","S",0,"S",
"S",0,"S","S","S","S",0,"S","S",0,"S","S","S","S","S","S","S","S",0,"S","S",0,"S","S","S","S",0,"S",
"S",0,0,0,0,0,0,"S","S",0,0,0,0,"S","S",0,0,0,0,"S","S",0,0,0,0,0,0,"S",
"S","S","S","S","S","S",0,"S","S","S","S","S",0,"S","S",0,"S","S","S","S","S",0,"S","S","S","S","S","S",
0,0,0,0,0,"S",0,"S","S","S","S","S",0,"S","S",0,"S","S","S","S","S",0,"S",0,0,0,0,0,
0,0,0,0,0,"S",0,"S","S",0,0,0,0,0,0,0,0,0,0,"S","S",0,"S",0,0,0,0,0,
0,0,0,0,0,"S",0,"S","S",0,"S","S","S",0,0,"S","S","S",0,"S","S",0,"S",0,0,0,0,0,
"S","S","S","S","S","S",0,"S","S",0,"S",0,0,0,0,0,0,"S",0,"S","S",0,"S","S","S","S","S","S",
0,0,0,0,0,0,0,0,0,0,"S",0,0,0,0,0,0,"S",0,0,0,0,0,0,0,0,0,0,
"S","S","S","S","S","S",0,"S","S",0,"S",0,0,0,0,0,0,"S",0,"S","S",0,"S","S","S","S","S","S",
0,0,0,0,0,"S",0,"S","S",0,"S","S","S","S","S","S","S","S",0,"S","S",0,"S",0,0,0,0,0,
0,0,0,0,0,"S",0,"S","S",0,0,0,0,0,0,0,0,0,0,"S","S",0,"S",0,0,0,0,0,
0,0,0,0,0,"S",0,"S","S",0,"S","S","S","S","S","S","S","S",0,"S","S",0,"S",0,0,0,0,0,
"S","S","S","S","S","S",0,"S","S",0,"S","S","S","S","S","S","S","S",0,"S","S",0,"S","S","S","S","S","S",
"S",0,0,0,0,0,0,0,0,0,0,0,0,"S","S",0,0,0,0,0,0,0,0,0,0,0,0,"S",
"S",0,"S","S","S","S",0,"S","S","S","S","S",0,"S","S",0,"S","S","S","S","S",0,"S","S","S","S",0,"S",
"S",0,"S","S","S","S",0,"S","S","S","S","S",0,"S","S",0,"S","S","S","S","S",0,"S","S","S","S",0,"S",
"S",0,0,0,"S","S",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"S","S",0,0,0,"S",
"S","S","S",0,"S","S",0,"S","S",0,"S","S","S","S","S","S","S","S",0,"S","S",0,"S","S",0,"S","S","S",
"S","S","S",0,"S","S",0,"S","S",0,"S","S","S","S","S","S","S","S",0,"S","S",0,"S","S",0,"S","S","S",
"S",0,0,0,0,0,0,"S","S",0,0,0,0,"S","S",0,0,0,0,"S","S",0,0,0,0,0,0,"S",
"S",0,"S","S","S","S","S","S","S","S","S","S",0,"S","S",0,"S","S","S","S","S","S","S","S","S","S",0,"S",
"S",0,"S","S","S","S","S","S","S","S","S","S",0,"S","S",0,"S","S","S","S","S","S","S","S","S","S",0,"S",
"S",0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,"S",
"S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S","S"
]
var lpadconvert = [
81,82,83,84,85,86,87,88,
71,72,73,74,75,76,77,78,
61,62,63,64,65,66,67,68,
51,52,53,54,55,56,57,58,
41,42,43,44,45,46,47,48,
31,32,33,34,35,36,37,38,
21,22,23,24,25,26,27,28,
11,12,13,14,15,16,17,18,
]
var playerpos = 0;
var playerdir = "left";
var blinkypos = 0;
var pinkypos = 0;
var clydepos = 0;
var inkypos = 0;
var gameboard = [];
var points = 0;
var movelr = "right";
var moveud = "down";
var blinkydir = "left"
var blinkyskip = false;
var inkydir = "left"
var inkyskip = false;
var clydedir = "left"
var clydeskip = false;
var pinkydir = "left"
var pinkyskip = false;
var blinkyonthing = 3;
var pinkyonthing = 4;
var clydeonthing = 4;
var inkyonthing = 4;
function gid(id) {
return document.getElementById(id);
}

function initialize() {

var count = -1
var keepcount = -1;
for (i = 0; i < 31; i++) {
count += 1;
gid("screen").innerHTML += "<div class='row' id='row_"+count+"'></div>"
var count2 = -1;
for (e = 0; e < 28; e++) {
count2 += 1;
keepcount += 1;
gid("row_"+count).innerHTML += "<div class='block' id='b_"+keepcount+"'></div>"
}

}

startNewGame();

}

function startNewGame() {
gameboard = [].concat(startgameboard);
gameboard[398] = 5;
playerpos = 398;
gameboard[321] = 10;
blinkypos = 321;
gameboard[404] = 11;
inkypos = 404;
points = 1;
}

function onLoaded() {
setTimeout(function() {




initialize();
drawFrame();
setInterval(function() {
drawFrame();
}, 75);
setInterval(function() {
step();
}, 150);
setInterval(function() {
ghoststep();
}, 165);




}, 300);

}


var keys = [];
window.onkeyup = function(e) {keys[e.keyCode]=false;}
window.onkeydown = function(e) {keys[38] = false; keys[40] = false; keys[37] = false; keys[39] = false; keys[e.keyCode]=true;}

//38 up
//40 down
//37 left
//39 right

//blinky   red     topright		10
//inky     blue    bottomright	11
//clyde    orange  bottomleft	12
//pinky    pink    topleft		13

function movePlayer() {

if (keys[38]) {
moveUp();
} else {
if (keys[40]) {
moveDown();
} else {
if (keys[37]) {
moveLeft();
} else {
if (keys[39]) {
moveRight();
}}}}

}


function moveGhost() {

var adir = calcPath(blinkypos,playerpos,"blinky");
if (blinkyskip == true || (adir == blinkydir && !(blinkypos > 391 && blinkypos < 395) && !(blinkypos > 416 && blinkypos < 420))) {
blinkyskip = false;
if (adir == "left") {
moveGhostLeft("blinky")
}
if (adir == "right") {
moveGhostRight("blinky")
}
if (adir == "up") {
moveGhostUp("blinky")
}
if (adir == "down") {
moveGhostDown("blinky")
}
blinkydir = adir;
} else {
blinkyskip = true;
}


var transplayerpos;
if (playerdir == "left") {
transplayerpos = 703;
}

if (playerdir == "right") {
transplayerpos = 162;
}

if (playerdir == "up") {
transplayerpos = 576;
}

if (playerdir == "down") {
transplayerpos = 39;
}

var adir = calcPath(inkypos,transplayerpos,"inky");
if (adir == undefined) {
adir = inkydir;
}
if (inkyskip == true || (adir == inkydir && !(inkypos > 391 && inkypos < 395) && !(inkypos > 416 && inkypos < 420))) {
inkyskip = false;
if (adir == "left") {
moveGhostLeft("inky")
}
if (adir == "right") {
moveGhostRight("inky")
}
if (adir == "up") {
moveGhostUp("inky")
}
if (adir == "down") {
moveGhostDown("inky")
}
inkydir = adir;
} else {
inkyskip = true;
}

}


function calcPath(start,end,ghost) {
var end = end;
var gbwalls = [].concat(gameboardwalls)
gbwalls[start] = 1;

if (ghost == "blinky") {
if (blinkydir == "left") {
gbwalls[start+1] = "S";
}
if (blinkydir == "right") {
gbwalls[start-1] = "S";
}
if (blinkydir == "up") {
gbwalls[start+28] = "S";
}
if (blinkydir == "down") {
gbwalls[start-28] = "S";
}
}

if (ghost == "inky") {
if (inkydir == "left") {
gbwalls[start+1] = "S";
}
if (inkydir == "right") {
gbwalls[start-1] = "S";
}
if (inkydir == "up") {
gbwalls[start+28] = "S";
}
if (inkydir == "down") {
gbwalls[start-28] = "S";
}
if (start == end) {
return inkydir;
}
}

current = 1;
while (gbwalls[end] == 0 || current == 500) {
current += 1;
count = -1;
for (i = 0; i < gbwalls.length; i++) {
count += 1;
if (gbwalls[count] == current-1) {
if (gbwalls[count+1] == 0) {
gbwalls[count+1] = current;
}
if (gbwalls[count-1] == 0) {
gbwalls[count-1] = current;
}
if (gbwalls[count+28] == 0) {
gbwalls[count+28] = current;
}
if (gbwalls[count-28] == 0) {
gbwalls[count-28] = current;
}
if (count == 392 && gbwalls[419] == 0) {
gbwalls[419] = current;
}
if (count == 419 && gbwalls[392] == 0) {
gbwalls[392] = current;
}
}
}
}
var currentpos = end;
var currentnum = gbwalls[end];
for (o = 0; o < current-1; o++) {
currentnum -= 1;
if (gbwalls[currentpos+1] == currentnum) {
gbwalls[currentpos] = "X"
currentpos = currentpos+1
}
if (gbwalls[currentpos-1] == currentnum) {
gbwalls[currentpos] = "X"
currentpos = currentpos-1
}
if (gbwalls[currentpos+28] == currentnum) {
gbwalls[currentpos] = "X"
currentpos = currentpos+28
}
if (gbwalls[currentpos-28] == currentnum) {
gbwalls[currentpos] = "X"
currentpos = currentpos-28
}
if (currentpos == 392 && gbwalls[419] == currentnum) {
gbwalls[currentpos] = "X"
currentpos = 419
}
if (currentpos == 419 && gbwalls[392] == currentnum) {
gbwalls[currentpos] = "X"
currentpos = 392
}
}
if (start == 392 && gbwalls[419] == "X") {
return "left";
}
if (start == 419 && gbwalls[392] == "X") {
return "right";
}
if (gbwalls[start+1] == "X") {
return "right";
}
if (gbwalls[start-1] == "X") {
return "left";
}
if (gbwalls[start+28] == "X") {
return "down";
}
if (gbwalls[start-28] == "X") {
return "up";
}
}


function moveGhostRight(ghost) {

if (ghost == "blinky") {
if (gameboard[blinkypos+1] !== 0) {
gameboard[blinkypos] = blinkyonthing;
blinkyonthing = gameboard[blinkypos+1];
if (blinkyonthing > 4 && blinkyonthing !== 9) {
blinkyonthing = 3;
}
gameboard[blinkypos+1] = 10;
blinkypos += 1;
} else {
if (blinkypos == 419) {
gameboard[blinkypos] = blinkyonthing;
blinkyonthing = gameboard[392];
if (blinkyonthing > 4 && blinkyonthing !== 9) {
blinkyonthing = 3;
}
gameboard[392] = 10;
gameboard[blinkypos] = 3;
blinkypos = 392;
}}}

if (ghost == "inky") {
if (gameboard[inkypos+1] !== 0) {
gameboard[inkypos] = inkyonthing;
inkyonthing = gameboard[inkypos+1];
if (inkyonthing > 4 && inkyonthing !== 9) {
inkyonthing = 3;
}
gameboard[inkypos+1] = 11;
inkypos += 1;
} else {
if (inkypos == 419) {
gameboard[inkypos] = inkyonthing;
inkyonthing = gameboard[392];
if (inkyonthing > 4 && inkyonthing !== 9) {
inkyonthing = 3;
}
gameboard[392] = 11;
gameboard[inkypos] = 3;
inkypos = 392;
}}}

}

function moveGhostLeft(ghost) {
if (ghost == "blinky") {
if (gameboard[blinkypos-1] !== 0) {
gameboard[blinkypos] = blinkyonthing;
blinkyonthing = gameboard[blinkypos-1];
if (blinkyonthing > 4 && blinkyonthing !== 9) {
blinkyonthing = 3;
}
gameboard[blinkypos-1] = 10;
blinkypos -= 1;
} else {
if (blinkypos == 392) {
gameboard[blinkypos] = blinkyonthing;
blinkyonthing = gameboard[419];
if (blinkyonthing > 4 && blinkyonthing !== 9) {
blinkyonthing = 3;
}
gameboard[419] = 10;
gameboard[blinkypos] = 3;
blinkypos = 419;
}}}

if (ghost == "inky") {
if (gameboard[inkypos-1] !== 0) {
gameboard[inkypos] = inkyonthing;
inkyonthing = gameboard[inkypos-1];
if (inkyonthing > 4 && inkyonthing !== 9) {
inkyonthing = 3;
}
gameboard[inkypos-1] = 11;
inkypos -= 1;
} else {
if (inkypos == 392) {
gameboard[inkypos] = inkyonthing;
inkyonthing = gameboard[419];
if (inkyonthing > 4 && inkyonthing !== 9) {
inkyonthing = 3;
}
gameboard[419] = 11;
gameboard[inkypos] = 3;
inkypos = 419;
}}}
}

function moveGhostUp(ghost) {
if (ghost == "blinky") {
if (gameboard[blinkypos-28] !== 0) {
gameboard[blinkypos] = blinkyonthing;
blinkyonthing = gameboard[blinkypos-28];
if (blinkyonthing > 4 && blinkyonthing !== 9) {
blinkyonthing = 3;
}
gameboard[blinkypos-28] = 10;
blinkypos -= 28;
}}

if (ghost == "inky") {
if (gameboard[inkypos-28] !== 0) {
gameboard[inkypos] = inkyonthing;
inkyonthing = gameboard[inkypos-28];
if (inkyonthing > 4 && inkyonthing !== 9) {
inkyonthing = 3;
}
gameboard[inkypos-28] = 11;
inkypos -= 28;
}}

}

function moveGhostDown(ghost) {
if (ghost == "blinky") {
if (gameboard[blinkypos+28] !== 0) {
gameboard[blinkypos] = blinkyonthing;
blinkyonthing = gameboard[blinkypos+28];
if (blinkyonthing > 4 && blinkyonthing !== 9) {
blinkyonthing = 3;
}
gameboard[blinkypos+28] = 10;
blinkypos += 28;
}}

if (ghost == "inky") {
if (gameboard[inkypos+28] !== 0) {
gameboard[inkypos] = inkyonthing;
inkyonthing = gameboard[inkypos+28];
if (inkyonthing > 4 && inkyonthing !== 9) {
inkyonthing = 3;
}
gameboard[inkypos+28] = 11;
inkypos += 28;
}}

}


function step() {
movePlayer();
}

function ghoststep() {
moveGhost();
}


function moveRight() {
movelr = "right";
playerdir = "right";
if (gameboard[playerpos+1] !== 0 && gameboard[playerpos+1] !== 9) {
if (gameboard[playerpos+1] == 1) {
points += 1
}
gameboard[playerpos+1] = 5;
gameboard[playerpos] = 3;
playerpos += 1;
} else {
if (playerpos == 419) {
gameboard[392] = 5;
gameboard[playerpos] = 3;
playerpos = 392;
}
}

}

function moveLeft() {
movelr = "left";
playerdir = "left";
if (gameboard[playerpos-1] !== 0 && gameboard[playerpos-1] !== 9) {
if (gameboard[playerpos-1] == 1) {
points += 1
}
gameboard[playerpos-1] = 5;
gameboard[playerpos] = 3;
playerpos -= 1;
} else {
if (playerpos == 392) {
gameboard[419] = 5;
gameboard[playerpos] = 3;
playerpos = 419;
}
}

}

function moveDown() {
moveud = "down";
playerdir = "down";
if (gameboard[playerpos+28] !== 0 && gameboard[playerpos+28] !== 9) {
if (gameboard[playerpos+28] == 1) {
points += 1
}
gameboard[playerpos+28] = 5;
gameboard[playerpos] = 3;
playerpos += 28;
}

}

function moveUp() {
moveud = "up";
playerdir = "up";
if (gameboard[playerpos-28] !== 0 && gameboard[playerpos-28] !== 9) {
if (gameboard[playerpos-28] == 1) {
points += 1
}
gameboard[playerpos-28] = 5;
gameboard[playerpos] = 3;
playerpos -= 28;
}

}

function drawFrame() {
var current = -1;
for (f = 0; f < gameboard.length; f++) {
current += 1;
color = toColor(gameboard[current]);
gid("b_"+current).style.backgroundColor = color;
}

drawLaunchpadFrame();
}


var ldisplay = [];

function drawLaunchpadFrame() {
var count = -1;
var current = 0;
if (mode == "behind") {
if (movelr == "right" && moveud == "down") {
current = playerpos-4-28-28-28-28-1;
}
if (movelr == "left" && moveud == "down") {
current = playerpos-3-28-28-28-28-1;
}
if (movelr == "right" && moveud == "up") {
current = playerpos-4-28-28-28-1;
}
if (movelr == "left" && moveud == "up") {
current = playerpos-3-28-28-28-1;
}
}
if (mode == "ahead") {
if (movelr == "left" && moveud == "up") {
current = playerpos-4-28-28-28-28-1;
}
if (movelr == "right" && moveud == "up") {
current = playerpos-3-28-28-28-28-1;
}
if (movelr == "left" && moveud == "down") {
current = playerpos-4-28-28-28-1;
}
if (movelr == "right" && moveud == "down") {
current = playerpos-3-28-28-28-1;
}
}
if (mode == "locked") {
current = playerpos-3-28-28-28-1;
}

var disfromleft = 0;
var blankleft = 0;
var blankright = 0;
var disfromright = 0;
var disfromtop = 0;
var blankbottom = 0;
var disfrombottom = 0;
disfromleft = Math.round(((playerpos/28)-Math.floor(playerpos/28))*28);
blankleft = -disfromleft+3
disfromright = 27-Math.round(((playerpos/28)-Math.floor(playerpos/28))*28);
blankright = -disfromright+3;
disfromtop = Math.floor(playerpos/28);
blanktop = -disfromtop+3
disfrombottom = 30-Math.floor(playerpos/28);
blankbottom = -disfrombottom+3

for (a = 0; a < 8; a++) {
for (i = 0; i < 8; i++) {
current += 1;
count += 1;
ldisplay[count] = gameboard[current];
}
current += 20;
}

var x = 0;
var y = 1;
var count = -1;
for (a = 0; a < 8; a++) {
x = 0;
for (i = 0; i < 8; i++) {
x += 1;

count += 1;

color = toColor(ldisplay[count]);
ccode = toColorCode(ldisplay[count]);

if (x-blankleft < 1) {
color = "black";
ccode = 0;
}
if (x+blankright > 7) {
color = "black";
ccode = 0;
}
if (y-blanktop < 1) {
color = "black";
ccode = 0;
}
if (y+blankbottom > 7) {
color = "black";
ccode = 0;
}

if (mirroredge == true) {

if (playerpos > 415 && playerpos < 420) {

if (y == 3 && x > -playerpos+423) {
color = "blue";
ccode = 46;
}

if (y == 4 && x > -playerpos+423) {
color = toColor(gameboard[playerpos-32+x])
ccode = toColorCode(gameboard[playerpos-32+x])
}

if (y == 5 && x > -playerpos+423) {
color = "blue";
ccode = 46;
}

}

if (playerpos < 395 && playerpos > 391) {

if (y == 3 && x < -playerpos+396) {
color = "blue";
ccode = 46;
}

if (y == 4 && x < -playerpos+396) {
color = toColor(gameboard[playerpos+24+x])
ccode = toColorCode(gameboard[playerpos+24+x])
}

if (y == 5 && x < -playerpos+396) {
color = "blue";
ccode = 46;
}


}

}

if (colorcache[x+"_"+y] !== color) {
colorcache[x+"_"+y] = color;
if (midiOut) {
midiOut.send( [0x90, Number(String(9-y)+String(x)), true ? (ccode) : 0x00])
}
gid(y+"_"+x).style.backgroundColor = color;
}

}
y += 1;
}


}

function toColor(id) {
if (id == 0) {
return "blue"
}
if (id == 3) {
return "gray"
}
if (id == 4) {
return "black"
}
if (id == 1) {
return "lightgray"
}
if (id == 2) {
return "white"
}
if (id == 5) {
return "yellow"
}
if (id == 9) {
return "pink"
}
if (id == 10) {
return "red"
}
if (id == 11) {
return "cyan"
}
if (id == 12) {
return "orange"
}
if (id == 13) {
return "pink"
}
}

function toColorCode(id) {
if (id == 0) {
return 46;
}
if (id == 3) {
return 0;
}
if (id == 4) {
return 0;
}
if (id == 1) {
return 71;
}
if (id == 2) {
return 119;
}
if (id == 5) {
return 13;
}
if (id == 9) {
return 56;
}
}


