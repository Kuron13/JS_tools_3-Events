import "./css/style.css";

import tenguIcon from "./img/goblin.png";

function tenguImage() {
  //const tengu = new Image();
  const tengu = document.createElement('img');
  tengu.classList.add('tengu');
  tengu.src = tenguIcon;
  tengu.alt = "Тенгу";
  console.log(tengu, 'Тенгу создан')
  return tengu
}

document.body.append(tenguImage());

import "./js/app";