class Fn {
    constructor(a){
        // this ==> 实例
        // this.a =100;
    }
    // Fn的原型
    getX(){

    }
}
let f  = new Fn(100);
class B extends Fn{
    constructor(){
        super();
    }
    // B 继承了Fn私有属性和公有属性，都可以使用
}
f.getX()