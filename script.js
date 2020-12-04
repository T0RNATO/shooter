var i;
var size = 550;
var score = 0;
var timer;
var movevar;
for (i = 0; i < document.getElementsByTagName("button").length; i++) {
  document.getElementsByTagName("button")[i].style.left = String(Math.floor(Math.random() * size)) + "px";
}
for (i = 0; i < document.getElementsByTagName("button").length; i++) {
  document.getElementsByTagName("button")[i].style.top = String(Math.floor(Math.random() * size)) + "px";
}
function move(me) {
  score = score + 1;
  document.getElementById("score").innerText = score;
  me.style.top = String(Math.floor(Math.random() * size)) + "px";
  me.style.left = String(Math.floor(Math.random() * size)) + "px";
}
function moveall() {
  for (i = 0; i < document.getElementsByTagName("button").length; i++) {
    document.getElementsByTagName("button")[i].style.display = 'inline';
    document.getElementsByTagName("button")[i].style.left = String(Math.floor(Math.random() * size)) + "px";
    document.getElementsByTagName("button")[i].style.top = String(Math.floor(Math.random() * size)) + "px";
  }
}
function start() {
  document.getElementById("menu").style.display = 'none';
  moveall();
  score = 0;
  document.getElementById("score").innerText = score;
  document.getElementById("time").innerText = 10;
  timer = setInterval(countdown, 1000);
  movevar = setInterval(moveall, 1000);
}
function countdown() {
  document.getElementById("time").innerText = Number(document.getElementById("time").innerText) - 1;
  if (document.getElementById("time").innerText == 0) {
    clearInterval(timer);
    clearInterval(movevar);
    document.getElementById("menu").style.display = 'inline';
    if (score > document.getElementById("highscore").innerText.substring(4,10)) {
      document.getElementById("highscore").innerText = "HS: " + score;
      document.cookie = `highscore=${score}`;
    }
  }
}
document.getElementById("highscore").innerText = "HS: " + document.cookie.substring(10,15);
