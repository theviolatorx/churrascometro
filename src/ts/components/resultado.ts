

// TODO: Mostrar Resultado
export const result = function (resultado: Object) {
  const screen_result = document.createElement("div") as HTMLDivElement;
  screen_result.classList.add("result");
  console.log(resultado);

  const itens = Object.keys(resultado);
  itens.forEach((item) => {
    console.log(item, resultado[item]);
  });
};
