const { logTheString } = require('../utilities/outputUtil');

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