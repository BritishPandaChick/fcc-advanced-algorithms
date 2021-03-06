function permAlone(str) {
  var arr = str.split('');
  //var permutation = []; but not needed to pass tests
  var result = 0;
  //count non-permutating repetitions

  function swap(a, b) {
    var tmp = arr[a];
    //temporary variable holds a value while swapping
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  function generate(n) {
    var regex = /([a-z]) \1 + /;
    //use regular expession to check repeating values
    if (n === 1 && !regex.test(arr.join(''))) {
      //if base case at 1 and no repeating values in string
      result++;
      //console.log(arr.join(''));
    } else {
      for (var i = 0; i !== n; i++) {
        generate(n - 1);
        swap(n % 2 ? 0 : i, n - 1);
        //iterate, decrement, and swap. Return 0 for first method or return i
      }
    }
  }
  generate(arr.length);
  //start generate function with number of characters in array
  return result;
}

permAlone('aab');
