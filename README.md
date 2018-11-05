# Learn Javascript 

## Basics features

**Closure:**  
Closures  are a way to 'remember' a function's variable even after it has finished running. 

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
Construc the module wiht binding functions with the object and return it.

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