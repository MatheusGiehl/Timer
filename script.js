var btnStart = document.getElementById('start')
var btnPause = document.getElementById('pause')
var btnStop = document.getElementById('stop')
var test = 1

function start () {
    console.log(test)
}

function pause () {
    console.log(test)
}

function end () {
    console.log(test)
}

btnStart.addEventListener('click', start)
btnPause.addEventListener('click', pause)
btnStop.addEventListener('click', end)