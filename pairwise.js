function pairwise(arr, arg) {
  return arr.reduce(function(acc, num, index, array) {
    //reduce method with acc, num, index, and array for callback
    for (var x = index + 1; x < array.length; x++) {
      //first iteration adding right of current number to the end of the array
      if (array[index] + array[x] === arg) {
        //check if array[index] and array[x] in argument
        acc += index + x;
        //add index number to acc
        array[index] = array[x] = NaN;
        //keeps from using index numbers
      }
    }
    return acc;
    //return acc to keep reducing
  }, 0);
  //return value
}

pairwise([1, 4, 2, 3, 0, 5], 7);
