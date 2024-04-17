let timer;
let isRunning = false;
let startWatch;
function startTimer(){
    if(!isRunning){
        isRunning = true;
        startWatch = new Date().getTime();
        timer = setInterval(stopWatch,1000);
    }
}
function stopTimer(){
    if(isRunning){
        isRunning = false;
        clearInterval(timer);
    }
}
function resetTimer(){
    isRunning = false;
    clearInterval(timer);
    document.getElementById("stopwatch").textContent="00 : 00 :00";

}
function stopWatch(){
    const currentTime = new Date().getTime();
    const setTime = Math.floor((currentTime - startWatch) / 1000);

    const hours = Math.floor(setTime/3600);
    const minutes = Math.floor((setTime % 3600) / 60);
    const seconds = setTime % 60;
    const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    document.getElementById("stopwatch").textContent = formattedTime;
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}