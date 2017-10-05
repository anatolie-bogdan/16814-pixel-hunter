const mainScreen = document.querySelector('main.central');
const screenTemplates = document.getElementsByTagName("template");
let currentScreen = 0;

function showTemplate(templateNumber) {
  if (screenTemplates[templateNumber]) {
    mainScreen.innerHTML = screenTemplates[templateNumber].innerHTML;
  }
}

function changeTemplatesOnKeypress(e) {
  if (e.altKey && e.keyCode === 39) {
    currentScreen += 1;
    showTemplate(currentScreen);
  } else if (e.altKey && e.keyCode === 37) {
    currentScreen -= 1;
    showTemplate(currentScreen);
  }
}

showTemplate(currentScreen);
document.onkeydown = changeTemplatesOnKeypress;

