// const scenario = {
//     murderer: "Miss Scarlet",
//     room: "Library",
//     weapon: "Rope",
// };

// const declareMurderer = function () {
//     return `The murderer is ${scenario.murderer}.`;
// };

// const verdict = declareMurderer();
// console.log(verdict);

// !Ep. 1 - The murderer is Miss Scarlet!  The murderer is declared in the scenario object.
// --------------------------------------------


// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//     murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// !Ep. 2 - The murderer is Professor Plum. An error will come up as it's a constant variable which cannot be changed.
// --------------------------------------------


// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// !Ep 3 - First Verdict: Mrs Peacock.  
// !        Second Verdict: Professor Plum.
// ! A new variable is created in the declareMurderer function and the value Mrs Peacock was assigned to it. As it's a new variable it doesn't affect the original murderer so the secondVerdict is Professor Plum.
// --------------------------------------------


// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// !Ep 4 - The suspects are Miss Scarlet, Professor Plum, Colonel Mustard. The function changed the value of suspectThree.
// !        Suspect three is Mrs Peacock. suspectThree was only changed inside the 'declareAllSuspects()' function, which means global value of suspectThree remains the same as before.

// --------------------------------------------


// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// !Ep 5 - The weapon is the Revolver because the function changeWeapon() changed it from Candle Stick.
// --------------------------------------------


// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//     murderer = 'Mr. Green';

// const plotTwist = function() {
//     murderer = 'Mrs. White';
// }

// plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// !Ep 6 - The murderer is Mrs White. The changeMurderer() function changes the murderer to Mr Green but the plotTwist function gets called and changes the murderer to Mrs White.
// --------------------------------------------


// let murderer = 'Professor Plum';

// const changeMurderer = function () {
//     murderer = 'Mr. Green';

//     const plotTwist = function () {
//         let murderer = 'Colonel Mustard';

//         const unexpectedOutcome = function () {
//             murderer = 'Miss Scarlet';
//         }

//         unexpectedOutcome();
//     }

//     plotTwist();
// }

// const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// !Ep 7 - The murderer is Mr Green. The changeMurderer()function sets the murderer to Mr Green. A new variable is set using let variable which doesn't affect the value of the murderer outside it's function. The unexpectedOutcome() function changes the murderer to Miss Scarlet but changes back to Mr Green when changeMurderer() function is called again.
// --------------------------------------------


// const scenario = {
//     murderer: "Mrs. Peacock",
//     room: "Conservatory",
//     weapon: "Lead Pipe",
// };

// const changeScenario = function () {
//     scenario.murderer = "Mrs. Peacock";
//     scenario.room = "Dining Room";

//     const plotTwist = function (room) {
//         if (scenario.room === room) {
//             scenario.murderer = "Colonel Mustard";
//         }

//         const unexpectedOutcome = function (murderer) {
//             if (scenario.murderer === murderer) {
//                 scenario.weapon = "Candle Stick";
//             }
//         };

//         unexpectedOutcome("Colonel Mustard");
//     };

//     plotTwist("Dining Room");
// };

// const declareWeapon = function () {
//     return `The weapon is ${scenario.weapon}.`;
// };

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// !Ep 8 - The weapon is Candle Stick. The changeScenario() function changes the room to 'Dining room'. The plotTwist function checks if the value of the scenario.room matches the value of the input argument, if it does it changes to Colonel Mustard.  The unexpectedOutcome() is called with Colonel Mustard which matches the value in scenario.murderer which changes the weapon to Candle Stick.
// --------------------------------------------


let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
}

const declareMurderer = function () {
    return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// !Ep 9 - The murderer is Professor Plum. The let murderer variable creates a new variable murderer and sets it to Mrs Peacock but this has no affect on the original variable because it's defined inside the if block.