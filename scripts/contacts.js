export function initContactForm() {
  const contactForm = document.querySelector(".contacts__form");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (contactForm.checkValidity()) {
      const formData = new FormData(contactForm);
      const queryString = new URLSearchParams(formData).toString();
      const actionUrl = contactForm.getAttribute("action") || window.location.pathname;
      const finalUrl = `${actionUrl}?${queryString}`;

      console.log("Виконується GET запит на:", decodeURIComponent(finalUrl));

      fetch(finalUrl, {
        method: "GET",
      })
        .then(() => {
          alert(`Дякуємо! Форма відправлена. URL запиту: ${decodeURIComponent(finalUrl)}`);
          contactForm.reset();
        })
        .catch((error) => {
          console.error("Помилка при відправці:", error);
          alert("Сталася помилка при відправці форми.");
        });
    } else {
      contactForm.reportValidity();
    }
  });
}
