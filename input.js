WebMidi.enable(function (err) {

  if (err) {
    console.log("WebMidi could not be enabled.", err);
  } else {
    console.log("WebMidi enabled!");
  }
  
      console.log(WebMidi.inputs);
    console.log(WebMidi.outputs);

  
});
var output;
var input;

setTimeout(function() {

output = WebMidi.getOutputByName("Launchpad MK2");

input = WebMidi.getInputByName("Launchpad MK2");

input.addListener('noteon', "all",
    function (e) {
      console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ").");
    }
  );
  

output.playNote("G1", "all", {velocity: 0.67});
 

},100);
