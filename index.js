#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 50000;
let myPin = 567;
let pinAns = await inquirer.prompt({
    name: "pincode",
    type: "number",
    message: "Enter your PIN.",
});
if (pinAns.pincode === myPin) {
    console.log(chalk.bold.red("Welcome to the ATM ! PIN accepted. You can proceed with your transaction"));
}
else if (pinAns.pincode !== myPin) {
    console.log(chalk.underline.bgRedBright("Incorrect PIN! Please try again."));
}
let actionAns = await inquirer.prompt({
    name: "action",
    message: "please choose an option",
    type: "list",
    choices: ["CheckBalance", "Withdraw", "FastCash"],
});
if (actionAns.action === "CheckBalance") {
    console.log(`your current balance is: ${myBalance}`);
}
else if (actionAns.action === "Withdraw") {
    let withdrawAmount = await inquirer.prompt({
        name: "amount",
        type: "number",
        message: "How much would you like to Withdraw?",
    });
    // myBalance -= withdrawAmount.amount
    if (withdrawAmount.amount < myBalance) {
        (myBalance -= withdrawAmount.amount),
            console.log(`Your remaining balance is: ${myBalance}`);
    }
    else {
        console.log(`Unable to process transaction!\nYour current balance is ${myBalance}`);
    }
}
else if (actionAns.action === "FastCash") {
    let cashAmount = await inquirer.prompt({
        name: "cash",
        type: "list",
        message: "choose your account!",
        choices: ["1000", "2000", "5000", "10000"],
    });
    (myBalance -= cashAmount.cash),
        console.log(`your remaining balance is : ${myBalance}`);
}
