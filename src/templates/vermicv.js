export const vermicv = () => {
    const divElement = document.createElement('div');
    divElement.setAttribute('id', 'proyectos');
    const tempForMe = `
    <div class="container">
        <div class="card border-0 shadow my-5">
       
          <div class="p-5">
          <div class="">
          <h2 class="font-weight-light"><strong>Mi CV Digital</strong></h2>
              <h1 class="font-weight-light">D'yanara Guerra riega</h1>
              <img class="margin-text img-fluid rounded mb-3 mb-md-0" src="../src/img/laptop-2.jpg" alt="fondo">
          </div>
                
            <p class="lead margin-text"> Front-End Developer con intereses en desarrollar productos web de mayor calidad, manteniendo las buenas practicas  en el desarrollo con código limpio y reutilizable, aprender mas sobre  Javascript y la librería  React.</p>
            <p class="lead">Con  habilidades para enfrentar nuevos desafíos y la determinación de mejorar continuamente como profesional y como ser humano en cada tarea encomendada.
            Investigando y resolviendo problemas.</p>
            
            <h2 class="font-weight-light margin-text"><strong>Habilidades Tecnicas</strong></h2>
            <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
            </ul>
             

            <h2 class="font-weight-light margin-text"><strong>Habilidades Blandas</strong></h2>
            <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
            </ul>


            </div>
            
    </div>
  
    
    `;
    
    divElement.innerHTML = tempForMe;
  
    return divElement;
    };

