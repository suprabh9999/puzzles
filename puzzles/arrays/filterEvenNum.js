const { displayArr } =  require('../utilities/outputUtil');

( function filterEvenNum(){
    console.log('Filtering the even numbers from the given array.......');
    const inputArr = [1, 2, 3, 4, 5, 6, 7];
    let outputArr = null;

    outputArr  = inputArr.filter(num => num % 2 === 0);
    
    displayArr(inputArr, 'Input arr - ')
    displayArr(outputArr, 'Output arr - ');
    
} ) ();