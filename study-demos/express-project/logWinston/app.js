const winston = require("winston");

const logger = winston.createLogger({
    level:"info", //this is the lowest level will be recorded .
    format:winston.format.json(),
    transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename:"logfile.log"})
    ]
});

let custDetails = [["John","Kate","Ross","Joseph","Maria","Christina","Jim","Dan","Emma","Elijah"],
["Doe","Smith","Taylor","Anderson","Martinex","Johnson","Walker","Williams","Turner","Foster"],
["Miami","Houston","Los Angeles","North Dakota","Chicago","Dallas","Denver","Atlanta","San Francisco","New York"]]

for(let i = 0;i<custDetails[0].length;i++){
    let lastname = "";
    let city = "";
    if(i < custDetails[1].length){
        lastname = custDetails[1][i]
    }
    if(i<custDetails[2].length){
        city = custDetails[2][i]
    }
    logger.info(custDetails[0][i] + " " + lastname + " "+ city);
}

const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`\nThere are 10 records. Enter the record number you would like to see\n`, number => {
    debugger;
    if(isNaN(number)) {
        logger.error("Input not a number")
        logger.warn("Only numbers can be entered.")
    } else {
            if (number <= 10) {
                logger.info(custDetails[0][number-1]+" "+custDetails[1][number-1]+" ,"+custDetails[2][number-1]);
            } else {
                logger.error("Record not found");
                logger.warn("Record number has to be within 1 to 10");
            }
    }
    readline.close();
});