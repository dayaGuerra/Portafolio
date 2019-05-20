export const vermicv = () => {
    const divElement = document.createElement('div');
    divElement.setAttribute('id', 'proyectos');
    const tempForMe = `
    
        <div class="container margin">
        <div class="card border-0 shadow my-5">
        <div class="p-5">
       
        <h2 class=" my-4">Mi CV Digital</h2>
        <h1 class="font-weight-light">D'yanara Guerra riega</h1>

        <div class="text-center">
      <img class="img-fluid tamaño-img" src="https://i.ibb.co/2SqLTxQ/Whats-App-Image-2019-04-19-at-6-03-33-PM.jpg" alt="">
    </div>
        
    
                <!-- Page Content -->
        <section class="py-5">
        <div class="container">
        <h1 class="font-weight-light">Descripción</h1>
        <p class="lead justify"> Front-End Developer con intereses en desarrollar productos web de mayor calidad, manteniendo las buenas practicas  en el desarrollo con código limpio y reutilizable, aprender más sobre  Javascript y Angular.</p>
        <p class="lead justify">Con  habilidades para enfrentar nuevos desafíos y la determinación de mejorar continuamente como profesional y como ser humano en cada tarea encomendada.
        Investigando y resolviendo problemas.</p>
        
        </div>
        </section>
          
      <div class="d-flex justify-content-around">
      <div>        
        <h3 class="font-weight-light margin-text"><strong>Habilidades Tecnicas</strong></h3>
        <ul class="list-group margin-letf">
        <li class="list-group-item">Javascript</li>
        <li class="list-group-item">NodeJS</li>
        <li class="list-group-item">HTML5</li>
        <li class="list-group-item">CSS plano</li>
        <li class="list-group-item">Angular</li>
        <li class="list-group-item">Bootstrap</li>
        <li class="list-group-item">Firebase</li>
        <li class="list-group-item">Git</li>
        <li class="list-group-item">Figma</li>
        <li class="list-group-item">Testing</li>
        <li class="list-group-item">Metodologias Ágiles</li>
        </ul>
        </div>
        <div>
        <h3 class="font-weight-light margin-text"><strong>Habilidades Blandas</strong></h3>
        <ul class="list-group  margin-letf">
        <li class="list-group-item">Ética e integridad</li>
        <li class="list-group-item">Perseverante</li>
        <li class="list-group-item">Mejora continua</li>
        <li class="list-group-item">Resolución de problemas</li>
        <li class="list-group-item">Trabajo en equipo</li>
        <li class="list-group-item">Creativa</li>
        <li class="list-group-item">Planificación Estratégica</li>
        <li class="list-group-item">Facilidad de adaptación</li>
        </ul>
        </div>
      </div>

      <a href="../src/cv-pdf/Guerra-Riega.Dyanara.pdf" download="cv_Dyanara_Guerra" target="blank"><h3 class="lead margin-text"><strong> Descargar cv </strong></h3></a>
      

        
            </div>
            </div>
            </div>
  
    
    `;
    
    divElement.innerHTML = tempForMe;
  
    return divElement;
    };

