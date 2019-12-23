const formulario = document.getElementById('formularioContacto');
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

    console.log(JSON.stringify(array));

    fetch('http://enalgunlugar.website/grupovalor/Api/public/Api/Contact/Post',{
        method: 'POST',
        body: JSON.stringify(array),
        headers: {
            'Content-Type':'aplication/json'
        }
    })
    .then(res => res.json())
    .then(data => {
        array = {}
        console.log('Enviado Correctamente');
    })
})