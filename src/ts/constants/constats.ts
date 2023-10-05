export const userLocal = localStorage.getItem("userlocal");

export const valueDefaultChurras = {
  meat: {
    man: {
      picanha: 300/1000,
      contrafile: 250/1000,
      fraldinha: 200/1000,
    },
    wom: {
      picanha: 250/1000,
      contrafile: 200/1000,
      fraldinha: 150/1000,
    },
    kid: {
      picanha: 120/1000,
      contrafile: 100/1000,
      fraldinha: 100/1000,
    },
  },
  chicken: {
    man: {
      drummets: 150/1000,
      coracao: 100/1000,
      sassami: 120/1000,
    },
    wom: {
      drummets: 100/1000,
      coracao: 50/1000,
      sassami: 70/1000,
    },
    kid: {
      drummets: 80/1000,
      coracao: 30/1000,
      sassami: 50/1000,
    },
  },
  sausage: {
    man: {
      apimentada: 150 / 1000,
      normal: 180 / 1000,
      cuiabana: 200 / 1000,
    },
    wom: {
      apimentada: 80 / 1000,
      normal: 130 / 1000,
      cuiabana: 100 / 1000,
    },
    kid: {
      apimentada: 50 / 1000,
      normal: 70 / 1000,
      cuiabana: 50 / 1000,
    },
  },
  pork: {
    man: {
      costelinha: 250 / 1000,
      barriga: 250 / 1000,
      copalombo: 200 / 1000,
    },
    wom: {
      costelinha: 150 / 1000,
      barriga: 100 / 1000,
      copalombo: 120 / 1000,
    },
    kid: {
      costelinha: 80 / 1000,
      barriga: 80 / 1000,
      copalombo: 80 / 1000,
    },
  },
  bread: {
    man: {
      paodeaolho: 2, // unidade
    },
    kid: {
      paodeaolho: 1, // unidade
    },
  },
  coal: 1.5,
  salt: 0.04,
  ice: 0.5,
  refri: 0.4,
  wather: 0.2,
  beer: 1.8,
};
