window.addEventListener("DOMContentLoaded", start);

function start() {
  const text = document.querySelector(".cooltext").textContent;
  document.querySelector(".cooltext").innerHTML = "";
  const textArray = Array.from(text);
  textArray.forEach(wrapIntoSpan);
}

function wrapIntoSpan(char, index) {
  const spanElement = document.createElement("span");
  if (char === " ") {
    spanElement.innerHTML = `&nbsp;`;
  } else {
    spanElement.innerText = char;
  }
  spanElement.style.display = "inline-block";
  spanElement.className = "char";
  spanElement.style.setProperty("--char-index", `${index}`);
  document.querySelector(".cooltext").append(spanElement);
}
