const final_day = document.querySelector('.dayp')
const final_Hour = document.querySelector('.dayH')
const final_Minute = document.querySelector('.dayM')
const final_Sec = document.querySelector('.daySec')


const countdown = () => {
    const countDate = new Date('August 7,2021 00:00:00').getTime();// converts time to milliseconds
    const now = new Date().getTime(); //
    const gap = now - countDate;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    ///cal time
    final_day.innerHTML = `${Math.floor(gap / day)}`
    final_Hour.innerHTML = `${Math.floor((gap % day) / hour)}`
    final_Minute.innerHTML = `${Math.floor((gap % hour) / minute)}`
    final_Sec.innerHTML = `${Math.floor((gap % minute) / second)}`
}

setInterval(countdown, 1000);

