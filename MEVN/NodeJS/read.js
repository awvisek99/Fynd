const fs = require("fs"); //no change in this


// unicode transformation format
//file is the parameter
function readUTF8FFile(filepath) {
    //callback: choice determining
    //2 choices: data= success
    //error= failure
    //minimises exception handling
    

    fs.readFile(filepath,"utf-8", (data, error) => {
        if (error) {
            console.error(error);
            return;
        }
        console.log(data);
    });
}

//non existing file
readUTF8FFile("./abcd.txt");

//Existing file
readUTF8FFile("./static/files/testfile.txt");

//file with different encoding. will read with missing characters.
readUTF8FFile("./satatic/files/testFiledifferentEncoding.txt");