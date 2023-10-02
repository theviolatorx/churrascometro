import { actionButtonMinusPlus } from '../events/events.js';
export const people = function(id: string, tittle: string) {
    const people = document.createElement('div') as HTMLDivElement;
    people.classList.add('box');
    people.setAttribute('id',id);
    
    // Título
    const tittlePeople = document.createElement('h2') as HTMLHeadElement;
    people.appendChild(tittlePeople);
    tittlePeople.innerHTML = tittle;
    tittlePeople.setAttribute('style','font-size: 1.5em;height: 30px;inset: 20px;');
    
    // Quantidade
    const quantiPeople = document.createElement('h2') as HTMLHeadElement;
    people.appendChild(quantiPeople);
    quantiPeople.innerHTML = '00';
    quantiPeople.setAttribute('style','font-size: 3.5em;height: 50px;inset: 20px;margin-top: 80px;');
    quantiPeople.setAttribute('id',id);
    
    // Container do Botões Mais e Menos
    // const containerBotoesMM = document.createElement('div') as HTMLDivElement;
    // containerBotoesMM.classList.add('container-botoes');
    // containerBotoesMM.setAttribute('style','height: 50px;inset: 20px;margin-top: 180px;');
    // Botões Mais e Menos
    const botaoMinus = document.createElement('h2') as HTMLHeadElement;
    botaoMinus.setAttribute('id',id);
    botaoMinus.setAttribute('style','height: 50px;width: 60px;margin-top: 160px;');
    botaoMinus.innerHTML = '-';
    actionButtonMinusPlus(botaoMinus, quantiPeople, -1);
    
    const botaoPlus = document.createElement('h2') as HTMLHeadElement;
    botaoPlus.setAttribute('id',id);
    botaoPlus.setAttribute('style','height: 50px;width: 60px;margin-top: 160px;margin-left:160px;');
    botaoPlus.innerHTML = '+';
    actionButtonMinusPlus(botaoPlus, quantiPeople, +1);

    // containerBotoesMM.appendChild(botaoMinus);
    // containerBotoesMM.appendChild(botaoPlus);
    // people.appendChild(containerBotoesMM);
    people.appendChild(botaoMinus);
    people.appendChild(botaoPlus);

    return people;
}