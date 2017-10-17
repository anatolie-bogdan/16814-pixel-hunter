export default (string) => {
  let template = document.createElement(`template`);
  template.innerHTML = string;
  return template;
};
