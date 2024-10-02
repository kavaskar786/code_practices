const arr = [
  "Explore The World",
  "Wild Forest",
  "Sunny Beach",
  "City on Winter",
  "Mountains - Clouds",
];
let prevSelectedCard = 1;
const handleClick = (i) => {
  let Card = document.querySelector(`.card${prevSelectedCard}`);
  Card.style.width = `90px`;
  let title = document.querySelector(`.title${prevSelectedCard}`);
  title.style.cssText = `
    display:none;
    `;
  Card = document.querySelector(`.card${i}`);
  Card.style.width = `118.5vh`;
  title = document.querySelector(`.title${i}`);
  title.innerText = arr[i - 1];
  title.style.cssText = `
    display:block;
    position: absolute;
    color: rgb(255, 255, 255);
    left: 20px;
    bottom: 20px;
    font-size: 2rem;
    `;
  prevSelectedCard = i;
};
handleClick(prevSelectedCard);
