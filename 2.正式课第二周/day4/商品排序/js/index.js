(function(){// 避免全局变量的干扰
    // 1.获取元素
    let list = document.getElementById("list");
    let navs = document.getElementsByTagName("a");
    let oLis = list.getElementsByTagName("li");
    let data;
    // 2. 获取到product.json文件中的数据 ajax
    // 1) 创建一个ajax实例  
    let  xhr = new XMLHttpRequest();// 
    //2) 打开一个路径
    // false : 代表同步；直到前端成功接收到后端所有的数据后，才会继续向下执行；true ： 异步，当ajax发送请求以后，浏览器不会在此等候后端返回的数据，而是直接向下执行JS代码；
    xhr.open("get","./json/product.json",false);
    // 3) 监听回调函数
    xhr.onreadystatechange = function(){
        // 当xhr实例的readyState的值是4，并且xhr.status 是2开头的三位数，说明前端成功接收到后端返回的数据；
        if(xhr.readyState===4&&/^2\d{2}/.test(xhr.status)){
            data = JSON.parse(xhr.responseText)
        }
    }
    // 以上三步是ajax任务的准备；请求并没有发出去
    // 4.发送请求
    xhr.send();
    //console.log(data);
    
   // 3. 绑定数据，放到页面上
   function bindHtml(){
       // 循环data数据，拼接成字符串，最后通过innerHTML放入list中
       let str = ``;
       for(let i=0;i<data.length;i++){
           let cur = data[i];
            str+= `<li data-time="${cur.time}" data-price="${cur.price}" data-hot="${cur.hot}">
                        <img src="${cur.img}" alt="">
                        <span>${cur.title}</span>
                        <span>${cur.time}</span>
                        <span>${cur.price}</span>
                        <span>${cur.hot}</span>
                   </li>`
       }
       list.innerHTML=str;
   }
   bindHtml();
   // 4.给每一个a绑定点击事件
   for(let i=0;i<navs.length;i++){
        navs[i].index=i;
        navs[i].flag=-1;
        navs[i].onclick = function(){
            this.flag*=-1;// 点1下 +1； -1
            sortList.call(this);
            removeArrow.call(this);
            addArrow.call(this);
        }
   }
   function sortList(){
       /// this--> 当前被点击的a元素
        var ary = utils.toArray(oLis);
        var newAry = ["data-time","data-hot","data-price"];
        // 排序
        //console.log(this);
        let that  = this;
        // ary : 是一个数组，数组中存放了每一个li的元素对象
        ary.sort(function(a,b){
            // a,b 代表每一个li的对象
            // var spans=a.getElementsByTagName("span");
            // var span=b.getElementsByTagName("span")
            // return spans[2].innerHTML-span[2].innerHTML;
            // getAttribute : 获取自己的行间属性
            // this--> window
            let cur = a.getAttribute(newAry[that.index]);
            let next = b.getAttribute(newAry[that.index]);
            if(that.index===0){
                // 如果that.index=0说明点击的是上架时间；
                cur= cur.replace("-","").replace("-","");
                next=next.replace("-","").replace("-","");
            }
            return  (cur-next)*that.flag;
        });
        // 文档碎片，减少了DOM的回流；
        let  frg= document.createDocumentFragment()
        for(let i=0;i<ary.length;i++){
            frg.appendChild(ary[i]);
        }
        list.appendChild(frg);
        frg= null;
   }
   // 实现增加背景颜色
   function addArrow(){
        let up = this.children[0];
        let down=this.children[1];
        if(this.flag>0){
            // 如果当前的flag大于0,这是升序；
            up.classList.add("bg");
            down.classList.remove("bg")
        }else{
            up.classList.remove("bg")
            down.classList.add("bg")
        }
   }
    function removeArrow(){
       for(let i=0;i<navs.length;i++){
            if(this!=navs[i]){
                //需要排除当前点击这个a;
                navs[i].children[0].classList.remove("bg");
                navs[i].children[1].classList.remove("bg");
                navs[i].flag=-1;
            }
       }
   }
})();
    // let a = 1;
    // setTimeout(function(){// 定时器是个异步的任务；
    //     a=10
    // },1000);
    // console.log(a);// 1

    // 排数据

    
