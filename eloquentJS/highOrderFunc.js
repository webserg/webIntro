function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

//Functions that operate on other functions, either by taking them as arguments
//or by returning them, are called higher-order functions
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);
// → 0
// → 1
// → 2

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});
console.log(labels);

// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// → true

//And we can have functions that change other functions.
function noisy(f) {
    return (...args) => {
        console.log("calling with", args);
        let result = f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}

noisy(Math.min)(3, 2, 1);
// → calling with [3, 2, 1]
// → called with [3, 2, 1] , returned 1

//We can even write functions that provide new types of control flow.
function unless(test, then) {
    if (!test) then();
}

repeat(3, n => {
    unless(n % 2 === 1, () => {
        console.log(n, "is even");
    });
});
// → 0 is even
// → 2 is even
//build in for each
["A", "B"].forEach(l => console.log(l));

function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12], number => number % 2 === 0));

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 2));
// → 10
// Generated from the Unicode 10 database and https://en.wikipedia.org/wiki/Script_(Unicode)

let SCRIPTS = [
    {
        name: "Adlam",
        ranges: [[125184, 125259], [125264, 125274], [125278, 125280]],
        direction: "rtl",
        year: 1987,
        living: true,
        link: "https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet"
    },
    {
        name: "Caucasian Albanian",
        ranges: [[66864, 66916], [66927, 66928]],
        direction: "ltr",
        year: 420,
        living: false,
        link: "https://en.wikipedia.org/wiki/Caucasian_Albanian_alphabet"
    },
    {
        name: "Ahom",
        ranges: [[71424, 71450], [71453, 71468], [71472, 71488]],
        direction: "ltr",
        year: 1250,
        living: false,
        link: "https://en.wikipedia.org/wiki/Ahom_alphabet"
    }
];

function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));

/*Flattening
Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original
arrays.
* */
function flatten(arrs) {
    return arrs.reduce((a, b) => a.concat(b), [])
}

console.log(flatten([[71424, 71450], [71453, 71468], [71472, 71488]]));

function range(start, end) {
    let arr = [];
    for (let i = start; i < end; i++) {
        arr.push(i);
    }
    return arr;
}

function ownLoop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
        body(value);
    }
}

ownLoop(3, n => n > 0, n => n - 1, console.log);

function everything(arr, test) {
    for (let e of arr) {
        if (!test(e)) return false;
    }
    return true;
}

console.log(everything([1, 2, 3, 4, 5, 6], e => e < 10));
// → 3
// → 2
// → 1