import { removeFormCad } from '../events/events.js';

export const cadform = function() {
    const container = document.getElementById('cadcontainer') as HTMLDivElement;
    const container_form = document.createElement('div') as HTMLDivElement;
    container_form.setAttribute('class','cadbutton');
    container_form.setAttribute('id','cadbutton');
    container_form.setAttribute('style','width: 400px;height: 300px;margin: 0 auto;');
    removeFormCad(container, container_form);

    container.appendChild(container_form);
    return container;
};