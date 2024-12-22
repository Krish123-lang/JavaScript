const body = document.getElementsByTagName("body")[0];

document.getElementById("red").addEventListener("click", function () {
    body.style.backgroundColor = "red";
});

document.getElementById("blue").addEventListener("click", function () {
    body.style.backgroundColor = "blue";
});

document.getElementById("green").addEventListener("click", function () {
    body.style.backgroundColor = "green";
});

document.getElementById("random").addEventListener("click", function () {
    // Generate a random RGB color
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    body.style.backgroundColor = randomColor;
});
