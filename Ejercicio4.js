var a = 0;
var b = 0;

function max_o_min(a, b){
    if(a > b){
        return a;
    }else if(b > a){
        return b;
    }else if(a = b){
        return "Son el mismo numero";
    }
}

var result = max_o_min(a, b);

console.log(result);