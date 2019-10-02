$(document).ready(function(){

    runCarousel = () => {
        $('.owl-project').owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            autoplay:true,
            autoplayTimeout:10000,
            navText: [
                '<img src="img/SVG/left-arrow-w.svg" alt="">',
                '<img src="img/SVG/right-arrow-w.svg" alt="">'
            ]
        });
    }

    runLightbox = () => {
        $(document).on('click', '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });
    }

    getGET = () => {
        let loc = document.location.href;

        if(loc.indexOf('?')>0){
            let getString = loc.split('?')[1];
            let GET = getString.split('&');
            let get = {};

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
            let helper = data[obtId.id].proyects[obtId.prId];
            let imgProject = '';

            helper.images.forEach(element => {
                imgProject += `
                    <div class="owl-slide cover" style="background-image: url('img/Proyectos/${element}');"></div>
                `;
                document.getElementById('owl-project').innerHTML = imgProject;
            });
            runCarousel();

            $('#location-project').text(`${helper.country} - Colombia`);
            $('#title-project').text(`${helper.name}`);
            $('#address-project').text(`${helper.address}`);
            $('#description-project').text(`${helper.description}`);

            if(helper.stage != ''){
                let stageProject = '';
                helper.stage.forEach((element,index) => {
                    stageProject += `
                        <p><span>Etapa ${index+1}:</span> ${element}</p>
                    `;
                    document.getElementById('stage-project').innerHTML = stageProject;
                });
            }

            if(Object.keys(helper.zonas[0]) != 0){
                let zonasProject = '';

                helper.zonas.forEach(element => {
                    zonasProject += `
                        <p><span>Zonas ${Object.keys(element)}:</span> ${element[Object.keys(element)]} </p>
                    `;
                    document.getElementById('zonas-project').innerHTML = zonasProject;
                });
            }

            if(helper.note.length != 0){
                let noteProject = '';

                helper.note.forEach(element => {
                    noteProject += `
                        <p>${element}</p>
                    `;
                    document.getElementById('note-project').innerHTML = noteProject;
                });
            }

            if(helper.area.length != 0){
                let areaProject = `
                    <p><span>Área:</span> ${helper.area}</p>
                `;
                document.getElementById('area-project').innerHTML = areaProject;
            }

            let stageBoxProject='';
            helper.imgBox.forEach((element,index) => {
                stageBoxProject += `
                    <a href="img/Proyectos/${helper.images[index]}" data-toggle="lightbox" data-gallery="example-gallery" class="col-6 col-md-3">
                        <img src="img/Proyectos/${element}" class="img-fluid">
                    </a>
                `;
                document.getElementById('img-box').innerHTML = stageBoxProject;
            });
            runLightbox();

            if(helper.website != 0 || helper.mail !=0 || helper.phone !=0 || helper.cellPhone !=0 ) {
                contactProject='';
                contactProject += `
                    <div class="col-md-12 title">
                        <h2>Contacto</h2>
                    </div>
                    <div class="col-md-6 col-lg-4 date">
                        <p>Sitio web: <br> ${helper.website}</p>
                        <p>Correo electronico: <br> ${helper.mail}</p>
                    </div>
                    <div class="col-md-6 col-lg-4 date">
                        <p>Telefonos: <br> ${helper.phone.join(' - ')}</p>
                        <p>Celular: <br> ${helper.cellPhone.join(' - ')}</p>
                    </div>
                `;
    
                if(helper.website != 0) {
                    contactProject += `
                        <div class="col-md-6 col-lg-4 link">
                            <a href="">Ir a la pagina <img src="img/SVG/view-arrow.svg" alt=""></a>
                        </div>
                    `;
                }
                document.getElementById('contactProject').innerHTML = contactProject;
            } else {
                $('.contact-proyect').css('display','none');
            }
        })
    }
   
    cargarJSON();
   
});