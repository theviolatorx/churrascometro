// TODO: Mostrar Resultado
export const result = function (resultado) {
    const screen_result = document.createElement("div");
    screen_result.classList.add("result");
    console.log(resultado);
    const itens = Object.keys(resultado);
    itens.forEach((item) => {
        console.log(item, resultado[item]);
    });
};
