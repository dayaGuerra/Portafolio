export const vermicv = () => {
    const divElement = document.createElement('div');
    divElement.setAttribute('id', 'proyectos');
    const tempForMe = `
    <div class="container">
        <div class="card border-0 shadow my-5">
       
          <div class="p-5">
          <div class="">
          <h2 class=" my-4">Mi CV Digital</h2>
              <h1 class="font-weight-light">D'yanara Guerra riega</h1>
              <img class="img-cv margin-text card-img-top" src="../src/img/laptop-2.jpg" alt="fondo">
          </div>
                
            <p class="lead margin-text"> Front-End Developer con intereses en desarrollar productos web de mayor calidad, manteniendo las buenas practicas  en el desarrollo con código limpio y reutilizable, aprender mas sobre  Javascript y la librería  React.</p>
            <p class="lead">Con  habilidades para enfrentar nuevos desafíos y la determinación de mejorar continuamente como profesional y como ser humano en cada tarea encomendada.
            Investigando y resolviendo problemas.</p>
            
            <h2 class="font-weight-light margin-text"><strong>Habilidades Tecnicas</strong></h2>

            <ul class="list-group">
            <li class="list-group-item">Javascript</li>
            <li class="list-group-item">NodeJS</li>
            <li class="list-group-item">HTML5</li>
            <li class="list-group-item">CSS plano</li>
            <li class="list-group-item">Angular</li>
            <li class="list-group-item">Bootstrap</li>
            <li class="list-group-item">Firebase</li>
            <li class="list-group-item">Git</li>
            <li class="list-group-item">Figma</li>
            <li class="list-group-item">Teste</li>
            <li class="list-group-item">Metodologias Ágiles</li>
           
            </ul>
             
            <h2 class="font-weight-light margin-text"><strong>Habilidades Blandas</strong></h2>
            <ul class="list-group">
            <li class="list-group-item">Ética e integridad</li>
            <li class="list-group-item">Perseverante</li>
            <li class="list-group-item">Mejora continua</li>
            <li class="list-group-item">Resolución de problemas</li>
            <li class="list-group-item">Personalidad amigable</li>
            <li class="list-group-item">Trabajo en equipo</li>
            <li class="list-group-item">Creativa</li>
            <li class="list-group-item">Planificación Estratégica</li>
            <li class="list-group-item">Facilidad de adaptación</li>
            </ul>

            <a href="https://www.canva.com/design/DADTNOqwT1o/HrM94PmdEY3rMuQ2dVUZig/view?utm_content=DADTNOqwT1o&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"><h3 class="font-weight-light margin-text"><strong> Ver mi CV online</strong></h3></a>
            
            
            
    </div>
  
    
    `;
    
    divElement.innerHTML = tempForMe;
  
    return divElement;
    };

