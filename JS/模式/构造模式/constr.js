/*
* ���캯��ģʽ
*-----------
* �����Զ���������ͺ����Է�����
* 1��û����ʽ�ش�������
* 2��ֱ�ӽ����Ժͷ���������this����
* 3. û��return���
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
