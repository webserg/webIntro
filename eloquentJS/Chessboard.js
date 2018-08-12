let n = 10;
let k = 10;
let ch = '#';
let empty = '-';
let s = '';
for (i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        s += empty
    } else {
        s += ch
    }
}
for (j = 1; j <= 10; j++) {
    if (j % 2 === 0) {
        console.log(empty + s)
    } else {
        console.log(s)
    }
}
