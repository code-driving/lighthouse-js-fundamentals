// const laugh = function (numOfLaughs) {
//   let laughingSentence = "";
//   for (let i = 0; i < numOfLaughs; i++) {
//     laughingSentence += "ha";
//   }
//   laughingSentence += "!";
//   return laughingSentence;
// };

const emotions = function (myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
};

// emotions("happy", laugh);
emotions("happy", function laugh(numOfLaughs) {
  let laughingSentence = "";
  for (let i = 0; i < numOfLaughs; i++) {
    laughingSentence += "ha";
  }
  laughingSentence += "!";
  return laughingSentence;
});
