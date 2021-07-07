let chromaticScale = ["C", "C#", "D" , "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
let solfegeScale = ["Do", "", "Re", "", "Mi", "Fa", "", "So", "", "La", "", "Ti", ""];

// main challenge
function note(scale, solfege) {
  let scaleIndex = chromaticScale.indexOf(scale);
  let solfegeIndex = solfegeScale.indexOf(solfege);
  if (scaleIndex === -1 || solfegeIndex === -1) {
    console.log("Error: expected one of C, C#, D, D#, E, F, F#, G, G#, A, A#, or B for scale, and one of Do, Re, Mi, Fa, So, La, Ti for solfege. The input: scale " + scale + ", and solfege " + solfege);
    return -1;
  } else {
    let result = chromaticScale[((scaleIndex + solfegeIndex) % 12)];
    return result;
  }
}

// test cases
console.log(note("C", "Do")); //=> "C"
console.log(note("C", "Re")); //=-> "D"
console.log(note("C", "Mi")); //=> "E"
console.log(note("D", "Mi")); //=> "F#"
console.log(note("A#", "Fa")); //=> "D#"
