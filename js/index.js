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
name = name.replace(/%20/g, " ");
console.log(name);

var sentance = [
  "You complete and utter",
  "You're a total",
  "You absolute",
  "Fuck off you",
  "you're simply a",
  "is a massive"
];

var insults = [
  "cunt",
  "wanker",
  "slag",
  "shit",
  "fucker",
  "bitch",
  "twat",
  "cock monkey",
  "jizz guzzler",
  "pugfaced nob",
  "cum pocket",
  "dick jockey",
  "pig nut",
  "prick"

];

function randomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

$('.name').text(name);

var randSentance = randomFrom(sentance);
$('.sentance').text(randSentance);

var randInsult = randomFrom(insults);
$('.insult').text(randInsult);

var voice = 'http://translate.google.com/translate_tts?tl=en&q=' + name + '%20' + randSentance + '%20' + randInsult
$('.voice').attr('href', voice);

var speak = name + ' ' + randSentance + '' + randInsult;

$(document).ready(function() {
  setTimeout(function() {
    var msg = new SpeechSynthesisUtterance(speak);
    var voices = window.speechSynthesis.getVoices();

    console.log(voices);

    msg.voice = voices.filter(function(voice) { return voice.name == 'Ralph'; })[0];
    speechSynthesis.speak(msg);
  },500);
});
