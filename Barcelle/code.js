// Obtiene una referencia al elemento del botón que tiene la clase CSS "submit"
const button = document.querySelector(".submit");

// Agrega un evento de clic al botón
button.addEventListener("click", enviar => {
  // Muestra una alerta con el mensaje "¿Deseas enviar este formulario?"
  alert("¿Deseas enviar este formulario?");
});



// Espera a que todo el contenido HTML de la página esté cargado y listo
document.addEventListener("DOMContentLoaded", function() {
    // Obtiene una referencia al botón de cambio de modo usando su ID "modoBoton"
    const modoBoton = document.getElementById("modoBoton");
  
    // Obtiene una referencia a la hoja de estilos del tema usando su ID "theme-style"
    const themeStylesheet = document.getElementById("theme-style");
    
    // Agrega un evento de clic al botón de cambio de modo
    modoBoton.addEventListener("click", function() {
      // Verifica si el atributo "href" de la hoja de estilos es "estilos-claro.css"
      if (themeStylesheet.getAttribute("href") === "estilos-claro.css") {
        // Si el tema actual es claro, cambia la hoja de estilos a "estilos-oscuro.css"
        themeStylesheet.setAttribute("href", "estilos-oscuro.css");
      } else {
        // Si el tema actual no es claro, cambia la hoja de estilos a "estilos-claro.css"
        themeStylesheet.setAttribute("href", "estilos-claro.css");
      }
    });
  });
  




// Obtiene una referencia al contenedor de reacciones usando su ID "reactions"
const reactionsContainer = document.getElementById('reactions');

// Obtiene una lista de elementos con la clase CSS "reaction" dentro del contenedor de reacciones
const reactions = reactionsContainer.querySelectorAll('.reaction');

// Define una función para manejar la selección de reacciones
function react(event) {
    // Previene el comportamiento predeterminado del evento (por ejemplo, la navegación en caso de un enlace)
    event.preventDefault();
    
    // Obtiene el valor del atributo "data-reaction" del elemento que activó el evento
    const reaction = this.getAttribute('data-reaction');
    
    // Muestra una alerta con la reacción seleccionada
    alert(`Seleccionaste la reacción: ${reaction}`);
}

// Agrega un evento de clic a cada elemento de reacción en la lista "reactions"
reactions.forEach(reaction => {
    reaction.addEventListener('click', react);
});





// Obtener una referencia al elemento de entrada de mensaje usando su ID "mensaje"
const messageInput = document.getElementById('mensaje');

// Obtener una referencia al elemento span que muestra el conteo de caracteres usando su ID "char-count"
const charCountSpan = document.getElementById('char-count');

// Definir una función para actualizar el contador de caracteres
function updateCharCount() {
    // Obtener el valor actual del mensaje del campo de entrada de texto
    const message = messageInput.value;
    // Actualizar el contenido del elemento span con la longitud del mensaje
    charCountSpan.textContent = message.length;
}

// Agregar un evento de entrada (cuando se escribe en el campo de entrada) al campo de entrada de mensaje
messageInput.addEventListener('input', updateCharCount);



        // Obtener una lista de elementos con la clase "interactive-element"
const interactiveElements = document.querySelectorAll('.interactive-element');

// Recorrer cada elemento de la lista "interactiveElements"
interactiveElements.forEach(element => {
    // Agregar un evento "mouseenter" (cuando el mouse entra al elemento)
    element.addEventListener('mouseenter', () => {
        // Agregar la clase "hovered" al elemento cuando el mouse entra
        element.classList.add('hovered');
    });

    // Agregar un evento "mouseleave" (cuando el mouse sale del elemento)
    element.addEventListener('mouseleave', () => {
        // Eliminar la clase "hovered" del elemento cuando el mouse sale
        element.classList.remove('hovered');
    });
});

// Obtener una lista de elementos con la clase "interactive-product"
const interactiveProduct = document.querySelectorAll('.interactive-product');

// Recorrer cada elemento de la lista "interactiveProduct"
interactiveProduct.forEach(product => {
    // Agregar un evento "mouseenter" (cuando el mouse entra al elemento)
    product.addEventListener('mouseenter', () => {
        // Agregar la clase "hovered" al elemento cuando el mouse entra
        product.classList.add('hovered');
    });

    // Agregar un evento "mouseleave" (cuando el mouse sale del elemento)
    product.addEventListener('mouseleave', () => {
        // Eliminar la clase "hovered" del elemento cuando el mouse sale
        product.classList.remove('hovered');
    });
});
