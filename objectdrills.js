'use strict'
// // 1. Object initializers and methods
// let loaf = {
//     flour:300,
//     water:210,
//     hydration: function (){
//         return ((loaf.water/loaf.flour) * 100);
//     }
// }
// console.log(loaf);
// console.log(loaf.hydration());

// -------------------------------------------------------------------

// //2. Iterating over an object's properties
// let newObj = {
//     foo: 1,
//     bar: 2,
//     fum: 3,
//     quux:4,
//     spam:5
// }
// for (const property in newObj) {
//     console.log(`${property}: ${newObj[property]}`);
//   }

// --------------------------------------------------------------------

// //3. Arrays in HEROES
// let newObj = {
//     meals: ['breakfast',
//             'second breakfast',
//             'elevenses',
//             'lunch',
//             'afternoon tea',
//             'dinner',
//             'supper']
// }
// console.log(newObj.meals[3]);

// ------------------------------------------------------------------------------

// //4. Arrays of HEROES
// let HEROES = [{name:'Bugs Bunny', job:'Carrot Eater'},
//                {name:'Tazmanian Devil', job:'Crazy Man'},
//                {name:'Tweety Bird', job:'Trash Talker'}];

// HEROES.forEach(element => {
//     console.log(element.name + ": " + element.job);
// });

// -------------------------------------------------------------------------------

// //5. Properties that aren't there
// let HEROES = [{name:'Bugs Bunny', job:'Carrot Eater'},
//                 {name:'Tazmanian Devil', job:'Crazy Man',boss:'Bugs Bunny'},
//                 {name:'Tweety Bird', job:'Trash Talker',boss:'Tazmanian Devil'}];

// HEROES.forEach(element => {
//     if(element.boss === undefined){
//         console.log(`${element.job} ${element.name} doesn't report to anybody.`)
//     }else{
//         console.log(`${element.job} ${element.name} reports to ${element.boss}`);
//     }
// });

// -------------------------------------------------------------------------------------

// // 6. Cracking the code
// let key = {'a': 1,
//            'b': 2,
//            'c': 3,
//            'd': 4
//         }
// function decode (word) {
//     const firstLetter = word[0];
//     let decodeLetter = key[firstLetter];
//     if(decodeLetter === undefined){
//         return(' ');
//     }else{
//         return(word[decodeLetter]);
//     }
    
// }
//   function decodeSen (sentence) {
//     let decodedSentence = ''
//     const words = sentence.split(' ')
//     for (let i = 0; i < words.length; i++) {
//       decodedSentence += decode(words[i])
//     }
//     return decodedSentence
//   }
  
//   console.log(decodeSen('craft block argon meter bells brown croon droop'))

// ---------------------------------------------------------------------------------------------

// //7. Factory Functions with LOTR
// function printArraysOfHEROES(array){
//     for(let i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }
// function createCharacter(name, nickName, race, origin, attack, defense, weapon) {
//     let character = {};
//     character.name = name;
//     character.nickName = nickName;
//     character.race = race;    
//     character.origin = origin;
//     character.attack = attack;
//     character.defense = defense;
//     character.weapon = weapon;
//     return character;
// }
// const characters = [
//     createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'Wizard Staff'),
//     createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'Ring'),
//     createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'),
//     createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
//     createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow'),
//     createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 7, 6, 'Hadhafang')
// ]
// function describe(){
//     return `${this.name} is a ${this.race} of the ${this.origin} who uses ${this.weapon}`;
// }
// function evaluateFight(character){
//     let myDamage = 0;
//     let opponentDamage = 0;
//     if(this.attack < character.defense){
//         opponentDamage = 0;
//     }else{
//         opponentDamage = this.attack - character.defense;
//     }
//     if(character.attack < this.defense){
//         myDamage = 0;
//     }else{
//         myDamage = character.attack - this.defense;
//     }

//     return (`Your opponent takes ${opponentDamage} and you receive ${myDamage}.`)
// }
// const findAragorn = characters.find(element => element.nickName === 'aragorn');
// //console.log(findAragorn);

// const FindAttackAbove5 = characters.filter(element => element.attack > 5);
// //printArraysOfHEROES(FindAttackAbove5);

// ------------------------------------------------------------------------------------------------------

// 8. BONUS: A Database Search
const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];


function findOne(arr, query){
  let queryKeys = Object.entries(query);

  for(let i = 0; i < queryKeys.length; i++){
    let result = arr.find(element => element[queryKeys[i][0]] === queryKeys[i][1])
    if(result !== undefined){
      return result;
    }
  }
  return null;
}


console.log(findOne(HEROES, { id: 1 }));
//{ id: 1, name: 'Captain America', squad: 'Avengers' }

console.log(findOne(HEROES, { id: 10 }));
//null

console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
//null

console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
//{ id: 5, name: 'Wonder Woman', squad: 'Justice League' }

console.log(findOne(HEROES, { squad: 'Justice League' }));
//{ id: 4, name: 'Superman', squad: 'Justice League' }