let apps = [
    {
        id:1,
        name: "first",
        url: "first.com"
    },
    {
        id:2,
        name: "ffirst",
        url: "ffirst.com"
    },
    {
        id:3,
        name: "abc",
        url: "abc.com"
    },
    {
        id:4,
        name: "abcd",
        url: "abcd.com"
    },
    {
        id:5,
        name: "abcde",
        url: "abcde.com"
    },
    {
        id:6,
        name: "wwwfirst",
        url: "www.wwwwfirst.com"
    },
    {
        id:7,
        name: "zzzwwwfirst",
        url: "www.zzzwwwwfirst.com"
    }
];

mapOfApps = new Map();
apps.forEach(app => {
    let firstChar = app.name.charAt(0);
    if (!mapOfApps.get(firstChar)) {
        mapOfApps.set(firstChar, []);
    }
    mapOfApps.get(firstChar).push(app);

});
let keys = Array.from(mapOfApps.keys());
keys.sort(function (a, b) {
    return a > b
});

console.log(keys);

keys.forEach(k => {
    let listOfApps = mapOfApps.get(k);
    listOfApps.forEach(l => {
        console.log(l)
    });
    listOfApps.map(l => {
        console.log(l)
    })

});

let isAdmin = true;
