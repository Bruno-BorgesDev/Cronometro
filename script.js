window.onload = function () {
    let tens = 00;
    let seconds = 00;
    let minutes = 00;
    let initTens = document.getElementById("tens");
    let initSeconds = document.getElementById("seconds");
    let initMinutes = document.getElementById("minutes");
    var btnStart = document.getElementById("btnStart");
    let btnStop = document.getElementById('btnStop');
    let reset = document.getElementById('btnReset');
    let interval;

    btnStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);                           
    }    

    btnStop.onclick = function() {
        clearInterval(interval); 
    }

    btnReset.onclick = function() {
        clearInterval(interval);        
        tens = "00";
        seconds = "00";
        minutes = "00";

        initTens.innerHTML = tens; 
        initSeconds.innerHTML = seconds; 
        initMinutes.innerHTML = minutes;
    }

    function startTimer() {
        tens++;
        if(tens <=9){
            initTens.innerHTML = "0" + tens;            
        }

        if (tens > 9) {
            initTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            initSeconds.innerHTML = "0" + seconds;
            tens = 0;
            initTens.innerHTML = "0" + 0;            
        }

        if (seconds > 9){
            initSeconds.innerHTML = seconds;            
        }

        if (seconds > 59) {
            console.log("minutes");
            minutes++;
            initMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            initSeconds.innerHTML = "0" + 0;

        }
        
    }
}