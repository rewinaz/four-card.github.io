const adviceId = document.querySelector(".id");
const adviceText = document.querySelector(".advice");
const button = document.querySelector(".icon-container");

const fetchAdvice = async function () {
  const resonse = await fetch("https://api.adviceslip.com/advice");
  const advice = await resonse.json();
  return advice;
};

const renderAdvice = (result) => {
  let { id, advice } = result;
  adviceId.textContent = `${id}`;
  adviceText.textContent = `${advice}`;
};
const generateAdvice = async () => {
  const result = await fetchAdvice();
  renderAdvice(result.slip);
};

fetchAdvice(); // initial advice
button.addEventListener("click", function (e) {
  generateAdvice();
});
