import { app } from "../components/main.js";
import { cadForm } from "../components/cadform.js";
import { screen_churrascometro as churras } from "../components/churrascometro.js";
import { userLocal } from "../constants/constats.js";
import { doubleZeros, removeNode, API, validateEmail, calcularChurras, validateCep, } from "../functions/functions.js";
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
export const removeScreenResult = function (pai, filho, listener, screen_people) {
    listener.addEventListener("click", () => {
        screen_people.removeAttribute('style');
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
            address: "",
        };
        console.log(customer.name);
        console.log(customer.email);
        console.log(customer.cep);
        console.log("valida email:", validateEmail(customer.email));
        console.log("valida cep:", validateCep(customer.cep));
        console.log("tamanho cep:", customer.cep.length === 8);
        if (customer.name &&
            customer.email &&
            customer.cep &&
            validateEmail(customer.email) &&
            validateCep(customer.cep) &&
            customer.cep.length === 8) {
            //   localStorage.setItem(customer.email, JSON.stringify(customer));
            const dadosCEP = API(customer.cep)
                .then((response) => {
                customer.address = response;
                if (!response.erro) {
                    localStorage.setItem("userlocal", JSON.stringify(customer));
                    removeNode(pai, filho, listener1);
                    window.alert("Usuário Cadastrado com Sucesso!");
                    window.location.reload();
                }
                else {
                    window.alert("CEP não encontrado!");
                }
            })
                .catch((error) => {
                console.log(error);
            });
        }
        else {
            window.alert("Verifique se preencheu todos os campos e se o email esta correto.\nExemplo email: exemplo@exemplo.dominio\nExemplo CEP: 11750000 (Somente 8 dígitos)");
        }
        ;
    });
};
export const churrascometro = function () {
    app.appendChild(churras());
};
export const actionButtonMinusPlus = function (evento, valor, action) {
    evento.addEventListener("click", (e) => {
        let vl = Number(valor.innerHTML);
        let timeChurras = e.currentTarget.id;
        vl += action;
        if (vl <= 0) {
            vl = 0;
        }
        if (timeChurras === "4t" && vl <= 1) {
            vl = 1;
        }
        valor.innerHTML = doubleZeros(vl);
        // console.log(action);
    });
};
export const actionCalcChurros = function (evento) {
    evento.addEventListener("click", () => {
        const man = Number(document.getElementById("qt1h").innerHTML);
        const wom = Number(document.getElementById("qt2m").innerHTML);
        const kid = Number(document.getElementById("qt3c").innerHTML);
        const tim = Number(document.getElementById("qt4t").innerHTML);
        calcularChurras(man, wom, kid, tim);
    });
};
