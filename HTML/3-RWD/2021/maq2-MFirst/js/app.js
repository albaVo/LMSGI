

// carga dinámica de páginas 
function inicio() {
    console.log('documento app cargado');
    console.log(document);
    const vmain = document.querySelector('main section');
    //vmain.innerHTML = '<h1>Hola Caracola</h1>'
    
    //detectar clicks de ratón en el header nav
    const servicios = document.querySelector('header nav a#servicios');
    const formacion = document.querySelector('header nav a#formacion');
    const trabajos = document.querySelector('header nav a#trabajos');

    servicios.addEventListener("click", () => {
        console.log('has pinchado en servicios');
        //leer los ficheros html
        fetch('html/servicios.html')
            .then(respuesta =>  {
                return respuesta.text()
            })
            .then(respuestaHtml => {
                console.log(respuestaHtml)
                vmain.innerHTML = respuestaHtml;
            }
        )
    });

    formacion.addEventListener("click", () => {
        console.log('has pinchado en formacion');
        fetch('html/formacion.html')
            .then(respuesta =>  {
                return respuesta.text()
            })
            .then(respuestaHtml => {
                console.log(respuestaHtml)
            }
        )
    });
}