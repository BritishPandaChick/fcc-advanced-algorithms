function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  return arr.reduce(function(acc, obj) {
    //use reduce function using acc and obj
    var orbPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM));
    //formula for orbit attached to var orbPeriod
    acc.push({name: obj.name, orbitalPeriod: orbPeriod});
    //create new entry in acc
    return acc;
  }, []);
  //put in an array
}

orbitalPeriod([{name: "sputnik", avgAlt: 35873.5553}]);
