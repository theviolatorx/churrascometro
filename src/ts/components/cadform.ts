import { removeFormCad } from "../events/events.js";

export const cadForm = function () {
  const container = document.getElementById("cadcontainer") as HTMLDivElement;

  const buttonClose = document.createElement("div") as HTMLHeadElement;
  buttonClose.setAttribute("class", "closebutton");
  buttonClose.setAttribute(
    "style",
    "margin-left:auto;margin-top:0px;width:60px;height:60px;z-index:2;"
  );
//   buttonClose.innerHTML = "X";
    const h4b = document.createElement("h3") as HTMLHeadElement;
  h4b.innerHTML = "X";
  buttonClose.append(h4b);

  container.appendChild(buttonClose);

  const container_form = document.createElement("div") as HTMLDivElement;
  container_form.setAttribute("class", "cadbutton");
  container_form.setAttribute("id", "cadbutton");
  container_form.setAttribute(
    "style",
    "width: 400px;height: 450px;margin: 0 auto;margin-top: -100px;"
  );

  const headerForm = document.createElement("p") as HTMLParagraphElement;
  headerForm.setAttribute("id", "header-form");
  headerForm.textContent =
    "Nessa casa sempre tem novidades! Cadastre seu e-mail. Fique por perto para saber dos novos cortes e linhas especiais, das promoções e novas receitas que experimentamos.";

  const formRegister = document.createElement("form") as HTMLFormElement;
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("placeholder", "Seu nome");
  nameInput.classList.add("input-form-name");

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("placeholder", "Seu email");
  emailInput.classList.add("input-form-email");

  const cityInput = document.createElement("input");
  cityInput.setAttribute("type", "text");
  cityInput.setAttribute("id", "city");
  cityInput.setAttribute("placeholder", "Sua Cidade");
  cityInput.classList.add("input-form-cidade");

  const divConsentInput = document.createElement("div");
  divConsentInput.setAttribute("id", "consent-input");
  divConsentInput.classList.add("consent-input");

  const consentInput = document.createElement("input");
  consentInput.setAttribute("type", "checkbox");
  consentInput.setAttribute("id", "consent-checkbox");
  consentInput.setAttribute("name", "consentInput");
  consentInput.setAttribute("checked", "checked");

  const labelConsentInput = document.createElement("label");
  labelConsentInput.setAttribute("for", "consent-checkbox");
  labelConsentInput.setAttribute("id", "consent-label");
  labelConsentInput.classList.add("consent-label");
  labelConsentInput.innerText =
    "Concordo em receber comunicações e ofertas personalizadas de acordo com meus interesses.";

  const registerInputGroup = document.createElement("div") as HTMLDivElement;
  registerInputGroup.setAttribute("class", "cadbutton");
  registerInputGroup.setAttribute("id", "cadbutton");
  registerInputGroup.setAttribute(
    "style",
    "margin-left:auto;margin-right:auto;margin-top:300px;width:180px;z-index:2"
  );

  const h3b = document.createElement("h3") as HTMLHeadElement;
  h3b.innerHTML = "CADASTRAR";
  registerInputGroup.append(h3b);

  container_form.appendChild(headerForm);
  formRegister.appendChild(nameInput);
  formRegister.appendChild(emailInput);
  formRegister.appendChild(cityInput);
  container_form.appendChild(formRegister);
  divConsentInput.appendChild(consentInput);
  divConsentInput.appendChild(labelConsentInput);
  container_form.appendChild(divConsentInput);
  container_form.appendChild(registerInputGroup);

  container.appendChild(container_form);
    removeFormCad(container, container_form, buttonClose);
  return container;
};
