export const proyectosWeb = () => {
    const divElement = document.createElement('div');
    divElement.setAttribute('id', 'proyectos');
    const tempForMe = `
    <!-- Page Content -->
    <div class="container margin">
    <div class="card border-0 shadow my-5">
    <div class="p-5">
      <!-- Page Heading -->
      <h2 class="font-weight-light"><strong>Proyectos</strong></h2>
      <h1 class="font-weight-light margin-text">Últimos proyectos realizados</h1>
      

      <!-- Project One -->
      <div class="row margin-text justify">
      <div class="col-md-7">
        <a href="https://burguer-queen-product.firebaseapp.com/home">
          <img class="zoom img-fluid rounded mb-3 mb-md-0 shadow p-3 mb-5 bg-white rounded" src="../src/img/hambu.png" alt="md-link proyecto">
        </a>
      </div>
      <div class="col-md-5">
        <h3>Burguer Queen</h3>
        <p>Framework Angular</p>
        
        <p>
        Interfaz empleando el framework de Angular, en la cual se realizan pedidos a través de una tablet y estos pedidos son enviados a la cocina en tiempo real para que el personal de cocina tome la orden y ejecute el pedido del cliente.</p>
        <ul>
        <li>Registra datos y número de orden del cliente</li>
        <li>Registra hora del pedido</li>
        <li>Realiza los cálculos según el pedido que corresponda</li>
        </ul>
        <ul class = "herramientas">
        <li>Angular</li>
        <li>Firebase</li>
        <li>Typescript</li>
        <li>Bootstrap</li>
        </ul>

        <a class="btn btn-dark " href="https://github.com/dayaGuerra/LIM008-fe-burger-queen">View Project</a>
      </div>
    </div>

      <!-- /.row -->
      <hr>

      <!-- Project Two --> 
      <div class="row margin-text justify">
        <div class="col-md-7">
          <a href="https://github.com/dayaGuerra/LIM008-fe-md-links">
            <img class="zoom img-fluid rounded mb-3 mb-md-0 shadow p-3 mb-5 bg-white rounded" src="../src/img/md-links.png" alt="md-link proyecto">
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
          <ul class = "herramientas">
          <li>Código vanilla</li>
          <li>NodeJs</li>
          <li>Regex</li>
          <li>Node fetch</li>
          </ul>

          <a class="btn btn-dark " href="https://github.com/dayaGuerra/LIM008-fe-md-links">View Project</a>
        </div>
      </div>
      <!-- /.row -->

      <hr>

      <!-- Project Three --> 
      <div class="row margin justify">
        <div class="col-md-7">
          <a href="https://dayaguerra.github.io/LIM008-social-network/src/">
            <img class="zoom img-fluid rounded mb-3 mb-md-0 shadow p-3 mb-5 bg-white rounded" src="../src/img/ayni.png" alt="proyecto ayni red social">
          </a>
        </div>
        <div class="col-md-5">
          <h3>Ayni</h3>
          <p>Ayni es la primera red social peruana que busca unir emprendedores, colaboradores y voluntarios para potenciar el alcance de sus proyectos de manera gratuita.
          En Ayni podrás publicar contenido de interés para la comunidad y podrás conocer los proyectos de emprendimiento con valor social más relevantes de nuestro país.</p>
          <ul class = "herramientas">
          <li>Código vanilla</li>
          <li>CSS plano</li>
          <li>Firebase</li>
          </ul>
          <a class="btn btn-dark" href="https://github.com/dayaGuerra/LIM008-social-network">View Project</a>
        </div>
        
      </div>
      <!-- /.row -->

      <hr>

      <!-- Project Four -->
      <div class="row margin justify">
        <div class="col-md-7">
          <a href="https://dayaguerra.github.io/lim-2018-11-bc-core-am-data-lovers/src/">
            <img class="zoom img-fluid rounded mb-3 mb-md-0 shadow p-3 mb-5 bg-white rounded" src="../src/img/injuries-data.png" alt="proyecto Injuries data Portal">
          </a>
        </div>
        <div class="col-md-5">
          <h3>US Injuries Data Portal</h3>
          <p>Data dashboard que muestra los accidentes de transito en Estados Unidos, de manera dinamica.</p>
          <ul class = "herramientas">
          <li>Código vanilla</li>
          <li>CSS plano</li>
          <li>Google Charts</li>
          <li>Fetch</li>
          </ul>
          
          <a class="btn btn-dark" href="https://github.com/dayaGuerra/lim-2018-11-bc-core-am-data-lovers">View Project</a>
        </div>
      </div>
      <!-- /.row -->

      <hr>

       </div>
      </div>
    </div>
    <!-- /.container -->
    `;
    
    divElement.innerHTML = tempForMe;

    return divElement;
    };


