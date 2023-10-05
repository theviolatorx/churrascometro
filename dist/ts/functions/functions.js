import { valueDefaultChurras } from "../constants/constats.js";
import { result } from "../components/resultado.js";
// Funções Locais
export function doubleZeros(valor) {
    if (valor < 10) {
        return "0" + String(valor);
    }
    return String(valor);
}
export function tipoProduto(index, qtItem) {
    if (index === 12 || index === 13 || index === 15) {
        return "pct";
    }
    if (index >= 16 && index <= 18) {
        return "lts";
    }
    if (qtItem < 1) {
        return "grs";
    }
    else if (qtItem >= 1) {
        return "kgs";
    }
}
export function removeNode(pai, filho, listener) {
    pai.removeChild(filho);
    pai.removeChild(listener);
    pai.removeAttribute("style");
}
export function validateEmail(email) {
    email = Trim(email);
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
export function validateCep(cep) {
    cep = Trim(cep);
    // var re: RegExp = /d{8}/;
    var re = /^[0-9]{8}$/;
    return re.test(cep);
}
// Função para retirar os espaços em branco do início e do fim da string.
function Trim(strTexto) {
    // Substitúi os espaços vazios no inicio e no fim da string por vazio.
    return strTexto.replace(/^\s+|\s+$/g, "");
}
// Função API Consulta CEP
export const API = function (cep) {
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
export function calcularChurras(man, wom, kid, tim, atv) {
    let totMeatPicanha = valueDefaultChurras.meat.man.picanha * man * 1 * tim;
    let totMeatContra = valueDefaultChurras.meat.man.contrafile * man * 1 * tim;
    let totMeatFralda = valueDefaultChurras.meat.man.fraldinha * man * 1 * tim;
    totMeatPicanha += valueDefaultChurras.meat.wom.picanha * wom * 1 * tim;
    totMeatContra += valueDefaultChurras.meat.wom.contrafile * wom * 1 * tim;
    totMeatFralda += valueDefaultChurras.meat.wom.fraldinha * wom * 1 * tim;
    totMeatPicanha += valueDefaultChurras.meat.kid.picanha * kid * 1 * tim;
    totMeatContra += valueDefaultChurras.meat.kid.contrafile * kid * 1 * tim;
    totMeatFralda += valueDefaultChurras.meat.kid.fraldinha * kid * 1 * tim;
    let totChickenDrum = valueDefaultChurras.chicken.man.drummets * man * 1 * tim;
    let totChickenCora = valueDefaultChurras.chicken.man.coracao * man * 1 * tim;
    let totChickenSass = valueDefaultChurras.chicken.man.sassami * man * 1 * tim;
    totChickenDrum += valueDefaultChurras.chicken.wom.drummets * wom * 1 * tim;
    totChickenCora += valueDefaultChurras.chicken.wom.coracao * wom * 1 * tim;
    totChickenSass += valueDefaultChurras.chicken.wom.sassami * wom * 1 * tim;
    totChickenDrum += valueDefaultChurras.chicken.kid.drummets * kid * 1 * tim;
    totChickenCora += valueDefaultChurras.chicken.kid.coracao * kid * 1 * tim;
    totChickenSass += valueDefaultChurras.chicken.kid.sassami * kid * 1 * tim;
    let totSausageApim = valueDefaultChurras.sausage.man.apimentada * man * 1 * tim;
    let totSausageNorm = valueDefaultChurras.sausage.man.normal * man * 1 * tim;
    let totSausageCuia = valueDefaultChurras.sausage.man.cuiabana * man * 1 * tim;
    totSausageApim += valueDefaultChurras.sausage.wom.apimentada * wom * 1 * tim;
    totSausageNorm += valueDefaultChurras.sausage.wom.normal * wom * 1 * tim;
    totSausageCuia += valueDefaultChurras.sausage.wom.cuiabana * wom * 1 * tim;
    totSausageApim += valueDefaultChurras.sausage.kid.apimentada * kid * 1 * tim;
    totSausageNorm += valueDefaultChurras.sausage.kid.normal * kid * 1 * tim;
    totSausageCuia += valueDefaultChurras.sausage.kid.cuiabana * kid * 1 * tim;
    let totPorkCost = valueDefaultChurras.pork.man.costelinha * man * 1 * tim;
    let totPorkBarr = valueDefaultChurras.pork.man.barriga * man * 1 * tim;
    let totPorkCopa = valueDefaultChurras.pork.man.copalombo * man * 1 * tim;
    totPorkCost += valueDefaultChurras.pork.wom.costelinha * wom * 1 * tim;
    totPorkBarr += valueDefaultChurras.pork.wom.barriga * wom * 1 * tim;
    totPorkCopa += valueDefaultChurras.pork.wom.copalombo * wom * 1 * tim;
    totPorkCost += valueDefaultChurras.pork.kid.costelinha * kid * 1 * tim;
    totPorkBarr += valueDefaultChurras.pork.kid.barriga * kid * 1 * tim;
    totPorkCopa += valueDefaultChurras.pork.kid.copalombo * kid * 1 * tim;
    const totBread = (valueDefaultChurras.bread.man.paodeaolho *
        (man === 0 && wom === 0 && kid === 0 ? 0 : 1) *
        (man === 0 ? 1 : man) *
        (wom === 0 ? 1 : wom) +
        valueDefaultChurras.bread.kid.paodeaolho * kid) /
        5;
    const totCoal = valueDefaultChurras.coal *
        (man === 0 && wom === 0 && kid === 0 ? 0 : 1) *
        (man === 0 ? 1 : man) *
        (wom === 0 ? 1 : wom) *
        (kid === 0 ? 1 : kid);
    const totSalt = valueDefaultChurras.salt *
        (man === 0 && wom === 0 && kid === 0 ? 0 : 1) *
        (man === 0 ? 1 : man) *
        (wom === 0 ? 1 : wom) *
        (kid === 0 ? 1 : kid);
    const totIce = valueDefaultChurras.ice *
        (man === 0 && wom === 0 && kid === 0 ? 0 : 1) *
        (man === 0 ? 1 : man) *
        (wom === 0 ? 1 : wom) *
        (kid === 0 ? 1 : kid);
    const totRefri = valueDefaultChurras.refri *
        (man === 0 && wom === 0 && kid === 0 ? 0 : 1) *
        (man === 0 ? 1 : man) *
        (wom === 0 ? 1 : wom) *
        (kid === 0 ? 1 : kid);
    const totWather = valueDefaultChurras.wather *
        (man === 0 && wom === 0 && kid === 0 ? 0 : 1) *
        (man === 0 ? 1 : man) *
        (wom === 0 ? 1 : wom) *
        (kid === 0 ? 1 : kid);
    const totBeer = valueDefaultChurras.beer *
        (man === 0 && wom === 0 ? 0 : 1) *
        (man === 0 ? 1 : man) *
        (wom === 0 ? 1 : wom);
    const resultado = {
        Picanha: totMeatPicanha.toFixed(3),
        "Contra File": totMeatContra.toFixed(3),
        Fraudinha: totMeatFralda.toFixed(3),
        "Coxinha de Frango": totChickenDrum.toFixed(3),
        "Coracão de Frango": totChickenCora.toFixed(3),
        "Sassami de Frango": totChickenSass.toFixed(3),
        "Linguiça Apimentada": totSausageApim.toFixed(3),
        "Linguiça Normal": totSausageNorm.toFixed(3),
        "Linguiça Cuiabana": totSausageCuia.toFixed(3),
        "Costelinha de Porco": totPorkCost.toFixed(3),
        "Barriga de Porco": totPorkBarr.toFixed(3),
        "Bisteca da Copa Lombo": totPorkCopa.toFixed(3),
        "Pao De Alho": totBread,
        Carvão: totCoal,
        "Sal Grosso": totSalt,
        Gelo: totIce,
        Refrigerante: totRefri,
        Água: totWather,
        Cerveja: totBeer,
    };
    result(resultado);
}
