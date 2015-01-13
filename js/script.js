function Calcular(){
    
    //Definición de Variables:
    var octeto1, octeto2, octeto3, octeto4,
        dato1, dato2, dato3, dato4, clase;
    
    //Tomamos lo datos de los Inputs, en las variables octeto# y las convertimos a binario haciendo .toString con base 2:
    
    dato1 = parseInt(document.getElementById('decimal1').value);
    dato2 = parseInt(document.getElementById('decimal2').value);
    dato3 = parseInt(document.getElementById('decimal3').value);
    dato4 = parseInt(document.getElementById('decimal4').value);
    
    //Convertimos los decimales en dato# a binario con toString(base2):
    
    octeto1 = dato1.toString(2);
    octeto2 = dato2.toString(2);
    octeto3 = dato3.toString(2);
    octeto4 = dato4.toString(2);
    
    //Sacamos la clase de red en base al numero introducido en el primer octeto:
    
    if (dato1 >= 1 && dato1 <= 126){
        document.getElementById("claseDeRed").innerHTML = "Clase A";
    }
    else if (dato1 >= 128 && dato1 <= 191){
        document.getElementById("claseDeRed").innerHTML = "Clase B";
    }
    else if (dato1 >= 192 && dato1 <= 223){
        document.getElementById("claseDeRed").innerHTML = "Clase C";
    }
    else if (dato1 >= 224 && dato1 <= 239){
        document.getElementById("claseDeRed").innerHTML = "Clase D";
    }
    else if (dato1 >= 240 && dato1 <= 255){
         document.getElementById("claseDeRed").innerHTML = "Clase E";
    }
    else {
        document.getElementById("claseDeRed").innerHTML = "Error de clase de Red";
    }
    
    
    /*Le añadimos 7 ceros por delante al resultado de octeto# y mostramos solo los 8 primero digitos de izquierda
    a derecha, osea si octeto1 es igual a 101 entonces "0000000" + 101 = 0000000101 pero solo se mostrara 00000101
    gracias a .slice(-8); : */
    
    octeto1=("0000000" + octeto1).slice(-8);
    octeto2=("0000000" + octeto2).slice(-8);
    octeto3=("0000000" + octeto3).slice(-8);
    octeto4=("0000000" + octeto4).slice(-8);
    
console.log (octeto1.length);
        
    //Escribe en el documento html en <p id="resultado"> el resultado de los numero convertidos a binario:
    
    document.getElementById("resultado").innerHTML = octeto1 + " - " + octeto2 + " - " +
    octeto3 + " - " + octeto4;
        
};