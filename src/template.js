export const templateMe = () => {
	const divElement = document.createElement('div');
	divElement.setAttribute('id', 'sobremi');
	const tempForMe = `
	
	<div class="hero-image">
	<div class="hero-text">
    <h1 style="font-size:50px">Soy D'yanara Guerra</h1>
    <p>Y soy Front-End Developer</p>
    <button>Hire me</button>
  </div>
</div>
<div>
<h3>My Work</h3>
      <p>Me gusta la salchipapa.</p>

</div>
	`;
	
	divElement.innerHTML = tempForMe;

	return divElement;
  };
	
