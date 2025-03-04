const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let index = 0;

nextBtn.addEventListener("click", () => {
  if (index < carousel.children.length - 1) {
    index++;
    carousel.style.transform = `translateX(-${index * 270}px)`;
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    carousel.style.transform = `translateX(-${index * 270}px)`;
  }
});
