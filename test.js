
const alert = require("./index.js");

alert();

alert({
    "type": "success",
    "msg" : "You have done a great job",
    "name" : "DONE"
});
alert({
    "type": "error",
    "msg" : "Process exit with code 1"
});

alert({
    "type": "info",
    "msg" : "Runtime error",
    "name" : "AWESOME"
});

alert({
    "type": "warning",
    "msg" : "Time complexity is not as expected"
});
