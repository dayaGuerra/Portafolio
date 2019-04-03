
      export const contactame = () => {
        const divElement = document.createElement('div');
        divElement.setAttribute('id', 'proyectos');
        const tempForMe = `
        <section id="contact">
        <div class=" container margin">
        <div>
          <h2 class="font-weight-light"><strong>Contactame</strong></h2>
              <h1 class="font-weight-light margin-text">D'yanara Guerra riega</h1>
          </div>
                
            <p class="lead margin-text"> Front-End Developer con intereses en desarrollar productos web de mayor calidad, manteniendo las buenas practicas  en el desarrollo con código limpio y reutilizable, aprender mas sobre  Javascript y la librería  React.</p>
            <p class="lead">Con  habilidades para enfrentar nuevos desafíos y la determinación de mejorar continuamente como profesional y como ser humano en cada tarea encomendada.
            Investigando y resolviendo problemas.</p>
            </div>
      </section>
    
        `;
        
        divElement.innerHTML = tempForMe;
      
        return divElement;
        };
