const d = document;
const button = d.querySelector('.toogleBtn');
const iconoMoon = d.querySelector(".fa-moon")
let darkModeState = false;

const useDark = window.matchMedia("(prefers-color-scheme: dark)");

export default function toggleDarkMode(state) {
  document.documentElement.classList.toggle("dark-mode", state);
  darkModeState = state;
  if (document.documentElement.classList.contains("dark-mode")) {
    iconoMoon.classList.remove("fa-moon");
    iconoMoon.classList.add("fa-sun");
  } else {
    iconoMoon.classList.remove("fa-sun");
    iconoMoon.classList.add("fa-moon");
  }
}

function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}

toggleDarkMode(useDark.matches);
toggleDarkMode(localStorage.getItem("dark-mode") == "true");

useDark.addListener((evt) => toggleDarkMode(evt.matches));

button.addEventListener("click", () => {
  darkModeState = !darkModeState;

  toggleDarkMode(darkModeState);
  setDarkModeLocalStorage(darkModeState);
});




