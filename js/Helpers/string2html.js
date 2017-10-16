// String to HTML Element method

export default (string) => {
  let template = document.createElement(`template`);
  template.innerHTML = string;
  return template.content.childNodes;
};
