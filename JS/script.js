const swiper = new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween:30,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
  });



  // DONACION

  document.addEventListener("DOMContentLoaded", function () {
    const donationPopup = document.getElementById("donation-popup");
    const thankYouPopup = document.getElementById("thank-you-popup");
    const donateBtn = document.getElementById("donate-btn");
    const confirmDonation = document.getElementById("confirm-donation");
    const closeThankYou = document.getElementById("close-thank-you");
    const amountButtons = document.querySelectorAll(".amount");
    const customAmount = document.getElementById("custom-amount");

    // Seleccionar monto de donación
    amountButtons.forEach(button => {
        button.addEventListener("click", function () {
            amountButtons.forEach(btn => btn.classList.remove("highlight"));
            this.classList.add("highlight");
            customAmount.value = ""; // Limpiar campo personalizado
        });
    });

    // Mostrar popup de donación
    donateBtn.addEventListener("click", function () {
        donationPopup.style.display = "flex";
    });

    // Confirmar donación
    confirmDonation.addEventListener("click", function () {
        donationPopup.style.display = "none";
        thankYouPopup.style.display = "flex";
    });

    // Cerrar mensaje de agradecimiento
    closeThankYou.addEventListener("click", function () {
        thankYouPopup.style.display = "none";
    });
});

// CUADRADITOS

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.getElementById("contador-container");
    let items = contenedor.querySelectorAll(".contador-item");


    let valoresFinales = [750, 1900, 200, 260]; // Valores a alcanzar
    let duracion = 4000; // Duración total en milisegundos (4 segundos)


    items.forEach((item, index) => {
        let contadorNumero = item.querySelector(".contador-numero");
        let valorFinal = valoresFinales[index];
        let intervalo = 10; // Actualiza cada 10ms
       
        let incremento = Math.ceil(valorFinal / (duracion / intervalo));
        let valorActual = 0;


        let timer = setInterval(() => {
            valorActual += incremento;
            if (valorActual >= valorFinal) {
                valorActual = valorFinal;
                clearInterval(timer);
            }
            contadorNumero.textContent = valorActual;
        }, intervalo);
    });
});


