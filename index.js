
const chalk = require('chalk');
const sym = require('log-symbols');


const green = chalk.green;
const red = chalk.red.bold;
const orange = chalk.keyword('orange');
const blue = chalk.blue;
const greenI = green.inverse;
const redI = red.inverse;
const orangeI = orange.inverse;
const blueI = blue.inverse;


module.exports = options => {
    const defaultOptions = {
        "type" : "error",
        "msg" : "You forgot to define all the options.",
        "name" : "",
    }
    const opt = {...defaultOptions,...options};
    const {type,msg ,name } = opt;
    const printName = name ? name : type.toUpperCase();
    
    

    if(type==="success"){
        console.log(
            `\n${sym.success} ${greenI(` ${printName} `)} ${green(msg)}\n`
        );
    }

    if(type==="error"){
        console.log(
            `\n${sym.error} ${redI(` ${printName} `)} ${red(msg)}\n`
        );
    }

    if(type==="warning"){
        console.log(
            `\n${sym.warning} ${orangeI(` ${printName} `)} ${orange(msg)}\n`
        );
    }

    if(type==="info"){
        console.log(
            `\n${sym.info} ${blueI(` ${printName} `)} ${blue(msg)}\n`
        );
    }


}

