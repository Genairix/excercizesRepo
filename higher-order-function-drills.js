"use strict"
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
const turtleMovement = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
const cryptograph = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';


// //Functions as arguments (1)
// function repeat(funct, n){
//     for(let i = 0; i < n; i++){
//         funct();
//     }
// }

// function hello(){
//     console.log('Hello World');
// }

// function goodbye(){
//     console.log('Goodbye World')
// }

// repeat(goodbye,4);

//---------------------------------------------------------------------------------------------------------------------------

////Functions as arguments (2)

// let filter = (names, funct) =>{
//     let newArray = []
//     for(let i=0; i<names.length; i++){
//         if(funct(names[i]) === true){
//             newArray.push(names[i]);
//         }
//     }
//     return newArray;
// }

// const filteredNames = filter (myNames, function(name) {
//     return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']

//--------------------------------------------------------------------------------------------------------------------------

// //Functions as return values
// function hazardWarningCreator(typeOfWarning){
//     let warningCounter = 0;
//     return function(location){
//         warningCounter++;
//         console.log(`Danger! There is a ${typeOfWarning} hazard at ${location}!`);
//         if(warningCounter === 1){
//             console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
//         }else{
//             console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`);
//         }     
//     }
// }
// const rocksWarning = hazardWarningCreator('Rocks on the Road')

// rocksWarning('Main St and Pacific Ave');
// rocksWarning('Centinela Ave and Olympic Blvd');

//--------------------------------------------------------------------------------------------------------------------------

// //forEach, filter and map

// const filterPositiveSteps = turtleMovement.filter(x => x[0] >= 0 && x[1] >= 0);
// for(let i = 0; i < filterPositiveSteps.length; i++){
//     console.log(filterPositiveSteps[i]);
// }

// //MAP
// const totalSteps = turtleMovement.map(x => x[0] + x[1]);
// console.log(totalSteps);

// //forEach
// turtleMovement.forEach(element => console.log(`Movement #1: ${element[0]} steps
// Movement #2: ${element[1]} steps`));

//--------------------------------------------------------------------------------------------------------------------------

// //Reduce

// const cryptographArray = cryptograph.split(' ');

// function parser(acc, val){
//     if(val.length === 3){
//         return acc + ' ';
//     }
//     if(acc !== ''){ 
//         return acc + val.slice(-1).toUpperCase();
//     }       
//     return acc + val.slice(-1).toUpperCase();
// }

// let decoded = cryptographArray.reduce(parser, '');
// console.log(decoded);