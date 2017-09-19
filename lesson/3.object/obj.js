//简洁表达
{
    let a = 1;
    let b = 2;
    //ES5
    let es5 = {
        a:a,
        b:b
    }
    console.log(es5);
    //ES6
    let es6 = {
        a,
        b
    }
    console.log(es6);

}
{
    //如果有方法的处理方式
    // ES5
    let es5 = {
        hello:function(){
            console.log('hellow');
        }
    }
    //ES6
    let es6 = {
        hello(){
            console.log('hello');
        }
    }
}

//==============属性表达式=============
{
    let a = 'b';
    let es5_obj = {//es5中对象的 key必须是固定的
        a:'c'
    }
    //es6
    let es6_obj = {//属性值可以是变量
        [a] : 'c'
    }
    console.log(es6_obj,'es6_obj');
}

//=============新增api=============

//is ：判断两个值是否相等，跟 = 作用一样
{
    console.log('字符串',Object.is('abc','abc'));
    console.log('数组',Object.is([],[]));//两个不同的地址

    //assign : 潜拷贝
    console.log('拷贝',Object.assign({a:'a'},{b:'b'}));

    // entries
    let test = [k:123,o:456];
    for(let [key,value] of Object.entries(test)){
        console.log([key,value]);
    }
}

//========扩展运算符  babel支持不好，了解=======
{
    let {a,b,...c} = {a:'test',b:'kill',c:'ddd',d:'ccc'}
    c = {
        c:'ddd',
        d:'ccc'
    }
}
