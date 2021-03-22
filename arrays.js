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
  const sorted_items = items.sort((a,b) => a-b);
  const sorted_n_items = sorted_items.slice(0, n);
  const reversed =  sorted_n_items.reverse();
  console.log(reversed);
}
