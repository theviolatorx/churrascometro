import { app } from '../components/main.js';
import { cadForm } from '../components/cadform.js';

export const appstart = function () {
    // const box_del = document.getElementsByClassName('box') as HTMLCollectionOf<Element>;
    const container = document.getElementById('container') as Element;
    const cadcontainer = document.getElementById('cadcontainer') as HTMLDivElement;

    const cadbutton_click = document.getElementById('cadbutton') as HTMLDivElement;
    cadbutton_click.addEventListener('click', () =>{
        cadcontainer.setAttribute('style','display: flex;');
        cadForm();
    });

    const h2 = document.getElementById('title_splash') as Element;

    h2.addEventListener('click',() => {
        console.log(container);
        app.removeChild(container);
    });
};

export const removeFormCad = function(pai: HTMLDivElement, filho: HTMLDivElement, listener: HTMLHeadElement) {
    listener.addEventListener('click',() => {
        pai.removeChild(filho);
        pai.removeChild(listener);
        pai.removeAttribute('style');
    });
};
