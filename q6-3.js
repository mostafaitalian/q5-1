

function myDigitalClock(){
    var date = new Date();
    var hours = date.getHours(); // 0 - 23
    var minutes = date.getMinutes(); // 0 - 59
    var seconds = date.getSeconds(); // 0 - 59
    var zone = "AM";
    //Write the code here
    if(hours >= 12){
        if(hours <= 23){
            zone = "PM"
            hours -= 12
        }
    }
    
    else if(hours === 0){
        hours = 12
    }

        let currentDate = date;
        var time = `${hours}:${minutes}:${seconds} ${zone}`
        console.log(time ) 
  
    }
    // myDigitalClock()
    setInterval(()=>myDigitalClock(),1000)
