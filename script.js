const container = document.querySelector("#container");

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function grid() {
    for (let i = 0; i < 256; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = "52px";
        box.addEventListener("mouseenter", () => {
            box.style.backgroundColor = randomColor();
        });
        container.appendChild(box);
    }
}
grid()

function changeGrid() {
    let number = prompt("Input a Number!", "1 - 100");
    let size = 100 / number;
    if (!number) {
        
    }else if (number > 100) {
        alert("Please input a number no more than 100!")
    }else {
        container.innerHTML = "";
        for (let i = 0; i < number * number; i++) {
            const box = document.createElement("div");
            box.classList.add("box");
            box.style.flexBasis = `${size}%`;
            box.style.aspectRatio = "1";
            box.addEventListener("mouseenter", () => {
                box.style.backgroundColor = randomColor();
            });
            container.appendChild(box);
        }
    }

}

const btn = document.querySelector("#button");
btn.addEventListener("click", changeGrid);