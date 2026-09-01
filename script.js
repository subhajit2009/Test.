document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     LUCIDE ICONS
  ========================= */

  if (window.lucide) {
    lucide.createIcons();
  }


  /* =========================
     ROLE ANIMATION
  ========================= */

  const roleText =
    document.getElementById("roleText");

  const roles = [
    "digital products.",
    "mobile apps.",
    "web experiences.",
    "market tools."
  ];

  let roleIndex = 0;

  setInterval(() => {

    roleIndex =
      (roleIndex + 1) % roles.length;

    roleText.animate(
      [
        {
          opacity:1,
          transform:"translateY(0)"
        },
        {
          opacity:0,
          transform:"translateY(8px)"
        }
      ],
      {
        duration:180,
        fill:"forwards"
      }
    ).finished.then(() => {

      roleText.textContent =
        roles[roleIndex];

      roleText.animate(
        [
          {
            opacity:0,
            transform:"translateY(-8px)"
          },
          {
            opacity:1,
            transform:"translateY(0)"
          }
        ],
        {
          duration:260,
          fill:"forwards"
        }
      );

    });

  },2600);


  /* =========================
     TERMINAL TYPING
  ========================= */

  const typingText =
    document.getElementById("typingText");

  const commands = [
    "build --beautiful",
    "ship --fast",
    "learn --always"
  ];

  let commandIndex = 0;
  let characterIndex = 0;
  let deleting = false;

  function typingLoop(){

    const current =
      commands[commandIndex];

    if(!deleting){

      typingText.textContent =
        current.substring(
          0,
          characterIndex
        );

      characterIndex++;

      if(characterIndex >
         current.length){

        deleting = true;

        setTimeout(
          typingLoop,
          1000
        );

        return;
      }

    }else{

      typingText.textContent =
        current.substring(
          0,
          characterIndex
        );

      characterIndex--;

      if(characterIndex < 0){

        deleting = false;

        characterIndex = 0;

        commandIndex =
          (commandIndex + 1)
          % commands.length;
      }
    }

    setTimeout(
      typingLoop,
      deleting ? 35 : 70
    );
  }

  typingLoop();


  /* =========================
     SCROLL REVEAL
  ========================= */

  const revealObserver =
    new IntersectionObserver(
      entries => {

        entries.forEach(entry => {

          if(entry.isIntersecting){

            entry.target
              .classList
              .add("visible");

            revealObserver.unobserve(
              entry.target
            );
          }

        });

      },
      {
        threshold:.12
      }
    );

  document
    .querySelectorAll(".reveal")
    .forEach(element => {

      revealObserver.observe(element);

    });


  /* =========================
     PROJECT FILTER
  ========================= */

  const filterButtons =
    document.querySelectorAll(
      ".filters button"
    );

  const projectCards =
    document.querySelectorAll(
      ".project-card"
    );

  filterButtons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        filterButtons.forEach(btn => {
          btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
          button.dataset.filter;

        projectCards.forEach(card => {

          const show =
            filter === "all" ||
            card.dataset.category === filter;

          card.classList.toggle(
            "hide",
            !show
          );

          if(show){

            card.animate(
              [
                {
                  opacity:.2,
                  transform:"translateY(12px)"
                },
                {
                  opacity:1,
                  transform:"translateY(0)"
                }
              ],
              {
                duration:300
              }
            );

          }

        });

      }
    );

  });


  /* =========================
     3D PROJECT TILT
  ========================= */

  document
    .querySelectorAll(".tilt")
    .forEach(card => {

      card.addEventListener(
        "pointermove",
        event => {

          if(window.innerWidth < 800)
            return;

          const rect =
            card.getBoundingClientRect();

          const x =
            event.clientX -
            rect.left;

          const y =
            event.clientY -
            rect.top;

          const rotateX =
            ((y / rect.height) - .5)
            * -7;

          const rotateY =
            ((x / rect.width) - .5)
            * 7;

          card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-4px)`;
        }
      );


      card.addEventListener(
        "pointerleave",
        () => {

          card.style.transform = "";

        }
      );

    });


  /* =========================
     MAGNETIC BUTTONS
  ========================= */

  document
    .querySelectorAll(".magnetic")
    .forEach(button => {

      button.addEventListener(
        "pointermove",
        event => {

          if(window.innerWidth < 800)
            return;

          const rect =
            button.getBoundingClientRect();

          const x =
            event.clientX -
            rect.left -
            rect.width / 2;

          const y =
            event.clientY -
            rect.top -
            rect.height / 2;

          button.style.transform =
            `translate(
              ${x * .12}px,
              ${y * .12}px
            )`;
        }
      );


      button.addEventListener(
        "pointerleave",
        () => {

          button.style.transform = "";

        }
      );

    });


  /* =========================
     CURSOR SPOTLIGHT
  ========================= */

  const cursorGlow =
    document.getElementById(
      "cursorGlow"
    );

  window.addEventListener(
    "pointermove",
    event => {

      cursorGlow.style.left =
        event.clientX + "px";

      cursorGlow.style.top =
        event.clientY + "px";

    },
    {
      passive:true
    }
  );


  /* =========================
     MOBILE MENU
  ========================= */

  const menuButton =
    document.getElementById(
      "menuButton"
    );

  const mobileMenu =
    document.getElementById(
      "mobileMenu"
    );

  menuButton.addEventListener(
    "click",
    () => {

      const opened =
        mobileMenu
          .classList
          .toggle("open");

      menuButton.innerHTML =
        opened
        ? '<i data-lucide="x"></i>'
        : '<i data-lucide="menu"></i>';

      if(window.lucide){
        lucide.createIcons();
      }

    }
  );


  mobileMenu
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          mobileMenu
            .classList
            .remove("open");

        }
      );

    });


  /* =========================
     DEMO MARKET MOMENTUM
  ========================= */

  const momentum =
    document.getElementById(
      "momentum"
    );

  setInterval(() => {

    const value =
      70 + Math.random() * 7;

    momentum.textContent =
      value.toFixed(1);

  },1800);


  /* =========================
     MARKET TIMEFRAME BUTTONS
  ========================= */

  document
    .querySelectorAll(
      ".chart-toolbar button"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              ".chart-toolbar button"
            )
            .forEach(btn => {

              btn.classList
                .remove("active");

            });

          button.classList
            .add("active");

        }
      );

    });


  /* =========================
     CONTACT FORM
  ========================= */

  const form =
    document.getElementById(
      "contactForm"
    );

  const formMessage =
    document.getElementById(
      "formMessage"
    );

  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const name =
        document.getElementById(
          "name"
        ).value.trim();

      formMessage.textContent =
        `Thanks, ${name || "there"}! Message UI is working.`;

      form.reset();

    }
  );


  /* =========================
     CURRENT YEAR
  ========================= */

  document.getElementById(
    "year"
  ).textContent =
    new Date().getFullYear();

});