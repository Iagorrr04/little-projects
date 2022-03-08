// Definition of our function.
function showTime(){   
    // Receiving information of the pc.
    let date = new Date()
    let hours = date.getHours(); // 0 - 23
    let minutes = date.getMinutes(); // 0 - 59
    let seconds = date.getSeconds(); // 0 - 59  

    // Case of zero
    hours = (hours < 10) ? "0"+ hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
    
    // Formated text to show.
    let fTime = hours + ':' + minutes + ':' + seconds;

    // Alterating the text inside our display div.
    document.getElementById("display").innerText = fTime
    document.getElementById("display").textContent = fTime
}

function showDate(){
    // Receiving the date.
    let date = new Date();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    
    // Case of zeros.
    day = (day < 10) ? "0"+day : day
    month = (month < 10) ? "0"+month : month

    // Formated date to show.
    let fDate = day + '/' + month + '/' + year

    //Alteranting the text to be showed.
    document.getElementById("date").innerText = fDate
    document.getElementById("date").textContent = fDate
}

// Calling our functions, at this point is just  a static clock.
setInterval((showTime), 1000); // will repeat the function second by second.(not static anymore)
setInterval(showDate,1000)
