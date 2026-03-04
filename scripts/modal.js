export function initTicketModal() {
  const modal = document.querySelector("#ticketModal");
  const openButtons = document.querySelectorAll(".hero__button, .concerts__button");
  const closeBtn = document.querySelector("#closeTicketModal");
  const body = document.body;

  if (!modal || openButtons.length === 0) return;

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.showModal();
      body.classList.add("is-lock");
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.close();
    });
  }

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });

  modal.addEventListener("close", () => {
    body.classList.remove("is-lock");
  });
}
