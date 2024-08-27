const display = document.getElementById("input-box");
const buttons = document.getElementsByClassName("calc");
let currentEquation = "";

Array.from(buttons).forEach((e) => {
  e.addEventListener("click", () => {
    const value = e.innerText; 

    if (value === "=") {
      try {
        if (currentEquation !== "") {
          currentEquation = eval(currentEquation).toFixed(3).toString();
          display.value = currentEquation;
        }
      } catch (error) {
        display.value = "Error";
        currentEquation = "";
      }
    } else if (value === "RESET") {
      currentEquation = "";
      display.value = currentEquation;
    } else if (value === "DEL") {
      currentEquation = currentEquation.slice(0, -1);
      display.value = currentEquation;
    } else if (value === "X") {
      if (
        currentEquation.length !== 0 &&
        !["+", "-", "*", "/"].includes(currentEquation.slice(-1))
      ) {
        currentEquation += "*";
        display.value = currentEquation;
      }
    } else if (["+", "*", "/"].includes(value)) {
      if (
        currentEquation.length !== 0 &&
        !["+", "*", "/"].includes(currentEquation.slice(-1))
      ) {
        currentEquation += value;
        display.value = currentEquation;
      }
    } else if (value === "-") {
      if (
        currentEquation === "" ||
        !["-"].includes(currentEquation.slice(-1)) ||
        ["+", "*", "/"].includes(currentEquation.slice(-1))
      ) {
        currentEquation += value;
        display.value = currentEquation;
      }
    } else if (value === ".") {
      const lastNumber = currentEquation.split(/[\+\-\*\/]/).pop();
      if (!lastNumber.includes(".")) {
        currentEquation += value;
        display.value = currentEquation;
      }
    } else {
      currentEquation += value;
      display.value = currentEquation;
    }
  });
});
