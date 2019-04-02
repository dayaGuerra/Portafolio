export const vermicv = () => {
    const divElement = document.createElement('div');
    divElement.setAttribute('id', 'proyectos');
    const tempForMe = `
    <div class="container">
    <div class="card border-0 shadow my-5">
    <div class="p-5">
        <h1 class="font-weight-light">D'yanara Guerra riega</h1>
    <p class="lead"> Front-End Developer con intereses en desarrollar productos web de mayor calidad, manteniendo las buenas practicas  en el desarrollo con código limpio y reutilizable, aprender mas sobre  Javascript y la librería  React.

    Con  habilidades para enfrentar nuevos desafíos y la determinación de mejorar continuamente como profesional y como ser humano en cada tarea encomendada.
    
    Investigando y resolviendo problemas.</p>
    </div>
    </div>
  
  
  </div>
  <img class="card-body" src="../src/img/cv-guerra-dyanara.png" alt="cv dyanara guerra">
    
    `;
    
    divElement.innerHTML = tempForMe;
  
    return divElement;
    };

