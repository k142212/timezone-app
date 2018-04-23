$(document).ready(function(){
	$("#current").text(moment().tz(moment.tz.guess()).format('dddd MMMM Do YYYY, h:mm:ss a Z'));
		
	setInterval("clock($('.timezones').val())", 100);
	setInterval("changeTimezone($('.timezones').val())", 100);
});

function changeTimezone(selected){
	$("#current").text(moment().tz(selected).format('dddd MMMM Do YYYY, h:mm:ss a Z'));
	
}


var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

for (var i = 1; i < 60; i++) {
	if(document.getElementsByClassName('clock')[0] != null){
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
	}
}

function clock(timezone) {
      h = moment().tz(timezone).format('hh'),
      m = moment().tz(timezone).format('mm'),
      s = moment().tz(timezone).format('ss'),
      date = moment().tz(timezone).format('DD'),
      month = moment().tz(timezone).format('MM'),
      year = moment().tz(timezone).format('YYYY'),
	  
	  
           
      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,
      
      hEl = document.querySelector('.hour-hand'),
      mEl = document.querySelector('.minute-hand'),
      sEl = document.querySelector('.second-hand'),
      dateEl = document.querySelector('.date'),
      dayEl = document.querySelector('.day');

  
      var day = moment().tz(timezone).format('dddd');
	  
  
  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
  dateEl.innerHTML = date+"/"+month+"/"+year;
  dayEl.innerHTML = day;
}


