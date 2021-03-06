var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//array of months for easy access later
function makeOrdinals(num) {
  //take integer and turn into ordinal number
  switch (num) {
    case 1:
    case 21:
    case 31:
      return num.toString() + 'st';
    case 2:
    case 22:
      return num.toString() + 'nd';
    case 3:
    case: 23:
      return num.toString() + 'rd';
    default:
      return num.toString() + 'th';
  }
}

function monthAndDay(d) {
  return months[d.getMonth()] + ' ' + makeOrdinals(d.getDate());
  //access month from array and creates ordinal number
}

function fullDate(d) {
  //access full year and create ordinal numbers
  return monthAndDay(d) + ', ' + d.getFullYear();
}

function makeFriendlyDates(arr) {
  //create date objects
  var currentYear = new Date().getFullYear();
  var start = new Date(Date.parse(arr[0]));
  var end = new Date(Date.parse(arr[1]));
  var yearInMS = 31536000000;
  //1 year in milli-seconds

  if (end - start === 0) {
    return [fullDate(start)];
    //if start and end date are the same
  }

  if (start.getFullYear() === currentYear && start.getMonth() === end.getMonth()) {
    return [monthAndDay(start), makeOrdinals(end.getDate())];
    //current year and same month
  }

  if (start.getFullYear() === currentYear && end - start < yearInMS) {
    return [monthAndDay(start), monthAndDay(end)];
    //current year and less than one year apart
  }

  if (end - start < yearInMS) {
    return [fullDate(start), monthAndDay(end)];
    //not current year, but less than a year apart
  }

  if (end - start >= yearInMS) {
    return [fullDate(start), fullDate(end)];
    //dates are a year or more apart
  }
}

 makeFriendlyDates(['2016-07-01', '2016-07-04']);
