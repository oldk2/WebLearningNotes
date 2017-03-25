"use strict"

function suminput(){
    var sum=prompt("输入数组形式求和");
    var arr=sum.split(",");
    if(arr.includes("")){
        alert("不能含有空的数组");
    }
    if(sum==null){
        alert('不能为空');
    }

var s=0;
for(var e of arr){
    s += Number(e);
}
alert(s);

}
suminput();