(function(){
    let $tableBox=$(".tableBox"),
    $tbody=$tableBox.children("tbody"),
    $thead=$tableBox.children("thead"),
    $theadTH = $thead.find("th"),
    $deletaAll=$(".deleteAll"),
    $selectBox=$(".selectBox"),
    $searchInp=$(".searchInp");

    let power = localStorage.getItem("power")||"";
    power = decodeURIComponent(power);
    // 权限校验
    let checkPower = function(){
        if(!power.includes("userhandle")){
            $deletaAll.remove();
            console.log($theadTH.eq(0));
            
            $theadTH.eq(0).remove();
            $theadTH.eq($theadTH.length-1).remove();
        }
    } 
    checkPower();

    // 请求所有用户的通讯录
    let  render=function(){
        let departmentId=$selectBox.val(),
        search  = $searchInp.val().trim();
        return axios.get("/user/list",{
            params:{
               departmentId,// departmentId:departmentId
               search 
            }
        }).then(result=>{
            let {code,data}=result;
            if(parseFloat(code)===0){
                return data;// return 的返回会传给下一个then中成功的回调函数
            }
        }).then(data=>{
            let str=``;
            data.forEach(item=>{
                let {id,name,sex=0,department="--",job="--",email="--",phone="--",desc="--"}=item;// 如果item中没有对应的值，会走默认值
                str+=`<tr data-id="${item.id}" data-name="${item.name}">
                    ${power.includes("userhandle")?`<td class="w3"><input type="checkbox"></td>`:``}
                    <td class="w10">${name}</td>
                    <td class="w5">${parseFloat(sex)===0?"男":"女"}</td>
                    <td class="w10">${department}</td>
                    <td class="w10">${job}</td>
                    <td class="w15">${email}</td>
                    <td class="w15">${phone}</td>
                    <td class="w20">${desc}</td>
                    ${power.includes("userhandle")?`<td class="w12">
                        <a href="useradd.html?userId=${id}">编辑</a>
                        <a href="javascript:;">删除</a>
                        ${power.includes("resetpassword")?`<a href="javascript:;">重置密码</a>`:``}
                    </td>`:``}
                </tr>`
            });
            $tbody.html(str)
        }).catch(()=>{
            $tbody.html("");
        }).then(()=>{
            handleCheckbox();
        })

    }
    let selectBind=function(){
        return axios.get("/department/list").then(result=>{
            if(parseFloat(result.code)===0){
                // 说明请求数据成功
                let str=`<option value="0">全部</option>`;
                result.data.forEach(item=>{
                    str+=`<option value="${item.id}">${item.name}</option>`
                })
                $selectBox.html(str);
            }
        })
    }
    selectBind().then(()=>{
        render();
    });
    // 根据下拉框和搜索框筛选对应的数据
    let handleFilter=function(){
        $selectBox.on("click",render);
        $selectBox.on("change",render);
        $searchInp.on("keydown",function(e){
            if(e.keyCode===13){
                // 当按下enter时，重新render;
                render();
            }
        })
    }
    handleFilter();

    //利用事件委托处理员工的操作
    let handleDelegate=function(){
        $tbody.click(function(e){
            let target = e.target,
            tarTag=target.tagName,
            tarVal=target.innerText,
            $target=$(target);
            let $grandParent = $target.parent().parent();
            let userId = $grandParent.attr("data-id");
            let userName=$grandParent.attr("data-name");
            // 重置密码
            if(tarTag==="A"&&tarVal==="重置密码"){

                alert(`确定要把${userName}的密码重置吗`,{
                    title:"警告，当前操作很重要",
                    confirm:true,
                    handled:msg=>{
                        // 当点击确定时，会把"CONFIRM"这个字符串传给当前函数的msg;
                        // console.log(msg);
                        if(msg==="CONFIRM"){
                            axios.post("/user/resetpassword",{
                                userId,
                                password:""
                            }).then(result=>{
                                if(parseFloat(result.code)===0){
                                    alert("恭喜修改成功")
                                }
                                alert("当前操作失败，请重试")
                            })
                        }
                    }
                })
                return
            }

            // 删除
            if(tarTag==="A"&&tarVal==="删除"){
                alert(`确定要删除${userName}吗？`,{
                    title:"警告，当前操作很重要",
                    confirm:true,
                    handled:msg=>{
                        if(msg==="CONFIRM"){
                            axios.get("/user/delete",{
                                params:{userId}
                            }).then(result=>{
                                if(parseFloat(result.code)===0){
                                    render();
                                    return;
                                }
                            })
                        }
                    }
                })
                return;
            }
        })
    }
    handleDelegate();

    //全选和非全选；
    let  handleCheckbox= function(){
        let $checkHead=$thead.find("input[type='checkbox']"),
            $checks=$tbody.find("input");
            $checkHead.click(function(){
                //console.log($checks);
                $checks.prop('checked',$(this).prop("checked"));
            })

            // 需要给每一个tbody中的input绑定点击事件
            $checks.click(function(){
                // 为了检测是否所有的都选中或者有一个未选中
                let flag = true;
                $checks.each((index,item)=>{
                    if($(item).prop("checked")===false)
                    
                    {
                        flag=false;
                        return;// 中止循环
                    }
                })
                $checkHead.prop("checked",flag)
            })
    }
    // 实现批量删除
    function deleteX(index,$selects){
        // 采用递归循环的方式删除每一条选中的信息
        let $item = $selects.eq(index),
            userId=$item.parent().parent().attr("data-id");
        axios.get("/user/delete",{
            params:{userId}
        }).then(result=>{
            if(parseFloat(result.code)===0){
                deleteX(index+1,$selects)
            }
        })
    }

    $deletaAll.click(function(){
        let $selects = $tbody.find("input[type='checkbox']").filter((index,item)=>{
            return $(item).prop("checked")===true;
        });
        if($selects.length===0){
            alert("请您先选中要删除的内容");
            return;
        }
        alert(`你确定要删除${$selects.length}项信息吗？`,{
            title:"警告，当前操作很重要,",
            confirm:true,
            handled:(msg)=>{
                if(msg!=="CONFIRM")return;// 说明点击的是取消
                deleteX(0,$selects);
            }
        })
    })
})();