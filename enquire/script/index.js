const nav = document.getElementById("home_nav");
const ham = document.getElementById("ham_img");
const main = document.getElementById("home_main_items");
const close = document.getElementById("close_img");

ham.addEventListener("click", nav_opener);
close.addEventListener("click", nav_closer);

main.classList.add("no_display");
close.classList.add("no_display");

function nav_opener() {
  main.classList.toggle("no_display");
  close.classList.toggle("no_display");
  ham.classList.toggle("no_display");
}

function nav_closer() {
  main.classList.toggle("no_display");
  close.classList.toggle("no_display");
  ham.classList.toggle("no_display");
}
