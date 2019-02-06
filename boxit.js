const args = process.argv.slice(2)
let longest = 0;

for (let i = 0; i < args.length; i++) {
    if (args[i].length > longest) {
        longest = args[i].length;
    }
}

function drawLine(longest) {
    let str = ``;
    for (let i = 0; i < longest; i++) {
        str += "\u2501";
    }
    return str;
}
// console.log(drawLine(longest));

function drawTopBorder(longest) {
    // return '\u250E' + str + `\u2510`; 
    return `\u250F${drawLine(longest)}\u2513`;
}
// console.log(drawTopBorder(longest));

function drawMiddleBorder(longest) {
    return `\u2523${drawLine(longest)}\u252B`;
}
// console.log(drawMiddleBorder(longest));

function drawBottomBorder(longest) {
    return `\u2517${drawLine(longest)}\u251B`;
}
// console.log(drawBottomBorder(longest))


function drawBarsAround(name) {
    let space = longest - name.length
    let padding = '';
    for (let i = 0; i < space; i++) {
        padding += ' ';
    }
    return `\u2503${name}${padding}\u2503`;
}
// console.log(drawBarsAround('Jon Snow'));


function boxIt(arr) {
    let result = drawTopBorder(longest) + '\n';
    for (let i = 0; i < arr.length; i++) {
        if (i !== arr.length - 1) {     
            result += drawBarsAround(arr[i]) + '\n' + drawMiddleBorder(longest) + '\n';
        } else {
            result += drawBarsAround(arr[i]) + '\n';
        }  
    }
    result += drawBottomBorder(longest)
    return result;
}
console.log(boxIt(args));