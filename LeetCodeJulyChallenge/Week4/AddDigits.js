/*Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
Example:
Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
Since 2 has only one digit, return it.
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let result = 0;
    
    while(num >= 10) {
        result += num % 10;
        num = Math.floor(num / 10);
        
        if (num < 10) {
            num += result;
            result = 0;
        }
    }
    
    return num;
};