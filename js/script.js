function colorChange1(event) {
  event.preventDefault();
  let card1 = document.querySelector("#tarjetaA1");
  card1.classList.add("active");
  document.getElementById("popupA1").style.display = "block";
  document.body.classList.add("stop-scrolling");
}

function colorChange2(event) {
  event.preventDefault();
  let card2 = document.querySelector("#tarjetaA2");
  card2.classList.add("active");
  document.getElementById("popupA2").style.display = "block";
  document.body.classList.add("stop-scrolling");
}

function colorChange3(event) {
  event.preventDefault();
  let card3 = document.querySelector("#tarjetaA3");
  card3.classList.add("active");
  document.getElementById("popupA3").style.display = "block";
  document.body.classList.add("stop-scrolling");
}

function colorChange4(event) {
  event.preventDefault();
  let card4 = document.querySelector("#tarjetaA4");
  card4.classList.add("active");
  document.getElementById("popupA4").style.display = "block";
  document.body.classList.add("stop-scrolling");
}

function answerChange1(event) {
  event.preventDefault();
  let answer1 = document.querySelector("#respuestaA1");
  answer1.classList.add("resalte");
}

function answerChange2(event) {
  event.preventDefault();
  let answer2 = document.querySelector("#respuestaA2");
  answer2.classList.add("resalte");
}

function answerChange3(event) {
  event.preventDefault();
  let answer3 = document.querySelector("#respuestaA3");
  answer3.classList.add("resalte");
}

function answerChange4(event) {
  event.preventDefault();
  let answer4 = document.querySelector("#respuestaA4");
  answer4.classList.add("resalte");
}

function closePop1(event) {
  event.preventDefault();
  document.getElementById("popupA1").style.display = "none";
  document.body.classList.remove("stop-scrolling");
}

function closePop2(event) {
  event.preventDefault();
  document.getElementById("popupA2").style.display = "none";
  document.body.classList.remove("stop-scrolling");
}

function closePop3(event) {
  event.preventDefault();
  document.getElementById("popupA3").style.display = "none";
  document.body.classList.remove("stop-scrolling");
}

function closePop4(event) {
  event.preventDefault();
  document.getElementById("popupA4").style.display = "none";
  document.body.classList.remove("stop-scrolling");
}

let result1 = document.querySelector("#tarjetaA1");
result1.addEventListener("click", colorChange1);

let result2 = document.querySelector("#tarjetaA2");
result2.addEventListener("click", colorChange2);

let result3 = document.querySelector("#tarjetaA3");
result3.addEventListener("click", colorChange3);

let result4 = document.querySelector("#tarjetaA4");
result4.addEventListener("click", colorChange4);

let resalte1 = document.querySelector("#boton-respuestaA1");
resalte1.addEventListener("click", answerChange1);

let resalte2 = document.querySelector("#boton-respuestaA2");
resalte2.addEventListener("click", answerChange2);

let resalte3 = document.querySelector("#boton-respuestaA3");
resalte3.addEventListener("click", answerChange3);

let resalte4 = document.querySelector("#boton-respuestaA4");
resalte4.addEventListener("click", answerChange4);

let done1 = document.querySelector("#boton-aceptarA1");
done1.addEventListener("click", closePop1);

let done2 = document.querySelector("#boton-aceptarA2");
done2.addEventListener("click", closePop2);

let done3 = document.querySelector("#boton-aceptarA3");
done3.addEventListener("click", closePop3);

let done4 = document.querySelector("#boton-aceptarA4");
done4.addEventListener("click", closePop4);

function colorChangeB1(event) {
  event.preventDefault();
  let cardB1 = document.querySelector("#tarjetaB1");
  cardB1.classList.add("active");
  document.getElementById("popupB1").style.display = "block";
  document.body.classList.add("stop-scrolling");
}

function colorChangeB2(event) {
  event.preventDefault();
  let cardB2 = document.querySelector("#tarjetaB2");
  cardB2.classList.add("active");
  document.getElementById("popupB2").style.display = "block";
  document.body.classList.add("stop-scrolling");
}

function colorChangeB3(event) {
  event.preventDefault();
  let cardB3 = document.querySelector("#tarjetaB3");
  cardB3.classList.add("active");
  document.getElementById("popupB3").style.display = "block";
  document.body.classList.add("stop-scrolling");
}

function colorChangeB4(event) {
  event.preventDefault();
  let cardB4 = document.querySelector("#tarjetaB4");
  cardB4.classList.add("active");
  document.getElementById("popupB4").style.display = "block";
  document.body.classList.add("stop-scrolling");
}

function answerChangeB1(event) {
  event.preventDefault();
  let answerB1 = document.querySelector("#respuestaB1");
  answerB1.classList.add("resalte");
}

function answerChangeB2(event) {
  event.preventDefault();
  let answerB2 = document.querySelector("#respuestaB2");
  answerB2.classList.add("resalte");
}

function answerChangeB3(event) {
  event.preventDefault();
  let answerB3 = document.querySelector("#respuestaB3");
  answerB3.classList.add("resalte");
}

function answerChangeB4(event) {
  event.preventDefault();
  let answerB4 = document.querySelector("#respuestaB4");
  answerB4.classList.add("resalte");
}

function closePopB1(event) {
  event.preventDefault();
  document.getElementById("popupB1").style.display = "none";
  document.body.classList.remove("stop-scrolling");
}

function closePopB2(event) {
  event.preventDefault();
  document.getElementById("popupB2").style.display = "none";
  document.body.classList.remove("stop-scrolling");
}

function closePopB3(event) {
  event.preventDefault();
  document.getElementById("popupB3").style.display = "none";
  document.body.classList.remove("stop-scrolling");
}

function closePopB4(event) {
  event.preventDefault();
  document.getElementById("popupB4").style.display = "none";
  document.body.classList.remove("stop-scrolling");
}

let resultB1 = document.querySelector("#tarjetaB1");
resultB1.addEventListener("click", colorChangeB1);

let resultB2 = document.querySelector("#tarjetaB2");
resultB2.addEventListener("click", colorChangeB2);

let resultB3 = document.querySelector("#tarjetaB3");
resultB3.addEventListener("click", colorChangeB3);

let resultB4 = document.querySelector("#tarjetaB4");
resultB4.addEventListener("click", colorChangeB4);

let resalteB1 = document.querySelector("#boton-respuestaB1");
resalteB1.addEventListener("click", answerChangeB1);

let resalteB2 = document.querySelector("#boton-respuestaB2");
resalteB2.addEventListener("click", answerChangeB2);

let resalteB3 = document.querySelector("#boton-respuestaB3");
resalteB3.addEventListener("click", answerChangeB3);

let resalteB4 = document.querySelector("#boton-respuestaB4");
resalteB4.addEventListener("click", answerChangeB4);

let doneB1 = document.querySelector("#boton-aceptarB1");
doneB1.addEventListener("click", closePopB1);

let doneB2 = document.querySelector("#boton-aceptarB2");
doneB2.addEventListener("click", closePopB2);

let doneB3 = document.querySelector("#boton-aceptarB3");
doneB3.addEventListener("click", closePopB3);

let doneB4 = document.querySelector("#boton-aceptarB4");
doneB4.addEventListener("click", closePopB4);
