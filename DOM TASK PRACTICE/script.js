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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc

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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc// Task 1: Text Toggle
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
        togglebox.style.display = "none";
    }
})


// Task 4: Rotate Box
const rotateBox = document.querySelector("#rotateBox");
const rotateLeftBtn = document.querySelector("#rotateLeft");
const rotateRightBtn = document.querySelector("#rotateRight");

let angle = 0;

rotateLeftBtn.addEventListener("click", ()=> {
    angle -= 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

rotateRightBtn.addEventListener("click", ()=> {
    angle += 45;
    rotateBox.style.transform = `rotate(${angle}deg)`;
});

// Task 5: Counter
const countValue = document.querySelector("#countValue");
const minusBtn = document.querySelector("#minusBtn");
const plusBtn = document.querySelector("#plusBtn");

let count = 0;
minusBtn.addEventListener("click", () => {
    if (count > 0) {
        count = count - 5;
        countValue.innerText = count;
    }
})
plusBtn.addEventListener("click", () => {
    count = count + 5;
    countValue.innerText = count;
})


// Task 6: Dark and Light Mode
const modeBtn = document.querySelector("#modeBtn");
const darkLightDiv = document.querySelector(".darkLight");
let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!isDark) {
        darkLightDiv.style.background = "#fff";
        darkLightDiv.style.color = "#422828";  
    } else {
        darkLightDiv.style.background = "#c73a3a";
        darkLightDiv.style.color = "#fff";
    }
    isDark = !isDark;
});



// task 7: live input display
const liveInput = document.querySelector("#textInput");
const displayText = document.querySelector('#output');

liveInput.addEventListener("input", () => {
    displayText.innerText = liveInput.value;
});

// task 8: hover effect box

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.background ="lightblue";
    hoverBox.style.transform = "scale(1.2)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    hoverBox.style.borderRadius = "10px";
})

hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.background = "salmon";
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.transition = "all 0.3s ease";    
    hoverBox.style.boxShadow = "none";
    hoverBox.style.borderRadius = "8px";
})

// task 9: Button click and disable
const clickDisableBtn = document.querySelector("#onceBtn")
const paraT = document.querySelector("#paraT")
clickDisableBtn.addEventListener("click", () => {
    paraT.innerText = "Button Clicked!";
    paraT.style.marginTop = "10px";
    clickDisableBtn.disabled = true;
})

// task 10: traffic light 
const trafficlight = doc