function printAsteriskTriangle(numRows) {
    for (let i = 1; i <= numRows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

function printAsteriskLine(numAsterisks) {
    let line = '';
    for (let i = 0; i < numAsterisks; i++) {
        line += '* ';
    }
    console.log(line);
}
const numRows = 6;
printAsteriskTriangle(numRows);

printAsteriskLine(numRows * 2);
