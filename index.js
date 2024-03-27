#! /usr/bin/env node
import inquirer from "inquirer";
console.log("--------------------------------------");
console.log("  WELCOME TO ONLINE STUDENTS RESULTS");
console.log("--------------------------------------");
//Student data
const studentName = "ahmed";
const studentRollnNumber = 40739;
//subjects
const english = Math.floor(Math.random() * 100 + 1); // Total marks 100 and passing marks is 33
const urdu = Math.floor(Math.random() * 100 + 1); // Total marks 100 and passing marks is 33
const math = Math.floor(Math.random() * 100 + 1); // Total marks 100 and passing marks is 33
const islamiat = Math.floor(Math.random() * 100 + 1); // Total marks 100 and passing marks is 33
const drawing = Math.floor(Math.random() * 50 + 1); // Total marks 100 and passing marks is 33
const obtainMarks = english + urdu + math + islamiat + drawing; // Total Obtain Marks
const totalMarks = 450; // Total Marks
const percentage = (obtainMarks / totalMarks) * 100;
const rollnumber = await inquirer.prompt({
    name: "roll",
    type: "number",
    message: "please enter you roll number",
});
if (rollnumber.roll === studentRollnNumber) {
    console.log("--------------------------------------");
    console.log(`\t\n       WELCOME! TO SCHOOL`, studentName.toUpperCase());
    console.log("--------------------------------------");
    const subjects = await inquirer.prompt([
        {
            name: "sub",
            type: "list",
            choices: [
                "english",
                "urdu",
                "math",
                "islamiat",
                "drawing",
                "more details",
            ],
            message: "select a subject and get your marks",
        },
    ]);
    if (subjects.sub === "english" &&
        english < 100 &&
        english > 33 &&
        rollnumber.roll === studentRollnNumber) {
        // 1st conditions
        console.log(" ");
        console.log(`Congratulations! ${studentName} you got ${english} marks in ${subjects.sub}`);
    } //correct
    else if (subjects.sub === "urdu" && urdu < 100 && urdu > 33) {
        // 2nd conditions
        console.log(" ");
        console.log(`Congratulations! ${studentName} you got ${urdu} marks in ${subjects.sub}`);
    } //correct
    else if (subjects.sub === "math" && urdu < 100 && math > 33) {
        // 2nd conditions
        console.log(" ");
        console.log(`Congratulations! ${studentName} you got ${math} marks in ${subjects.sub}`);
    } //correct
    else if (subjects.sub === "islamiat" && urdu < 100 && islamiat > 33) {
        // 2nd conditions
        console.log(" ");
        console.log(`Congratulations! ${studentName} you got ${islamiat} marks in ${subjects.sub}`);
    } //correct
    else if (subjects.sub === "drawing" && urdu < 100 && drawing > 25) {
        // 2nd conditions
        console.log(" ");
        console.log(`Congratulations! ${studentName} you got ${drawing} marks in ${subjects.sub}`);
    } //correct
    else if (subjects.sub === "more details") {
        // 2nd conditions
        console.log(" ");
        console.log(`Total Marks: ${totalMarks}\nObtain Marks: ${obtainMarks}`);
        console.log(`Percentage: ${percentage.toFixed(2)}`);
        if (percentage >= 80) {
            console.log("Grade A +");
        }
        else if (percentage >= 70) {
            console.log("Grade A");
        }
        else if (percentage >= 60) {
            console.log("Grade B +");
        }
        else if (percentage >= 50) {
            console.log("Grade C ");
        }
        else {
            console.log("N/A");
        }
        ; //correct
        if (english >= 33 &&
            urdu >= 33 &&
            math >= 33 &&
            islamiat >= 33 &&
            drawing >= 25) {
            console.log("Result: PASS");
        }
        else {
            console.log("Result: FAIL");
            console.log("----------------------------");
            console.log(`English Marks : ${english}`);
            console.log(`Urdu Marks : ${urdu}`);
            console.log(`Math Marks : ${math}`);
            console.log(`Islamiat Marks : ${islamiat}`);
            console.log(`Drawing Marks : ${drawing}`);
        }
        ;
    }
    else {
        console.log("--------------------------------------");
        console.log("Sorry! you have to repeat this subject"); // if not correct
    }
}
else {
    console.log("--------------------------------------");
    console.log("invalid roll number");
    console.log("Please enter a valid roll number");
}
