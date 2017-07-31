var moment = require('moment');

// Jan 1st 1970 00:00:00 am
// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(1, 'year').subtract(9, 'months');
// console.log(date);
// console.log(date.format());
// console.log(date.format('MMM Do, YYYY'));

var createdAt = 1234;
var date = moment(moment().valueOf());
console.log(date.format('h:mm a'));