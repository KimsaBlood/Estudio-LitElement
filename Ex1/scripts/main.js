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

let miBoton = document.querySelector('button.my-btn');
let nextBtn = document.querySelector('button.btn-next');
let prevBtn = document.querySelector('button.btn-prev');
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

let images=["paramore","paramore2","paramore3","paramore4","paramore5"];

function carousel(){
    let i=0;
    let aux=0;
    setInterval(function(){
        for(i=0;i<images.length;i++){
            if(miImage.getAttribute("src").includes(images[i])){
                aux=i+1;
            }         
        }   
        if(aux===images.length){
            aux=0;
        } 
        miImage.setAttribute("src","images/"+images[aux]+".jpg");
    },10000);
}

function next(){
    for(i=0;i<images.length;i++){
        if(miImage.getAttribute("src").includes(images[i])){
            aux=i+1;
        }         
    }   
    if(aux===images.length){
        aux=0;
    } 
    miImage.setAttribute("src","images/"+images[aux]+".jpg");
}

function prev(){
    for(i=0;i<images.length;i++){
        if(miImage.getAttribute("src").includes(images[i])){
            aux=i-1;
        }         
    }   
    if(aux<0){
        aux=images.length-1;
    } 
    miImage.setAttribute("src","images/"+images[aux]+".jpg");
}

carousel();

miBoton.onclick = function() {
    estableceNombreUsuario();
}

nextBtn.onclick = function() {
    next()
}

prevBtn.onclick = function() {
    prev();
}