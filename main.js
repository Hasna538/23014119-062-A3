// Toggle navigation menu for mobile
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// Contact form validation
function validateForm(event) {
  event.preventDefault(); // prevent form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return false;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return false;
  }

  alert("Thank you for contacting us!");
  document.getElementById("contact-form") .reset();
  return true;
}