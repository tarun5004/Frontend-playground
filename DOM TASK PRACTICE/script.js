// Task 1: Text Toggle
const para = document.querySelector("#text-toggle");
const btn = document.querySelector("#togglebtn");

btn.addEventListener("click", () => {
    if (para.innerText === "Hello From Tarun!") {
        para.innerText = "Welcome to DOM Practice!";
    } else {
        para.innerHTML = "Hello From Tarun!";
    }
});


// Task 2: Color Changer
const box = document.querySelector(".box");
const colorbtn = document.querySelector("#colorBtn");

const colors = ["red","green", "blue", "yellow", "purple", "orange"];
let index = 0;

colorbtn.addEventListener("click", () => {
    box.style.background = colors[index];
    index = (index + 1) % colors.length;
});

// Task 3: hide and show
const hidebox = document.querySelector("#togglebox");
const hidebtn = document.querySelector("#showHideBtn");

showHideBtn.addEventListener("click", () => {
    if (togglebox.style.display ==="none"){
        togglebox.style.display = "block";
    } else {
        box.style.display = "none";
    }
})

