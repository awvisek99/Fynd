var url = require('url'); //in build library/module
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host);//returns 'localhost:8080'
console.log(q.pathname);//return '/default.htm'
console.log(q.search);// returns '?year=2017&month=february'

var qdata = q.query; //return an object: { year: 2017 , month: february}  
console.log(qdata.month);//returns "feburary"