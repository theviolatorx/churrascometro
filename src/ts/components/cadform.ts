import { removeFormCad } from '../events/events.js';

export const cadform = function() {
    const container = document.getElementById('cadcontainer') as HTMLDivElement;
    const container_form = document.createElement('div') as HTMLDivElement;
    container_form.setAttribute('class','cadbutton');
    container_form.setAttribute('id','cadbutton');
    container_form.setAttribute('style','width: 400px;height: 300px;margin: 0 auto;');
    const headerForm = document.createElement("p");
    headerForm.setAttribute("id", "header-form");
    headerForm.textContent = "Nessa casa sempre tem novidades! Cadastre seu e-mail. Fique por perto para saber dos novos cortes e linhas especiais, das promoções e novas receitas que experimentamos.";
    

    container.appendChild(container_form);
    removeFormCad(container, container_form);
    return container;
};