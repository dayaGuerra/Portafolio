export const templateMe = () => {
	const divElement = document.createElement('div');
	divElement.setAttribute('id', 'sobremi');
  const tempForMe = `

  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" role="listbox">
    <!-- Slide One - Set the background image for this slide in the line below -->
    <div class="carousel-item active" style="background-image: url('https://source.unsplash.com/RCAhiGJsUUE/1920x1080')">
      <div class="carousel-caption d-none d-md-block">
        <h3 class="display-4">El trabajo</h3>
        <p class="lead">Yo le llamo "Lugar de entretenimiento".</p>
      </div>
    </div>
    <!-- Slide Two - Set the background image for this slide in the line below -->
    <div class="carousel-item" style="background-image: url('https://source.unsplash.com/wfh8dDlNFOk/1920x1080')">
      <div class="carousel-caption d-none d-md-block">
        <h3 class="display-4">Eventos</h3>
        <p class="lead">Nuevos aprendizajes y personas cheveres</p>
      </div>
    </div>
    <!-- Slide Three - Set the background image for this slide in the line below -->
    <div class="carousel-item" style="background-image: url('https://source.unsplash.com/O7fzqFEfLlo/1920x1080')">
      <div class="carousel-caption d-none d-md-block">
        <h3 class="display-4">El entorno social</h3>
        <p class="lead">Jugar y divertirse</p>
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

<section class="py-5">
  <div class="container">
    <h1 class="font-weight-light">Bienvenido a mi portafolio,</h1>
    <p class="lead">Soy D'yanara Guerra y tengo 25 años, me considero una mujer apasionada por mi trabajo, me encanta cocinar, tengo 3 bellos gatos y me gusta jugar play station por las noches.</p>
    <p class="lead"> Ademas de explorar nuevas cosas por diversión.<a href="https://unsplash.com">Unsplash</a>!</p>
  </div>
</section>


	`;
	
	divElement.innerHTML = tempForMe;
	return divElement;
	};

