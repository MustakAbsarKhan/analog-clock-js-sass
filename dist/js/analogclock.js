const hour = document.getElementById("hour-tick");
const minute = document.getElementById("minute-tick");
const second = document.getElementById("second-tick");
const digTime = document.getElementById("digital-time");

setInterval(() => {
    //fetching and appointing data
    const currentdata = new Date();
    const hData = currentdata.getHours();
    const minData = currentdata.getMinutes();
    const secData = currentdata.getSeconds();
    //calculating rotation
    let hRotation = 30 * hData + minData / 2;
    let mRotation = 6 * minData;
    let sRotation = 6 * secData;

    //AM/PM Conditions
    if(hData>=13 & hData<=24){
        //showing digital time during PM
        //when min is less than 10 or one digit number
        if(minData<10){
            digTime.innerHTML = `${hData-12}:0${minData} P.M.`;
        }else{
            digTime.innerHTML = `${hData-12}:${minData} P.M.`;
        };
    }else{
        //showing digital time during AM
        //when min is less than 10 or one digit number
        if(minData<10){
            digTime.innerHTML = `${hData}:0${minData} A.M.`;
        }else{
            digTime.innerHTML = `${hData}:${minData} A.M.`;
        }
    };

    //rotating clock hands
    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
    
}, 100);
