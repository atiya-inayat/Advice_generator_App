const adviceNo = document.getElementById("Advice");
const adviseText = document.getElementById("advice_text");
const newQuoteBtn = document.querySelector(".bottom-icon");

async function getQuotes() {
  const response = await axios.get("https://api.adviceslip.com/advice");

  const adviceNum = response.data.slip.id;
  const advice = response.data.slip.advice;

  adviceNo.innerHTML = adviceNum;
  adviseText.innerHTML = advice;
}

newQuoteBtn.addEventListener("click", (e) => {
  //   e.preventDefault();
  getQuotes();
});

window.onload = () => {
  getQuotes();
};
