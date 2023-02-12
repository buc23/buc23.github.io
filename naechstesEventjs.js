setInterval(
    c = function() {
    const start = [11,14,0]
    start.push((((start[0]*60)+start[1])*60)+start[2])
    const max = [12,13,0]
    max.push((((max[0]*60)+max[1])*60)+max[2])
    const end = [13,14,0]
    end.push((((end[0]*60)+end[1])*60)+end[2])

    var today = new Date();
    var time = (((today.getHours()*60) +today.getMinutes())*60) + today.getSeconds();
    var time_to_start = start[3]-time
    var time_to_max = max[3]-time
    var time_to_end = end[3]-time
    if (time_to_max > 0) {
        if (time_to_start > 0){
            var show = time_to_start
            var show_info = "Bis Start: "
        } else {
            var show = time_to_max
            var show_info = "Bis Maximum: "
        }
    } else {
        if(time_to_end>0){
            var show = time_to_end
            var show_info = "Bis Ende: "
        } else{
            var show = 0
            var show_info = "Sonnenfinsternis vorbei"
        }
    }
    var hh = (show-(show%3600))/3600
    var show = show-(hh*3600)
    var mm = (show-(show%60))/60 
    var show = show-(mm*60)
    var ss = show
    hh = (hh>9) ? hh.toString() : "0"+hh
    mm = (mm>9) ? mm.toString() : "0"+mm
    ss = (ss>9) ? ss.toString() : "0"+ss
    var show_format = hh + ":" + mm + ":" + ss
    document.getElementById("clock_info").innerHTML = show_info;
    document.getElementById("clock").innerHTML = show_format;
    }, 1000)
    c();