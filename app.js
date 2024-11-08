//OBTENEMOS ELEMENTOS DEL DOM
const buttonsShare = document.querySelectorAll('.btn-open-modal');
const buttonEmail = document.getElementById('btn-email');
const modal = document.getElementById('myModal');
const modalEmail = document.getElementById('myModal-email');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeModalBtnEmail = document.getElementById('closeModalBtn-email');

//ABRIMOS EL MODAL "COMPARTIR LINKS" CADA VES QUE HACEMOS CLICK EN EL ICONO DE 3 PUNTOS
buttonsShare.forEach(button => {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        modal.style.display = 'flex'; // Mostrar la modal
    });
});

//EVENTO PARA ABRIR LA VENTANA MODAL "EMAIL"
buttonEmail.addEventListener('click', () => {
    modalEmail.style.display = 'flex';
});

//EVENTO PARA OCULTAR LA VENTANA MODAL "COMPARTIR LINKS"
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none'; // Ocultamos modal Compatir link    
});

//EVENTO PARA OCULTAR LA VENTANA MODAL "EMAIL"
closeModalBtnEmail.addEventListener('click', () => {
    modalEmail.style.display = 'none'; //Ocultamos modal Email
});

// EVENTO PARA CERRAR VENTANAS MODALES SI SE HACE CLICK FUERA DE ELLOS
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    if (event.target === modalEmail) {        
        modalEmail.style.display = 'none';
    }
});

