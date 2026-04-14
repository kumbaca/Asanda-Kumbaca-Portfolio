document.addEventListener("DOMContentLoaded", () => {

  console.log("JS LOADED");

  // ===== NORMAL UI =====
  const heroBtn = document.getElementById("heroBtn");
  const servicesBtn = document.getElementById("servicesBtn");
  const portfolioBtn = document.getElementById("portfolioBtn");
  const portfolio = document.getElementById("portfolio");
  const kitsBtn = document.getElementById("kitsBtn");

  if (heroBtn) {
    heroBtn.onclick = () => {
      portfolio.scrollIntoView({ behavior: "smooth" });
    };
  }

  if (servicesBtn) {
    servicesBtn.onclick = () => {
      window.open("https://web.whatsapp.com/", "_blank");
    };
  }

  if (portfolioBtn) {
    portfolioBtn.onclick = (e) => {
      e.preventDefault();
      document.querySelectorAll(".portfolio-item")
        .forEach(el => el.classList.toggle("active"));
    };
  }

  if (kitsBtn) {
    kitsBtn.onclick = (e) => {
      e.preventDefault();
      window.open("https://www.canva.com/templates/EAEvfdv6Qrg/", "_blank");
    };
  }

  // ===== VUE =====
  const { createApp } = Vue;

  createApp({
    data() {
      return {
        form: {
          email: "",
          projectName: ""
        },
        errors: {},
        showModal: false
      };
    },
    methods: {
      submitForm() {
        console.log("WORKING CLICK");

        this.errors = {};

        if (!this.form.email) {
          this.errors.email = "Email is required";
        }

        if (!this.form.projectName) {
          this.errors.projectName = "Project name is required";
        }

        if (Object.keys(this.errors).length === 0) {
          this.showModal = true;
        }
      },
      resetForm() {
        this.form.email = "";
        this.form.projectName = "";
        this.errors = {};
      }
    }
  }).mount("#app");

});