setInterval(() => {

    let today = new Date();
    let time = document.getElementById("time");
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
    let ampm = hour>=12?"PM":"AM";
    hour<10?hour = '0'+hour: hour = hour
    minute<10?minute = '0'+minute: minute = minute
    seconds<10?seconds = '0'+seconds: seconds = seconds
    
    time.innerHTML = `${hour}:${minute}:${seconds}  ${ampm}`


    
}, 1000);
