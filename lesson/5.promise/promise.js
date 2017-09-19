{
    //es5 中的异步操作
    let ajax = function(callback){
        console.log('执行');
        setTimeout(function(){
            callback && callback.call();
        },1000);
    }
    ajax(function(){
        console.log('timeout1');
    })
}

{
    //ES6
    let ajax = function(){
        console.log('执行2');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },1000);
        })
    }
    ajax().then(function(){
        console.log('promise','timeout');
    })
}

{
    let ajax = function(){
        console.log('执行3');
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },1000);
        })
    }
    ajax().then(function(){
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve();
            },1000);
        })
    }).then(function(){
        console.log('timeout3');
    })

}

{
    //补获错误
    let ajax = function(num){
        console.log('执行');
        return new Promise(function(resolve,reject){
            if(num>5){
                resolve();
            }else{
                throw new Error('出错了');
            }
        })
    }

    ajax(3).then(function(){
        console.log('log',6);
    }).catch(function(err){
        console.error('catch',err);
    })
}

//promise.all :把多个promise实例当做一个promise实例，当所有的状态都完成之后，才会触发新的promise对象的then方法

//应用，比如广告中有三张图，需要三张图都加载再去更新dom
{
    //所有图片加载完成在加载页面
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve(img);
            }
            img.onerror = function(){
                reject(err);
            }
        })
    }

    function showImg(imgs){
        imgs.forEach(function(img){
            document.body.appendChild(img);
        })
    }

    Promise.all([
        loadImg('https://img10.360buyimg.com/n4/s260x260_jfs/t3079/363/6070979658/42126/5b5c2f39/589af086N4a3bed39.jpg'),
        loadImg('https://img14.360buyimg.com/n4/s260x260_jfs/t4345/284/2534342556/119746/550dee37/58d34a9dNf0bd717f.jpg'),
        loadImg('https://img13.360buyimg.com/n4/s260x260_jfs/t3259/170/5587914266/144572/64259fc5/5873347aN14e34822.jpg'),
    ]).then(showImg);

}

{
    //promise.race  谁先回来处理谁，先到先得
    function loadImg(src){
        return new Promise((resolve,reject)=>{
            let img = document.createElement('img');
            img.src = src;
            img.onload = function(){
                resolve(img);
            }
            img.onerror = function(){
                reject(err);
            }
        })
    }

    function showImgs(img){
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    Promise.race([
        loadImg('https://img10.360buyimg.com/imgzone/jfs/t5149/215/1247256617/226900/c371168/590dcc2bN2234f761.jpg'),
        loadImg('https://img14.360buyimg.com/n4/s260x260_jfs/t4345/284/2534342556/119746/550dee37/58d34a9dNf0bd717f.jpg'),
        loadImg('https://img13.360buyimg.com/n4/s260x260_jfs/t3259/170/5587914266/144572/64259fc5/5873347aN14e34822.jpg'),
    ]).then(showImgs);
}
