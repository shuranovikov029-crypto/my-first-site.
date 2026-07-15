const cube = document.getElementById("cube");

let x = -30;
let y = 30;

cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;

document.addEventListener("keydown", (e) => {
if (e.code === "KeyA") y -= 10;
if (e.code === "KeyD") y += 10;
if (e.code === "KeyW") x -= 10;
if (e.code === "KeyS") x += 10;

    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
});
