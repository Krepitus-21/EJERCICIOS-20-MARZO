var nota = 0;

function califica(nota){
    if(nota >= 90){
        return "A";
    }else if(89 > nota > 80){
        return "B";
    }else if(79 > nota > 70){
        return "C";
    }else if(69 > nota > 60){
        return "D";
    }else if(nota < 60){
        return "F";
    }
}

var result = califica(nota);

console.log(result);