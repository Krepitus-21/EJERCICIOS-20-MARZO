var edad = 0;

function clasificacion(edad){
    if(edad < 13){
        return "Niño";
    }else if(18 > edad > 13){
        return "Adolescente";
    }else if(64 > edad > 19){
        return "Adulto";
    }else{
        return "Mayor";
    } 
}

var result = clasificacion(edad);

console.log(result);