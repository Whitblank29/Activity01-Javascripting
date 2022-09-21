// My answer, get the same solution but isn't working
// let total = 0;
// let limit = 10;

// for(let i = 0; i < limit; i++) {
//     console.log(total);
//     total = i+total;
// }; 

// console.log(total)


// official solution that looks alomost the same ...
let limit = 10;
let total = 0;

for(let i = 0; i < limit ; i++){
    total+=i;
}

console.log(total);