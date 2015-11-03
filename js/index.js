$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}

var name = $.urlParam('name');
console.log(name);

var sentance = [
  "You complete and utter",
  "You're a total",
  "You absolute",
  "Fuck off you"
];

var insults = [
  "cunt",
  "wanker",
  "slag",
  "shit",
  "fucker",
  "bitch",
  "twat",
  "cockmonkey",
  "jizz guzzler",
  "pugfaced nob"
];

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

$('.name').text(name);

var randSentance = randomFrom(sentance);
$('.sentance').text(randSentance);

var randInsult = randomFrom(insults);
$('.insult').text(randInsult);