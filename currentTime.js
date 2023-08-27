
function updateTime() {
    var currentTimeElement = document.getElementById('momentTime');
    var time = moment().format('dddd, Do MMMM YYYY, h:mm:ss')
    currentTimeElement.textContent = time
}

setInterval(updateTime, 1000)

updateTime();

