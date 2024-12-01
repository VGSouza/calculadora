function startApp() {
  const username = document.getElementById("username").value;
  if (username.trim()) {
      document.getElementById("welcome-screen").style.display = "none";
      document.getElementById("app").style.display = "block";
      document.getElementById("greeting").textContent = `Bem-vindo, ${username}!`;
  }
}

function toggleCalculator() {
  const simple = document.getElementById("simple-calculator");
  const scientific = document.getElementById("scientific-calculator");
  if (simple.style.display === "none") {
      simple.style.display = "block";
      scientific.style.display = "none";
  } else {
      simple.style.display = "none";
      scientific.style.display = "block";
  }
}

let currentValue = "";
let isResult = false;

function appendValue(value) {
  if (isResult && !isNaN(value)) {
      currentValue = "";

  }

  currentValue += value;
  isResult = false;
  updateDisplay();
}

function calculate() {
    try {
        currentValue = eval(currentValue).toString();
        isResult = true;
    } catch (e) {
        currentValue = "Erro";
        isResult = false;
    }
    updateDisplay();
}

function clearDisplay() {
  currentValue = "";
  isResult = false;
  updateDisplay();
}

function deleteLast() {
  currentValue = currentValue.slice(0, -1);
  updateDisplay();
}

function deleteChar() {
  currentValue = currentValue.slice(0, -1);
  isResult = false;
  updateDisplay();
}
function toggleSign() {
  if (currentValue) {
      if (currentValue.startsWith("-")) {
          currentValue = currentValue.substring(1);
      } else {
          currentValue = `-${currentValue}`;
      }
      updateDisplay();
  }
}

function updateDisplay() {
  const display = isScientific
      ? document.getElementById("scientific-display")
      : document.getElementById("display");
  display.textContent = currentValue || "0";
}


let isScientific = false;

function toggleCalculator() {
    const simple = document.getElementById("simple-calculator");
    const scientific = document.getElementById("scientific-calculator");

    if (isScientific) {
        simple.style.display = "block";
        scientific.style.display = "none";
    } else {
        simple.style.display = "none";
        scientific.style.display = "block";
    }
    isScientific = !isScientific;
}


function updateDisplay() {
    const display = isScientific
        ? document.getElementById("scientific-display")
        : document.getElementById("display");
    display.textContent = currentValue || "0";
}

