/* Q1. Complex Password Validator:
Write a regular expression to validate passwords with the following criteria:
At least one lowercase letter, one uppercase letter, one digit, and one special character (@, #, $, %, &, *).
The length must be between 12 and 20 characters.
No spaces allowed.
Write a function that takes an array of passwords and returns an array of passwords that pass the validation.*/

function validatePasswords(passwords) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&*])[A-Za-z\d@#$%&*]{12,20}$/;
    return passwords.filter(password => passwordRegex.test(password));
  }
  
  // Example usage:
  const passwords = [
    "StrongPass@123",
    "weakpass",
    "Short1@",
    "ValidPassword#2020",
    "Another@Strong1",
    "NoSpecialChar123",
    "Special$TooShort1",
    "ValidPassword@2021!"
  ];
  
  const validPasswords = validatePasswords(passwords);
  console.log(validPasswords); 


/* Q2. Extract and Modify Data from a Log File:
Given a log file containing lines in the following format:
2024-08-28 14:32:01 - Error: User john_doe failed to login from IP 192.168.1.1
Write a regex to extract the date, username, and IP address.
Then, write a function that replaces all IP addresses with the string ‘[REDACTED]’ and returns the modified log.*/

function extractAndRedactLogs(logs) {
    const logRegex = /(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2}) - Error: User (\w+) failed to login from IP ([\d.]+)/g;
    
    // Extract details
    const extractedDetails = [];
    let match;
    while ((match = logRegex.exec(logs)) !== null) {
        const [fullMatch, date, time, username, ip] = match;
        extractedDetails.push({ date, time, username, ip });
    }
    
    // Replace IP addresses with '[REDACTED]'
    const redactedLogs = logs.replace(/[\d.]+/g, '[REDACTED]');
    
    return { extractedDetails, redactedLogs };
}


const logFile = `
2024-08-28 14:32:01 - Error: User john_doe failed to login from IP 192.168.1.1
2024-08-28 15:45:12 - Error: User jane_doe failed to login from IP 192.168.1.2
`;

const result = extractAndRedactLogs(logFile);
console.log("Extracted Details:", result.extractedDetails);
console.log("Redacted Logs:\n", result.redactedLogs);


/* Q3. Basic Try-Catch Block
Write a simple function that divides two numbers. If the divisor is zero, the function should throw an error with
the message "Division by zero is not allowed." Use a try-catch block to handle this error and display an
appropriate message to the user.*/

function divideNumbers(dividend, divisor) {
    try {
        if (divisor === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return dividend / divisor;
    } catch (error) {
        console.error("Error:", error.message);
        return null; 
    }
}

console.log(divideNumbers(10, 2));  
console.log(divideNumbers(10, 0)); 


/* Q4. Handling JSON Parsing Errors

Write a function that takes a JSON string as input and attempts to parse it into a JavaScript object. Use a try-
catch block to handle any errors that occur during parsing, such as invalid JSON format. If an error is caught,

the function should return a default empty object {} and log an error message to the console.*/

function parseJson(jsonString) {
    try {
        const parsedObject = JSON.parse(jsonString);
        return parsedObject; 
    } catch (error) {
        console.error("Error: Invalid JSON format.", error.message);
        return {}; 
    }
}


const validJson = '{"name": "Ram", "age": 24}';
const invalidJson = '"name": "janaki", "age": 23}';  

console.log(parseJson(validJson));  
console.log(parseJson(invalidJson)); 