// 1. 获取到json中的数据，循环data中的每一项，获取到每一项放到一个数组中；最终循环数组，拼接所有option字符串，放入页面中；

//数据：组装数据;
let  val;
$.ajax({
    url:"json/regionData.json",
    type:"get",
    async:false,
    success:function(data){
        let arr  = formData(0,data);
        $("#province").html(bindHtml(arr));
        $("#province").change(function(){
            val= $(this).val();// 获取province的value;
            let  arr = formData(1,data)
            $("#city").html(bindHtml(arr));
        });
        $("#city").change(function(){
            val = $(this).val();
            let arr = formData(2,data);
            $("#country").html(bindHtml(arr))
        })
    }
});

function formData(level,data){
    let result = [];
    let ary=null;
    if(level===0){
        $.each(data,function(index,item){
            result.push(item.name)
        })
    }
    if(level===1){
        // 找出省份对应的市
        $.each(data,function(index,item){
            if(item.name===val){
                // 先找到和province内容相同的city;
                ary=item.city;
            }
        })
        $.each(ary,function(index,item){
            // 循环ary,获取ary中对象中name的属性值
            result.push(item.name)
        });
    }
    if(level===2){
        $.each(data,function(index,item){
            $.each(item.city,function(index,item){
                if(item.name===val){
                    result=item.area;
                }
            })
        })
    }
    return result;
}
function bindHtml(arr){
    let str=`<option>请选择</option>`;
    $.each(arr,function(index,item){
        str+=`<option>${item}</option>`
    })
    return str;
}