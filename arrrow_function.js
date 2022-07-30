function apresentar (nome){
  return `Meu nome é ${nome}`;
}


// ARROW FUNCTION (diferente do operador e igual q é >=

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// ARROW FUNCTION COM MAIS DE 1 LINHA DE INSTRUÇÃO 

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "Somente números de 1 a 9.";
   }else {
    return num1 + num2;
   }
}

// HOISTING: O arrow function se comporta da mesma forma.