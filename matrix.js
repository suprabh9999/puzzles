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