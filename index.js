#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let myBalance = 50000;
let myPin = 567;
let pinAns = await inquirer_1.default.prompt({
    name: "pincode",
    type: "number",
    message: "Enter your PIN.",
});
if (pinAns.pincode === myPin) {
    console.log(chalk_1.default.bold.red("Welcome to your account!"));
}
else if (pinAns.pincode !== myPin) {
    console.log(chalk_1.default.underline.bgRedBright("Incorrect PIN! Please try again."));
}
let actionAns = await inquirer_1.default.prompt({
    name: "action",
    message: "please choose an option",
    type: "list",
    choices: ["CheckBalance", "Withdraw", "FastCash"],
});
if (actionAns.action === "CheckBalance") {
    console.log(`your current balance is: ${myBalance}`);
}
else if (actionAns.action === "Withdraw") {
    let withdrawAmount = await inquirer_1.default.prompt({
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
    let cashAmount = await inquirer_1.default.prompt({
        name: "cash",
        type: "list",
        message: "choose your account!",
        choices: ["1000", "2000", "5000", "10000"],
    });
    (myBalance -= cashAmount.cash),
        console.log(`your remaining balance is : ${myBalance}`);
}
