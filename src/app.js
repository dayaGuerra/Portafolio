import { templateMe }from './templates/sobremi.js'
import { proyectosWeb }from './templates/proyectos.js'
import { vermicv }from './templates/vermicv.js'
import { contactame }from './templates/contacto.js'

const changeTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return viewTmp('#/sobremi');
    } else if (hash === '#/sobremi' || hash === '#/proyectos' || hash === '#/cvdigital' || hash === '#/contacto') {
      return viewTmp(hash);
    } else {
      return viewTmp('#/different');
    }
  }


const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const container = document.getElementById('container');
  container.innerHTML = '';

  switch (router) {
    case 'sobremi':
    container.appendChild(templateMe());
    break;
    case 'proyectos':
    container.appendChild(proyectosWeb());
    break;
    case 'cvdigital':
    container.appendChild(vermicv());
    break;
    case 'contacto':
    container.appendChild(contactame());
    break;
}
};

export const initRouters = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};
// export default initRouters;