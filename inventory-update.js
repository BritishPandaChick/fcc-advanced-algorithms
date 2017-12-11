function updateInventory(arr1, arr2) {
  var inventory = arr1.concat(arr2).reduce(function(acc, next) {
    //concatenate arr1 and arr2 using reduce function with acc and next arguments
    if (acc[next[1]]) {
      //if acc object exists and is not undefined
      acc[next[1]] += next[0];
      //add to existing value
    } else {
      acc[next[1]] = next[0];
    }
    return acc;
  }, {});
  //empty object with {}

  return Object.keys(inventory).map(function(value) {
    //get array of object keys and call map to change array
    return [inventory[value], value];
    //return number value and item
  }).sort(function(a,b) {
    //sort items in alphabetical order by chaining to function
    if (a[1] === b[1]) {
      //if strign is the same as another string, don't swap anything
      return 0;
    } else {
      return (a[1] < b[1]) ? -1 : 1;
    }
  });
}

//Example inventory lists
var currInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
