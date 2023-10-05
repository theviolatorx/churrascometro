import { people } from './people.js';
import { btnCalcChurras } from './calcchurrasco.js';
export const screen_churrascometro = function () {
    const screenChurras = document.createElement('div');
    screenChurras.classList.add('container-churras');
    screenChurras.setAttribute('id', 'container');
    screenChurras.appendChild(people("1h", "homem", "00"));
    screenChurras.appendChild(people("2m", "mulher", "00"));
    screenChurras.appendChild(people("3c", "criança", "00"));
    screenChurras.appendChild(people("4t", "duração (hs)", "01"));
    screenChurras.appendChild(btnCalcChurras());
    return screenChurras;
};
