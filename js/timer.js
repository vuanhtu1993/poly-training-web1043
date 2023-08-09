const app2 = document.querySelector("#timer")
const input = document.querySelector("#timer-input")

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

const showTimer = (day, hour, minute, second) => {
    console.log(day, hour, minute, second);
    const html = `
        <div>
            <div class="flex timer">
                <h1 class="day">${day ? day : "00"}<span>Days</span></h1>
                <h1 class="hour">${hour ? hour : "00"}<span>Hours</span></h1>
                <h1 class="minute">${minute ? minute : "00"}<span>Minutes</span></h1>
                <h1 class="second">${second ? second : "00"}<span>Second</span></h1>
            </div>
        </div>
    `
    app2.innerHTML = html
}

let interval;

input.onchange = (e) => {
    clearInterval(interval)
    const destination = new Date(e.target.value).getTime()
    interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = destination - now
        if (distance > 0) {
            const _day = Math.floor(distance / day)
            const _hour = Math.floor((distance % (day)) / (hour))
            const _minute = Math.floor((distance % (hour)) / (minute))
            const _second = Math.floor((distance % (minute)) / second)

            showTimer(_day, _hour, _minute, _second)
        } else {
            clearInterval(interval)
        }
    }, 1000)
}