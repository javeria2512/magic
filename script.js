function changeSize() {
	let size = document.querySelector("div");
    let red = parseInt(Math.random() * 256);
    let green = parseInt(Math.random() * 256);
    let blue = parseInt(Math.random() * 256);
    size.style["background-color"] = "rgb(" + red + ", " + green + ", " + blue + ")";
}