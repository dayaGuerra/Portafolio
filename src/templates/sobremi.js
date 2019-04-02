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
      <p class="lead">Soy D'yanara Guerra y tengo 25 años, me considero una mujer apasionada por mi trabajo, me encanta cocinar, tengo 3 bellos gatos y me gusta jugar play station por las noches.</p>
      <p class="lead"> Ademas de explorar nuevas cosas por diversión.<a href="https://unsplash.com">Unsplash</a>!</p>
    </div>
      </div>
    </div>
  </div>
</header>

	`;
	
	divElement.innerHTML = tempForMe;
	return divElement;
	};
