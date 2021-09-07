const hour = document.getElementById('clock-hour'),
   minutes = document.getElementById('clock-minutes'),
   seconds = document.getElementById('clock-seconds')

const clock = () =>{
    let date = new Date()

let hh = date.getHours() * 30;
    mm = date.getMinutes() * 6;
    ss = date.getSeconds() * 6;

//Rotation

hour.style.transform = `rotateZ(${hh + mm/12}deg)`
minutes.style.transform = `rotateZ(${mm}deg)`
seconds.style.transform = `rotateZ(${ss}deg)`

    
}
setInterval(clock,1000) // 1000=1s


//Clock & Date

const textHour = document.getElementById('text-hour'),
      textMinutes = document.getElementById('text-minutes'),
      textAMPM = document.getElementById('text-AMPM'),
      dateDay = document.getElementById('date-day'),
      dateMonth = document.getElementById('date-month'),
      dateYear = document.getElementById('date-year')

const clockText = () =>{
    let date = new Date();


    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        dat = date.getDate(),
        mon = date.getMonth(),
        yr = date.getFullYear();

    if(hh >= 12){
        hh = hh - 12;
        ampm = 'PM';
    }else{
        ampm = 'AM';
    }

    if(hh == 0){
        hh = 12;
    }
    


    textHour.innerHTML = `${hh}:`
    textMinutes.innerHTML = `${mm}`
    textAMPM.innerHTML = `${ampm}`

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                  'Aug', 'Sep', 'Oct', 'Nov', 'Dec']



    dateDay.innerHTML = `${dat}`
    dateMonth.innerHTML = `${months[mon]}, `,
    dateYear.innerHTML = yr

    if(hh < 10){
        textHour.innerHTML = `0${hh}:`
    }

    if(mm < 10){
        textMinutes.innerHTML = `0${mm}`
    }

    /*if(mon < 10){
        dateMonth.innerHTML = `0${mon}-`
    }
    
    if(dat < 10){
        dateDay.innerHTML = `0${dat}-`
    }*/
}

setInterval(clockText,1000) // 1000=1s

