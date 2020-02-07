(function(){
    let $tableBox=$(".tableBox"),
    $tbody=$tableBox.children("tbody"),
    $thead=$tableBox.children("thead"),
    $theadTH = $thead.find("th"),
    $deletaAll=$(".deleteAll");

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
})();