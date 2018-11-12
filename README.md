# Learn Javascript 

## Basics features

**Closure:**  
* Closures  are a way to 'remember' a function's variable even after it has finished running. 

**Example:** 
```
function makeAdder(x) {  
    function add(y) {    
        return x + y;    
    } 
    return add;  
}  
   
let plusOne =  makeAdder( 1 );    
let plusTen = makeAdder( 10 );    
console.log(`3 + 1 = ${plusOne( 3 )}`); // 4  
console.log( `41 + 1 = ${plusOne( 41 )}` ); // 42  
console.log( `13 + 10 = ${plusTen( 13 )}` ); //23  
```
**Module**
* Construct the module with binding functions with the object and return it.

**Example**
```
function User() {
    let username, passsword;
    function doLogin(user,passsword) {
        username = user;
        passsword = passsword;
        // do rest of the things here
        console.log(`Login in with user, ${username}`);
    }
    var publicAPI = {
        login: doLogin
    }
    return publicAPI;
}

var publicAPI = User();
publicAPI.login('adi', 'pass');
```

**Scopes**
* JS is works in function scoping. There is a Global scope and function scope to execute the 
 program. In Javascript compiler first execute the program declare every variable and function 
 and after that interprator execute the program on that scoping.

**Example**
```
var a = 10;// global scope

function outer() {
    var b = a; // b in outer function scope and a in global scope
    console.log(`func: outer, var b: ${b}`);
    function inner() {
        var c = b; // b in inner function as declared below while compilation scope and c in inner function scope 
        console.log(`func: inner, var c: '${c}' before b is undefined but declared`); // c = undefined 
        var b=20; // inner function scope and value will be assigned while interpretation
    }
    inner();
}
outer();
```

**Module Pattern**
* Bind property in scope-chain in such a way that they are encapsulated inside closure.

**Example**
```
let Person = function() {
    // these variables are in outer function scopes and encapsulated ...
    let firstName = "Aditya"; 
    let lastName = "Awasthi";
    let instance = {
        "getFirstName": function(){
            return firstName;
        },
        "getLastName": function(){
            return lastName;
        }
    }
    return instance;
}

let person1 = new Person();
console.log(`Person:: FirstName: ${person1.getFirstName()}, LastName: ${person1.getLastName()}`); 
```
