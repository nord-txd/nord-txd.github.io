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

var randSentance = randomFrom(sentance);
$('.sentance').text(randSentance);

var randInsult = randomFrom(insults);
$('.insult').text(randInsult);