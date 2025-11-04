const faqs = document.querySelectorAll('.faq-question');

faqs.forEach(btn => {
  btn.addEventListener('click', () => {
    const faq = btn.parentElement;
    faq.classList.toggle('open');
  });
});
