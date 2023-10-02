import { app } from "../components/main.js";
import { cadForm } from "../components/cadform.js";
import { screen_churrascometro as churras } from '../components/churrascometro.js';
// Constantes 
export const userLocal = localStorage.getItem("userlocal");
// Funções Exportadas 
export const appstart = function () {
    // const box_del = document.getElementsByClassName('box') as HTMLCollectionOf<Element>;
    const container = document.getElementById("container");
    const cadcontainer = document.getElementById("cadcontainer");
    if (!userLocal) {
        const cadbutton_click = document.getElementById("cadbutton");
        cadbutton_click.addEventListener("click", () => {
            cadcontainer.setAttribute("style", "display: flex;");
            cadForm();
        });
    }
    const h2 = document.getElementById("title_splash");
    if (userLocal) {
        h2.addEventListener("click", () => {
            app.removeChild(container);
            app.removeChild(cadcontainer);
            churrascometro();
        });
    }
};
export const removeFormCad = function (pai, filho, listener) {
    listener.addEventListener("click", () => {
        removeNode(pai, filho, listener);
    });
};
export const cadUser = function (listener, nameInput, emailInput, cityInput, consentInput, pai, filho, listener1) {
    listener.addEventListener("click", () => {
        const customer = {
            name: nameInput.value,
            email: emailInput.value,
            city: cityInput.value,
            offer: consentInput.checked,
        };
        if (customer.name &&
            customer.email &&
            customer.city &&
            validateEmail(customer.email)) {
            //   localStorage.setItem(customer.email, JSON.stringify(customer));
            localStorage.setItem("userlocal", JSON.stringify(customer));
            removeNode(pai, filho, listener1);
            window.alert("Usuário Cadastrado com Sucesso!");
            window.location.reload();
            //   return true;
        }
        else {
            window.alert("Verifique se preencheu todos os campos e se o email esta correto.\nExemplo email: exemplo@exemplo.dominio");
            //   return false;
        }
    });
};
// TODO: Tela Churrascometro
export const churrascometro = function () {
    app.appendChild(churras());
};
export const actionButtonMinusPlus = function (evento, valor, action) {
    evento.addEventListener('click', () => {
        let vl = Number(valor.innerHTML);
        vl += action;
        if (vl <= 0) {
            vl = 0;
        }
        valor.innerHTML = doubleZeros(vl);
        // console.log(action);
    });
};
// Funções Locais 
function doubleZeros(valor) {
    if (valor < 10) {
        return "0" + String(valor);
    }
    return String(valor);
}
function removeNode(pai, filho, listener) {
    pai.removeChild(filho);
    pai.removeChild(listener);
    pai.removeAttribute("style");
}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
