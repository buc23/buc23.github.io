setInterval(
    c = function(){
    document.getElementById("Zeit").innerHTML = ((new Date().getHours()>9) ? new Date().getHours().toString(): "0"+ new Date().getHours().toString()) + ":" + ((new Date().getMinutes()>9) ? new Date().getMinutes().toString() : "0"+ new Date().getMinutes().toString()) + ":" + ((new Date().getSeconds() >9) ? new Date().getSeconds().toString() : "0" + new Date().getSeconds().toString());
    document.getElementById("bar").style.bottom = (((847 - Math.round((((new Date().getHours()*60)+new Date().getMinutes()) -674)*2.85)) > 908) ? 908: ((847 - Math.round((((new Date().getHours()*60)+new Date().getMinutes()) -674)*2.85)) < 458) ? 458 :  (847 - Math.round((((new Date().getHours()*60)+new Date().getMinutes()) -674)*2.85))).toString() + 'px';
    },1000 )
    c();