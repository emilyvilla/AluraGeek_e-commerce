const spans = document.querySelectorAll(".container__banner-nav");
let currentIndex = 0;
let intervalId;

 function cambiarBanner() {
  spans[currentIndex].classList.remove("container__banner-nav--select");
  currentIndex = (currentIndex + 1) % spans.length;
  spans[currentIndex].classList.add("container__banner-nav--select");
  const header = document.querySelector("section.options_");
  header.className = `options_ banner_${spans[currentIndex].id}`;
}

function handleSpanClick() {
  const spanId = this.id;
  spans.forEach((s, index) => {
    if (s.id === spanId) {
      s.classList.add("container__banner-nav--select");
      currentIndex = index;
    } else {
      s.classList.remove("container__banner-nav--select");
    }
  });

  const header = document.querySelector("section.options_");
  header.className = `options_ banner_${spanId}`;
  
  clearInterval(intervalId); 
  intervalId = setInterval(cambiarBanner, 2000); 
}

intervalId = setInterval(cambiarBanner, 2000);

spans.forEach((span) => {
  span.addEventListener("click", handleSpanClick);
});
