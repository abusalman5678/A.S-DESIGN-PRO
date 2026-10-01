/* =========================================
   A.S DESIGN PRO
   MAIN JAVASCRIPT
========================================= */

"use strict";


/* =========================================
   CONFIGURATION
========================================= */

const WHATSAPP_NUMBER = "2349115456208";

const BUSINESS_NAME = "A.S DESIGN PRO";

const BUSINESS_EMAIL = "asdesignpro@gmail.com";


/* =========================================
   PAGE LOADER
========================================= */

window.addEventListener("load", function () {

  const loader = document.getElementById("loader");

  setTimeout(function () {

    if (loader) {
      loader.classList.add("hide");
    }

  }, 600);

});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");

const mainNav = document.getElementById("mainNav");

if (menuBtn && mainNav) {

  menuBtn.addEventListener("click", function () {

    mainNav.classList.toggle("open");

  });


  const navLinks =
    document.querySelectorAll(".nav-link");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      mainNav.classList.remove("open");

    });

  });

}


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header = document.getElementById("header");

function handleHeader() {

  if (!header) {
    return;
  }

  if (window.scrollY > 40) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }

}

window.addEventListener(
  "scroll",
  handleHeader,
  { passive: true }
);

handleHeader();


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
  document.querySelectorAll("section[id]");

const navLinks =
  document.querySelectorAll(".nav-link");

function updateActiveNav() {

  const scrollPosition =
    window.scrollY + 150;

  sections.forEach(function (section) {

    const sectionTop =
      section.offsetTop;

    const sectionHeight =
      section.offsetHeight;

    const sectionId =
      section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {

      navLinks.forEach(function (link) {

        link.classList.remove("active");

      });

      const activeLink =
        document.querySelector(
          '.nav-link[href="#' +
          sectionId +
          '"]'
        );

      if (activeLink) {
        activeLink.classList.add("active");
      }

    }

  });

}

window.addEventListener(
  "scroll",
  updateActiveNav,
  { passive: true }
);


/* =========================================
   SERVICE BUTTONS
========================================= */

const serviceButtons =
  document.querySelectorAll(
    ".service-btn"
  );

const serviceSelect =
  document.getElementById("service");

const requestSection =
  document.getElementById("request");

serviceButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const selectedService =
      button.getAttribute("data-service");

    if (serviceSelect && selectedService) {

      serviceSelect.value =
        selectedService;

    }

    if (requestSection) {

      requestSection.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});


/* =========================================
   PACKAGE BUTTONS
========================================= */

const priceButtons =
  document.querySelectorAll(
    ".price-btn"
  );

priceButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const packageName =
      button.getAttribute("data-package");

    const description =
      document.getElementById("description");

    if (description && packageName) {

      description.value =
        "I am interested in: " +
        packageName +
        "\n\nProject details: ";

    }

    if (requestSection) {

      requestSection.scrollIntoView({
        behavior: "smooth"
      });

    }

    setTimeout(function () {

      if (description) {
        description.focus();
      }

    }, 700);

  });

});


/* =========================================
   PORTFOLIO FILTER
========================================= */

const filterButtons =
  document.querySelectorAll(
    ".filter-btn"
  );

const portfolioItems =
  document.querySelectorAll(
    ".portfolio-item"
  );

filterButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const filter =
      button.getAttribute("data-filter");

    filterButtons.forEach(function (btn) {

      btn.classList.remove("active");

    });

    button.classList.add("active");


    portfolioItems.forEach(function (item) {

      const category =
        item.getAttribute("data-category");

      if (
        filter === "all" ||
        category === filter
      ) {

        item.classList.remove("hidden");

      } else {

        item.classList.add("hidden");

      }

    });

  });

});


/* =========================================
   PORTFOLIO MODAL
========================================= */

const portfolioModal =
  document.getElementById(
    "portfolioModal"
  );

const modalClose =
  document.getElementById(
    "modalClose"
  );

const modalTitle =
  document.getElementById(
    "modalTitle"
  );

const modalPreview =
  document.getElementById(
    "modalPreview"
  );

const modalRequest =
  document.getElementById(
    "modalRequest"
  );


function openPortfolioModal(item) {

  if (!portfolioModal) {
    return;
  }

  const title =
    item.getAttribute("data-title") ||
    "Portfolio";

  const category =
    item.getAttribute("data-category") ||
    "Design";

  if (modalTitle) {

    modalTitle.textContent =
      title;

  }

  if (modalPreview) {

    modalPreview.innerHTML =
      "<div>" +
      "<span style=\"display:block;font-size:11px;letter-spacing:3px;margin-bottom:10px;\">" +
      category.toUpperCase() +
      "</span>" +
      BUSINESS_NAME +
      "</div>";

  }

  portfolioModal.classList.add("show");

  document.body.classList.add(
    "modal-open"
  );

}


portfolioItems.forEach(function (item) {

  item.addEventListener("click", function () {

    openPortfolioModal(item);

  });

});


function closePortfolioModal() {

  if (!portfolioModal) {
    return;
  }

  portfolioModal.classList.remove(
    "show"
  );

  document.body.classList.remove(
    "modal-open"
  );

}


if (modalClose) {

  modalClose.addEventListener(
    "click",
    closePortfolioModal
  );

}


if (portfolioModal) {

  portfolioModal.addEventListener(
    "click",
    function (event) {

      if (
        event.target ===
        portfolioModal
      ) {

        closePortfolioModal();

      }

    }
  );

}


document.addEventListener(
  "keydown",
  function (event) {

    if (event.key === "Escape") {

      closePortfolioModal();

    }

  }
);


/* =========================================
   MODAL REQUEST BUTTON
========================================= */

if (modalRequest) {

  modalRequest.addEventListener(
    "click",
    function () {

      closePortfolioModal();

      setTimeout(function () {

        if (requestSection) {

          requestSection.scrollIntoView({
            behavior: "smooth"
          });

        }

      }, 100);

    }
  );

}


/* =========================================
   DESIGN REQUEST FORM
========================================= */

const designForm =
  document.getElementById(
    "designForm"
  );

const formMessage =
  document.getElementById(
    "formMessage"
  );


if (designForm) {

  designForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();


      const fullName =
        document.getElementById(
          "fullName"
        ).value.trim();


      const phone =
        document.getElementById(
          "phone"
        ).value.trim();


      const email =
        document.getElementById(
          "email"
        ).value.trim();


      const service =
        document.getElementById(
          "service"
        ).value;


      const size =
        document.getElementById(
          "size"
        ).value.trim();


      const deadline =
        document.getElementById(
          "deadline"
        ).value;


      const budget =
        document.getElementById(
          "budget"
        ).value;


      const description =
        document.getElementById(
          "description"
        ).value.trim();


      const agree =
        document.getElementById(
          "agree"
        ).checked;


      if (!fullName) {

        showFormMessage(
          "Please enter your full name."
        );

        return;

      }


      if (!phone) {

        showFormMessage(
          "Please enter your phone or WhatsApp number."
        );

        return;

      }


      if (!service) {

        showFormMessage(
          "Please select a service."
        );

        return;

      }


      if (!description) {

        showFormMessage(
          "Please describe your project."
        );

        return;

      }


      if (!agree) {

        showFormMessage(
          "Please confirm the information provided."
        );

        return;

      }


      const message =
`*${BUSINESS_NAME} — DESIGN REQUEST*

Hello A.S DESIGN PRO,

I would like to request a design service.

*CLIENT INFORMATION*
Name: ${fullName}
Phone/WhatsApp: ${phone}
Email: ${email || "Not provided"}

*PROJECT INFORMATION*
Service: ${service}
Preferred Size: ${size || "Not specified"}
Deadline: ${deadline || "Not specified"}
Budget: ${budget || "Not specified"}

*PROJECT DESCRIPTION*
${description}

Thank you.
`;


      const whatsappURL =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);


      showFormMessage(
        "Opening WhatsApp..."
      );


      setTimeout(function () {

        window.open(
          whatsappURL,
          "_blank",
          "noopener"
        );

      }, 500);

    }
  );

}


/* =========================================
   FORM MESSAGE
========================================= */

function showFormMessage(message) {

  if (!formMessage) {
    return;
  }

  formMessage.textContent =
    message;

  formMessage.classList.add(
    "show"
  );

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );


if (
  "IntersectionObserver" in window
) {

  const observer =
    new IntersectionObserver(
      function (entries) {

        entries.forEach(
          function (entry) {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.1
      }
    );


  revealElements.forEach(
    function (element) {

      observer.observe(element);

    }
  );

} else {

  revealElements.forEach(
    function (element) {

      element.classList.add(
        "visible"
      );

    }
  );

}


/* =========================================
   BACK TO TOP
========================================= */

const backTop =
  document.getElementById(
    "backTop"
  );


function handleBackTop() {

  if (!backTop) {
    return;
  }

  if (window.scrollY > 500) {

    backTop.classList.add(
      "show"
    );

  } else {

    backTop.classList.remove(
      "show"
    );

  }

}


window.addEventListener(
  "scroll",
  handleBackTop,
  { passive: true }
);


if (backTop) {

  backTop.addEventListener(
    "click",
    function () {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


/* =========================================
   YEAR
========================================= */

const yearElement =
  document.getElementById(
    "year"
  );

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================================
   PREVENT INVALID DEADLINE
========================================= */

const deadlineInput =
  document.getElementById(
    "deadline"
  );

if (deadlineInput) {

  const today =
    new Date();

  const year =
    today.getFullYear();

  const month =
    String(
      today.getMonth() + 1
    ).padStart(2, "0");

  const day =
    String(
      today.getDate()
    ).padStart(2, "0");

  deadlineInput.min =
    `${year}-${month}-${day}`;

}


/* =========================================
   PHONE INPUT CLEANUP
========================================= */

const phoneInput =
  document.getElementById(
    "phone"
  );

if (phoneInput) {

  phoneInput.addEventListener(
    "input",
    function () {

      this.value =
        this.value.replace(
          /[^0-9+\s-]/g,
          ""
        );

    }
  );

}


/* =========================================
   LOG
========================================= */

console.log(
  `${BUSINESS_NAME} website loaded successfully.`
);
