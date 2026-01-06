const sidebar = document.querySelector(".sidebar");
const btnToggle = document.getElementById("btnToggle");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

btnToggle?.addEventListener("click", () => {
  sidebar?.classList.toggle("open");
});
