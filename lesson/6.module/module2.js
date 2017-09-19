//导出
let num = 123;
let test = function(){
    console.log('test');
}
class Person{
    test(){
        console.log('Person');
    }
}
//1，批量导出，一目了然导出了那些东西给外部 2， 没有起名字，将命名权给倒入方。
export default {
    num,
    test,
    Person
}
