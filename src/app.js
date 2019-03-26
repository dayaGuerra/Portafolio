import { templateMe, proyectosWeb }from './template.js'

const changeTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return viewTmp('#/sobremi');
    } else if (hash === '#/sobremi' || hash === '#/proyectos' || hash === '#/cvdigital') {
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
}
};

export const initRouters = () => {
  window.addEventListener('load', changeTmp(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
};
// export default initRouters;