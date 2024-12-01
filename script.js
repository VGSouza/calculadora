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

function appendValue(value) {
  currentValue += value;
  updateDisplay();
}

function calculate() {
  try {
      currentValue = eval(currentValue).toString();
      updateDisplay();
  } catch (e) {
      currentValue = "Erro";
      updateDisplay();
  }
}

function clearDisplay() {
  currentValue = "";
  updateDisplay();
}

function deleteLast() {
  currentValue = currentValue.slice(0, -1);
  updateDisplay();
}

function deleteChar() {
  currentValue = currentValue.replace(/[\d.-]+$/, '');
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
  document.getElementById("display").textContent = currentValue || "0";
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

function calculate() {
    try {
        currentValue = eval(currentValue).toString();
    } catch (e) {
        currentValue = "Erro";
    }
    updateDisplay();
}
