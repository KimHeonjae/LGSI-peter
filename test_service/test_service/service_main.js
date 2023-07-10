const pkgInfo = require('./package.json');
const Service = require('webos-service');
const service = new Service(pkgInfo.name); 
const fs = require('fs');

service.register("getdata", function(message) {
    let readData

    try {
        readData = fs.readFileSync('/home/root/result.txt', 'utf8');
        let myArray = readData.split("\n\n");
        
        message.respond({
            returnValue: true,
            reply: "Read complete",
            value: myArray[myArray.length-2],
            errorMsg : ""
            });
    } catch (err) {
        message.respond({
            returnValue: true,
            reply: "Read fail",
            text : readData,
            errorMsg : err
        });
    }
});