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
  <header class="masthead">
  <div class="container h-100">
    <div class="row h-100 align-items-center">
      <div class="col-12 ">
      <h1 class="font-weight-light">Bienvenido a mi portafolio,</h1>
      <p class="lead">Hola, soy D'yanara Guerra, una FrontEnd Developer con muchos sueños, tengo 25 años, me considero una mujer apasionada por mi trabajo, me encanta la cocina, tengo 3 bellos gatos y me gustan los videojuegos.</p>
      <p class="lead"> Además me disfruto de explorar nuevas cosas por diversión!.
      Y trato de mejorar día a día con cada tarea que realizo.</p>
      <a class="btn btn-primary" href="#/cvdigital">Ver mi cv</a>





      
    </div>
      </div>
    </div>
  </div>
</header>

	`;
	
	divElement.innerHTML = tempForMe;
	return divElement;
	};
