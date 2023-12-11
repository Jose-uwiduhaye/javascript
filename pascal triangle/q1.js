function generatePascalsTriangle(Rows) {
    let triangle = [];

    for (let i = 0; i < Rows; i++) {
        triangle[i] = [];
        triangle[i][0] = 1;

        for (let j = 1; j < i; j++) {
            triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        triangle[i][i] = 1;
    }

    return triangle;
}

function printPascalsTriangle(triangle) {
    for (let i = 0; i < triangle.length; i++) {
        let row = "";
        for (let j = 0; j < triangle[i].length; j++) {
            row += triangle[i][j] + " ";
        }
        console.log(row);
    }
}

const numRows = 6;
const pascalsTriangle = generatePascalsTriangle(numRows);
printPascalsTriangle(pascalsTriangle);
