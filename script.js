const title = document.getElementById("title");
const btnfirst = document.getElementById("btnfirst");

btnfirst.addEventListener("click", () => {
  if (title.textContent === "") {
    title.textContent = "My first btn clicked output......!";
  } else {
    title.textContent = "";
  }
});

const inputs = document.getElementById("inputs");
const abtn = document.getElementById("abtn");
const atitle = document.getElementById("atitle");

abtn.addEventListener("click", () => {});
