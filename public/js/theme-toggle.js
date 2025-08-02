document.addEventListener("DOMContentLoaded", () => {
  console.log("Theme toggle script loaded");
  const checkIconsExist = setInterval(() => {
    const darkIcon = document.querySelector(".dark-icon");
    const lightIcon = document.querySelector(".light-icon");

    // Only proceed once both icons are available
    if (darkIcon && lightIcon) {
      clearInterval(checkIconsExist); // Stop polling once found

      function updateIcons() {
        if (document.documentElement.classList.contains("dark")) {
          darkIcon.style.display = "none";
          lightIcon.style.display = "block";
        } else {
          darkIcon.style.display = "block";
          lightIcon.style.display = "none";
        }
      }

      function toggleDarkMode() {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const isDark = currentTheme === "dark";

        const newTheme = isDark ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);

        updateIcons();
      }

      // Initial theme load
      const userPref = localStorage.getItem("theme");
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (userPref === "dark" || (!userPref && systemPrefersDark)) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      updateIcons();

      // Hook up the toggle button
      const toggleButton = document.getElementById("themeToggle");
      if (toggleButton) {
        toggleButton.addEventListener("click", toggleDarkMode);
      } else {
        console.warn("#themeToggle button not found");
      }
    }

    if (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // This check every 100ms adds slight overhead, only way to ensure the icons are present
  }, 100); // Check every 100ms
});
