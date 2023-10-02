import { people } from './people.js';

export const screen_churrascometro = function () {
    const screenChurras = document.createElement('div') as HTMLDivElement;
    screenChurras.classList.add('container-churras');
    screenChurras.setAttribute('id','container');
    screenChurras.appendChild(people("1","homem"));
    screenChurras.appendChild(people("2","mulher"));
    screenChurras.appendChild(people("3","criança"));

    return screenChurras;
};

