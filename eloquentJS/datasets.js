let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
// → 5
console.log(listOfNumbers[0]);
// → 2
console.log(listOfNumbers[2 - 1]);
// → 3
console.log(listOfNumbers.length);

let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());

let seq = [1, 2, 3, 4, 5];
seq.push(6);
console.log(seq);
seq.pop();
console.log(seq);


let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false

console.log(Object.keys({x: 0, y: 0, z: 2}));

let journal = [
    {
        events: ["work", "touched tree", "pizza",
            "running", "television"],
        squirrel: false
    },
    {
        events: ["work", "ice cream", "cauliflower",
            "lasagna", "touched tree", "brushed teeth"],
        squirrel: false
    },
    {
        events: ["weekend", "cycling", "break", "peanuts",
            "beer"],
        squirrel: true
    },
    /* and so on... */
];

const ss = "rat";
console.log(ss);
// ss = "cat";
console.log(ss);


let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false
object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);


//array loop
for (let i = 0; i < journal.length; i++) {
    let entry = journal[i];
    console.log(entry)
// Do something with entry
}

for (let entry of journal) {
    console.log(`${entry.events.length} events.`);
}


console.log([1, 2, 3, 2, 1].indexOf(2));
// → 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// → 3

console.log([0, 1, 2, 3, 4].slice(2, 4));
// → [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));

// → [2, 3, 4]

function remove(array, index) {
    return array.slice(0, index)
        .concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));
// → ["a", "b", "d", "e"]

console.log("coconuts".slice(4, 7));
// → nut
console.log("coconut".indexOf("u"));

console.log("one two three".indexOf("ee"));

console.log(String(6).padStart(3, "0"));
// → 006

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));

// → Secretarybirds. specialize. in. stomping

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}

console.log(max(4, 1, 9, -2));

let string = JSON.stringify({
    squirrel: false,
    events: ["weekend"]
});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);

const reducer = (accumulator, currentValue) => accumulator + currentValue;

// → ["weekend"]
function sum(numbers) {
    return numbers.reduce(reducer)
}

function range(start, end) {
    let arr = [];
    for (let i = start; i < end; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(sum(range(1, 10)));
const array1 = [1, 2, 3, 4];

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));

function reverseArray(array) {
    let arr = [];
    for (let i = array.length - 1; i > -1; i--) {
        arr.push(array[i]);
    }
    return arr;
}

function reverseArrayInPlace(array) {
    for (let j = 0, i = array.length - 1; j < Math.floor(array.length / 2); j++, i--) {
        let tmp = array[j]
        array[j] = array[i];
        array[i] = tmp;
    }
    return array;
}

function reverseArrayInPlace2(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}


console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArrayInPlace([1, 2, 3, 4]));
console.log(reverseArrayInPlace2([1, 2, 3, 4]));

//the second, the second to the third, and so on.
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        list = ({value: arr[i], rest: list})
    }
    return list;
}

function listToArray(list) {
    let arr = [];
    for (let node = list; node; node = node.rest) {
        arr.push(node.value)
    }
    return arr;
}

function prepend(elem, list) {
    return {value: elem, rest: list}
}

console.log(arrayToList([1, 2, 3, 4, 5, 6]));
console.log(listToArray(arrayToList([1, 2, 3, 4, 5, 6])));

function nth(list, n) {
    for (let node = list, i = 0; node.rest != null; node = node.rest, i++) {
        if (n === i) {
            return {value: node.value, rest: null}
        }
    }
}

function nthRec(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nthRec(list.rest, n - 1);
}

console.log(nth(arrayToList([1, 2, 3, 4, 5, 6]), 1));

function deepEqual(a, b) {
    if (a === b) return true;
    if (a == null || typeof a !== "object" || b == null || typeof b !== "object") {
        return false;
    }
    let keysA = Object.keys(a), keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;
    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true