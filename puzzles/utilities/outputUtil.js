exports.logTheString = function ( message, inputString , outputData ){
    console.log('------------------------------------------------');
    console.log(message + inputString)
    console.log(outputData);
    console.log('------------------------------------------------');
}


exports.displayMatrix = function (inputArr, message){
    console.log(message);
    for(let i = 0; i < inputArr.length; i++){
        console.log(inputArr[i]);
    }
    console.log('-------------------------------------------');
}

exports.displayArr = function(arr, message){
    console.log(message);
    console.log(arr);
    console.log('-------------------------------------------');
}
