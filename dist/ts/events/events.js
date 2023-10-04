import { app } from "../components/main.js";
import { cadForm } from "../components/cadform.js";
import { screen_churrascometro as churras } from '../components/churrascometro.js';
import { doubleZeros, removeNode, API, validateEmail, calcularChurras } from '../functions/functions.js';
// Constantes 
export const userLocal = localStorage.getItem("userlocal");
// Funções Exportadas 
export const appstart = function () {
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
export const cadUser = function (listener, nameInput, emailInput, cepInput, consentInput, pai, filho, listener1) {
    listener.addEventListener("click", () => {
        const customer = {
            name: nameInput.value,
            email: emailInput.value,
            cep: cepInput.value,
            offer: consentInput.checked,
            address: '',
        };
        if (customer.name &&
            customer.email &&
            customer.cep &&
            validateEmail(customer.email)) {
            //   localStorage.setItem(customer.email, JSON.stringify(customer));
            const dadosCEP = API(customer.cep).then((response) => {
                customer.address = response;
                localStorage.setItem("userlocal", JSON.stringify(customer));
            }).catch((error) => {
                console.log(error);
            });
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
// TODO: Evento Mostrar Resultado
export const actionCalcChurros = function (evento) {
    evento.addEventListener('click', () => {
        const man = Number(document.getElementById('qt1h').innerHTML);
        const wom = Number(document.getElementById('qt2m').innerHTML);
        const kid = Number(document.getElementById('qt3c').innerHTML);
        calcularChurras(man, wom, kid);
    });
};
