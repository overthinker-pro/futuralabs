// Carousel slider
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

// FAQ Toggle button
const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const icon = button.querySelector(".icon");
    const isActive = answer.classList.contains("active");

    document.querySelectorAll(".faq-answer").forEach((a) => {
      a.classList.remove("active");
      a.previousElementSibling.querySelector(".icon").textContent = "+";
    });

    if (!isActive) {
      answer.classList.add("active");
      icon.textContent = "—";
    }
  });
});
