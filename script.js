const faqs = document.querySelectorAll('.faq-question');

faqs.forEach(btn => {
  btn.addEventListener('click', () => {
    const faq = btn.parentElement;
    faq.classList.toggle('open');
  });
});


const heroImages = [
  "./img/slide1.jpg",
  "./img/slide2.jpg",
  "./img/slide3.jpg"
];

let currentHeroIndex = 0;
const heroImgEl = document.getElementById("hero-img");
const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", () => {
  currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
  heroImgEl.src = heroImages[currentHeroIndex];
});
