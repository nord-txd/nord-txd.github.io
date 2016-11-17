function shadeColor(color, percent) {   
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

function blendColors(c0, c1, p) {
    var f=parseInt(c0.slice(1),16),t=parseInt(c1.slice(1),16),R1=f>>16,G1=f>>8&0x00FF,B1=f&0x0000FF,R2=t>>16,G2=t>>8&0x00FF,B2=t&0x0000FF;
    return "#"+(0x1000000+(Math.round((R2-R1)*p)+R1)*0x10000+(Math.round((G2-G1)*p)+G1)*0x100+(Math.round((B2-B1)*p)+B1)).toString(16).slice(1);
}

function setBackground(color) {
  color   = '#'+color;
  var shaded = blendColors(color, '#ffffff');
  $('body').css('background-color', color);
  $('.clockHand').css('background-color', shaded);

}
function updateTime() {
  var dt = new Date();
  var hours = dt.getHours(),
      mins = dt.getMinutes(),
      secs = dt.getSeconds();
  
  var toHour = '';
  if (hours == 0) {toHour = ' ONE'}
  if (hours == 1 || hours == 13) {
    toHour = ' TWO';
    setBackground('b4da55');
  }
  if (hours == 2 || hours == 14) {
    toHour = ' THREE';
    setBackground('b4da55');
  }
  if (hours == 3 || hours == 15) {
    toHour = ' FOUR';
    setBackground('b4da55');
  }
  if (hours == 4 || hours == 16) {
    toHour = ' FIVE';
    setBackground('b4da55');
  }
  if (hours == 5 || hours == 17) {
    toHour = ' SIX';
    setBackground('b4da55');
  }
  if (hours == 6 || hours == 18) {
    toHour = ' SEVEN';
    setBackground('b4da55');
  }
  if (hours == 7 || hours == 19) {
    toHour = ' EIGHT';
    setBackground('b4da55');
  }
  if (hours == 8 || hours == 20) {
    toHour = ' NINE';
    setBackground('b4da55');
  }
  if (hours == 9 || hours == 21) {
    toHour = ' TEN';
    setBackground('b4da55');
  }
  if (hours == 10 || hours == 22) {
    toHour = ' ELEVEN';
    setBackground('b4da55');
  } 
  if (hours == 11 || hours == 23) {
    toHour = ' TWELVE';
    setBackground('b4da55');
  }
  if (hours == 12) {
    toHour = ' ONE';
    setBackground('b4da55');
  }

  var pastHour = '';
  if (hours == 0) {pastHour = ' MIDNIGHT'}
  if (hours == 1 || hours == 13) {pastHour = ' ONE'}
  if (hours == 2 || hours == 14) {pastHour = ' TWO'}
  if (hours == 3 || hours == 15) {pastHour = ' THREE'}
  if (hours == 4 || hours == 16) {pastHour = ' FOUR'}
  if (hours == 5 || hours == 17) {pastHour = ' FIVE'}
  if (hours == 6 || hours == 18) {pastHour = ' SIX'}
  if (hours == 7 || hours == 19) {pastHour = ' SEVEN'}
  if (hours == 8 || hours == 20) {pastHour = ' EIGHT'}
  if (hours == 9 || hours == 21) {pastHour = ' NINE'}
  if (hours == 10 || hours == 22) {pastHour = ' TEN'} 
  if (hours == 11 || hours == 23) {pastHour = ' ELEVEN'}
  if (hours == 12) {pastHour = ' TWELVE'}
  
  var result = "IT'S";
  
  if (mins >= 0 && mins <= 4) {result += pastHour + " O'CLOCK"}
   if (mins <= 4 && hours === 0) {result = "IT'S" + pastHour}
  if (mins > 4 && mins <= 9) {result += " 5 PAST" + pastHour}
  if (mins > 9 && mins <= 14) {result += " TEN PAST" + pastHour}
  if (mins > 14 && mins <= 19) {result += " QUARTER PAST" + pastHour}
  if (mins > 19 && mins <= 24) {result += " TWENTY PAST" + pastHour}
  if (mins > 24 && mins <= 29) {result += " TWENTY-FIVE PAST" + pastHour}
  if (mins > 29 && mins <= 34) {result += " HALF PAST" + pastHour}
  if (mins > 34 && mins <= 39) {result += " TWENTY-FIVE TO" + toHour}
  if (mins > 39 && mins <= 44) {result += " TWENTY TO" + toHour}
  if (mins > 44 && mins <= 49) {result += " QUARTER TO" + toHour}
  if (mins > 49 && mins <= 54) {result += " TEN TO" + toHour}
  if (mins > 54 && mins <= 59) {result += " FIVE TO" + toHour}
  
  var tagline = '';
  if (hours === 1) {tagline = ', YOU SHOULD PROBABLY SLEEP.'}
  if (hours === 2) {tagline = ', SERIOUSLY, WHY ARE YOU STILL AWAKE.'}
  if (hours === 3) {tagline = ', HOW WAS THE PARTY?'}
  if (hours === 4) {tagline = ' SO GO THE FUCK TO SLEEP!'}
  if (hours === 5) {tagline = ' DUDE, HOW ARE THE DRUGS?'}
  if (hours === 6) {tagline = ', WHY ARE YOU AWAKE?'}
  if (hours === 7) {tagline = ', SMELL THE COFFEE.'}
  if (hours === 8) {tagline = ', HURRY UP, GET TO WORK!'}
  if (hours === 9) {tagline = ' & YES YOU ARE AT WORK.'}
  if (hours === 10) {tagline = ', LOOK BUSY.'}
  if (hours === 11) {tagline = ', NOT LONG TIL LUNCH.'}
  if (hours === 12) {tagline = ', TIME FOR MUNCHIES.'}
  if (hours === 13) {tagline = ', 4 HOURS TO GO.'}
  if (hours === 14) {tagline = ', 3 HOURS TO GO.'}
  if (hours === 15) {tagline = ', 2 HOURS TO GO.'}
  if (hours === 16) {tagline = ', 1 HOUR TO GO.'}
  if (hours === 16 && mins === 20) {
    result = 'FOUR TWENTY!'
    tagline = ' SPARK IT.';
  }
  if (hours === 17) {tagline = ', GET OUTTA THERE!'}
  if (hours === 18) {tagline = ', WELCOME HOME.'}
  if (hours === 19) {tagline = ', ANY FOOTBALL ON?'}
  if (hours === 20) {tagline = ', GET THE KETTLE ON.'}
  if (hours === 21) {tagline = ', MORE TEA... MORE TEA!!'}
  if (hours === 22) {tagline = ', PLAYING FIFA?'}
  if (hours === 23) {tagline = ', BEDTIME?'}

  $("#face").text(result);
  $("#face").append(tagline);
  
  var minsRotation = (mins / 60) * 360;
  var secsRotation = (secs / 60) * 360;
  var singleHour = hours;
  if (hours > 12) {
    singleHour = hours - 12;
  }
  var hourRotation = (singleHour / 12) * 360 + (minsRotation / 12);
  var hourRotationTo = hourRotation + 360;

  var littleHand = $('#littleHand');
  TweenMax.set(littleHand,{transformOrigin: '50% 100%', rotation: hourRotation})
  TweenMax.to(littleHand,0.3,{rotation:hourRotation, ease: Power0.easeNone, repeat:-1})

  var bigHand = $('#bigHand');
  TweenMax.set(bigHand,{transformOrigin: '50% 100%'})
  TweenMax.to(bigHand,0.3,{rotation:minsRotation, ease: Power0.easeNone})
  
  var secHand = $('#secHand');
  TweenMax.set(secHand,{transformOrigin: '50% 100%'})
  if (secs === 0) {
    secsRotation = 360;
    TweenMax.to(secHand,0.1,{rotation:secsRotation, ease: Power0.easeNone})
    TweenMax.to(secHand,0,{rotation:0, ease: Power0.easeNone, delay:0.2})
  }
  TweenMax.to(secHand,0.1,{rotation:secsRotation, ease: Power0.easeNone})

}
window.setInterval(function () {
    updateTime();
}, 1000);