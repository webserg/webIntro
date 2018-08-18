let apps = [
    {
        name: "first",
        url: "first.com"
    },
    {
        name: "ffirst",
        url: "ffirst.com"
    },
    {
        name: "abc",
        url: "abc.com"
    },
    {
        name: "abcd",
        url: "abcd.com"
    },
    {
        name: "wwwfirst",
        url: "www.wwwwfirst.com"
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