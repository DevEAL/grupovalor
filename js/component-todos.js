$(document).ready(function() {

     getGET =() => {
        // capturamos la url
        let loc = document.location.href;
        // si existe el interrogante
        if(loc.indexOf('?')>0)
        {
            // cogemos la parte de la url que hay despues del interrogante
            let getString = loc.split('?')[1];
            // obtenemos un array con cada clave=valor
            let GET = getString.split('&');
            let get = {};
 
            // recorremos todo el array de valores
            for(let i = 0, l = GET.length; i < l; i++){
                let tmp = GET[i].split('=');
                get[tmp[0]] = unescape(decodeURI(tmp[1]));
            }
            return get;
        }
    }
    
    cargarJSON = () => {
    // fetch('https://motoraidadventure.com/proyects.json')
    fetch('./proyects.json')
        .then((res) => {
            return res.json();
        })
        .then((data) => { 
            let obtId = getGET();
            let title = document.createTextNode(`${data[obtId.id].section}`);
            $('#title-proyect').append(title);
            let helper = data[obtId.id].proyects;
            let tipeProyect = '';

            helper.forEach((element,index)=> {
                tipeProyect += `
                <a data-id="data-${element.id}" href="proyecto.html?id=${obtId.id}&prId=${element.id}">
                    <div class="col-md-6 col-lg-4 col-xl-3 item wow fadeIn" data-wow-delay=".${index + 2}s">
                        <div class="img-box">
                            <div id="" class="img" style="background-image: url('img/Proyectos/${element.img}');"></div>
                        </div>
                        <div class="p-title prTitlePd">
                            <h3>${element.name}</h3>
                            <hr class="hr-content">
                        </div>
                        <div class="content">
                            <div class="p-data prContentPd">
                                <ul>
                                    <li>${element.country}</li>
                                    <li>${element.address}</li>
                                    <li>${element.areaOne}</li>
                                    <li>${element.areaTwo}</li>
                                    <li>${element.builder}</li>
                                </ul>
                                <a class="link" href="proyecto.html?id=${obtId.id}&prId=${element.id}">Ver proyecto <i class="fas fa-caret-right"></i></a>
                            </div>
                        </div>
                    </div>
                </a>
                `;
    
                document.getElementById('prComercializacion').innerHTML = tipeProyect;
            });
            
            let cw = $('.proyects-cont .item').width();
            $('.proyects-cont .item').css({'height':cw+'px'});
            $("[href='proyecto.html?id=1&prId=11']").attr("href","otros.html");
        })
    }
    
    cargarJSON();
    
});
