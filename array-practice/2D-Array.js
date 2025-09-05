// 2D array = multi-dimensional array that store a matrix of data in rows and columns.

const matrix = [[1,2,3],
              [4,5,6],
              [7,8,9]];
for (let row of matrix){
    let rowString = row.join(' ');
    console.log(rowString);
}