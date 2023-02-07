var fs = require('fs'); // import statement
//it imports the filestream from the node modules
//fs=filestream is an inbuild module
//module :
//collection of functionalities which are not user sreated bit available from node js
var rs = fs.createReadStream('./demofile.txt'); // ./means path
//var is a shortform for variables used to store local values/temporary values
//reading the outside place demotext file
//event= action performed on an object
//events work with event handler
rs.on('open', function () {
    console.log('The file is open');
});