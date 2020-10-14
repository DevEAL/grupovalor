$(document).ready(function() {
  novedadesJSON = () => {
    fetch('./novedades.json')
      .then((res) => {
          return res.json();
      })
      .then((data) => {
        data.reverse();
        let cardNovedades = '';
        data.forEach(element => {
          if(element.imgRight) {
            cardNovedades += `
              <div class="gray-content row wow fadeInLeft justify-content-md-center" data-wow-duration="2s" key="${element.id}">
                <div class="col-md-6 img-novedades">
                    <img class="img-fluid" src="img/Novedades/${element.img}" alt="">
                </div>
                <div class="col-xs-12 col-lg-6 content-novedades">
                  <h5>${element.title}</h5>
                  <small>${element.date}</small>
                  <p>${element.description}</p>
                  ${ element.link ? `<a href="${element.link}" target="_blank">Ver todo ></a>`: ''}
                </div>
              </div>
            `;
            document.getElementById('novedades').innerHTML = cardNovedades;
          } else {
            cardNovedades += `
              <div class="white-content row wow fadeInRight justify-content-md-center" data-wow-duration="2s" key="${element.imgRight}">
                <div class="col-lg-6 content-novedades">
                <h5>${element.title}</h5>
                <small>${element.date}</small>
                <p>${element.description}</p>
                ${ element.link ? `<a href="${element.link}" target="_blank">Ver todo ></a>`: ''}
                </div>
                <div class="col-md-6 img-novedades">
                    <img class="img-fluid" src="img/Novedades/${element.img}" alt="">
                </div>
              </div>
            `;
            document.getElementById('novedades').innerHTML = cardNovedades;
          }
        });
        
      })
  }
  novedadesJSON();

});

