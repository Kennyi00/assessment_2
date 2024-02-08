//What is the diffrence between a parameter and an argument\\
    
    // 1. A paramater is a variable in a function or method.
    // 2. An argument is the actual value that is passed to a function or method when it is called.

    //Within a function, what is the difference between return and console.log\\
    
    // 1. Return is used to specify the value that a function should output or produce.
    // 2. Console.log is used for logging or printing info.




    //PALINDROME\\
//Convert the input string to lowercase to ensure the comparison is case-insensitive.
//Split the string into an array of characters, reverse the array, and then join it back into a string.
//Compare the original lowercase string with the reversed string.
//If they are the same, the function should return true; otherwise, it returns false.
//Commit your work with the message "palindrome completed".
    const palindrome = (string) => string.toLowerCase() === string.toLowerCase().split('').reverse().join('') ? true:false
    console.log(palindrome("racecare"))
    
   
   
    //SUM ARRAY\\
 //Initialize a variable to store the sum of the array elements.
//Use a for loop to iterate through the array.
//In each iteration, add the current element to the sum variable.
//After the loop, return the sum variable.
//Commit your work with the message "sum array complete

    function sumArray(num) {
        let sum = 0
        for(let i = 0; i < num.length; i++) {
            sum += num[1]
        }
        return sum
    }
        console.log(sumArray([5,6,7,8]))