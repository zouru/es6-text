// {
//     let [x,y] = [1,2];
//     console.log(x,y);
// }


//结构赋值的特性
// {
//     let a,b,rest;
//     [a,b,...rest] = [1,2,3,4,5,6];
//     console.log(a,b,rest);//rest [3,4,5,6]
// }

//对象的结构赋值
// {
//     let a,b;
//     ({a,b} = {a:1,b:2});
//     console.log(a,b);
// }
//

// 解构赋值的默认值
{
    let a,b,c,rest;
    [a,b,c=3] = [1,2];
    console.log(a,b,c);
}

//利用解构赋值交换变量中的值
{
    let a = 1;
    let b = 2;
    [a,b] = [b,a];
    console.log(a,b);
}
//接收函数的多个返回值
{
    function f(){
        return [8,9];
    }
    let [a,b] = f();
    console.log(a,b);
}
//选择性的接收 返回值
{
    function f(){
        return [5,6,7,8,9];
    }
    let [a,,,,b] = f();
    console.log(a,b);
}
//我只关心第一个，其他的先放数组里
{
    function f(){
        return [5,6,7,8,9];
    }
    let [a,...b] = f();
    console.log(a,b);
}

{
    var json = {
        name:'yuonly',
        age:29,
        sex:'boy'
    }
    function f(...obj){
        console.log(name);
    }
    f(json);

}

//对象结构赋值
{
    let o = {name:'yuonly',age:20};
    let {age,name} = o;
    console.log(name,age);
}

//
{
    let o = {
        name:'yuonly',
        age:'19'
    }
    function f ({name,age}){
        console.log(name,age);
    }
    f(o);
}

// ... 可以替代arguments
{
  function test3(...arg){
    // for(let v of arg){
    //   console.log('rest',v);
    // }
    for(var i=0;i<arg.length;i++){
        console.log(i,arg[i]);
    }
  }
  test3(1,2,3,4,'a');
}
