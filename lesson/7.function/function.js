{
    function test(x,y=10){
        console.log('默认值',x,y);
    }
    test(1);
    test(99,88);
}

{
    function test(x,y=10,c){//会报错，在默认值后面不能有 没有默认值的参数
        console.log('默认值',x,y);
    }
}

//函数的作用域
{
    let x = 'test';
    function test2(x,y=x){
        console.log('作用域——',x,y);
    }
    test2('new');
}
//没有的时候用上面的
{
    let x = 'test';
    function test2(c,y=x){
        console.log('作用域2',x,y);
    }
    test2('new');
}

//==============rest参数============
{
    //此时的arg相当于是 arguments
    function test3(...arg){
        for(let v of arg){
            console.log('rest:',v);
        }
    }
    test3(1,2,3,4,5);
}

//==========扩展运算符===rest参数逆运用========
{
    console.log(...[1,2,3]);
    // console.log(...{name:'yu',age:'18'})
}

//=========箭头函数=========
{
    let arrow = v=>v*10;
    console.log(arrow(3));
    let arrow2 = (v)=>{return v*50};
    console.log(arrow2(2));
}

//========尾调用==了解即可====函数的最后一句化是不是一个函数,可以提升性能
{
    function tail(x){
        console.log('tail',x);
    }
    function go(x){
        return tail(x);
    }
    go(123);
}
