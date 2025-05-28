const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit-rating");
const rateAgain = document.getElementById("rate-again");
const ratings = document.querySelectorAll(".btn");
const actualRating = document.getElementById("rating");

let selectedRating = null;

// Visual effect appraisal selection
ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    // Removes previous selection
    ratings.forEach((btn) => btn.classList.remove("selected"));

    // Mark the new selection
    rating.classList.add("selected");
    selectedRating = rating.innerHTML;
    actualRating.innerHTML = selectedRating;
  });
});

// Send calification
submitButton.addEventListener("click", () => {
  if (!selectedRating) {
    alert("Por favor seleccioná una calificación antes de enviar.");
    return;
  }

  mainContainer.style.display = "none";
  thanksContainer.classList.remove("hidden");
});

// Calificate again
rateAgain.addEventListener("click", () => {
  mainContainer.style.display = "block";
  thanksContainer.classList.add("hidden");

  // State reset
  selectedRating = null;
  actualRating.innerHTML = "";
  ratings.forEach((btn) => btn.classList.remove("selected"));
});
