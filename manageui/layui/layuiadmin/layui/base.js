
// 打开新标签
function newTab(url, tit){
    if(top.layui.index && self!=top){
        top.layui.index.openTabsPage(url, tit);
    }else{
        window.open(url);
    }
}

// 生成随机初始密码
function makeRandPassword(){
    var text=['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ','1234567890','~!@#$%^&*()_+=-;,.'];
    var rand = function(min, max){return Math.floor(Math.max(min, Math.random() * (max+1)));};
    var len = rand(8, 12); // 长度为8-12
    var pw = '';
    for(i=0; i<len; ++i)
    {
        var strpos = rand(0, 3);
        pw += text[strpos].charAt(rand(0, text[strpos].length));
    }
    return pw;
}

