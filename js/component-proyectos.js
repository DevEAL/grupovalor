$(document).ready(function(){
    
    cargarJSON = () => {
    // fetch('https://motoraidadventure.com/proyects.json')
    fetch('./proyects.json')
        .then((res) => {
            return res.json();
        })
        .then((data) =>{ 
            let tipeProyect = '';

            data.forEach(element => {
                tipeProyect += `
                <a href="todos.html?id=${element.id}?">
                    <div class="col-md-6 col-xl-4 item">
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

    let imgComer = ["Irotama/small_1.jpg","33_dc/small_1.jpg", "Morari_105/small_1.jpg","Turpial/small_1.jpg"];
    let imgEject = ["Baia_138/small_1.jpg","Penalisa_mall/small_1.jpg","Portal_41/small_1.jpg"];
    let imgReali = ["P_javeriana/small_1.jpg","Jazz/small_1.jpg","Santorini/small_1.jpg"];
    let contador = 0;

    /* Funcion para cambiar la imagen */
    function rotarImagenes() {
        contador++;
        $('#comercializacion').attr('style',`background-image: url(' img/Proyectos/Comercializacion/${imgComer[contador%imgComer.length]} ');`);

        $('#ejecucion').attr('style',`background-image: url(' img/Proyectos/Ejecucion/${imgEject[contador%imgEject.length]} ');`);
        
        $('#realizados').attr('style',`background-image: url(' img/Proyectos/Realizados/${imgReali[contador%imgReali.length]} ');`);
    }

    /* Función que se ejecuta una vez cargada la página */
    onload = function() {
        rotarImagenes();
        setInterval(rotarImagenes,5000);
    }
    
});
