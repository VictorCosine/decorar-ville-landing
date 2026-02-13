document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);
  });
});


const btn = document.getElementById("toggleReviews");
const hiddenReviews = document.querySelectorAll(".hidden");

btn.addEventListener("click", () => {
  hiddenReviews.forEach(review => {
    review.classList.toggle("hidden");
  });

  if (btn.innerText === "Ver mais avaliações") {
    btn.innerText = "Ver menos avaliações";
  } else {
    btn.innerText = "Ver mais avaliações";
  }
});