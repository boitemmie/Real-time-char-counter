const input = document.querySelector("#text-input");
const paragraph = document.querySelector("#char-count");

input.addEventListener("input", () => {
  let value = input.value;

  const currentLength = value.length;

  if (currentLength > 50) {
    value = value.slice(0, 50);
    return;
  }

  paragraph.textContent = `Character Count: ${currentLength}/50`;
  if (currentLength === 50) {
    value = value.trimEnd();
    paragraph.style.color = "red";
    console.log(value);
  } else {
    paragraph.style.color = "";
  }
});

// console.log(paragraph.textContent.split(" ")[2].split("/")[0]);
