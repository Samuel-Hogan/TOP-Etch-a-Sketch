const container = document.querySelector("#container");

function grid() {
    for (let i = 0; i < 256; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    }
}
grid()

function changeGrid() {
    let number = prompt("Input a Number!", 64);
    if (!number) {
        
    }else if (number >= 100) {
        alert("Please input a number no more than 100!")
    }else {
        container.innerHTML = "";
        for (let i = 0; i < number * number; i++) {
            const box = document.createElement("div");
            box.classList.add("box");
            container.appendChild(box);
        }
    }

}

const btn = document.querySelector("#button");
btn.addEventListener("click", changeGrid);