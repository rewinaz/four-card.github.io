const billInp = document.querySelector("#bill-inp");
const peopleNumInp = document.querySelector("#people-Inp");
const tipValCustom = document.querySelector(".custom");
const tipValBtn = document.querySelectorAll(".btn");
const resetBtn = document.querySelector(".btn-large");

const tipAns = document.querySelector("#tip-answer");
const totalAns = document.querySelector("#total-answer");

let bill = 1,
  person = 0,
  tip = 0;

tipValBtn.forEach((tipBtn) => {
  tipBtn.addEventListener("click", (e) => {
    e.preventDefault();
    tip = parseFloat(tipBtn.textContent) / 100;
    calculateTip();
  });
});

tipValCustom.addEventListener("input", (e) => {
  tip = parseFloat(e.target.value) / 100;
  calculateTip();
});

billInp.addEventListener("input", (e) => {
  bill = parseFloat(e.target.value);
  if (bill === 0) {
    billInp.classList.add("error");
  } else {
    if (billInp.classList.contains("error")) {
      billInp.classList.remove("error");
    }
    calculateTip();
  }
});
peopleNumInp.addEventListener("input", (e) => {
  person = parseFloat(e.target.value);
  if (person === 0) {
    peopleNumInp.classList.add("error");
  } else {
    if (peopleNumInp.classList.contains("error")) {
      peopleNumInp.classList.remove("error");
    }
    calculateTip();
  }
});

resetBtn.addEventListener("click", () => {
  bill = 0;
  person = 0;
  tip = 0;
  tipAns.textContent = "$0.00";
  totalAns.textContent = "$0.00";
  billInp.value = 0;
  peopleNumInp.value = 0;
  tipValCustom.value = "Custom";
});

const calculateTip = () => {
  let tipPerPerson = (bill * tip) / person;
  let totalPerPerson = bill / person + tipPerPerson;

  if (tipPerPerson && totalPerPerson) {
    tipAns.textContent = "$" + tipPerPerson;
    totalAns.textContent = "$" + totalPerPerson;
  }
};
