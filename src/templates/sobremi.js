export const navBAr = () => {
	const divElement = document.createElement('div');
	divElement.setAttribute('id', 'navBar-container');
  const tempForMe = `
  

<section id="container-nav"></section>

	`;
	
	divElement.innerHTML = tempForMe;
	return divElement;
	};


export const templateMe = () => {
	const divElement = document.createElement('div');
	divElement.setAttribute('id', 'sobremi');
  const tempForMe = `
  <header>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <!-- Slide One - Set the background image for this slide in the line below -->
      <div class="carousel-item active" style="background-image: url('https://i.ibb.co/Nt27jJW/notebook-1280538.jpg')">
      <div class="new-color d-flex flex-column-reverse bd-highlight  h-100 align-items-center justify-content-center">
      
      <div class= "">
      <a class="btn btn-dark" href="../src/cv-pdf/Guerra-Riega.Dyanara.pdf" download="cv_Dyanara_Guerra" target="blank">Descargar CV</a>
      <a class="btn btn-dark" href="#/proyectos">Ver Proyectos</a>
      </div>

      <h3 class="display-4 text-center text-white text-shadow-h3">Front-End Developer</h3>
      <h3 class="display-4 text-center text-white text-shadow-h3">Hola, Soy D'yanara Guerra</h3>
     
        </div>
        
      </div>

      <!-- Slide Two - Set the background image for this slide in the line below -->
      <div class="carousel-item" style="background-image: url('https://i.ibb.co/jZjsfgW/work-731198.jpg')">
      <div class="new-color d-flex flex-column-reverse bd-highlight  h-100 align-items-center justify-content-center">
       
      <h3 class=" p-3 mb-2 text-white  width-text  text-center text-shadow-h3">Aprender más tecnologías, usando códigos reutilizables, manteniendo las buenas practicas.</h3>
      <h3 class="display-4 text-center  text-white text-shadow-h3">Me gusta</h3>
      
        </div>
      </div>

      <!-- Slide Three - Set the background image for this slide in the line below -->

      <div class="carousel-item" style="background-image: url('https://i.ibb.co/FJJNTgC/startup-594090.jpg')">
      <div class="new-color d-flex flex-column-reverse bd-highlight  h-100 align-items-center justify-content-center">
       
      <h3 class=" p-3 mb-2  text-white  text-center width-text text-shadow-h3">Resolver problemas brindando soluciones sencillas y de facil aplicación.</h3>

      <h3 class="display-4 text-center text-white text-shadow-h3">Mi pasión es</h3>
      
        </div>
      </div>
      
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
  </div>
</header>

	`;
	
	divElement.innerHTML = tempForMe;
	return divElement;
	};
