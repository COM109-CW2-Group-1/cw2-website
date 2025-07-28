let darkIcon = document.querySelector(".dark-icon");
let lightIcon = document.querySelector(".light-icon");

function toggleDarkMode() {
  console.log("toggled");
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    darkIcon.style.display = "none";
    lightIcon.style.display = "block";
    localStorage.setItem("theme", "dark");
  } else {
    darkIcon.style.display = "block";
    lightIcon.style.display = "none";
    localStorage.setItem("theme", "light");
  }
}

if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  darkIcon.style.display = "none";
  lightIcon.style.display = "block";
} else {
  document.documentElement.classList.remove("dark");
  darkIcon.style.display = "block";
  lightIcon.style.display = "none";
}
