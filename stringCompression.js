( function stringCompressionForRepeatedChars(){
    var str = 'aaabbDDDDccaaaa';
    var str2 = '';
    var updatedIndex; 
    var count;
    var value;
    var next;

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
    str2 = str2 + value + count;
    i = updatedIndex;
    }
    console.log('----------------------------');
    console.log('String Compression for Repeated chars...')
    console.log(str2);
} ) ();

// stringCompressionForRepeatedChars();
