//let x = "";
//console.log(x)
//x = "oi";

// DECLARAÇÃO DE FUNÇÃO

//1) Declara a função
                    //string
function imprimeTexto(texto) {
    console.log(texto)
}

//2) Executa a função (1 ou + vezes)

imprimeTexto("oi");
imprimeTexto("outro texto qualquer");

// três formas de escrever funções.

function soma(){
    //podem haver outros códigos antes do retorno. porém o retorno deve ser por último.
    return 2 + 2;
    //o que tiver após o return não é lido.
}

//console.log(soma())

imprimeTexto(soma());