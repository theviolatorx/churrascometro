import { app } from "./main.js";
import { appstart, userLocal } from "../events/events.js";
const splash = function () {
    const cadcontainer = document.createElement("div");
    cadcontainer.setAttribute("class", "cadcontainer");
    cadcontainer.setAttribute("id", "cadcontainer");
    app.appendChild(cadcontainer);
    const container = document.createElement("div");
    container.setAttribute("class", "container");
    container.setAttribute("id", "container");
    const box = document.createElement("div");
    box.setAttribute("id", "cx");
    box.setAttribute("class", "box");
    box.setAttribute("style", "width:600px;height: 150px;margin-left:auto;margin-right:auto;");
    const h2 = document.createElement("h2");
    h2.setAttribute("id", "title_splash");
    h2.innerHTML = "CHURRASCOMETRO";
    box.appendChild(h2);
    container.append(box);
    //   const userLocal = localStorage.getItem("userlocal");
    if (!userLocal) {
        const box_msg = document.createElement("div");
        box_msg.setAttribute("class", "box");
        box_msg.setAttribute("style", "width:900px;height:250px;margin-left:auto;margin-right:auto;margin-top:-60px;");
        const h3 = document.createElement("h3");
        h3.setAttribute("style", "font-size: 0.8em;inset: 20px;");
        h3.innerHTML =
            "O Churrascometro foi desenvolvido para simplificar e aprimorar a experiência de planejar churrascos. Desde calcular a quantidade certa de carne por pessoa até sugerir os melhores cortes e acompanhamentos, estamos aqui para garantir que cada churrasco seja um sucesso.<br>";
        h3.innerHTML =
            h3.innerHTML +
                "Para aproveitar ao máximo o Churrascometro, é fácil começar. Basta se cadastrar para desbloquear todas as funcionalidades exclusivas. Com sua conta, você poderá salvar suas preferências, histórico de churrascos e até mesmo receber sugestões personalizadas com base nas suas escolhas anteriores.<br>";
        h3.innerHTML =
            h3.innerHTML +
                "Registre-se agora e descubra como o Churrascometro pode tornar seus churrascos mais simples, saborosos e inesquecíveis. É hora de transformar cada churrasco em uma celebração única!<br><br>";
        h3.innerHTML = h3.innerHTML + "Aproveite e bom churrasco! 🥩🔥";
        box_msg.appendChild(h3);
        container.append(box_msg);
        const button = document.createElement("div");
        button.setAttribute("class", "cadbutton");
        button.setAttribute("id", "cadbutton");
        button.setAttribute("style", "margin-left:auto;margin-right:auto;margin-top:-60px;");
        const h3b = document.createElement("h3");
        h3b.innerHTML = "CADASTRAR";
        button.append(h3b);
        container.appendChild(button);
    }
    app.appendChild(container);
    appstart();
};
export { splash };
