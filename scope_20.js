const a = 1; const b = 2; const c = 3;

(function firstFunction (){
    const b = 5; const c = 6;

    (function secondFunction (){
        const b = 8;

        (function thirdFunction (){
            const a = 7; const c = 9;

            (function forthFunction (){
                const a = 1; const c = 8;
            })
        })
    })
})

console.log(`a: ${a}, b: ${b*4}, c: ${c*2}`);



// official solution

/* eslint-disable no-unused-vars */

// const a = 1; const b = 2; const c = 3;

// (function firstFunction(){
//     const b = 5; const c = 6;

//     (function secondFunction (){
//         const b = 8
//         console.log('a: ' + a + ', b: ' + b + ', c: ' + c);
//         (function thirdFunction(){
//             const a = 7; const c = 9;

//             (function fourthFunction(){
//                 const a = 1; const c = 8
//             })()
//         })()
//     })()
// })()


// conclusion another solution
// const a = 1; const b = 2; const c = 3;

// (function firstFunction(){
//     const b = 5; const c = 6;

//     (function secondFunction (){
//         const b = 8
//         console.log(`a: ${a}, b: ${b}, c: ${c}`);
//         (function thirdFunction(){
//             const a = 7; const c = 9;

//             (function fourthFunction(){
//                 const a = 1; const c = 8
//             })()
//         })()
//     })()
// })()