const input = document.querySelector("#text-input");
const paragraph = document.querySelector("#char-count");

input.addEventListener("input", () => {
  let value = input.value;

  let currentLength = value.length;

  if (currentLength > 50) {
    value = value.slice(0, 50);
    input.value = value;
    currentLength = input.value.length;
  }

  paragraph.textContent = `Character Count: ${currentLength}/50`;
  if (currentLength === 50) {
    paragraph.style.color = "red";
  } else if (currentLength >= 40) {
    paragraph.style.color = "orange";
  } else {
    paragraph.style.color = "";
  }
});

// console.log(paragraph.textContent.split(" ")[2].split("/")[0]);
