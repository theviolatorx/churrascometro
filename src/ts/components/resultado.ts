import { app } from "./main.js";
import { removeFormCad } from "../events/events.js";

// TODO: Mostrar Resultado
export const result = function (resultado: Object) {
  const screen_people = document.getElementById("container") as HTMLDivElement;
  screen_people.setAttribute("style", "display: none;");

  const screen_result = document.createElement("div") as HTMLDivElement;
  screen_result.classList.add("showresult");
  screen_result.setAttribute("id", "showresult");
  screen_result.setAttribute(
    "style",
    "position:relative;z-index: 3;margin-top:0;"
  );

  const container_result = document.createElement("div") as HTMLDivElement;
  container_result.setAttribute("class", "cadbutton");
  container_result.setAttribute("id", "cadbutton");
  container_result.setAttribute(
    "style",
    "width: 400px;height: 530px;margin: 0 auto;margin-top: -50px;justify-content:none;"
  );

  const headerResul = document.createElement("h3") as HTMLParagraphElement;
  headerResul.setAttribute("style", "justify-content: none;align-items: none;");
  //   headerResul.textContent = 'RESULTADO<br>Testando!';

  headerResul.innerHTML = "RESULTADO<br><br>";

  const itens = Object.keys(resultado);

  itens.forEach((item) => {
    console.log(item, resultado[item]);
    headerResul.innerHTML += `${item}... ${resultado[item]} `+( resultado[item]  < 1 ? 'gr' : 'kg' )+`<br>`; //TODO: Resolver problema dos tipos Litros e Kilos
  });
 

  container_result.appendChild(headerResul);

  screen_result.appendChild(container_result);
  app.appendChild(screen_result);
  removeFormCad(screen_people , screen_result, container_result);
};
