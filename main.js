
var mode = "locked";
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
var gameboard = [];
var points = 0;
var movelr = "right";
var moveud = "down";
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
gameboard[233] = 5;
playerpos = 233;
points = 1;
}

function onLoaded() {
setTimeout(function() {


initialize();
drawFrame();

}, 300);

}


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
    moveUp();
    }
    else if (e.keyCode == '40') {
    moveDown();
    }
    else if (e.keyCode == '37') {
    moveLeft();
    }
    else if (e.keyCode == '39') {
    moveRight();
    }

	drawFrame();
	
}


function moveRight() {
movelr = "right";
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

if (playerpos > 415 && playerpos < 420) {

if (y == 3 && x > -playerpos+423) {
color = "blue";
}

if (y == 4 && x > -playerpos+423) {
color = toColor(gameboard[playerpos-32+x])
}

if (y == 5 && x > -playerpos+423) {
color = "blue";
}

}

if (playerpos < 395 && playerpos > 391) {

if (y == 3 && x < -playerpos+396) {
color = "blue";
}

if (y == 4 && x < -playerpos+396) {
color = toColor(gameboard[playerpos+24+x])
}

if (y == 5 && x < -playerpos+396) {
color = "blue";
}


}

if (midiOut) {
midiOut.send( [0x90, Number(String(9-y)+String(x)), true ? (ccode) : 0x00])
}
gid(y+"_"+x).style.backgroundColor = color;

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


