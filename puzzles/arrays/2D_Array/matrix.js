/* 
    Question -  Transpose the given N x N ( where N represents number of 
        rows and columns ) matrix.
    Input matix - 4 x 4 
        [ 1, 5, 7, 9 ]
        [ 2, 6, 8, 1 ]
        [ 3, 9, 4, 6 ]
        [ 1, 2, 3, 4 ]

    Output matrix - 4 x 4 
        [ 1, 2, 3, 1 ]
        [ 5, 6, 8, 2 ]
        [ 7, 9, 4, 3 ]
        [ 9, 1, 6, 4 ]
*/

( function transposeMatrix(){
    const inputMatrix = [[1, 5, 7, 9],
                         [2, 6, 8, 1],
                         [3, 9, 4, 6],
                         [1, 2, 3, 4]];
                        

    displayMatrix(inputMatrix, 'Before transpose - ');

    for(let i = 0; i < inputMatrix.length - 1; i++){
        for(let j = 1; j < inputMatrix.length ; j++){
            let temp = inputMatrix[i][j];
            inputMatrix[i][j] = inputMatrix[j][i];
            inputMatrix[j][i] = temp;
        }
    }
    displayMatrix(inputMatrix, 'After transpose - ');


} )();

function displayMatrix(inputArr, message){
    console.log(message);
    for(let i = 0; i < inputArr.length; i++){
        console.log(inputArr[i]);
    }
    console.log('-------------------------------------------');
}