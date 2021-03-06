
      export const contactame = () => {
        const divElement = document.createElement('div');
        divElement.setAttribute('id', 'proyectos');
        const tempForMe = `

        <section id="contact">
        <div class="container margin">

        <div class="card border-0 shadow my-5">
        <div class="p-5">
        
          <h2 class="font-weight-light"><strong>Contáctame</strong></h2>  
        <div class="row no-gutters bg-light position-relative">
        <div class="col-md-6 mb-md-0 p-md-4">
          <img src="https://i.ibb.co/2SqLTxQ/Whats-App-Image-2019-04-19-at-6-03-33-PM.jpg" class="w-100" alt="busto dyanara">
        </div>
        <div class="col-md-6 position-static p-4 pl-md-0">
          <h5 class="mt-0">D'yanara Guerra</h5>
          <p class=" margin-text justify">Desde muy pequeña he enfrentando adversidades que me han llevado a la búsqueda de soluciones. Aprender sobre código hace que me sienta feliz, y en armonía pues mediante el código puedo ser un agente de cambio y con ello mejorar la calidad de vida de las personas.</p>
          <div>
          <a href="../src/cv-pdf/Guerra-Riega.Dyanara.pdf" download="cv_Dyanara_Guerra">Descargar Cv</a><br>
          <a href="#/proyectos" >Ver proyectos</a>
          </div>

          
          <p class="margin-text">Redes Sociales</p>
           <a href="https://github.com/dayaGuerra"><img class = "width-icon" src="../src/img/logo-de-github.png"/></a>
           <a href="https://www.linkedin.com/in/dyanaraguerra/"><img class = "width-icon" src="../src/img/linkedin.png"/></a>
                  
          </div>
      </div>
 
            
            </div>
            </div>
            </div>
            </div>







    
      </section>
    
        `;
        
        divElement.innerHTML = tempForMe;
      
        return divElement;
        };
