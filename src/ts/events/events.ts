import { app } from "../components/main.js";
import { cadForm } from "../components/cadform.js";
import { screen_churrascometro as churras } from "../components/churrascometro.js";

import { userLocal } from "../constants/constats.js";
import {
  doubleZeros,
  removeNode,
  API,
  validateEmail,
  calcularChurras,
  validateCep,
} from "../functions/functions.js";

export const appstart = function () {
  const container = document.getElementById("container") as Element;
  const cadcontainer = document.getElementById(
    "cadcontainer"
  ) as HTMLDivElement;
  if (!userLocal) {
    const cadbutton_click = document.getElementById(
      "cadbutton"
    ) as HTMLDivElement;
    cadbutton_click.addEventListener("click", () => {
      cadcontainer.setAttribute("style", "display: flex;");
      cadForm();
    });
  }
  const h2 = document.getElementById("title_splash") as Element;
  if (userLocal) {
    h2.addEventListener("click", () => {
      app.removeChild(container);
      app.removeChild(cadcontainer);
      churrascometro();
    });
  }
};

export const removeFormCad = function (
  pai: HTMLDivElement,
  filho: HTMLDivElement,
  listener: HTMLHeadElement
) {
  listener.addEventListener("click", () => {
    removeNode(pai, filho, listener);
  });
};

export const cadUser = function (
  listener: HTMLHeadElement,
  nameInput: HTMLInputElement,
  emailInput: HTMLInputElement,
  cepInput: HTMLInputElement,
  consentInput: HTMLInputElement,
  pai: HTMLDivElement,
  filho: HTMLDivElement,
  listener1: HTMLHeadElement
) {
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

    if (
      customer.name &&
      customer.email &&
      customer.cep &&
      validateEmail(customer.email) &&
      validateCep(customer.cep) && 
      customer.cep.length === 8
    ) {
      //   localStorage.setItem(customer.email, JSON.stringify(customer));
      const dadosCEP = API(customer.cep)
        .then((response) => {
          customer.address = response;
          if (!response.erro) {
            localStorage.setItem("userlocal", JSON.stringify(customer));
            removeNode(pai, filho, listener1);
            window.alert("Usuário Cadastrado com Sucesso!");
            window.location.reload();
          } else {
            window.alert("CEP não encontrado!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      window.alert(
        "Verifique se preencheu todos os campos e se o email esta correto.\nExemplo email: exemplo@exemplo.dominio\nExemplo CEP: 11750000 (Somente 8 dígitos)"
      );
    };
  });
};

export const churrascometro = function () {
  app.appendChild(churras());
};

export const actionButtonMinusPlus = function (
  evento: HTMLHeadElement,
  valor: HTMLHeadElement,
  action: number
) {
  evento.addEventListener("click", (e) => {
    let vl: number = Number(valor.innerHTML);
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

export const actionCalcChurros = function (evento: HTMLHeadElement) {
  evento.addEventListener("click", () => {
    const man: number = Number(document.getElementById("qt1h").innerHTML);
    const wom: number = Number(document.getElementById("qt2m").innerHTML);
    const kid: number = Number(document.getElementById("qt3c").innerHTML);
    const tim: number = Number(document.getElementById("qt4t").innerHTML);
    calcularChurras(man, wom, kid, tim);
  });
};
