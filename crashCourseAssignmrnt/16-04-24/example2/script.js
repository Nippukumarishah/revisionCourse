let totalSeconds;
let timer;

function startTimer(){
    totalSeconds=Number(document.getElementById("hours").value)*3600+Number(document.getElementById("min").value)*60+Number(document.getElementById("sec").value);
    if(totalSeconds<=0){
        alert("Please enter a correct time !")
        return
    }
    timer=setInterval(updateTimer,1000)
}
function stopTimer(){
    clearInterval(timer)
}
function resetTimer(){
    document.getElementById("hours").value=0;
    document.getElementById("min").value=0;
    document.getElementById("sec").value=0;
    clearInterval(timer);
}
function updateTimer(){
    if(totalSeconds<=0){
        clearInterval(timer);
        alert("The Time is Over")
        return
    }
    let hours= Math.floor(totalSeconds/3600);
    let min=Math.floor((totalSeconds%3600)/60);
    let sec=totalSeconds%60;


    document.getElementById("hours").value=hours;
    document.getElementById("min").value=min;
    document.getElementById("sec").value=sec;

    totalSeconds--
}