let miTitulo = document.querySelector('h1');
miTitulo.textContent = 'Paramore!';

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/paramore2.jpg') {
      miImage.setAttribute('src','images/paramore.jpg');
    } else {
      miImage.setAttribute('src', 'images/paramore2.jpg');
    }
}

let miBoton = document.querySelector('button');
miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if(!miNombre) {
      estableceNombreUsuario();
    } else {
      localStorage.setItem('nombre', miNombre);
      miTitulo.innerHTML = 'Bienvenid@ ' + miNombre;
    }
  }

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Bievenid@ ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}