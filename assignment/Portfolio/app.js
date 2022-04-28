// Dark Mode
const checkbox = document.querySelector(".checkbox");
checkbox.addEventListener("click", toggleClick);

console.log(click);

function click() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
}

function toggleClick() {
  document.body.classList.toggle("dark");
}
