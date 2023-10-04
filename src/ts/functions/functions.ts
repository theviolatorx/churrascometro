import { valueDefaultChurras } from '../constants/constats.js';
// Funções Locais 

export function doubleZeros(valor:number): string{
    if (valor < 10) {
        return "0" + String(valor);
    }
    return String(valor);
}

export function removeNode(
    pai: HTMLDivElement,
    filho: HTMLDivElement,
    listener: HTMLHeadElement
  ):void {
    pai.removeChild(filho);
    pai.removeChild(listener);
    pai.removeAttribute("style");
  }

export function validateEmail(email: string): boolean {
    var re: RegExp = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  

  // Função API Consulta CEP

export const API = function (cep: string): Promise<any>{
    const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
    const config = {
      method: 'GET'
    }
    return fetch(endpoint, config).then((response)=> response.json());
  };
  
  // export const APII = async function (CEP: string): Promise<any>{
  //   const endpoint = `https://viacep.com.br/ws/${cep}/json/`;
  //   const config = {
  //     method: 'GET'
  //   }
  //   const response = await fetch(endpoint, config);
  //   return await response.json();
  // };
  
  export function calcularChurras(man: number, wom: number, kid: number, tim?: number, atv?: number){
    let totMeat:number = valueDefaultChurras.meat.man.picanha * man * 1 * (1);
    totMeat += valueDefaultChurras.meat.man.contrafile * man * 1 * (1);
    totMeat += valueDefaultChurras.meat.man.fraldinha * man * 1 * (1);
    totMeat += valueDefaultChurras.meat.wom.picanha * wom * 1 * (1);
    totMeat += valueDefaultChurras.meat.wom.contrafile * wom * 1 * (1);
    totMeat += valueDefaultChurras.meat.wom.fraldinha * wom * 1 * (1);
    totMeat += valueDefaultChurras.meat.kid.picanha * kid * 1 * (1);
    totMeat += valueDefaultChurras.meat.kid.contrafile * kid * 1 * (1);
    totMeat += valueDefaultChurras.meat.kid.fraldinha * kid * 1 * (1);
  
    let totChicken:number = valueDefaultChurras.chicken.man.drummets * man * 1 * (1);
    totChicken += valueDefaultChurras.chicken.man.coracao * man * 1 * (1);
    totChicken += valueDefaultChurras.chicken.man.sassami * man * 1 * (1);
    totChicken += valueDefaultChurras.chicken.wom.drummets * wom * 1 * (1);
    totChicken += valueDefaultChurras.chicken.wom.coracao * wom * 1 * (1);
    totChicken += valueDefaultChurras.chicken.wom.sassami * wom * 1 * (1);
    totChicken += valueDefaultChurras.chicken.kid.drummets * kid * 1 * (1);
    totChicken += valueDefaultChurras.chicken.kid.coracao * kid * 1 * (1);
    totChicken += valueDefaultChurras.chicken.kid.sassami * kid * 1 * (1);
  
    let totSausage:number = valueDefaultChurras.sausage.man.apimentada * man * 1 * (1);
    totSausage += valueDefaultChurras.sausage.man.normal * man * 1 * (1);
    totSausage += valueDefaultChurras.sausage.man.cuiabana * man * 1 * (1);
    totSausage += valueDefaultChurras.sausage.wom.apimentada * wom * 1 * (1);
    totSausage += valueDefaultChurras.sausage.wom.normal * wom * 1 * (1);
    totSausage += valueDefaultChurras.sausage.wom.cuiabana * wom * 1 * (1);
    totSausage += valueDefaultChurras.sausage.kid.apimentada * kid * 1 * (1);
    totSausage += valueDefaultChurras.sausage.kid.normal * kid * 1 * (1);
    totSausage += valueDefaultChurras.sausage.kid.cuiabana * kid * 1 * (1);
  
    let totPork:number = valueDefaultChurras.pork.man.costelinha * man * 1 * (1);
    totPork += valueDefaultChurras.pork.man.barriga * man * 1 * (1);
    totPork += valueDefaultChurras.pork.man.copalombo * man * 1 * (1);
    totPork += valueDefaultChurras.pork.wom.costelinha * wom * 1 * (1);
    totPork += valueDefaultChurras.pork.wom.barriga * wom * 1 * (1);
    totPork += valueDefaultChurras.pork.wom.copalombo * wom * 1 * (1);
    totPork += valueDefaultChurras.pork.kid.costelinha * kid * 1 * (1);
    totPork += valueDefaultChurras.pork.kid.barriga * kid * 1 * (1);
    totPork += valueDefaultChurras.pork.kid.copalombo * kid * 1 * (1);
  
  
    const result = {
      meat: totMeat/1000,
      chicken: totChicken/1000,
      sausage: totSausage/1000,
      pork: totPork/1000
    };
    
    console.log(result);
  };
  