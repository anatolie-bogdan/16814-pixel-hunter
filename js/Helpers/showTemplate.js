export default (template) => {
  let mainScreen = document.querySelector(`main.central`);
  mainScreen.innerHTML = template.innerHTML;
};