import inquirer from "inquirer";

console.clear();
let confirmCheck = true;

const printMsg = (msg: string): void => {
  console.log(msg);
};

const validateNumber = (input: any) => {
  if (isNaN(input)) {
    return printMsg("Wronng user input");
  }

  return true;
};

type Answers = {
  firstNumber: string;
  secondNumber: string;
  operator: "+" | "-" | "*" | "/" | "%" | "^";
};

const getUserInput = async () => {
  const answers: Answers = await inquirer.prompt([
    {
      type: "input", //type: "number"
      name: "firstNumber",
      message: "Enter a number",
      validate: validateNumber,
    },
    {
      type: "list", //type: "number"
      name: "operator",
      choices: ["+", "-", "*", "/", "%", "^"],
      message: "Enter a number",
    },
    {
      type: "input", //type: "number"
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
