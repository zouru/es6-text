{
    let oBox = document.getElementById('box');

    function toWidth(w){
        return new Promise(function(resolve,reject){
            let timer = setInterval(function(){
                var oldWidth = oBox.clientWidth;
                if(oldWidth>w){
                    clearInterval(timer);
                    resolve();
                }
                oBox.style.width = oldWidth + 10 + 'px';
            },100);
        })
    }

    function toHeight(h){
        return new Promise(function(resolve,reject){
            let timer = setInterval(function(){
                var oldHeight = oBox.clientHeight;
                if(oldHeight>h){
                    clearInterval(timer);
                    resolve();
                }
                oBox.style.height = oldHeight + 10 + 'px';
            },100);
        })
    }

    function toSmall(size){
        return new Promise(function(resolve,reject){
            let timer = setInterval(function(){
                var oldWidth = oBox.clientWidth;
                var oldHeight = oBox.clientHeight;
                if(oldWidth<size || oldHeight<size){
                    clearInterval(timer);
                    resolve();
                }
                console.log(123);
                oBox.style.width = oldWidth - 10 + 'px';
                oBox.style.height = oldHeight - 10 + 'px';
            },100);
        })
    }

    toHeight(400)
        .then(function(){
            return toWidth(600);
        })
        .then(function(){
            return toHeight(300);
        })
        .then(function(){
            return toSmall(100);
        })
        .then(function(){
            return toHeight(400);
        })
}


// {
//     function toWidth(w,callback){
//         let timer = setInterval(function(){
//             var oldWidth = oBox.clientWidth;
//             if(oldWidth>w){
//                 clearInterval(timer);
//                 callback && callback();
//             }
//             oBox.style.width = oldWidth + 10 + 'px';
//         },100);
//     }
//
//     function toHeight(h,callback){
//         let timer = setInterval(function(){
//             var oldHeight = oBox.clientHeight;
//             if(oldHeight>h){
//                 clearInterval(timer);
//                 callback && callback();
//             }
//             oBox.style.height = oldHeight + 10 + 'px';
//         },100);
//     }
//
//     function toSmall(size,callback){
//         let timer = setInterval(function(){
//             var oldHeight = oBox.clientHeight;
//             var oldWidth = oBox.clientWidth;
//             if(oldHeight<size){
//                 clearInterval(timer);
//                 callback && callback();
//             }
//             oBox.style.width = oldWidth - 10 + 'px';
//             oBox.style.height = oldHeight - 10 + 'px';
//         },100);
//     }
//
//     toWidth(500,function(){
//         toHeight(300,function(){
//             toSmall(100,function(){
//                 toWidth(400,function(){
//                     toHeight(100,function(){
//
//                     })
//                 })
//             });
//         })
//     });
// }
