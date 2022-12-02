function createSlate (e) {
    for (let i = 0; i < slateSquare; i++) {
        let div = document.createElement('div');
        div.setAttribute("style", `width: ${slatePixelSize}px; height: ${slatePixelSize}px;`);
        slate.appendChild(div);
        console.log("div");
    }
    classicSlateOn();
}
function classicSlateOn() {
    classicSlate.classList.add("backDropOn");
    Whiteboard.classList.remove("backDropOn");
    rainbow.classList.remove("backDropOn");
    random.classList.remove("backDropOn");
    slate.setAttribute("style", "background-color: rgb(0, 0, 0);");
}
function whiteBoardOn() {
    classicSlate.classList.remove("backDropOn");
    Whiteboard.classList.add("backDropOn");
    rainbow.classList.remove("backDropOn");
    random.classList.remove("backDropOn");

    slatePixels.forEach(slatePixel => slatePixel.setAttribute("style", "background-color: rgb(250, 250, 250);"));
}
function rainbowOn() {
    classicSlate.classList.remove("backDropOn");
    Whiteboard.classList.remove("backDropOn");
    rainbow.classList.add("backDropOn");
    random.classList.remove("backDropOn");

    slatePixels.forEach(slatePixel => slatePixel.setAttribute("style", "background-color: rgb(250, 250, 250);"));
}
function randomOn() {
    classicSlate.classList.remove("backDropOn");
    Whiteboard.classList.remove("backDropOn");
    rainbow.classList.remove("backDropOn");
    random.classList.add("backDropOn");
}
const tuneUps = document.querySelectorAll(".backDrop");
const classicSlate = document.querySelector("#classicSlate > div");
const Whiteboard = document.querySelector("#whiteBoard > div");
const rainbow = document.querySelector("#rainbow > div");
const random = document.querySelector("#random > div");
const slate = document.querySelector("#slate");
let slatePixelSize = 2;
const slateSquare = (560 * 560) / (`${slatePixelSize}` * `${slatePixelSize}`);
const slatePixels = document.querySelectorAll("#slate > *");

window.addEventListener("load", createSlate);
