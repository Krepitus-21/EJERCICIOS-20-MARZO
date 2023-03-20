var a = 0;
var b = 0;

function division(a, b){

    if(b == 0){
        return "Error de calculo";
    }else{
        return a/b;
    }
}

var result = division(a, b);

console.log(result);