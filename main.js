// 1. Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// 2. Validate contact form
function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    showPopup("Please fill in all fields.");
    return false;
  }

  if (!email.includes("@")) {
    showPopup("Please enter a valid email.");
    return false;
  }

  showPopup("Thank you for contacting us!");
  document.getElementById("contact-form").reset();
  return true;
}

// 3. Highlight active nav link
function highlightActivePage() {
  const links = document.querySelectorAll("nav a");
  const current = window.location.pathname;

  links.forEach(link => {
    if (link.href.includes(current)) {
      link.classList.add("text-yellow-300", "font-bold");
    }
  });
}

// 4. Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 5. Toggle light/dark theme
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// 6. Filter menu items
function filterMenu(category) {
  const items = document.querySelectorAll(".menu-item");
  items.forEach(item => {
    item.classList.toggle("hidden", item.dataset.category !== category && category !== "all");
  });
}

// 7. Update cart count
function updateCartCount(count) {
  const cart = document.getElementById("cart-count");
  cart.textContent = count;
}

// 8. Show popup message
function showPopup(message) {
  const popup = document.createElement("div");
  popup.textContent = message;
  popup.className = "fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow";
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 3000);
}

// 9. Validate booking form
function validateBookingForm(event) {
  event.preventDefault();
  const name = document.getElementById("res-name").value.trim();
  const date = document.getElementById("res-date").value;
  const time = document.getElementById("res-time").value;

  if (!name || !date || !time) {
    showPopup("Please complete all booking fields.");
    return false;
  }

  showPopup("Reservation submitted!");
  document.getElementById("booking-form").reset();
  return true;
}

// 10. Load today's specials
function loadSpecials() {
  const specials = ["Paneer Tikka", "Mango Lassi", "Butter Chicken"];
  const container = document.getElementById("specials-list");

  specials.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.className = "mb-2 text-lg";
    container.appendChild(li);
  });
}

// Call when the page loads
window.onload = function () {
  highlightActivePage();
  loadSpecials();
}