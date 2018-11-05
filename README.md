# Learn Javascript 

## Basics features

**Closure** \n
Closures  are a way to 'remember' a function's variable even after it has finished running. \n

**Example** 
 function makeAdder(x) { \n
    function add(y) {   \n
        return x + y;   \n
    }
    return add;
} 

let plusOne =  makeAdder( 1 );
let plusTen = makeAdder( 10 );
console.log(`3 + 1 = ${plusOne( 3 )}`); // 4
console.log( `41 + 1 = ${plusOne( 41 )}` ); // 42
console.log( `13 + 10 = ${plusTen( 13 )}` ); //23

