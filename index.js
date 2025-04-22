// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }
// const array = [1, 2, 2, 3, 4, 4, 5];
// console.log(removeDuplicates(array)); 


// function areAllUnique(arr) {
//   return new Set(arr).size === arr.length;
// }
// console.log(areAllUnique([1, 2, 3]));
// console.log(areAllUnique([1, 2, 2])); 



// function unionSets(set1, set2) {
//   return new Set([...set1, ...set2]);
// }

// const setA = new Set([1, 2, 3]);
// const setB = new Set([3, 4, 5]);
// console.log(unionSets(setA, setB)); 


// function objectToMap(obj) {
//   return new Map(Object.entries(obj));
// }
// const user = { name: "Alex", age: 25 };
// console.log(objectToMap(user)); 



// function invertMap(map) {
//   const inverted = new Map();
//   for (const [key, value] of map) {
//       inverted.set(value, key);
//   }
//   return inverted;
// }
// const originalMap = new Map([["a", 1], ["b", 2]]);
// console.log(invertMap(originalMap)); 