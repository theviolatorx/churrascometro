import { app } from '../components/main.js';
import { cadForm } from '../components/cadform.js';

export const appstart = function () {
    // const box_del = document.getElementsByClassName('box') as HTMLCollectionOf<Element>;
    const box_del = document.getElementById('cx') as Element;
    const container = document.getElementById('cadcontainer') as HTMLDivElement;

    const cadbutton_click = document.getElementById('cadbutton') as HTMLDivElement;
    cadbutton_click.addEventListener('click', () =>{
        container.setAttribute('style','display: flex;');
        cadForm();
    });

    const h2 = document.getElementById('title_splash') as Element;

    h2.addEventListener('click',() => {
        app.removeChild(box_del);
    });
};

export const removeFormCad = function(pai: HTMLDivElement, filho: HTMLDivElement, listener: HTMLHeadElement) {
    listener.addEventListener('click',() => {
        console.log(pai);
        pai.removeChild(filho);
        pai.removeChild(listener);
        // pai.setAttribute('style','display: flex;');
        pai.removeAttribute('style');
    });
};
