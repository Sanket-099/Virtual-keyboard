const body = document.body;
const text = document.getElementById("text");

text.innerText = "";

function getKeyElement(event) {
  let keyIdentifier;
  switch (event.key) {
    case ' ':
      keyIdentifier = 'Space';
      break;
    case '\\':
      keyIdentifier = 'Backslash';
      break;
    default:
      keyIdentifier = event.key;
      break;
  }
  return document.getElementById(keyIdentifier);
}

body.addEventListener("keydown", function(event) {
  const keyElement = getKeyElement(event);

  if (keyElement) {
    keyElement.classList.add("active");
  }

  switch (event.key) {
    case "Backspace":
      text.innerText = text.innerText.slice(0, -1);
      break;
    case "Enter":
      text.innerText += '\n';
      break;
    case "Tab":
      text.innerText += '\t';
      break;
    case "CapsLock":
    case "Shift":
    case "Control":
    case "Alt":
    case "Meta": 
    case "Escape":
    case "ArrowUp":
    case "ArrowDown":
    case "ArrowLeft":
    case "ArrowRight":
      break;
    default:
      text.innerText += event.key;
      break;
  }
});

body.addEventListener("keyup", function(event) {
  const keyElement = getKeyElement(event);

  if (keyElement) {
    keyElement.classList.remove("active");
  }
});


body.addEventListener("keydown", function (event) {
  console.log(event.key);
  const key = document.getElementById((event.key));
  if (key) {
    key.style.backgroundColor = "black";
    key.style.color = "white";
  }
});

body.addEventListener("keyup", function (event) {
  const key = document.getElementById(event.key);
  if (key) {
    key.style.backgroundColor = "white";
    key.style.color = "black";
  }

});

