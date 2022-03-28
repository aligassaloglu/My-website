const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secsEl = document.getElementById('secs')



const timetoWebsite = '31 April 2022'


function countdown(){
    const dateOfRelease = new Date(timetoWebsite)
    const currentDate = new Date();
    const totalSecs = Math.floor((dateOfRelease - currentDate)/1000)
    const seconds = Math.floor(totalSecs % 60)
    const minutes = Math.floor(totalSecs/60) % 60
    const hours = Math.floor(totalSecs/3600) % 24
    const days = Math.floor(totalSecs/3600 / 24)


    daysEl.innerHTML = formatZero(days)
    hoursEl.innerHTML = formatZero(hours)
    minsEl.innerHTML = formatZero(minutes)
    hoursEl.innerHTML = formatZero(hours)
    secsEl.innerHTML = formatZero(seconds)  


    // console.log(days, hours,minutes,seconds);
}
function formatZero(time){
    return time < 10 ? `0${time}` : time
}

countdown()

// const hours = ms/(60*60*60)

// console.log(hours)


setInterval(countdown, 1000)



// window.onload = function () {
//     // Array of Images
//      var backgroundImg=[
//         "adrian-swancar-pIr-PH5IXF8-unsplash.jpg",
//         "greg-rakozy-oMpAz-DN-9I-unsplash.jpg",
//         "ibrahim-shabil-VE7VS0C9K1k-unsplash.jpg"
//         ]

//        setInterval(changeImage, 5000);
//       function changeImage() {   
//        var i = Math.floor((Math.random() * 3));

//        document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";
//      }
//    }