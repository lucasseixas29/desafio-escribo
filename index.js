function somarDivisiveis(numero) {
    let somaDosDivisiveis = 0;

    for(let i = 0; i< numero; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            somaDosDivisiveis += i;
        }
    }
    return somaDosDivisiveis;
}

console.log(somarDivisiveis(11));