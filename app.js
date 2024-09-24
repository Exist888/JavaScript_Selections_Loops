console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 1; i <= 100; i++) {

    if (i % 2 != 0) {
        console.log(`${i}`);
    }
    else {
        continue;
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 != 0) {
        console.log(`${i} is divisible by 3: FIZZ`);
    }

    if (i % 5 == 0 && i % 3 != 0) {
        console.log(`${i} is divisble by 5: BUZZ`);
    }

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} is divisible by both 3 AND 5: FIZZBUZZ`);
    }

    else {
        continue;
    }
}

// Exercise 3 Section - Repeat Exercises 1 % 2, as While and Do-While Loops
console.log("EXERCISE 3:\n==========\n");
console.log("While Loop repeats Exercise 1");

let number = 1;

while (number <= 100) {
    console.log(`${number}`);
    number += 2;
}

console.log("Do-While Loop repeats Exercise 1");

number = 1;

do {
    console.log(`${number}`);
    number += 2;
} while (number <= 100);

console.log("While Loop repeats Exercise 2");

i = 1;

while (i <= 100) {
    if (i % 3 == 0 && i % 5 != 0) {
        console.log(`${i} is divisible by 3: FIZZ`);
    }

    if (i % 5 == 0 && i % 3 != 0) {
        console.log(`${i} is divisble by 5: BUZZ`);
    }

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} is divisible by both 3 AND 5: FIZZBUZZ`);
    }

    i++;
}

console.log(`Do-While Loop repeats Exercise 2`);

i = 1;

do {
    if (i % 3 == 0 && i % 5 != 0) {
        console.log(`${i} is divisible by 3: FIZZ`);
    }

    if (i % 5 == 0 && i % 3 != 0) {
        console.log(`${i} is divisble by 5: BUZZ`);
    }

    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} is divisible by both 3 AND 5: FIZZBUZZ`);
    }

    i++;
    
} while (i <= 100);

