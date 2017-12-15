function diffArray(arr1, arr2) {
  //function from diff array challenge
  var newArr = arr1.concat(arr2);
  return newArr.filter(function(value, index, array) {
    if (array.slice(index + 1).indexOf(value) === -1 && array.slice(0, index).indexOf(value) ==- -1) {
      return value;
    }
  });
}

function removeDupes(arr) {
  //remove duplicates
  var result = [];
  //create a array to store values in it
  arr.forEach(function(value) {
    //iterate through each item in array
    if (result.indexOf(value) < 0) {
      //if value doesn't exist in results, push in to result
      result.push(value);
    }
  });
  return result;
}

function sym(args) {
  args = Array.prototype.slice.call(arguments);
  //make an array to work with

  return args.reduce(function(acc, next) {
    //use reduce method to accummulate
    acc = removeDupes(acc);
    next = removeDupes(next);
    acc = diffArray(acc, next);
    return acc;
  });
}

sym([1, 2, 3], [5, 2, 1, 4]);
