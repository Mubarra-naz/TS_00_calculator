import inquirer from "inquirer";
console.clear();
let confirmCheck = true;
const printMsg = (msg) => {
    console.log(msg);
};
const validateNumber = (input) => {
    if (isNaN(input)) {
        return printMsg("Wronng user input");
    }
    return true;
};
const getUserInput = async () => {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "firstNumber",
            message: "Enter a number",
            validate: validateNumber,
        },
        {
            type: "list",
            name: "operator",
            choices: ["+", "-", "*", "/", "%", "^"],
            message: "Enter a number",
        },
        {
            type: "input",
            name: "secondNumber",
            message: "Enter another number",
            validate: validateNumber,
        },
    ]);
    const firstNumber = Number(answers.firstNumber);
    const secondNumber = Number(answers.secondNumber);
    switch (answers.operator) {
        case "+":
            console.log(`result: ${firstNumber + secondNumber}`);
            break;
        case "-":
            console.log(`result: ${firstNumber - secondNumber}`);
            break;
        case "/":
            console.log(`result: ${firstNumber / secondNumber}`);
            break;
        case "*":
            console.log(`result: ${firstNumber * secondNumber}`);
            break;
        case "%":
            console.log(`result: ${firstNumber % secondNumber}`);
            break;
        case "^":
            console.log(`Result: ${firstNumber ** secondNumber}`);
            break;
        default:
            break;
    }
    const confirm = await inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: "Do you want to try again?",
        },
    ]);
    confirmCheck = confirm.confirm;
    console.log("prompt: ", confirm.confirm);
};
printMsg("Hey there! Let's get started with the calculator");
do {
    await getUserInput();
} while (confirmCheck);
