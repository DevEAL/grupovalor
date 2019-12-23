$(document).ready(function(){
    
    cargarJSON = () => {
    // fetch('https://motoraidadventure.com/proyects.json')
    fetch('./proyects.json')
        .then((res) => {
            return res.json();
        })
        .then((data) =>{ 
            let tipeProyect = '';

            data.forEach((element,index) => {
                tipeProyect += `
                <a href="todos.html?id=${element.id}?">
                    <div class="col-md-6 col-xl-4 item wow fadeIn" data-wow-duration="${index + 1}s">
                        <div class="img-box">
                            <div id="${element.idName}" class="img" style="${element.imgSection}"></div>
                        </div> 
                        <div class="p-title">
                            <h3>${element.section}</h3>
                            <hr class="hr-content">
                        </div>
                        <div class="content">
                            <div class="p-data">
                                <ul>
                                    <li>${element.quantity}</li>
                                    <li>Ciudades: ${element.citys.join(', ')}</li>
                                    <li>${element.squareMeter}</li>
                                </ul>
                                <a class="link" href="todos.html?id=${element.id}?">Ver proyectos <i class="fas fa-caret-right"></i></a>
                            </div>
                        </div>
                    </div>
                </a>
                `;
    
                document.getElementById('tipeProyect').innerHTML = tipeProyect;
            });
            
            let cw = $('.proyects-cont .item').width();
            $('.proyects-cont .item').css({'height':cw+'px'});
        })
    }
    cargarJSON();

    let imgComer = ["Valenti/small_1.jpg","33_dc/small_6.jpg", "Moratto_44/small_3.jpg","Turpial/small_1.jpg"];
    let imgReali = ["Studio_106/small_1.jpg","Morari_105/small_1.jpg","Baia_138/small_1.jpg"];
    let contador = 0;

    /* Funcion para cambiar la imagen */
    function rotarImagenes() {
        contador++;
        $('#comercializacion').attr('style',`background-image: url(' img/Proyectos/Comercializacion/${imgComer[contador%imgComer.length]} ');`);
        
        $('#realizados').attr('style',`background-image: url(' img/Proyectos/Realizados/${imgReali[contador%imgReali.length]} ');`);
    }

    /* Función que se ejecuta una vez cargada la página */
    onload = function() {
        rotarImagenes();
        setInterval(rotarImagenes,5000);
    }
    
});
