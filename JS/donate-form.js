// Importar las funciones necesarias de Firebase
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js';


// Obtener los elementos del formulario
const donateForm = document.getElementById('donate-form');
const donationAmountSelect = document.getElementById('donation-amount');
const customAmountContainer = document.getElementById('custom-amount-container');


// Inicializar Firestore
const db = getFirestore();


// Función para manejar el cambio en el select del monto de donación
donationAmountSelect.addEventListener('change', () => {
  if (donationAmountSelect.value === 'other') {
    customAmountContainer.style.display = 'block'; // Mostrar el campo de monto personalizado
  } else {
    customAmountContainer.style.display = 'none'; // Ocultar el campo de monto personalizado
  }
});


// Función para manejar el envío del formulario
donateForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada


  // Obtener los valores del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('donation-email').value;
  const amount = donationAmountSelect.value === 'other'
                  ? document.getElementById('other-amount').value // Si es "Otro", tomar el monto personalizado
                  : donationAmountSelect.value; // Si no, tomar el valor del select
  const message = document.getElementById('message').value;


  try {
    // Subir los datos a Firestore
    await addDoc(collection(db, 'donations'), {
      name: name,
      email: email,
      amount: amount,
      message: message,
      date: new Date(),
    });


    // Obtener referencia al popup y botón de cierre
const thankYouPopup = document.getElementById("thank-you-popup");
const closeThankYou = document.getElementById("close-thank-you");


donateForm.addEventListener('submit', async (e) => {
    e.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('donation-email').value;
    const amount = donationAmountSelect.value === 'other'
                    ? document.getElementById('other-amount').value
                    : donationAmountSelect.value;
    const message = document.getElementById('message').value;


    try {
        await addDoc(collection(db, 'donations'), {
            name,
            email,
            amount,
            message,
            date: new Date(),
        });


        // Mostrar el popup en lugar del alert
        thankYouPopup.style.display = "flex";


        // Limpiar el formulario
        donateForm.reset();
        customAmountContainer.style.display = 'none';


    } catch (error) {
        console.error('Error al realizar la donación:', error);
        alert('Hubo un error al procesar tu donación. Por favor, inténtalo nuevamente.');
    }
});


// Cerrar el popup cuando se haga clic en el botón
closeThankYou.addEventListener("click", function () {
    thankYouPopup.style.display = "none";
});




    // Limpiar el formulario
    donateForm.reset();
    customAmountContainer.style.display = 'none'; // Ocultar el campo de monto personalizado
  } catch (error) {
    console.error('Error al realizar la donación:', error);
    alert('Hubo un error al procesar tu donación. Por favor, inténtalo nuevamente.');
  }
});






// ***************************
// Obtener elementos


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("donate-form");
  const popup = document.getElementById("thank-you-popup");
  const closeButton = document.getElementById("close-thank-you");


  if (!form || !popup || !closeButton) {
      console.error("Faltan elementos en el DOM");
      return;
  }


  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que el formulario recargue la página


      // Muestra el popup
      popup.classList.add("show");


      // Oculta el popup después de 3 segundos
      setTimeout(() => {
          popup.classList.remove("show");
      }, 3000);
  });


  // Cierra el popup al hacer clic en el botón
  closeButton.addEventListener("click", function () {
      popup.classList.remove("show");
  });
});
