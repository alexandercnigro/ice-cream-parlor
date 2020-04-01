'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/* ****************************************
    My Code Below
*******************************************/
function icecreamParlor(m, arr) {
    let obj = {};

    arr.forEach((item,index) => {
        obj[item] = []
        obj[item].push(index);
    });

    for(let index=0; index < arr.length -1; index++){
        let item = arr[index]; 
        let compliment = m-item;
        
        if (obj[compliment] && !obj[compliment].contains(index)){
            if(item > compliment) return `${compliment} ${item}`;
            else return `${item} ${compliment}`;
        }
    }
}
/* ****************************************
    My Code Above
*******************************************/
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const m = parseInt(readLine(), 10);

        const n = parseInt(readLine(), 10);

        const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

        let result = icecreamParlor(m, arr);

        ws.write(result.join(" ") + "\n");
    }

    ws.end();
}
