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
    if      (dato1 >= 1 && dato1 <= 126){document.getElementById("claseDeRed").innerHTML = "Clase A";}
    else if (dato1 >= 128 && dato1 <= 191){document.getElementById("claseDeRed").innerHTML = "Clase B";}
    else if (dato1 >= 192 && dato1 <= 223){document.getElementById("claseDeRed").innerHTML = "Clase C";}
    else if (dato1 >= 224 && dato1 <= 239){document.getElementById("claseDeRed").innerHTML = "Clase D";}
    else if (dato1 >= 240 && dato1 <= 255){document.getElementById("claseDeRed").innerHTML = "Clase E";}
    else    {document.getElementById("claseDeRed").innerHTML = "Error de clase de Red";}
    
    /*Le añadimos 7 ceros por delante al resultado de octeto# y mostramos solo los 8 
    primeros digitos de izquierda a derecha, osea si octeto1 es igual a 101 entonces 
    "0000000" + 101 = "0000000101" pero solo se mostrara "00000101", gracias a .slice(-8);*/
    octeto1=("0000000" + octeto1).slice(-8);
    octeto2=("0000000" + octeto2).slice(-8);
    octeto3=("0000000" + octeto3).slice(-8);
    octeto4=("0000000" + octeto4).slice(-8);
        
    /* Escribe en el documento html en <p id="resultado"> el resultado de los numero 
    convertidos a binario: */
    document.getElementById("resultado").innerHTML = octeto1+" - "+octeto2+" - "+octeto3+" - "+octeto4;
    
    /*---------------------------------Comienza definición de mascara------------------------------------------*/
    
    
    //Mascara corta es igual al dato introducido en el input "mascaracorta"
    mascaracorta = parseInt(document.getElementById('mascaracorta').value);
    
    /*"mascarabin1" es igual a 00000000 inicialmente, pero si mascaracorta = 1 entonces un cero se mueve hacia
    la izquieda y desaparece al tiempo que aparece un uno desde la derecha osea quedaria 00000001*/ 
    mascarabin1 = ("00000000" + "11111111111111111111111111111111").slice(0+mascaracorta, 8+mascaracorta);   
    
    /*mascarabininv1 es igual a mascarabin1 invertida osea que si, mascarabin1 = 000000101 entonces el resultado de
    mascarabininv1 = 101000000*/
    mascarabininv1 = mascarabin1.split("").reverse().join("");
    
    /*mascara1 es igual a mascarabininv1 convertida de string a entero y de binario a decimal, osea que si
    mascarabininv1 = 101000000 entonces mascara1 = 192 */
    mascara1 = parseInt(mascarabininv1.substring(0, 8),2);
    
    
    /*Si "mascaracorta" es igual o mayor que 1, entonces escribira el resultado de "mascara1" en el input de
    mascara1*/
    if(mascaracorta >= 1) {document.getElementById("mascara1").value = mascara1;}
    
    /*Condiciono el input mascara2 para que aumente solo si el numero en el input mascara1 es igual a 255, osea
    que la mascara no pueda ser por ejemplo 192.255.255.255, en este caso siempre seria 192.0.0.0*/
    if(document.getElementById('mascara1').value == 255){
        
        /*Solo si lo introducido en el input "mascaracorta" es igual o mayor a 1 entonces ejecutara el siguiente codigo*/
        if(mascaracorta >= 1){
            
            /*Resucimos el valor de "mascaracorta" en 8, por ejemplo para que mascara1 sea 255 "mascaracorta" debe ser
            8, entonces la reiniciamos a 0, para que mascarabin2 sea inicialmente igual a 00000000*/
            mascaracorta = mascaracorta - 8;
            
            /*Mismo proceso que en mascarabin1*/
            mascarabin2 = ("00000000" + "11111111111111111111111111111111").slice(0+mascaracorta, 8+mascaracorta);
            mascarabininv2 = mascarabin2.split("").reverse().join("");
            mascara2 = parseInt(mascarabininv2.substring(0, 8),2);
            document.getElementById("mascara2").value = mascara2;   
        }
        
        /*Si mascaracorta es igual a "" osea a nada, si no se introduce nada en el input se le imprimira el valor 0*/
        else if (document.getElementById('mascara2').value == ""){document.getElementById("mascara2").value = 0;}    
    }
    
    /*En cualquier caso si el numero en el input mascara1 no es igual a 255 entonces el input mascara2 sera siempre
    igual a 0 ya que una mascara logica no puede ser 180.255.255.255 por ejemplo*/
    else {document.getElementById("mascara2").value = 0;}
    
    /*Comienza proceso para el input mascara3, el proceso es identico al anterior de mascara2 pero condicionado por
    mascara2, es decir la mascara no puede ser 255.168.255.0 en este caso seria 255.168.0.0*/
    if(document.getElementById('mascara2').value == 255){
        if(mascaracorta >= 1){
            mascaracorta = mascaracorta - 8;    
            mascarabin3 = ("00000000" + "11111111111111111111111111111111").slice(0+mascaracorta, 8+mascaracorta);
            mascarabininv3 = mascarabin3.split("").reverse().join("");
            mascara3 = parseInt(mascarabininv3.substring(0, 8),2);
            document.getElementById("mascara3").value = mascara3;
        }
        else if(document.getElementById('mascara3').value == ""){document.getElementById("mascara3").value = 0;}
    }
    else {
        document.getElementById("mascara3").value = 0;
    }
    
    /*Comienza proceso para el input mascara4, el proceso es identico al anterior de mascara2 pero condicionado por
    mascara3, es decir la mascara no puede ser 255.255.168.255 en este caso seria 255.255.168.0*/
    if(document.getElementById('mascara3').value == 255){
        if(mascaracorta >= 1){
            mascaracorta = mascaracorta - 8;    
            mascarabin4 = ("00000000" + "11111111111111111111111111111111").slice(0+mascaracorta, 8+mascaracorta);
            mascarabininv4 = mascarabin4.split("").reverse().join("");
            mascara4 = parseInt(mascarabininv4.substring(0, 8),2);
            document.getElementById("mascara4").value = mascara4;
        }
        else if(document.getElementById('mascara4').value == ""){document.getElementById("mascara4").value = 0;}
    }
    else {document.getElementById("mascara4").value = 0;}

   /*Convertimos los decimales introducidos en el input mascara1 a binario para luego sumar cada elemento de la cadena 
    por separado, es decir, si input mascara1 = 192 entonces a binario 11000000 entonces 1+1+0+0+0+0+0+0 = 2*/
    var prueba1 = parseInt(document.getElementById('mascara1').value);
    var prueba3 = prueba1.toString(2);
    var prueba2 =("0000000" + prueba3).slice(-8);
    var holamundo1 = 
    parseInt(prueba2.substring(0,1))
    +parseInt(prueba2.substring(1,2))
    +parseInt(prueba2.substring(2,3))
    +parseInt(prueba2.substring(3,4))
    +parseInt(prueba2.substring(4,5))
    +parseInt(prueba2.substring(5,6))
    +parseInt(prueba2.substring(6,7))
    +parseInt(prueba2.substring(7,8));
            
    /*Convertimos los decimales introducidos en el input mascara2 a binario para luego sumar cada elemento de la cadena 
    por separado, es decir, si input mascara2 = 192 entonces a binario 11000000 entonces 1+1+0+0+0+0+0+0 = 2*/    
    var prueba1 = parseInt(document.getElementById('mascara2').value);
    var prueba3 = prueba1.toString(2);
    var prueba2 =("0000000" + prueba3).slice(-8);
    var holamundo2 = 
    parseInt(prueba2.substring(0,1))
    +parseInt(prueba2.substring(1,2))
    +parseInt(prueba2.substring(2,3))
    +parseInt(prueba2.substring(3,4))
    +parseInt(prueba2.substring(4,5))
    +parseInt(prueba2.substring(5,6))
    +parseInt(prueba2.substring(6,7))
    +parseInt(prueba2.substring(7,8));
            
    /*Convertimos los decimales introducidos en el input mascara3 a binario para luego sumar cada elemento de la cadena 
    por separado, es decir, si input mascara3 = 192 entonces a binario 11000000 entonces 1+1+0+0+0+0+0+0 = 2*/
    var prueba1 = parseInt(document.getElementById('mascara3').value);
    var prueba3 = prueba1.toString(2);
    var prueba2 =("0000000" + prueba3).slice(-8);
    var holamundo3 = 
    parseInt(prueba2.substring(0,1))
    +parseInt(prueba2.substring(1,2))
    +parseInt(prueba2.substring(2,3))
    +parseInt(prueba2.substring(3,4))
    +parseInt(prueba2.substring(4,5))
    +parseInt(prueba2.substring(5,6))
    +parseInt(prueba2.substring(6,7))
    +parseInt(prueba2.substring(7,8));
            
    /*Convertimos los decimales introducidos en el input mascara4 a binario para luego sumar cada elemento de la cadena 
    por separado, es decir, si input mascara4 = 192 entonces a binario 11000000 entonces 1+1+0+0+0+0+0+0 = 2*/
    var prueba1 = parseInt(document.getElementById('mascara4').value);
    var prueba3 = prueba1.toString(2);
    var prueba2 =("0000000" + prueba3).slice(-8);
    var holamundo4 = 
    parseInt(prueba2.substring(0,1))
    +parseInt(prueba2.substring(1,2))
    +parseInt(prueba2.substring(2,3))
    +parseInt(prueba2.substring(3,4))
    +parseInt(prueba2.substring(4,5))
    +parseInt(prueba2.substring(5,6))
    +parseInt(prueba2.substring(6,7))
    +parseInt(prueba2.substring(7,8));
            
    /*if (document.getElementById('mascara1').value == ""){holamundo1 = 0;}
    if (document.getElementById('mascara2').value == ""){holamundo2 = 0;}
    if (document.getElementById('mascara3').value == ""){holamundo3 = 0;}
    if (document.getElementById('mascara4').value == ""){holamundo4 = 0;}*/
            
    console.log(holamundo1+holamundo2+holamundo3+holamundo4);
        

    
};