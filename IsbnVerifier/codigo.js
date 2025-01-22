export const isValid = (isbn) => {
    const isbnFormatada = isbn.replace(/[-\s]/g, '');

    if (isbnFormatada.length !== 10) {
        return false;
    } else if (!/^\d{9}[\dX]$/.test(isbnFormatada)) {
        return false;
    }

    let checkSoma = 0;
    for (let i = 0; i < 10; i++) {
        const digito = (isbnFormatada[i] === 'X' && i === 9)
            ? 10
            : parseInt(isbnFormatada[i]);

        checkSoma += digito * (10 - i);
    }

    const resultado = (checkSoma % 11 === 0) ? true : false;
    return resultado;
};