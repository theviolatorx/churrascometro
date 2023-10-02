import { app } from "../components/main.js";
import { cadForm } from "../components/cadform.js";
import { screen_churrascometro as churras } from '../components/churrascometro.js';


// Constantes 

export const userLocal = localStorage.getItem("userlocal");

// Funções Exportadas 

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
  cityInput: HTMLInputElement,
  consentInput: HTMLInputElement,
  pai: HTMLDivElement,
  filho: HTMLDivElement,
  listener1: HTMLHeadElement
) {
  listener.addEventListener("click", () => {
    const customer = {
      name: nameInput.value,
      email: emailInput.value,
      city: cityInput.value,
      offer: consentInput.checked,
    };
    if (
      customer.name &&
      customer.email &&
      customer.city &&
      validateEmail(customer.email)
    ) {
      //   localStorage.setItem(customer.email, JSON.stringify(customer));
      localStorage.setItem("userlocal", JSON.stringify(customer));
      removeNode(pai, filho, listener1);
      window.alert("Usuário Cadastrado com Sucesso!");
      window.location.reload();
    //   return true;
    } else {
      window.alert(
        "Verifique se preencheu todos os campos e se o email esta correto.\nExemplo email: exemplo@exemplo.dominio"
      );
    //   return false;
    }
  });
};
// TODO: Tela Churrascometro
export const churrascometro = function () {
  app.appendChild(churras());
}

export const actionButtonMinusPlus = function(evento: HTMLHeadElement, valor: HTMLHeadElement, action: number){
  evento.addEventListener('click',()=>{
    let vl:number = Number(valor.innerHTML);
    vl += action;
    if (vl <= 0) {
        vl = 0;
    }
    valor.innerHTML = doubleZeros(vl);
    // console.log(action);
  });
};


// Funções Locais 

function doubleZeros(valor:number): string{
    if (valor < 10) {
        return "0" + String(valor);
    }
    return String(valor);
}

function removeNode(
  pai: HTMLDivElement,
  filho: HTMLDivElement,
  listener: HTMLHeadElement
):void {
  pai.removeChild(filho);
  pai.removeChild(listener);
  pai.removeAttribute("style");
}


function validateEmail(email: string): boolean {
  var re: RegExp = /\S+@\S+\.\S+/;
  return re.test(email);
}
