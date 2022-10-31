// option 3 is assign  into the parameter 
function addNumber(num1, num2 = 100) {
    // option 1
    /*  num2 = num2 || 0; */
    // Option 2 
    /* if (num2 == undefined) {
        num2 = 0;
    } */
    const result = num1 + num2;
    return result;
}
const myNumber = addNumber(12, 0);
console.log(myNumber);

function addName(name1, name2 = 'Sign') {
    const myname = name1 + ' ' + name2;
    return myname;
}
const nameIs = addName('Kabir');
console.log(nameIs);