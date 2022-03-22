const vladButton = document.querySelector("#vlad");
const clickCounter = document.querySelector("#clickCounter");

//let vladScale = 1.0;

let antalClick = "";

vladButton.addEventListener("click", clickHandler);

function clickHandler() {
  antalClick += "🐈";
  //vladScale += 0.1;
  //vladButton.style.transform = "scale(" + vladScale + ")";
  clickCounter.innerHTML = antalClick;
}
