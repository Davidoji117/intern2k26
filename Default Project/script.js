document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById("navbar");
  var menuToggle = document.getElementById("menuToggle");
  var navLinks = document.getElementById("navLinks");
  var year = document.getElementById("year");
  var form = document.getElementById("contactForm");
  var formStatus = document.getElementById("formStatus");

  if (year) year.textContent = new Date().getFullYear();

  window.addEventListener("scroll", function () {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 40);
  });

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var service = document.getElementById("service").value;
    var message = document.getElementById("message").value.trim();

    if (!name || !phone || !message) {
      formStatus.style.color = "#c8102e";
      formStatus.textContent = "Please fill in all required fields.";
      return;
    }

    var subject = encodeURIComponent("Quote request: " + service);
    var body = encodeURIComponent(
      "Name: " + name + "\nPhone: " + phone + "\nService: " + service + "\nMessage: " + message
    );
    window.location.href = "mailto:info@clinsmultimedia.com?subject=" + subject + "&body=" + body;

    formStatus.style.color = "#15803d";
    formStatus.textContent = "Opening your email app... Thank you, " + name + "!";
    form.reset();
  });
});
