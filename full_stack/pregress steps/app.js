const line = document.querySelectorAll(".line");
const circle = document.querySelectorAll(".circle");
const button = document.querySelectorAll("button");

let temp = 0;

const handleNextBtn = () => {
  temp += 1;
  rmHighLight();
  if (temp + 1 === circle.length) {
    button[1].classList.add("dis");
    button[1].setAttribute("disabled", "");
  }
  circle[temp].classList.add("active");
  line[Math.floor((temp - 1 + temp) / 2)].classList.add("active");
};

const handlePrevBtn = () => {
  temp -= 1;
  rmHighLight();
  if (temp === 0) {
    button[0].classList.add("dis");
    button[0].setAttribute("disabled", "");
  }
  circle[temp + 1].classList.remove("active");
  line[Math.floor((temp + 1 + temp) / 2)].classList.remove("active");
};

const rmHighLight = () => {
  //   for (let i = 0; i < line.length; i++) {
  //     line[i].classList.remove("active");
  //   }
  //   for (let i = 0; i < circle.length; i++) {
  //     circle[i].classList.remove("active");
  //   }
  for (let i = 0; i < button.length; i++) {
    button[i].classList.remove("dis");
    button[i].removeAttribute("disabled", "");
  }
};
