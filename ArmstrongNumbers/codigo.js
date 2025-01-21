export const isArmstrongNumber = (numero) => {
    const stringNumero = numero.toString();
    const contaDigitos = stringNumero.length;
    
    let soma = 0;
    for (let i = 0; i < contaDigitos; i++) {
      const digito = parseInt(stringNumero[i]);
      soma += Math.pow(digito, contaDigitos);
    }
    
    return soma == numero;
  };