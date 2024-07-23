function displayTime(){
    let dateTime=new Date();
    let hrs=dateTime.getHours();
    let mins=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    let session=document.getElementById('session');

    const daysOfWeek=[
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THRUSDAY",
        "FRIDAY",
        "SATURDAY"
    ];
    const currentDayOfWeek=daysOfWeek[dateTime.getDay()];
    if (hrs>=12){
        session.innerHTML="PM";
    }else{
        session.innerHTML="AM";
    }
    if (hrs>12){
        hrs-=12
    }
    if (hrs<10){
        hrs="0"+hrs
    }
    if (mins<10){
        mins="0"+mins
    }
    if (sec<10){
        sec="0"+sec
    }
    document.getElementById("day").innerHTML=currentDayOfWeek;
    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("minutes").innerHTML=mins;
    document.getElementById("seconds").innerHTML=sec;
}
setInterval(()=>{
    displayTime()
},10);