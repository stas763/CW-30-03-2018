
let correctData = false;
let someNum;
do {
    someNum = parseFloat(prompt('Enter a number'));
    if (!isNaN(someNum)) {
        correctData = true;
    }
} while (!correctData);


function prn(val) {
    document.write(val + '<br>');
}