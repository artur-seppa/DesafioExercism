export const prime = (n) => {
    if (n <= 0) {
        throw new Error('there is no zeroth prime');
    }

    let primos = [];
    let num = 2;

    while (primos.length < n) {
        if (ehPrimo(num)) {
            primos.push(num);
        }
        num++;
    }

    return primos[primos.length - 1];
};

const ehPrimo = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
};