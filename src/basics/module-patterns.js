let Person = function() {
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