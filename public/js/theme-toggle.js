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
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light");
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

    console.log("Checking for icons...");
    console.time("Icon check duration");
    if (darkIcon && lightIcon) {
      console.timeEnd("Icon check duration");
    }
    // This check every 100ms might just be redundant :// Could just use a MutationObserver like copilot suggested OR remove the check entirely.
  }, 100); // Check every 100ms
});
