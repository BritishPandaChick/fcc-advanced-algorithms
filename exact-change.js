var denominations = [
  {name: 'One Hundred', value: 100.00},
  {name: 'Twenty', value: 20.00},
  {name: 'Ten', value: 10.00},
  {name: 'Five', value: 5.00},
  {name: 'One', value: 1.00},
  {name: 'Quarter', value: 0.25},
  {name: 'Dime', value: 0.10},
  {name: 'Nickel', value: 0.05},
  {name: 'Penny', value: 0.01}
];
//array of different currencies and values

function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  //figure out change customer gets
  var totalCid = cid.reduce(function(acc, next) {
    return acc + next[1];
    //iterate through array and grab values
  }, 0.0);
  //figure out how much change is in the drawer

  if (totalCid < change) {
    return 'Insufficent Funds';
  } else if (totalCid === change) {
    return 'Closed';
  }

  cid = cid.reverse();
  var result = denominations.reduce(function(acc, next, index) {
    if (change >= next.value) {
      var currentValue = 0.0;
      while (change >= next.value && cid[index][1] >= next.value) {
        currentValue += next.value;
        change -= next.value;
        //iterate values
        change = Math.round(change * 100) / 100;
        //make sure decimals work in JS
        cid[index][1] -= next.value;
      }
      acc.push([next.name, currentValue]);
      return acc;
    } else {
      return acc;
    }
  }, []);

  return result.length > 0 && change === 0 ? results: 'Insufficient Funds';
  //return 2D array specifying change giving customer
}

checkCashRegister(19.50, 20.00, [["Penny", 1.01], ["Nickel", 2.05], ["Dime", 3.10], ["Quarter", 4.25], ["One", 90.00], ["Five", 55.00], ["Ten", 20.00], ["Twenty", 60.00], ["One Hundred", 100.00]]);
 
