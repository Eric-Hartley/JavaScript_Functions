console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if (count < 0) {
        for (let i = 0; i >= count; i--) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
    else if (count > 0) {
        for (let i = 0; i <= count; i++) {
            if (i % 2 != 0) {
                console.log(i);
            }
        }
    }
    else {
        console.log("Nothing to count.")
    }
}

let count = 1;
printOdds(count);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userAge, legalAge) {


    if (userAge >= legalAge) {
        let aboveSixteen = console.log(`Congrats ${userName}, you can drive!`);
    } else if (userAge < legalAge) {
        let belowSixteen = console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
    } else {
        console.log("Must argue (userAge, legalAge)")
    }

}
let userName = "Eric";
let userAge = 15;
const legalAge = 16;
checkAge();
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let x = 0;
let y = 0;
let result;
if (x > 0 && y > 0) {
    result = console.log(`(${x}, ${y}) is in Quadrant 1`)
} else if (x < 0 && y > 0) {
    result = console.log(`(${x}, ${y}) is in Quadrant 2`)
}
else if (x < 0 && y < 0) {
    result = console.log(`(${x}, ${y}) is in Quadrant 3`)
}
else if (x > 0 && y < 0) {
    result = console.log(`(${x}, ${y}) is in Quadrant 4`)
} else if (x == 0 && (y > 0 || y < 0)) {
    result = console.log(`(${x}, ${y}) is on the X-Axis`)
} else if ((x < 0 || x > 0) && y == 0) {
    result = console.log(`(${x}, ${y}) is on the Y-Axis`)
} else if (x == 0 && y == 0) {
    result = console.log(`(${x}, ${y}) is the Origin`)
}
else {
    result = console.log("Not in the Cartesian Plane.");
}
