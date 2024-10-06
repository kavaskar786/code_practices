const Cold = () => <h1>its cold outside</h1>;
const Nice = () => <h1>its nice outside</h1>;
const Hot = () => <h1>its nice outside</h1>;
const Weather = ({ temperature }) => {
  if (temperature < 15) {
    return Cold();
  } else if (temperature <= 15 && temperature <= 25) {
    return Nice();
  } else {
    return Hot();
  }
};
export default Weather;
