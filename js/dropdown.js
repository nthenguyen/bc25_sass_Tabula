function value(text) {
  document.querySelector(".text-box").value = text;
}

let dropdown = document.querySelector(".dropdown");
dropdown.onclick = () => {
  dropdown.classList.toggle("active");
};
