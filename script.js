var btnStart = document.getElementById('start')
var btnPause = document.getElementById('pause')
var btnStop = document.getElementById('stop')

btnStart.addEventListener('click', start)
btnPause.addEventListener('click', pause)
btnStop.addEventListener('click', stop)

var interval 

function start() {
    interval= setInterval(timer,1000)
}

function pause() {
    clearInterval(interval)
}

function stop() {
    clearInterval(interval)
    ss=0
    mm=0
    hh=0
    document.getElementById('timer').innerText="00:00:00"
}

var ss = 0
var mm = 0 
var hh = 0 

function timer() {
    ss++
    if(ss == 60) {
        mm++
        ss = 0 
        if(mm == 60) {
            hh++
            mm = 0 
    }   
}
document.getElementById('timer').innerText = twoDigits(hh) + ":" + twoDigits(mm) + ":" + twoDigits(ss)
}

//acrescenta o zero na frente dos algarismos para uma padronização de dois digítos
function  twoDigits(digit) {
    if(digit<10){
        return("0"+digit)
    } else {
        return(digit)
    }
}