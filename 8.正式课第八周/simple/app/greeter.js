
// 这个是common.js规范；module.exports  require
// import export 
// webpack会把这个js编译成浏览器识别的；
module.exports = function() {
    var greet = document.createElement('div');
    greet.textContent = "Hi there and!";
    return greet;
  };