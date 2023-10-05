import { app } from "./main.js";
import { removeFormCad } from "../events/events.js";
import { tipoProduto } from "../functions/functions.js";
// TODO: Mostrar Resultado
export const result = function (resultado) {
    const screen_people = document.getElementById("container");
    screen_people.setAttribute("style", "display: none;");
    const screen_result = document.createElement("div");
    screen_result.classList.add("showresult");
    screen_result.setAttribute("id", "showresult");
    screen_result.setAttribute("style", "position:relative;z-index: 3;margin-top:0;");
    const container_result = document.createElement("div");
    container_result.setAttribute("class", "cadbutton");
    container_result.setAttribute("id", "cadbutton");
    container_result.setAttribute("style", "width: 400px;height: 530px;margin: 0 auto;margin-top: -50px;justify-content:none;");
    const headerResul = document.createElement("h3");
    headerResul.setAttribute("style", "justify-content: none;align-items: none;");
    //   headerResul.textContent = 'RESULTADO<br>Testando!';
    headerResul.innerHTML = "LISTA DE COMPRAS<br><br>";
    const itens = Object.keys(resultado);
    console.log(resultado);
    let index = 0;
    let typeProd;
    itens.forEach((item) => {
        typeProd = tipoProduto(index, resultado[item]);
        headerResul.innerHTML += `${item}... ${resultado[item]} ${typeProd} <br>`; // TODO: Precisa ligar com as quantidades
        index++;
    });
    container_result.appendChild(headerResul);
    screen_result.appendChild(container_result);
    app.appendChild(screen_result);
    removeFormCad(screen_people, screen_result, container_result);
};
