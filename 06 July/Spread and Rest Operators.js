// Spread operator is ...
// ...

// ...


const filer = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filer(1, 2, 4, 1, 7))