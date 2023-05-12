// Reverse the provided string and return the reversed string.

// For example, "hello" should become "olleh".

// Define a function that accepts string argument

let myString =(str) => {
    let reversedString ="";
    // for loop that iterates the string from the end;
    for(let i=str.length-1; i>=0; i--){
        reversedString += str[i];
    }
    return reversedString;
}
console.log(myString("Dennis"));
