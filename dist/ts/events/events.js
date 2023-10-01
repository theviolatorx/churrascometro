import { app } from "../components/main.js";
import { cadForm } from "../components/cadform.js";
export const appstart = function () {
    // const box_del = document.getElementsByClassName('box') as HTMLCollectionOf<Element>;
    const container = document.getElementById("container");
    if (!userLocal) {
        const cadcontainer = document.getElementById("cadcontainer");
        const cadbutton_click = document.getElementById("cadbutton");
        cadbutton_click.addEventListener("click", () => {
            cadcontainer.setAttribute("style", "display: flex;");
            cadForm();
        });
    }
    const h2 = document.getElementById("title_splash");
    if (userLocal) {
        h2.addEventListener("click", () => {
            console.log(container);
            app.removeChild(container);
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
export const userLocal = localStorage.getItem("userlocal");
function removeNode(pai, filho, listener) {
    pai.removeChild(filho);
    pai.removeChild(listener);
    pai.removeAttribute("style");
}
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
