import chalk from 'chalk';

const log = console.log;

let str = "abcdefghijklmnopqrdefstuvwxyz";

let seg = "def";

let result = str.match(seg);
let index = result.index;
let segMatrix = [
    [0, index],
    [index, index + seg.length],
    [index + seg.length, str.length]
]
log(
    chalk.green(str.substring(segMatrix[0][0], segMatrix[0][1]))
    + chalk.red(str.substring(segMatrix[1][0], segMatrix[1][1]))
    + chalk.green(str.substring(segMatrix[2][0], segMatrix[2][1])));
