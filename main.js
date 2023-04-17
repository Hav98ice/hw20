function loadHTML(file, elementId) {
  fetch(file)
    .then((response) => {
      if (response.status === 200) {
        return response.text();
      } else {
        throw new Error("Error loading file: " + file);
      }
    })
    .then((htmlContent) => {
      document.getElementById(elementId).innerHTML = htmlContent;
    })
    .catch((error) => {
      console.error(error);
    });
}

// Load header and footer
document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header.html", "header-placeholder");
  loadHTML("footer.html", "footer-placeholder");
});

window.toggleMenu = function () {
  const dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
};

function displayModal() {
  const thankYouModal = document.getElementById("thankYouModal");
  thankYouModal.style.display = "block";

  setTimeout(() => {
    thankYouModal.style.display = "none";
  }, 3000);
}
