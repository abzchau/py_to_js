"use strict";


// 1. printIndices
function printIndices(items) {
  let i = 1;

  for (const item of items) {
    console.log(`${i}. ${item}`);
    i +=1;
  }
}


// 2. everyOtherItem
function everyOtherItem(items) {
  let result = []
  for (const item in items) {
    if (item % 2 != 0) {
      result.push(items[item]);
    }
  }
  return result;
}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
}
