const nav = document.querySelector("#nav");         /*crea una variable que usa un id, contendra de lo que hay del documento en la parte de @*/
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {             /*llamar al evento al hacer click, funcion de flecha*/
    nav.classList.add("visible");                   /*menu de navegación haga una acción, en este caso se agrega la funcion "visible"*/        
})                          

cerrar.addEventListener("click", () => {            /*llamar al evento al hacer click, funcion de flecha*/
    nav.classList.remove("visible");                /*menu de navegación haga una acción, en este caso va a quitar la funcion "visible"*/ 
})

/* Funciones para contacto, aqui empiezan */
/*--------------------------------------- */
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_yorjlee';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});






/* para el control del boton*/ 
// Función para mostrar u ocultar el botón según la posición de desplazamiento
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var link = document.getElementById("scrollTopLink");
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      link.style.display = "block";
  } else {
      link.style.display = "none";
  }
}

// Función para desplazarse suavemente hacia la parte superior de la página
function scrollToTop() {
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentScroll - currentScroll / 8);
  }
}



