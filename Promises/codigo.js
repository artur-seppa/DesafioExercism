export function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    };
}

export function all(promises) {
    if (promises === undefined) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            promises = [promises];
        }

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        const results = new Array(promises.length);
        let completedPromises = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    completedPromises++;

                    if (completedPromises === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
}

export function allSettled(promises) {
    if (promises === undefined) {
        return Promise.resolve();
    }

    return new Promise((resolve) => {
        if (!Array.isArray(promises)) {
            promises = [promises];
        }

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        const results = new Array(promises.length);
        let completedPromises = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    completedPromises++;

                    if (completedPromises === promises.length) {
                        resolve(results);
                    }
                })
                .catch(error => {
                    results[index] = error;
                    completedPromises++;

                    if (completedPromises === promises.length) {
                        resolve(results);
                    }
                });
        });
    });
}

export function race(promises) {
    if (promises === undefined) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            promises = [promises];
        }

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        promises.forEach(promise => {
            Promise.resolve(promise)
                .then(resolve)
                .catch(reject);
        });
    });
}

export function any(promises) {
    if (promises === undefined) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            promises = [promises];
        }

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        const errors = [];
        let rejectedPromises = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((value) => {
                    resolve(value);
                })
                .catch(error => {
                    errors[index] = error;
                    rejectedPromises++;

                    if (rejectedPromises === promises.length) {
                        reject(errors);
                    }
                });
        });
    });
}