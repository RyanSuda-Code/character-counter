const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

textInput.addEventListener("input", function() {
  let length = textInput.value.length;

  if (length > 50) {
    textInput.value = textInput.value.slice(0, 50);
    length = 50;
  }

  charCount.textContent = `Character Count: ${length}/50`;

  if (length === 50) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "black";
  }
}) 