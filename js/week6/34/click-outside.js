const cardButtons = document.querySelectorAll(".card button");
const modalOuter = document.querySelector(".modal-outer");
const modalInner = document.querySelector(".modal-inner");

// בפעולת הלחיצה אנחנו קוראים לפונקציה הזו, היא בעצם מוסיפה את התמונה אל המסך הצהוב ביחד עם הכיתוב מפעולת הלחיצה
// ואס מוסיפה את הקלאס של OPEN בעצם חושף לנו את המסך
function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest(".card");
  // Grab the image src
  const imgSrc = card.querySelector("img").src;
  const desc = card.dataset.description;
  const name = card.querySelector("h2").textContent;
  // populate the modal with the new info
  modalInner.innerHTML = `
    <img width="600" height="600" src="${imgSrc.replace(
      "200",
      "600"
    )}" alt="${name}"/>
    <p>${desc}</p>
  `;
  // show the modal
  modalOuter.classList.add("open");
}

cardButtons.forEach((button) =>
  button.addEventListener("click", handleCardButtonClick)
);

function closeModal() {
  modalOuter.classList.remove("open");
}
// closest - מכניס לתוכו את כל מה שנמצא בין המחקלות שהטארגט נמצא בתוכן אל תוך מחלקת האב בסוגריים
// במצב כזה כל מה שיהיה מחוץ לתחום הזה יהיה NULL
modalOuter.addEventListener("click", function (event) {
  const isOutside = !event.target.closest(".modal-inner");
  if (isOutside) {
    closeModal();
  }
});

window.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === "Escape") {
    closeModal();
  }
});