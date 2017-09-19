{
    //基本定义和生成实例
    class Person{
        constructor(name='laozhou'){
            this.name = name;
        }
    }
    let p1 = new Person('小王');
    console.log('构造函数和实例',p1);
}

{
    //继承
    class Father{
        constructor(name='laozhou'){
            this.name = name;
        }
    }
    class Child extends Father{

    }
    console.log('子类的实例',new Child());
    console.log('子类自己传',new Child('小刘'))

}

{
    //子类如何覆盖父类的值
    class Father{
        constructor(name='laozhou'){
            this.name = name;
        }
    }
    class Child extends Father{
        constructor(name='child'){
            //this.type = 'boy';//super必须在第一行，否则报错
            super(name);//调用父亲类的构造函数
            this.type = 'boy';
        }
    }
    console.log('子类覆盖父类属性的实例',new Child());
}

{
    //getter   setter
    class Father{
        constructor(name='laozhou'){
            this.name = name;
        }
        //此处longName不是函数而是属性，相当于新增了一个属性 longName
        get longName(){
            return 'yu_'+this.name;
        }
        set longName(value){
            this.name = value;
        }
    }

    let f1 = new Father();
    console.log('getter',f1.longName);
    f1.longName = 'hello';
    console.log('setter',f1.longName);
}

//静态方法
{
    class Person{
        constructor(name='laozhou'){
            this.name = name;
        }
        static tell(){//相当于原型下的方法,是属于类本身的，用类来调用
            console.log('tell');
        }
    }
    Person.tell();
}
//静态属性
{
    class Person{
        constructor(name='laozhou'){
            this.name = name;
        }
    }
    //静态属性的定义，是直接给类下的属性赋值，该属性就是静态属性
    Person.type = 'text';//type就是静态属性
}
