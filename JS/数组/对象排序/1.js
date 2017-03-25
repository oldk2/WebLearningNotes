"use strict"

function lsortByName(arr){
    return arr.sort(function(e,i){
        return e.name>i.name;
    });
}

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 28 }

let arr = [ john, pete, mary ];

lsortByName(arr);

// now: [john, mary, pete]
alert(arr[1].name) // Mary