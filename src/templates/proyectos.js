export const proyectosWeb = () => {
    const divElement = document.createElement('div');
    divElement.setAttribute('id', 'proyectos');
    const tempForMe = `
    <!-- Page Content -->
    <div class="container margin">

      <!-- Page Heading -->
      <h1 class="my-4">Proyectos
        <small>Últimos proyectos realizados</small>
      </h1>

      <!-- Project One -->
      <div class="row">
        <div class="col-md-7">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src="../src/img/md-links.png" alt="md-link proyecto">
          </a>
        </div>
        <div class="col-md-5">
          <h3>Librería md-links</h3>
          <p>CLI y API</p>
          <ul>
          <li>
          Muestra todos los archivos markdown (.md) colocando el comando md-links y seguido de la ruta ./some/example.md</li>
          <li>Busca todos los links dentro del archivo .md</li>
          <li>Realiza peticiones HTTP para validar el link --validate</li>
          <li>Muestra el total de links encontrados y los links unicos hallados --stats
          Muestra el total de links rotos encontrados--stats -- validate</li>
          </ul>
          <p>Código vanilla</p>
          <p>NodeJs</p>
          <p>Regex</p>
          <p>Node fetch</p>

          <a class="btn btn-primary" href="https://github.com/dayaGuerra/LIM008-fe-md-links">View Project</a>
        </div>
      </div>
      <!-- /.row -->

      <hr>

      <!-- Project Two -->
      <div class="row">
        <div class="col-md-7">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src="../src/img/ayni.png" alt="proyecto ayni red social">
          </a>
        </div>
        <div class="col-md-5">
          <h3>Ayni</h3>
          <p>Ayni es la primera red social peruana que busca unir emprendedores, colaboradores y voluntarios para potenciar el alcance de sus proyectos de manera gratuita.

          En Ayni podras publicar contenido de interés para la comunidad, podrás conocer los proyectos de emprendimiento con valor social más relevantes de nuestro país.</p>
          <p>Código vanilla</p>
          <p>Firebase</p>
          <a class="btn btn-primary" href="https://github.com/dayaGuerra/LIM008-social-network">View Project</a>
        </div>
        
      </div>
      <!-- /.row -->

      <hr>

      <!-- Project Three -->
      <div class="row">
        <div class="col-md-7">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src="../src/img/injuries-data.png" alt="proyecto Injuries data Portal">
          </a>
        </div>
        <div class="col-md-5">
          <h3>US Injuries Data Portal</h3>
          <p>Esta web ha sido desarrollada para mostrar la información solcitada por nuestros usuarios, que permitirá mostrar la información más relevante sobre el número de personas accidentadas en difirentes tipos de medios de tranporte en los Estados Unidos.

          Cuenta con filtros que permitirán al usuario señalar el tipo de año o el rango de años específico a mostrar en pantalla. Asimismo cuenta con menú de selección que brindará al usuario la experiencia de poder ordenar de forma ascendente o descendente. Finalmente el usuario podrá mostrar la suma total de Heridos en accidentes.</p>
          <p>Código vanilla</p>
          <p>Uso de Google Charts</p>
          <p>Fetch</p>
          <a class="btn btn-primary" href="https://github.com/dayaGuerra/lim-2018-11-bc-core-am-data-lovers">View Project</a>
        </div>
      </div>
      <!-- /.row -->

      <hr>

      <!-- Project Four -->
      <div class="row">

        <div class="col-md-7">
          <a href="#">
            <img class="img-fluid rounded mb-3 mb-md-0" src="../src/img/encryption-spoiler.png" alt="proyecto encryption spoiler">
          </a>
        </div>
        <div class="col-md-5">
          <h3>Encryption Spoiler</h3>
          <p>Este producto fue creado para aquellos usuarios que buscan anticiparse a la trama de una película, libro u otra obra.

          Es necesario, ya que NO todos los usuarios buscan saber el final o descenlace de su película u obra esperada.
          
          Por ello es que nace "Encryption Spoiler" un producto web que cifra tu comentario Spoiler y brinda un pequeño código al usuario que verdaderamente quiera saber del desenlace de la obra.</p>
          <p>Código vanilla</p>
          <a class="btn btn-primary" href="https://github.com/dayaGuerra/lim-2018-11-bc-core-am-cipher">View Project</a>
        </div>
      </div>
      <!-- /.row -->


    </div>
    <!-- /.container -->
    `;
    
    divElement.innerHTML = tempForMe;

    return divElement;
    };


