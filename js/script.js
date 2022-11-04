function colorChange1(event) {
  event.preventDefault();
  let card1 = document.querySelector("#tarjeta1");
  card1.classList.add("active");
  document.getElementById("popup1").style.display = "block";
  document.body.classList.add("stop-scrolling");
}

function colorChange2(event) {
  event.preventDefault();
  let card2 = document.querySelector("#tarjeta2");
  card2.classList.add("active");
  document.getElementById("popup1").style.display = "block";
  document.body.classList.add("stop-scrolling");
}

function answerChange(event) {
  event.preventDefault();
  console.log("hola mundo")
  let answer1 = document.querySelector("#respuesta1");
  answer1.classList.add("resalte");
}

function closePop(event){
  event.preventDefault();
  document.getElementById("popup1").style.display = "none";
}


let result1 = document.querySelector("#tarjeta1");
result1.addEventListener("click", colorChange1);

let result2 = document.querySelector("#tarjeta2");
result2.addEventListener("click", colorChange2);

let resalte = document.querySelector(".resultado");
resalte.addEventListener("click", answerChange);

let done = document.querySelector(".aceptar");
done.addEventListener("click", closePop);


