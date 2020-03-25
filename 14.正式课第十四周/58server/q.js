var  ary = [2,3,5,1,6,2,6,78];
function fn(arr){
  let t = [];
  arr.forEach((val,i)=>{
    // console.log(arr.slice(0,i).reverse())
    let bol = arr.slice(0,i).reverse().some(item=>{
      if(item < val){
        t.push(item)
      }
      return item < val
    })
    if(!bol){
      t.push(-1)
    }
  })
  return t;
}
console.log(fn(ary))



var ary = ['qwesdfs',"qw,asdf,ge3,dfge,e3,qwe,sdfs"];
function fn2(arr){
  let t = arr[1].split(',');
  let str = arr[0];
  for(let i = 0; i < t.length; i++){
    let item = t[i];
    let reg = new RegExp(item);// /qw/
    if(reg.test(str)){
      let s = str.replace(reg,'');
      if(t.indexOf(s)!=-1){
        return item + ',' + s
      }
    }
  }
}