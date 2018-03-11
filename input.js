var theUniverse = null;
var frame1 = null,
	frame2 = null,
	currentFrame = null,
	backFrame = null;

var numRows = 8,
	numCols = 8;
	
var getout;

window.addEventListener('load', function() {
	navigator.requestMIDIAccess({}).then( onMIDIInit, onMIDIFail );
} );

var selectMIDIIn = null;
var selectMIDIOut = null;
var midiAccess = null;
var midiIn = null;
var midiOut = null;
var launchpadFound = false;

function changeMIDIIn( ev ) {
  if (midiIn)
    midiIn.onmidimessage = null;
  var selectedID = selectMIDIIn[selectMIDIIn.selectedIndex].value;

  for (var input of midiAccess.inputs.values()) {
    if (selectedID == input.id)
      midiIn = input;
  }
  midiIn.onmidimessage = midiProc;
}

function changeMIDIOut( ev ) {
  var selectedID = selectMIDIOut[selectMIDIOut.selectedIndex].value;

  for (var output of midiAccess.outputs.values()) {
    if (selectedID == output.id) {
      midiOut = output;
	  
	  getout = midiOut;
	  
	  midiOut.send( [0xB0,0x00,0x00] ); // Reset Launchpad
	  midiOut.send( [0xB0,0x00,0x01] ); // Select XY mode
	  drawFullBoardToMIDI();
	}
  }
}

function onMIDIFail( err ) {
	alert("MIDI initialization failed.");
}

function onMIDIInit( midi ) {
  midiAccess = midi;
  selectMIDIIn=document.getElementById("midiIn");
  selectMIDIOut=document.getElementById("midiOut");

  // clear the MIDI input select
  selectMIDIIn.options.length = 0;

  for (var input of midiAccess.inputs.values()) {
    if ((input.name.toString().indexOf("Launchpad") != -1)||(input.name.toString().indexOf("QUNEO") != -1)) {
      launchpadFound = true;
      selectMIDIIn.add(new Option(input.name,input.id,true,true));
      midiIn=input;
	  midiIn.onmidimessage = midiProc;
    }
    else
    	selectMIDIIn.add(new Option(input.name,input.id,false,false));
  }
  selectMIDIIn.onchange = changeMIDIIn;

  // clear the MIDI output select
  selectMIDIOut.options.length = 0;
  for (var output of midiAccess.outputs.values()) {
    if ((output.name.toString().indexOf("Launchpad") != -1)||(output.name.toString().indexOf("QUNEO") != -1)) {
      selectMIDIOut.add(new Option(output.name,output.id,true,true));
      midiOut=output;
    }
    else
    	selectMIDIOut.add(new Option(output.name,output.id,false,false));
  }
  selectMIDIOut.onchange = changeMIDIOut;

  if (midiOut && launchpadFound) {  
  
	getout = midiOut;
	

for (a = 1; a < 10; a++) {
for (i = 1; i < 9; i++) {
midiOut.send( [0x90, Number(String(i)+String(a)), true ? (0) : 0x00])
}
}

	
	midiOut.send( [0xB0,0x00,0x00] ); // Reset Launchpad
	midiOut.send( [0xB0,0x00,0x01] ); // Select XY mode

  }
}














function midiProc(event) {
  data = event.data;
  var cmd = data[0] >> 4;
  console.log(cmd)
  var channel = data[0] & 0xf;
  var noteNumber = data[1];
  var velocity = data[2];

  if ( cmd==8 || ((cmd==9 || cmd==11)&&(velocity==0)) ) { // with MIDI, note on with velocity zero is the same as note off
    // note off
    //noteOff(b);
	console.log("Off:"+noteNumber);

	
	if (noteNumber == 16) {
	keys[37] = false;
	}
	
	if (noteNumber == 18) {
	keys[39] = false;
	}
	
	if (noteNumber == 17) {
	keys[40] = false;
	}
	
	if (noteNumber == 27) {
	keys[38] = false;
	}
	
	if (noteNumber == 11) {
	keys[37] = false;
	}
	
	if (noteNumber == 13) {
	keys[39] = false;
	}
	
	if (noteNumber == 12) {
	keys[40] = false;
	}
	
	if (noteNumber == 22) {
	keys[38] = false;
	}
	
	if (noteNumber == 106) {
	keys[37] = false;
	}
	
	if (noteNumber == 107) {
	keys[39] = false;
	}
	
	if (noteNumber == 105) {
	keys[40] = false;
	}
	
	if (noteNumber == 104) {
	keys[38] = false;
	}
	
  } else if (cmd == 9 || cmd == 11) {  // Note on
	console.log("On:"+noteNumber);
	
	if (ingame == false) {
		startNewGame();
	}
	
	if (noteNumber == 16) {
	keys[38] = false; keys[40] = false; keys[37] = true; keys[39] = false;
	}
	
	if (noteNumber == 18) {
	keys[38] = false; keys[40] = false; keys[37] = false; keys[39] = true;
	}
	
	if (noteNumber == 17) {
	keys[38] = false; keys[40] = true; keys[37] = false; keys[39] = false;
	}
	
	if (noteNumber == 27) {
	keys[38] = true; keys[40] = false; keys[37] = false; keys[39] = false;
	}
	
	if (noteNumber == 11) {
	keys[38] = false; keys[40] = false; keys[37] = true; keys[39] = false;
	}
	
	if (noteNumber == 13) {
	keys[38] = false; keys[40] = false; keys[37] = false; keys[39] = true;
	}
	
	if (noteNumber == 12) {
	keys[38] = false; keys[40] = true; keys[37] = false; keys[39] = false;
	}
	
	if (noteNumber == 22) {
	keys[38] = true; keys[40] = false; keys[37] = false; keys[39] = false;
	}
	
	if (noteNumber == 106) {
	keys[38] = false; keys[40] = false; keys[37] = true; keys[39] = false;
	}
	
	if (noteNumber == 107) {
	keys[38] = false; keys[40] = false; keys[37] = false; keys[39] = true;
	}
	
	if (noteNumber == 105) {
	keys[38] = false; keys[40] = true; keys[37] = false; keys[39] = false;
	}
	
	if (noteNumber == 104) {
	keys[38] = true; keys[40] = false; keys[37] = false; keys[39] = false;
	}
	
  } else if (cmd == 11) { // Continuous Controller message
    switch (noteNumber) {
    }
  }
}


//midiOut.send( [176, 104, true ? (1) : 0x00]) Use this to light up the top row