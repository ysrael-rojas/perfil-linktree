// Obtener los elementos
//const openModalBtnBar = document.getElementById('button-top-bar');

const buttonsShare = document.querySelectorAll('.btn-open-modal');

const modal = document.getElementById('myModal');
const closeModalBtn = document.getElementById('closeModalBtn');

buttonsShare.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex'; // Mostrar la modal
    });
});

/* // Abrir la ventana modal al hacer clic en el botón
openModalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Mostrar la modal
}); */

// Cerrar la ventana modal al hacer clic en la 'x'
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Ocultar la modal
});

// Cerrar la ventana modal si se hace clic fuera del contenido modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

