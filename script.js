const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  btn.innerText = "Loading...";
  btn.disabled = true;

  setTimeout(() => {
    btn.innerText = "Explore Platform";
    btn.disabled = false;
  }, 900);
});
