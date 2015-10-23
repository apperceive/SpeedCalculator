  function mousetime() {
    change();
  }
    
  function changetime() {
    var ctval = document.getElementById('coursetime').value;
    var speed = (ctval > 0.000001) ? (Math.round(24.4 / ctval)) : -1;
    var rides = (speed < 25) ? getRandomIntInclusive(1, 10) : 0;
    document.getElementById('ridenum').innerHTML = (ctval > .0001 ? ((rides == 1) ? 'is 1 ride' : 'are ' + rides + ' rides') : 'no rides');
    document.getElementById('comment').innerHTML = getMessage(speed);
    change();
  }
  
  function change() {
    var ctval = Math.round(document.getElementById('coursetime').value * 100)/100;
    var speed = (ctval > 0.000001) ? (Math.round(24.4 / ctval)) : -1;
    // display hours : min
    var hours = Math.floor(ctval);
    var min = ctval - hours;
    document.getElementById('timeset').innerHTML = (hours ? (hours + (hours == 1 ? " hour " : " hours ")) : "") + (min ? Math.round(min * 60) + " min" : ( !hours && !min ? "0 min" : ""));
    document.getElementById('speed').innerHTML = 'Crusing Speed: ' +  (speed > 0 ? speed + ' mph' : 'Infinite!');
  }
  
  // ToDo: make this a jsonp service
  function getMessage(speed) {
    var rides = (speed < 25) ? getRandomIntInclusive(1, 6) : 0;
    var messagedef = "There "+(rides == 1 ? "is" : "are")+" <strong id='ridenum'>" + rides + "</strong> <a href='/upcoming-rides' title='Click to view upcoming rides listing...'>upcoming "+(rides == 1 ? "ride" : "rides")+"</a> with this speed available to club members.";
    var message = messagedef;
    var speeds = [
      {'speed': 31, 'text': "Typical speed of road-race cyclist"},
      {'speed': 37, 'text': "Typical speed of thoroughbred racehorse or racing greyhound"},
      {'speed': 55.2, 'text': "Barton Mawer, Solar powered bicycle speed record holder"},
      {'speed': 83.13, 'text': "Sebastiaan Bowier, Human powered bicycle speed record holder"},
      {'speed': 139.85, 'text': "Charles Burnett III, Steam powered speed record holder"},
      {'speed': 167.044, 'text': "Fred Rompelberg, Paced bicycle speed record holder"},
      {'speed': 307.66, 'text': "Roger Schroer, Electric powered speed record holder"},
      {'speed': 481.629, 'text': "Don Vesco, Wheel driven speed record holder"},
      {'speed': 763, 'text': "Land speed record"},
    ];
    var n = speeds.length;
    for (var i = 0; i < n; i++) {
      if (speed > speeds[i].speed)
        message =  messagedef + "<br/><small>(<a class='wikipedia' target='_blank' title='Click to view Wikipedia page...' href='https://en.wikipedia.org/wiki/List_of_vehicle_speed_records'>" + speeds[i].text + "</a>: " + speeds[i].speed + " mph)</small>";
    }
    return speed > 0 ? message : "There are <strong id='ridenum'>0 rides</strong> with this speed available to club members.<br/><small>Warp speed captain! The Timetravelers SIG will meet last Tuesday.</small>";
  }
  
  // ToDo: Replace with ajax/jason call to service
  // Returns a random integer between min (included) and max (included)
  // Using Math.round() will give you a non-uniform distribution!
  function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }  

  changetime();
