function Calcular(){
    
    //Definición de Variables:
    var dato1, dato2, dato3, dato4, clase,
        octeto1, octeto2, octeto3, octeto4,
        mascara1, mascara2, mascara3, mascara4,
        mascarabin1, mascarabin2, mascarabin3, mascarabin4,
        mascarabininv1, mascarabininv2, mascarabininv3, mascarabininv4;
    
    /*Tomamos lo datos de los Inputs, en las variables octeto# y las convertimos 
    a binario haciendo .toString con base 2: */
    
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
    
    
    /*Le añadimos 7 ceros por delante al resultado de octeto# y mostramos solo los 8 
    primeros digitos de izquierda a derecha, osea si octeto1 es igual a 101 entonces 
    "0000000" + 101 = 0000000101 pero solo se mostrara 00000101gracias a .slice(-8);*/
    
    octeto1=("0000000" + octeto1).slice(-8);
    octeto2=("0000000" + octeto2).slice(-8);
    octeto3=("0000000" + octeto3).slice(-8);
    octeto4=("0000000" + octeto4).slice(-8);
        
    /* Escribe en el documento html en <p id="resultado"> el resultado de los numero 
    convertidos a binario: */
    
    document.getElementById("resultado").innerHTML = octeto1 + " - " + octeto2 + " - " +
    octeto3 + " - " + octeto4;
    
    mascaracorta = parseInt(document.getElementById('mascaracorta').value);
    
    
    mascarabin1 = ("00000000" + "11111111111111111111111111111111").slice(0+mascaracorta, 8+mascaracorta);   
    
    mascarabininv1 = mascarabin1.split("").reverse().join("");
        
    mascara1 = parseInt(mascarabininv1.substring(0, 8),2);
    
        if(mascaracorta > 1) { 
    
        document.getElementById("mascara1").value = mascara1;
        }
    
        else {
        
        var prueba1 = parseInt(document.getElementById('mascara1').value);
        var prueba3 = prueba1.toString(2);
        var prueba2 =("0000000" + prueba2).slice(-8);
        var holamundo = parseInt(prueba2.substring(0,1))+parseInt           (prueba2.substring(1,2))+parseInt(prueba2.substring(2,3));
        
            console.log(prueba2);
    }
    
    /* document.getElementById("mascara2").value = 0;
    document.getElementById("mascara3").value = 0;
    document.getElementById("mascara4").value = 0;
    */
        
    
    if(mascara1 == 255){
        
        mascaracorta = mascaracorta - 8;    
        mascarabin2 = ("00000000" + "11111111111111111111111111111111").slice(0+mascaracorta, 8+mascaracorta);
        mascarabininv2 = mascarabin2.split("").reverse().join("");
        mascara2 = parseInt(mascarabininv2.substring(0, 8),2);
        document.getElementById("mascara2").value = mascara2;
    }
    else {
        document.getElementById("mascara2").value = 0;
    }
            
    if(mascara2 == 255){                    
        mascaracorta = mascaracorta - 8;    
        mascarabin3 = ("00000000" + "11111111111111111111111111111111").slice(0+mascaracorta, 8+mascaracorta);
        mascarabininv3 = mascarabin3.split("").reverse().join("");
        mascara3 = parseInt(mascarabininv3.substring(0, 8),2);
        document.getElementById("mascara3").value = mascara3;
        
    }
    else {
        document.getElementById("mascara3").value = 0;
    }
    
    if(mascara3 == 255){                    
        mascaracorta = mascaracorta - 8;    
        mascarabin4 = ("00000000" + "11111111111111111111111111111111").slice(0+mascaracorta, 8+mascaracorta);
        mascarabininv4 = mascarabin4.split("").reverse().join("");
        mascara4 = parseInt(mascarabininv4.substring(0, 8),2);
        document.getElementById("mascara4").value = mascara4;
        
    }
    else {
        document.getElementById("mascara4").value = 0;
    }

    
};