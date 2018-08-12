const square = function (x) {
    return x * x;
};
console.log(square(12));

const halve = function (n) {
    return n / 2;
};
let n = 10;
console.log(halve(100));

console.log("The future says:", future());

function future() {
    return "You'll never have flying cars";
}

const makeNoise = function () {
    console.log("Pling!");
};
makeNoise();
// → Pling!
const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(2, 10));

const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};


const power2 = (base, exponent = 2) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

console.log(power2(2, 3));
console.log(power2(2));

const square1 = (x) => {
    return x * x;
};
const square2 = x => x * x;

function squareOne(x) {
    return x * x;
}

console.log(squareOne(4, true, "hedgehog")); // if you pass too many, extra one are ignored

function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5

//being able to reference a specific instance of a local binding in
//an enclosing scope—is called closure

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));

// → 10

function powerRecursion(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * powerRecursion(base, exponent - 1);
    }
}

console.log(powerRecursion(2, 3));

const minValue = (a, b) => a < b ? a : b;

console.log(minValue(1, 2));

function evenFunc(n) {
    if (n === 1) return false;
    if (n === 0) return true;
    return evenFunc(n - 2)
}

console.log(evenFunc(3));
evenFunc(3) ? console.log("even") : console.log("not even");