import { valueDefaultChurras } from "../constants/constats.js";
import { result } from "../components/resultado.js";
// Funções Locais

export function doubleZeros(valor: number): string {
  if (valor < 10) {
    return "0" + String(valor);
  }
  return String(valor);
}

export function removeNode(
  pai: HTMLDivElement ,
  filho: HTMLDivElement ,
  listener: HTMLHeadElement
): void {
  pai.removeChild(filho);
  pai.removeChild(listener);
  pai.removeAttribute("style");
}

export function validateEmail(email: string): boolean {
  var re: RegExp = /\S+@\S+\.\S+/;
  return re.test(email);
}

export function validateCep(cep: number): Boolean {
  var re: RegExp = /d{8}/;
  return re.test(cep);
}

// Função API Consulta CEP

export const API = function (cep: string): Promise<any> {
  const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
  const config = {
    method: "GET",
  };
  return fetch(endpoint, config).then((response) => response.json());
};

// export const APII = async function (CEP: string): Promise<any>{
//   const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
//   const config = {
//     method: 'GET'
//   }
//   const response = await fetch(endpoint, config);
//   return await response.json();
// };

export function calcularChurras(
  man: number,
  wom: number,
  kid: number,
  tim: number,
  atv?: number
) {
  let totMeatPicanha: number =
    valueDefaultChurras.meat.man.picanha * man * 1 * tim;
  let totMeatContra: number =
    valueDefaultChurras.meat.man.contrafile * man * 1 * tim;
  let totMeatFralda: number =
    valueDefaultChurras.meat.man.fraldinha * man * 1 * tim;
  totMeatPicanha += valueDefaultChurras.meat.wom.picanha * wom * 1 * tim;
  totMeatContra += valueDefaultChurras.meat.wom.contrafile * wom * 1 * tim;
  totMeatFralda += valueDefaultChurras.meat.wom.fraldinha * wom * 1 * tim;
  totMeatPicanha += valueDefaultChurras.meat.kid.picanha * kid * 1 * tim;
  totMeatContra += valueDefaultChurras.meat.kid.contrafile * kid * 1 * tim;
  totMeatFralda += valueDefaultChurras.meat.kid.fraldinha * kid * 1 * tim;

  let totChickenDrum: number =
    valueDefaultChurras.chicken.man.drummets * man * 1 * tim;
  let totChickenCora: number =
    valueDefaultChurras.chicken.man.coracao * man * 1 * tim;
  let totChickenSass: number =
    valueDefaultChurras.chicken.man.sassami * man * 1 * tim;
  totChickenDrum += valueDefaultChurras.chicken.wom.drummets * wom * 1 * tim;
  totChickenCora += valueDefaultChurras.chicken.wom.coracao * wom * 1 * tim;
  totChickenSass += valueDefaultChurras.chicken.wom.sassami * wom * 1 * tim;
  totChickenDrum += valueDefaultChurras.chicken.kid.drummets * kid * 1 * tim;
  totChickenCora += valueDefaultChurras.chicken.kid.coracao * kid * 1 * tim;
  totChickenSass += valueDefaultChurras.chicken.kid.sassami * kid * 1 * tim;

  let totSausageApim: number =
    valueDefaultChurras.sausage.man.apimentada * man * 1 * tim;
  let totSausageNorm: number =
    valueDefaultChurras.sausage.man.normal * man * 1 * tim;
  let totSausageCuia: number =
    valueDefaultChurras.sausage.man.cuiabana * man * 1 * tim;
  totSausageApim += valueDefaultChurras.sausage.wom.apimentada * wom * 1 * tim;
  totSausageNorm += valueDefaultChurras.sausage.wom.normal * wom * 1 * tim;
  totSausageCuia += valueDefaultChurras.sausage.wom.cuiabana * wom * 1 * tim;
  totSausageApim += valueDefaultChurras.sausage.kid.apimentada * kid * 1 * tim;
  totSausageNorm += valueDefaultChurras.sausage.kid.normal * kid * 1 * tim;
  totSausageCuia += valueDefaultChurras.sausage.kid.cuiabana * kid * 1 * tim;

  let totPorkCost: number =
    valueDefaultChurras.pork.man.costelinha * man * 1 * tim;
  let totPorkBarr: number =
    valueDefaultChurras.pork.man.barriga * man * 1 * tim;
  let totPorkCopa: number =
    valueDefaultChurras.pork.man.copalombo * man * 1 * tim;
  totPorkCost += valueDefaultChurras.pork.wom.costelinha * wom * 1 * tim;
  totPorkBarr += valueDefaultChurras.pork.wom.barriga * wom * 1 * tim;
  totPorkCopa += valueDefaultChurras.pork.wom.copalombo * wom * 1 * tim;
  totPorkCost += valueDefaultChurras.pork.kid.costelinha * kid * 1 * tim;
  totPorkBarr += valueDefaultChurras.pork.kid.barriga * kid * 1 * tim;
  totPorkCopa += valueDefaultChurras.pork.kid.copalombo * kid * 1 * tim;

  const totBread: number =
    (valueDefaultChurras.bread.man.paodeaolho *
      (man === 0 && wom === 0 && kid === 0 ? 0 : 1) *
      (man === 0 ? 1 : man) *
      (wom === 0 ? 1 : wom) +
      valueDefaultChurras.bread.kid.paodeaolho * kid) /
    5;

  const totCoal: number =
    valueDefaultChurras.coal *
    (man === 0 && wom === 0 && kid === 0 ? 0 : 1) *
    (man === 0 ? 1 : man) *
    (wom === 0 ? 1 : wom) *
    (kid === 0 ? 1 : kid);

  const totSalt: number =
    valueDefaultChurras.salt *
    (man === 0 && wom === 0 && kid === 0 ? 0 : 1) *
    (man === 0 ? 1 : man) *
    (wom === 0 ? 1 : wom) *
    (kid === 0 ? 1 : kid);

  const totIce: number =
    valueDefaultChurras.ice *
    (man === 0 && wom === 0 && kid === 0 ? 0 : 1) *
    (man === 0 ? 1 : man) *
    (wom === 0 ? 1 : wom) *
    (kid === 0 ? 1 : kid);

  const totRefri: number =
    valueDefaultChurras.refri *
    (man === 0 && wom === 0 && kid === 0 ? 0 : 1) *
    (man === 0 ? 1 : man) *
    (wom === 0 ? 1 : wom) *
    (kid === 0 ? 1 : kid);

  const totWather: number =
    valueDefaultChurras.wather *
    (man === 0 && wom === 0 && kid === 0 ? 0 : 1) *
    (man === 0 ? 1 : man) *
    (wom === 0 ? 1 : wom) *
    (kid === 0 ? 1 : kid);

  const totBeer: number =
    valueDefaultChurras.beer *
    (man === 0 && wom === 0 ? 0 : 1) *
    (man === 0 ? 1 : man) *
    (wom === 0 ? 1 : wom);

  const resultado = {
    Picanha: totMeatPicanha,
    'Contra File': totMeatContra,
    Fraudinha: totMeatFralda,
    'Coxinha de Frango': totChickenDrum,
    'Caracão de Frango': totChickenCora,
    'Sassami de Frango': totChickenSass,
    'Linguiça Apimentada': totSausageApim,
    'Linguiça Normal': totSausageNorm,
    'Linguiça Cuiabana': totSausageCuia,
    'Costelinha de Porco': totPorkCost,
    'Barriga de Porco': totPorkBarr,
    'Bisteca da Copa Lombo': totPorkCopa,
    'Pao De Alho': totBread,
    'Carvão': totCoal,
    'Sal Grosso': totSalt,
    'Gelo': totIce,
    Refrigerante: totRefri,
    'Água': totWather,
    Cerveja: totBeer,
  };

  result(resultado);
}
