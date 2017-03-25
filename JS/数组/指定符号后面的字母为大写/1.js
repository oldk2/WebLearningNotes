"use strict"
//方法一
function camelize(string){
    let arr=[];
    arr=string.split("-");
    var st='';
    for(var e of arr){
        st+=e.replace(e[0],e[0].toUpperCase());
    }
    alert(st);
}
//方法二
function camelize(str) {
    return str
        .split('-') 
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)) 
        .join(''); 
}

camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");
