( function stringCompressionForRepeatedChars(){
    const str = 'aaabbDDDDccaaaa';
    let compressedString = '';
    let updatedIndex; 
    let count;
    let value;
    let next;

    for(var i = 0; i < str.length; i++ ){
    updatedIndex = i;
    count = 1;
    value = str[i];
    next = i + 1;
    while(value === str[next] ){
        count = count + 1;
        next = next + 1;
        updatedIndex = updatedIndex + 1;
    }
    compressedString = compressedString + value + count;
    i = updatedIndex;
    }

    logTheString('String Compression for Repeated chars with input string : ',
     str,compressedString);
} ) ();

( function stringCompressionForNonRepeatedChars(){
    const str = 'aaabbDDDDccaaaa';
    const frq = {};
    let compressedString = '';
    
    for(let i=0; i < str.length; i++){
        if(!frq[str[i]]){
            frq[str[i]] = 1;
        }
        else{
            frq[str[i]] = frq[str[i]] + 1
        }
    }
    const entries = Object.entries(frq);
    entries.forEach(arr => compressedString += arr[0]+arr[1] );

    logTheString('String Compression for Non-Repeated chars with input string : ',
        str,compressedString);
    
})();

function logTheString( message, inputString , outputData ){
    console.log('------------------------------------------------');
    console.log(message + inputString)
    console.log(outputData);
    console.log('------------------------------------------------');
}
