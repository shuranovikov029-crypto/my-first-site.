const cube = document.getElementById("cube");

let x = -30;
let y = 30;

cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;

document.addEventListener("keydown", (e) => {

    if(e.key === "a") y -= 10;
    if(e.key === "d") y += 10;
    if(e.key === "w") x -= 10;
    if(e.key === "s") x += 10;

    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
});