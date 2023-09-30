import { app } from '../components/main.js';
import { cadForm } from '../components/cadform.js';
export const appstart = function () {
    // const box_del = document.getElementsByClassName('box') as HTMLCollectionOf<Element>;
    const box_del = document.getElementById('cx');
    const container = document.getElementById('cadcontainer');
    const cadbutton_click = document.getElementById('cadbutton');
    cadbutton_click.addEventListener('click', () => {
        container.setAttribute('style', 'display: flex;');
        cadForm();
    });
    const h2 = document.getElementById('title_splash');
    h2.addEventListener('click', () => {
        app.removeChild(box_del);
    });
};
export const removeFormCad = function (pai, filho) {
    pai.addEventListener('click', () => {
        console.log(pai);
        pai.removeChild(filho);
        // pai.setAttribute('style','display: flex;');
        pai.removeAttribute('style');
    });
};
