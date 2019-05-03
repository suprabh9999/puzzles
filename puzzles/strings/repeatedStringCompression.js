const { logTheString } = require('../utilities/outputUtil');

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