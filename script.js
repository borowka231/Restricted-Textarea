const textarea = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const maxLength = 250;

function updateBorder() {
  const length = textarea.value.length;
  charCount.textContent = length;

  if (document.activeElement === textarea) {
    if (length >= maxLength) {
      textarea.style.border = "2px solid #fa1010ff";
      textarea.style.color = "#fa1010ff";
    else if (length >= 200) {
      textarea.style.border = "2px solid #fae510ff";
    } 
    } else {
      textarea.style.border = "2px solid black";
      textarea.style.color = "black";
    }
  } else {
    textarea.style.border = "2px solid black";
  }
}

textarea.addEventListener("input", updateBorder);

