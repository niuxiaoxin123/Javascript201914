(function(){
    let  $selectBox = $(".selectBox"),
    $searchInp=$(".searchInp"),
    $tableBox = $(".tableBox"),
    $tbody=$tableBox.find("tbody"),
    $pageBox = $(".pageBox"),
    $pageNum = $pageBox.find(".pageNum");

    let lx = window.location.href.queryURLParams().lx||"";
    let limit =10;// 每次请求的数据个数
    let page = 1;// 当前第几页

    let render=function(){
        axios.get("/customer/list",{
            params:{
                lx:lx,
                type:$selectBox.val(),
                search:$searchInp.val(),
                limit,
                page
            }
        }).then(result=>{
           
            let {code,total,totalPage,data}=result;
            if(parseFloat(code)===0){
                let str=``;
                data.forEach(item=>{
                    // item是这一行具体的信息
                    str+=`<tr>
                            <td class="w8">${item.name}</td>
                            <td class="w5">${parseFloat(item.sex)==1?"女":"男"}</td>
                            <td class="w10">${item.email}</td>
                            <td class="w10">${item.phone}</td>
                            <td class="w10">${item.weixin}</td>
                            <td class="w10">${item.QQ}</td>
                            <td class="w5">${item.type}</td>
                            <td class="w8">${item.userName}</td>
                            <td class="w20">${item.address}</td>
                            <td class="w14">
                                <a href="customeradd.html?customerId=${item.id}">编辑</a>
                                <a href="javascript:;">删除</a>
                                <a href="visit.html?customerId=${item.id}">回访记录</a>
                            </td>
                    </tr>`

                });
                $tbody.html(str);

                // 渲染分页的数据
                str=``;
                page>1?str+=`<a href="javascript:;">上一页</a>`:null;
                str+=`<ul class="pageNum">`;
                for(let i=1;i<=totalPage;i++){
                    str+=`<li class="${i===page?'active':''}">${i}</li>`;
                }
                str+=`</ul>`;
                page < totalPage ? str+=`<a href="javascript:;">下一页</a>`:null;
                $pageBox.html(str);
            }else{
                // 当请求不到数据时，code不是0；对整个table进行重新赋值；
                $tbody.html("");
                $pageBox.css("display","none")
            }
        })
    }
    render();
    // 下拉框切换全部客户

    $selectBox.on("change",function(){
        page=1;
        render();
    })
    $searchInp.on("keydown",function(e){
        if(e.keyCode===13){
            page=1;
            render();
        }
    });
    $pageBox.click(function(e){
        // 利用事件对象
        let targetTag =e.target.tagName,
            targetVal = e.target.innerHTML;
        if(targetTag==="A"){
            if(targetVal==="上一页"){
                page--;
            }
            if(targetVal==="下一页"){
                page++;
            }
            render();
            return;
        }
        if(targetTag==="LI"){
            page=parseFloat(targetVal);
            render();
            return;
        }
    })
})();