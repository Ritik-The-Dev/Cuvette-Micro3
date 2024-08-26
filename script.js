const display = document.getElementById("input-box");
const buttons = document.getElementsByClassName("calc");
let currentEquation = "";

Array.from(buttons).forEach((e) => {
  e.addEventListener("click", () => {
    if (e.innerText === "=") {
      try {
        currentEquation = eval(currentEquation).toFixed(3).toString();
        display.value = currentEquation;
      } catch (error) {
        display.value = "Error";
        currentEquation = "";
      }
    } else if (e.innerText === "RESET") {
      currentEquation = "";
      display.value = currentEquation;
    } else if (e.innerText === "DEL") {
      currentEquation = currentEquation.slice(0, -1);
      display.value = currentEquation;
    } else if (e.innerText === "X") {
      currentEquation += "*";
      display.value = currentEquation;
    } else {
      currentEquation += e.innerText;
      display.value = currentEquation;
    }
  });
});
