// text animation 
const textAnim = document.getElementById("title");

const stackAnim = document.querySelectorAll("stack");


new Typewriter(textAnim, {
  deleteSpeed: 20  //erased text speed
})
  .changeDelay(25)
  .typeString("Je suis Evetricia Kalala,")
  .pauseFor(300)
  .typeString("<br><strong> Développeuse Web Junior </strong>!<strong><br><span class = 'stack' style='color: #ffd04e'> JavaScript</span></strong>")
  .pauseFor(1000)
  .deleteChars(11)
  .typeString("<strong><span class ='stack' style='color: pink'> Node.js</span></strong>")
  .pauseFor(1000)
  .deleteChars(7)
  .typeString("<strong><span class ='stack' style='color: green'> MongoDB</span></strong>")
  .pauseFor(1000)
  .deleteChars(7)
  .typeString("<strong><span class = 'stack' style='color: #ffd04e'> JavaScript,</span><span class ='stack' style='color: pink'> Node.JS,</span><span class ='stack' style='color: green'> MongoDB</span></strong><spans></i>")
  .start();
