document.addEventListener("DOMContentLoaded", function(event) { 

  // let's set our clock to the current time

  var clock = document.getElementsByClassName("clock")[0];
  // let's make sure clock is not undefined first
  if( typeof clock !== "undefined" ) {
    var today = new Date();
   
    clock.getElementsByClassName("hours")[0].innerText = pad2Digits(today.getHours());
    clock.getElementsByClassName("minutes")[0].innerText = pad2Digits(today.getMinutes());
    clock.getElementsByClassName("seconds")[0].innerText = pad2Digits(today.getSeconds());
  }

  setInterval(function(){
    var clock = document.getElementsByClassName("clock")[0];
    // let's make sure clock is not undefined first
    if( typeof clock === "undefined" ) {
      return; // exit the function
    }
    var hours   = clock.getElementsByClassName("hours")[0];
    var minutes = clock.getElementsByClassName("minutes")[0];
    var seconds = clock.getElementsByClassName("seconds")[0];
    console.log(seconds.innerText);
    var num_seconds = parseInt(seconds.innerText) + 1;

    // if seconds is a minute or more
    if( num_seconds >= 60 ) {
      //let's increase the minutes by 1, and set seconds to zero
      var num_minutes = parseInt(minutes.innerText) + 1;

      // if minutes is greater than or equal to 60
      if( num_minutes >= 60 ) { // increase the hours by 1, and set minutes to zero
        var num_hours = parseInt(hours.innerText) + 1;

        if( num_hours >= 24 ) {
          hours.innerText = "00";          // reset the hours
        } else {
          hours.innerText = pad2Digits(num_hours);  // update the hours
        }

        minutes.innerText = "00";

      } else {  // just increase minutes by one
        minutes.innerText = pad2Digits(num_minutes);
      }

      seconds.innerText = "00";

    } else {  // just increase seconds by one
      seconds.innerText = pad2Digits(num_seconds);
    }

  },1000);
});

//We want a function to pad any number < 10 with a leading 0
function pad2Digits( someNumber ) {
  if( parseInt(someNumber) < 10 ) {
    // pad it with a leading 0
    return "0" + someNumber;
  } else {
    return someNumber;
  }
}

// $(document).on("ready",function(){

// });