"use strict"

function suminput(){
    var sum=prompt("����������ʽ���");
    var arr=sum.split(",");
    if(arr.includes("")){
        alert("���ܺ��пյ�����");
    }
    if(sum==null){
        alert('����Ϊ��');
    }

var s=0;
for(var e of arr){
    s += Number(e);
}
alert(s);

}
suminput();