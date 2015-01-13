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
    
    /*octeto1=("0000000" + octeto1).slice(-8);
    octeto2=("0000000" + octeto2).slice(-8);
    octeto3=("0000000" + octeto3).slice(-8);
    octeto4=("0000000" + octeto4).slice(-8);*/
    
    /*Por el momento dfinimos haciendo uso de "switch" el largo del Byte, es decir que si decimal 2 a binario es igual a 10
    entonces "completará" el Byte con 6 ceros faltantes por delante del resultado osea = 00000010 */
    
     switch(octeto1.length) {
         case 1:
            octeto1 = "0000000" + octeto1;            
            break;        
        case 2:
            octeto1 = "000000" + octeto1;            
            break;    
        case 3:
            octeto1 = "00000" + octeto1;            
            break;    
        case 4:
            octeto1 = "0000" + octeto1;            
            break;
        case 5:
            octeto1 = "000" + octeto1;            
            break;
        case 6:
            octeto1 = "00" + octeto1;            
            break;
        case 7:
            octeto1 = "0" + octeto1;            
            break;
    }

    switch(octeto2.length) {
        case 1:
            octeto2 = "0000000" + octeto2;
            break;        
        case 2:
            octeto2 = "000000" + octeto2;
            break;    
        case 3:
            octeto2 = "00000" + octeto2;
            break;    
        case 4:
            octeto2 = "0000" + octeto24
            break;
        case 5:
            octeto2 = "000" + octeto2;
            break;
        case 6:
            octeto2 = "00" + octeto2;
            break;
        case 7:
            octeto2 = "0" + octeto2;
            break;
    }
    switch(octeto3.length) {
        case 1:
            octeto3 = "0000000" + octeto3;
            break;        
        case 2:
            octeto3 = "000000" + octeto3;
            break;    
        case 3:
            octeto3 = "00000" + octeto3;
            break;    
        case 4:
            octeto3 = "0000" + octeto3;
            break;
        case 5:
            octeto3 = "000" + octeto3;
            break;
        case 6:
            octeto3 = "00" + octeto3;
            break;
        case 7:
            octeto3 = "0" + octeto3;
            break;
    }

    switch(octeto4.length) {
        case 1:
            octeto4 = "0000000" + octeto4;            
            break;        
        case 2:
            octeto4 = "000000" + octeto4;            
            break;    
        case 3:
            octeto4 = "00000" + octeto4;            
            break;    
        case 4:
            octeto4 = "0000" + octeto4;            
            break;
        case 5:
            octeto4 = "000" + octeto4;            
            break;
        case 6:
            octeto4 = "00" + octeto4;            
            break;
        case 7:
            octeto4 = "0" + octeto4;            
            break;
    }
    
console.log (octeto1.length);
        
    //Escribe en el documento html en <p id="resultado"> el resultado de los numero convertidos a binario:
    
    document.getElementById("resultado").innerHTML = octeto1 + " - " + octeto2 + " - " +
    octeto3 + " - " + octeto4;
        
};