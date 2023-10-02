import { actionCalcChurros } from '../events/events.js';

export const btnCalcChurras = function() {
    const buttonCalcChurras = document.createElement('div') as HTMLDivElement;
    buttonCalcChurras.classList.add('cadbutton');
    // buttonCalcChurras.setAttribute('style','margin-top: -180px;');

    const h3 = document.createElement('h3') as HTMLHeadElement;
    h3.innerHTML = 'Calcular Churrasco';
    buttonCalcChurras.appendChild(h3);

    // TODO: Botão Mostrar Resultado
    actionCalcChurros(h3);
    
    return buttonCalcChurras;
}