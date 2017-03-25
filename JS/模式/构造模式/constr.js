/*
* 构造函数模式
*-----------
* 定义自定义对象类型和属性方法。
* 1。没有显式地创建对象
* 2。直接将属性和方法赋给了this对象
* 3. 没有return语句
**/
function opo(name,age,obj){
    this.name=name;
    this.age=age;
    this.obj=obj;
    this.sayname= function(){
        this.name;
    }
}

var a = new opo("oldk","24","hello,world");
