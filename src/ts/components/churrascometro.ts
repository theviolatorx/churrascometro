import { people } from './people.js';
import { btnCalcChurras } from './calcchurrasco.js';

export const screen_churrascometro = function () {
    const screenChurras = document.createElement('div') as HTMLDivElement;
    screenChurras.classList.add('container-churras');
    screenChurras.setAttribute('id','container');
    screenChurras.appendChild(people("1h","homem"));
    screenChurras.appendChild(people("2m","mulher"));
    screenChurras.appendChild(people("3c","criança"));

    screenChurras.appendChild(btnCalcChurras());

    return screenChurras;
};

