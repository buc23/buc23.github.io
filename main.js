setInterval(
    c = function(){
        var today = new Date()
        var DD = (today.getDate() > 9) ? today.getDate().toString() : "0" + today.getDate().toString()
        var MM = (today.getMonth() >9) ? today.getMonth().toString() : "0" + today.getMonth().toString()
        var HH = (today.getHours() > 9) ? today.getHours().toString() : "0" +today.getHours().toString()
        var YYYY = today.getFullYear()
        var mm = (today.getMinutes() > 9) ? today.getMinutes().toString() : "0" +today.getMinutes().toString()
        var ss = (today.getSeconds() > 9) ? today.getSeconds().toString() : "0" +today.getSeconds().toString()
        document.getElementById("Uhr").innerHTML = DD + "."+ MM + "." + YYYY + " " + HH + ":" + mm + ":" + ss
    }, 1000)