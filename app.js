// text animation 
const textAnim = document.getElementById("title");

const stackAnim = document.querySelectorAll("stack");


new Typewriter(textAnim, {
  deleteSpeed: 20  //vitesse à laquelle le texte s'éfface.
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


//   .changeDelay(25)
//   .typeString("<strong><span style='color: #ffd04e'>Java<span style='color: #000'>S</span>cript</span></strong> !")
//   .pauseFor(1000)
//   .deleteChars(14)
//   .typeString("<strong><span style='color: green'>MongoDB</span></strong> !")
//   .pauseFor(300)
//   .deleteChars(9)
//   .typeString("<strong><span style='color: blue'>NodeJS</span></strong> !")
//   // .pauseFor(300)
//   // .deleteChars(8)
//   .start();