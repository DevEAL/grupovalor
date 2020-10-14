$(document).ready(function(){
    (function() {
        'use strict';
        window.addEventListener('load', function() {
            var forms = document.getElementsByClassName('needs-validation');
            var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();
});

const formulario = document.getElementById('formularioContacto');
const btnLimpiarForm = document.getElementById('limpiarForm');

btnLimpiarForm.addEventListener('click',() =>{
    formulario.reset();
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    var datos = new FormData(formulario);
    let array = {
        "gp_name" : datos.get('name'),
        "gp_email" : datos.get('email'),
        "gp_phone" : datos.get('phone'),
        "gp_subject" : datos.get('subject'),
        "gp_message" : datos.get('message')
    }


    console.log(array);

    if(array.gp_name !='' && array.gp_email!=''){
        fetch('https://grupovalor.com.co/Api/public/Api/Contact/Post', {
            method: 'POST',
            body: JSON.stringify(array),
            headers: {
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            array = {}
            document.querySelector('.alert-success').setAttribute("style", "display: block;");
            formulario.reset();
            setTimeout(function(){ 
                document.querySelector('.alert-success').setAttribute("style", "display: none;");
            }, 3000);
            console.log('Enviado Correctamente');
        })
    }
})