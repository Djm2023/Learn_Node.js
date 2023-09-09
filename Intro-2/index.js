/*TASK 01 ::: Take two numbers from terminal and print Sum in the console */

/*Import readline module*/
const readLine = require('readline');

/*Connect or Configure the application with terminal */
const interface = readLine.createInterface({
    input:process.stdin,
    output:process.stdout
});

/*Reading Values */
interface.question("Enter Number1::",(num1) =>{
    interface.question("Enter Number2::" , (num2) => {
        const sum = Number(num1) + Number(num2);
        console.log(sum);
    });
});