const tuneUps = document.querySelectorAll(".backDrop");
const classicSlate = document.querySelector("#classicSlate > div");
const Whiteboard = document.querySelector("#whiteBoard > div");
const rainbow = document.querySelector("#rainbow > div");
let random = document.querySelector("#color");
const slate = document.querySelector("#slate");
let value = document.querySelector("#value");
let pencilTip = document.querySelector("#pencilTip");

window.addEventListener("load", classicSlateOn);
value.textContent = pencilTip.value;
pencilTip.oninput = function (){
    value.textContent = pencilTip.value;
}
pencilTip.addEventListener("mousemove", function(){
    let x = pencilTip.value;
    let color = "linear-gradient(90deg, rgb(26, 221, 26) " + (x/25)*100 + "%, rgb(194, 194, 218) " + (x/25)*100 + "%)";
    pencilTip.style.background = color;
    cleanSlate(slate);
    classicSlate.classList.remove("backDropOn");
    Whiteboard.classList.remove("backDropOn");
    rainbow.classList.remove("backDropOn");
    random.classList.remove("backDropOn");
})
function createSlate () {
    let slatePixelSize = parseInt(pencilTip.value);
    const slateSquare = (560 * 560) / (`${slatePixelSize}` * `${slatePixelSize}`);
    let slatePixels = 0;
    for (let i = 0; i < slateSquare; i++) {
        let div = document.createElement('div');
        div.setAttribute("style", `width: ${slatePixelSize}px; height: ${slatePixelSize}px;`);
        slate.appendChild(div);
    }
    slatePixels = document.querySelectorAll("#slate > div");
    return slatePixels;
}
function cleanSlate(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

classicSlate.addEventListener("click", classicSlateOn);
Whiteboard.addEventListener("click", whiteBoardOn);
rainbow.addEventListener("click", rainbowOn);
random.addEventListener("click", randomOn);

function classicSlateOn(e) {
    classicSlate.classList.add("backDropOn");
    Whiteboard.classList.remove("backDropOn");
    rainbow.classList.remove("backDropOn");
    random.classList.remove("backDropOn");
    slate.setAttribute("style", "background-color: rgb(0, 0, 0);");
    cleanSlate(slate);
    let createNew = createSlate(e);
    createNew.forEach(slatePixel => slatePixel.addEventListener("mouseover", chalky));
}
function whiteBoardOn(e) {
    classicSlate.classList.remove("backDropOn");
    Whiteboard.classList.add("backDropOn");
    rainbow.classList.remove("backDropOn");
    random.classList.remove("backDropOn");
    slate.setAttribute("style", "background-color:  rgb(250, 250, 250);");
    cleanSlate(slate);
    let createWhite = createSlate(e);
    createWhite.forEach(slatePixel => slatePixel.addEventListener("mouseover", markUp));
}
function rainbowOn(e) {
    classicSlate.classList.remove("backDropOn");
    Whiteboard.classList.remove("backDropOn");
    rainbow.classList.add("backDropOn");
    random.classList.remove("backDropOn");
    slate.setAttribute("style", "background-color:  rgb(250, 250, 250);");
    cleanSlate(slate);
    let createRainbow = createSlate(e);
    createRainbow.forEach(slatePixel => slatePixel.addEventListener("mouseover", rainbowUp));
}
function randomOn(e) {
    classicSlate.classList.remove("backDropOn");
    Whiteboard.classList.remove("backDropOn");
    rainbow.classList.remove("backDropOn");
    random.classList.add("backDropOn");
    const slateColor = document.querySelector("#slateColor");
    slate.style.background = slateColor.value;
    cleanSlate(slate);
    let createRandom = createSlate(e);
    createRandom.forEach(slatePixel => slatePixel.addEventListener("mouseover", randomUp));
}
function chalky() {
    this.classList.add("chalk");
}
function markUp() {
    this.classList.add("marker");
}
function rainbowUp() {
    const rainbowArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let any7 = Math.floor(Math.random() * 7);
    let rainbowEl = rainbowArray[any7];
    if (rainbowEl == "red") this.classList.add("red");
    if (rainbowEl == "orange") this.classList.add("orange");
    if (rainbowEl == "yellow") this.classList.add("yellow");
    if (rainbowEl == "green") this.classList.add("green");
    if (rainbowEl == "blue") this.classList.add("blue");
    if (rainbowEl == "indigo") this.classList.add("indigo");
    if (rainbowEl == "violet") this.classList.add("violet");
}
function randomUp(){
  let newColor = random.value;
  this.style.background = newColor;
}