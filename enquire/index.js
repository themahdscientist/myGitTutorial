function main() {
  const menu = document.getElementById("menu_wrap");
  const close = document.getElementById("close_wrap");
  const closeBtn = document.getElementById("close");
  menu.addEventListener("click", function () {
    document.getElementById("home_nav").style.left = "0";
    menu.style.display = "none";
    closeBtn.classList.add("active");
  });

  close.addEventListener("click", function () {
    document.getElementById("home_nav").style.left = "-500px";
    menu.style.display = "block";
    closeBtn.classList.remove("active");
  });
}

main();
