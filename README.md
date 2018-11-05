# Learn Javascript 

## Basics features

**Closure**  <\br>
Closures  are a way to 'remember' a function's variable even after it has finished running. <\br>

**Example**   <\br>
function makeAdder(x) {  <\br>
    function add(y) {    <\br>
        return x + y;    <\br>
    }   <\br>
    return add;  <\br>
}  <\br>
 
let plusOne =  makeAdder( 1 );  <\br>
let plusTen = makeAdder( 10 );  <\br>
console.log(`3 + 1 = ${plusOne( 3 )}`); // 4  <\br>
console.log( `41 + 1 = ${plusOne( 41 )}` ); // 42  <\br>
console.log( `13 + 10 = ${plusTen( 13 )}` ); //23  <\br>

