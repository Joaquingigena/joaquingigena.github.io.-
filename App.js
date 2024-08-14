
//Validators de bootrsap
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()


const formularioContacto= document.getElementById("formularioContacto");

formularioContacto.addEventListener("submit",enviarEmail);

const serviceId= 'service_a33xmg8';
const templateId= 'template_wrwoj3v';
const apikey='JfJrca_VBlmi3M5BM';

const msjExito = document.getElementById('exitoToast')
const msjError = document.getElementById('errorToast')


function enviarEmail(event){
    event.preventDefault();

    if( formularioContacto.nombre.value === '' || formularioContacto.email.value === '' || formularioContacto.mensaje.value === ''){
        return;
    }

    emailjs.init(serviceId)

    emailjs.sendForm(serviceId,templateId,formularioContacto,apikey)
    .then(result => {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(msjExito)
        toastBootstrap.show();
        //Repuesta Ok
        console.log("Se envio el mail")
    })
    .catch(error => {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(msjError)
        toastBootstrap.show();
        console.log(error);
    });
    
}

