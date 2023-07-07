const pkgInfo = require('./package.json');
const Service = require('webos-service');
const service = new Service(pkgInfo.name); 
const fs = require('fs');

service.register("getdata", function(message) {
    let readData

    try {
        readData = fs.readFileSync('/dev/ttyACM0', 'utf8');
        message.respond({
            returnValue: true,
            reply: "Read complete",
            text : readData,
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
