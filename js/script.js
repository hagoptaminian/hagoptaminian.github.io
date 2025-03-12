document.querySelectorAll(".experiment-heading").forEach((title) => {
  title.addEventListener("click", () => {
    title.nextElementSibling.classList.toggle("show");
  });
});
