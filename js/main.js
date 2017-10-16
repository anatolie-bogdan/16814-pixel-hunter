import string2html from './Helpers/string2html';

const mainScreen = document.querySelector(`main.central`);
const screenTemplates = document.getElementsByTagName(`template`);
const keyCodes = {
  rightArrow: 39,
  leftArrow: 37
};
let currentTemplate = 0;

function showTemplate(templateNumber = 0) {
  if (screenTemplates[templateNumber]) {
    mainScreen.innerHTML = screenTemplates[templateNumber].innerHTML;
  }
}

function changeTemplatesOnKeypress(e) {
  if (e.altKey && e.keyCode === keyCodes.rightArrow) {
    currentTemplate += 1;
    showTemplate(currentTemplate);
  } else if (e.altKey && e.keyCode === keyCodes.leftArrow) {
    currentTemplate -= 1;
    showTemplate(currentTemplate);
  }
}

showTemplate();
document.onkeydown = changeTemplatesOnKeypress;
