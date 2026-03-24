const menuButton = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const contactForm = document.getElementById("contact-form");

if (menuButton && navbar) {
  menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });

  navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("show");
    });
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("full-name")?.value.trim() || "";
    const emailAddress = document.getElementById("email-address")?.value.trim() || "";
    const mobileNumber = document.getElementById("mobile-number")?.value.trim() || "";
    const subjectInput = document.getElementById("email-subject")?.value.trim() || "Portfolio Contact";
    const message = document.getElementById("message")?.value.trim() || "";

    const recipientEmail = "sireeshaambapuram@gmail.com";
    const subject = encodeURIComponent(subjectInput);
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${emailAddress}\nMobile: ${mobileNumber}\n\nMessage:\n${message}`
    );

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipientEmail
    )}&su=${subject}&body=${body}`;

    window.open(gmailComposeUrl, "_blank", "noopener");
  });
}

