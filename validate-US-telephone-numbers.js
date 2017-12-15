function telephoneCheck(str) {
  var regex = /^(1 \ s?) ? (\(\d{3}\) | \d{3})[\s\ - ] ? \ d {3} [\s\ - ] ? \d{4}$/;
  //one without a space is valid and match 3 numbers in ()

  return regex.test(str);
  //return test of variables to see if true/false
}

telephoneCheck("555-555-5555");
