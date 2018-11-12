var a = 10;

function outer() {
    var b = a;
    console.log(`func: outer, var b: ${b}`);
    function inner() {
        var c = b;
        console.log(`func: inner, var c: '${c}' before b is undefined but declared`);
        b=20;
    }
    inner();
}
outer();