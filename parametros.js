// PARÂMETROS DE FUNÇÃO

function soma(numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(2, 2));
console.log(soma(50, 340));
console.log(soma(50, -540));


// PARAMETROS X ARGUMENTOS

// > ordem dos parametros

function nomeIdade(nome, idade){
   return `Meu nome é ${nome} e minha idade é ${idade} anos. `;
}

console.log(nomeIdade("Guilherme", 30));

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));

console.log(multiplica(soma(4, 5)));