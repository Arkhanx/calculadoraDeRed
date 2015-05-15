/*Definición de Variables:*/
var comprueba,
    dato1, dato2, dato3, dato4, clase,
    octeto1, octeto2, octeto3, octeto4,
    mascara1, mascara2, mascara3, mascara4,
    mascarabin1, mascarabin2, mascarabin3, mascarabin4,
    mascarabininv1, mascarabininv2, mascarabininv3, mascarabininv4,
    tipodered;
/*Variable prueba inicialmente es 0*/
comprueba=0;

/*Esta función se ejecuta si hay algún cambio en el input "mascaracorta" le asigna a la variable comprueba el valor 1
                        si o hay nungún cambio en "mascaracorta" seguira siendo 0*/
function pruebaCambio(){comprueba=1;}

/*Función principal, se ejecutara al hacer click en el boton*/
function Calcular(){
    /*Si el valor del input "decimal*" es mayor a 255 lo redondeara a 255*/
    if(document.getElementById('decimal1').value>255){document.getElementById('decimal1').value=255;}
    if(document.getElementById('decimal2').value>255){document.getElementById('decimal2').value=255;}
    if(document.getElementById('decimal3').value>255){document.getElementById('decimal3').value=255;}
    if(document.getElementById('decimal4').value>255){document.getElementById('decimal4').value=255;}
    /*Si input "decimal1" no es un numero entre 1 y 255 lo seteara a 10*/
    if(document.getElementById('decimal1').value>=1&&document.getElementById('decimal1').value<=255){}
    else{document.getElementById('decimal1').value=10;}
    /*Si input "decimal1||2||3" no es un numero entre 1 y 255 lo seteara a 0*/
    if(document.getElementById('decimal2').value>=1&&document.getElementById('decimal2').value<=255){}
    else{document.getElementById('decimal2').value=0;}
    if(document.getElementById('decimal3').value>=1&&document.getElementById('decimal2').value<=255){}
    else{document.getElementById('decimal3').value=0;}
    if(document.getElementById('decimal4').value>=1&&document.getElementById('decimal2').value<=255){}
    else{document.getElementById('decimal4').value=0;}
    /*Tomamos los valores de los inputs, en las variables dato* */  
    dato1=parseInt(document.getElementById('decimal1').value);
    dato2=parseInt(document.getElementById('decimal2').value);
    dato3=parseInt(document.getElementById('decimal3').value);
    dato4=parseInt(document.getElementById('decimal4').value);

    if (dato1==10 || dato1==172&&dato2>=16&&dato2<=31 || dato1==192&&dato2==168) {tipodered = " / Privada";}
    //else if (dato1==172&&dato2>=16&&dato2<=31) {tipodered = " / Privada";}
    else{tipodered = " / Publica";}

    /*Sacamos la clase de red en base al numero almacenado en el primer dato*/
    if     (dato1>=1&&dato1<=126)  {document.getElementById("claseDeRed").innerHTML="Clase de Red: A" + tipodered;}
    else if(dato1>=128&&dato1<=191){document.getElementById("claseDeRed").innerHTML="Clase de Red: B" + tipodered;}
    else if(dato1>=192&&dato1<=223){document.getElementById("claseDeRed").innerHTML="Clase de Red: C" + tipodered;}
    else if(dato1>=224&&dato1<=239){document.getElementById("claseDeRed").innerHTML="Clase de Red: D";}
    else if(dato1>=240&&dato1<=255){document.getElementById("claseDeRed").innerHTML="Clase de Red: E";}
    else                           {document.getElementById("claseDeRed").innerHTML = "Error de clase de Red";}
    /*Convertimos los decimales almacenados en dato* a binario con toString(base2)*/
    octeto1 = dato1.toString(2);
    octeto2 = dato2.toString(2);
    octeto3 = dato3.toString(2);
    octeto4 = dato4.toString(2);

    /*Le añadimos 7 ceros por delante al resultado de octeto* y mostramos solo los 8 
    primeros digitos de izquierda a derecha, osea si octeto1 es igual a 101 entonces 
    "0000000" + 101 = "0000000101" pero solo se mostrara "00000101", gracias a .slice(-8);*/
    octeto1=("0000000" + octeto1).slice(-8);
    octeto2=("0000000" + octeto2).slice(-8);
    octeto3=("0000000" + octeto3).slice(-8);
    octeto4=("0000000" + octeto4).slice(-8);
    /* Escribe en el documento html en <p id="resultado"> el resultado de los numeros 
    convertidos a binario: */
    document.getElementById("ipBinario").innerHTML = "Dirección IP en Binario: "+octeto1+" - "+octeto2+" - "+octeto3+" - "+octeto4;
    /*---------------------------------Comienza definición de mascara------------------------------------------*/
    /*Mascara corta es igual al dato introducido en el input "mascaracorta"*/
    mascaracorta = parseInt(document.getElementById('mascaracorta').value);
    /*Utilizo "comprueba" para ejecutar este if solo si no se hicieron cambios en el input "mascaracorta"*/
    if(comprueba==0){
        /*Utilizo el valor de "dato1" para definir la mascara por defecto según la clase de red*/
        if(dato1>=1&&dato1<=126){
        document.getElementById('mascara1').value=255;
        }
        else if(dato1>=128&&dato1<=191){
        document.getElementById('mascara1').value=255;
        document.getElementById('mascara2').value=255;
        }
        else if(dato1>=192&&dato1<=223){
        document.getElementById('mascara1').value=255;
        document.getElementById('mascara2').value=255;
        document.getElementById('mascara3').value=255;
        }
        /*Si "mascara1" es igual a 255, "mascaracorta" sera 8 siempre*/
        if(document.getElementById('mascara1').value==255){document.getElementById('mascaracorta').value=8;}
        else{document.getElementById('mascara1').value=0;document.getElementById('mascaracorta').value=0;}
        /*Si "mascara1" es igual a 255 el valor de "mascaracorta" se modificara dependiendo del valor de "mascara2"*/
        if  (document.getElementById('mascara1').value==255){
            if     (document.getElementById('mascara2').value==128){document.getElementById('mascaracorta').value=9;}
            else if(document.getElementById('mascara2').value==192){document.getElementById('mascaracorta').value=10;}
            else if(document.getElementById('mascara2').value==224){document.getElementById('mascaracorta').value=11;}
            else if(document.getElementById('mascara2').value==240){document.getElementById('mascaracorta').value=12;}
            else if(document.getElementById('mascara2').value==248){document.getElementById('mascaracorta').value=13;}
            else if(document.getElementById('mascara2').value==252){document.getElementById('mascaracorta').value=14;}
            else if(document.getElementById('mascara2').value==254){document.getElementById('mascaracorta').value=15;}
            else if(document.getElementById('mascara2').value==255){document.getElementById('mascaracorta').value=16;}
            else                                                   {document.getElementById('mascara2').value=0;}
        }
        /*Si "mascara1" no es 255, "mascara2" siempre sera igual a 0*/
        else{document.getElementById('mascara2').value=0;}
        if  (document.getElementById('mascara2').value==255){
            if     (document.getElementById('mascara3').value==128){document.getElementById('mascaracorta').value=17;}
            else if(document.getElementById('mascara3').value==192){document.getElementById('mascaracorta').value=18;}
            else if(document.getElementById('mascara3').value==224){document.getElementById('mascaracorta').value=19;}
            else if(document.getElementById('mascara3').value==240){document.getElementById('mascaracorta').value=20;}
            else if(document.getElementById('mascara3').value==248){document.getElementById('mascaracorta').value=21;}
            else if(document.getElementById('mascara3').value==252){document.getElementById('mascaracorta').value=22;}
            else if(document.getElementById('mascara3').value==254){document.getElementById('mascaracorta').value=23;}
            else if(document.getElementById('mascara3').value==255){document.getElementById('mascaracorta').value=24;}
            else                                                   {document.getElementById('mascara3').value=0;}
        }
        else{document.getElementById('mascara3').value=0;}
        if  (document.getElementById('mascara3').value == 255){
            if     (document.getElementById('mascara4').value==128){document.getElementById('mascaracorta').value=25;}
            else if(document.getElementById('mascara4').value==192){document.getElementById('mascaracorta').value=26;}
            else if(document.getElementById('mascara4').value==224){document.getElementById('mascaracorta').value=27;}
            else if(document.getElementById('mascara4').value==240){document.getElementById('mascaracorta').value=28;}
            else if(document.getElementById('mascara4').value==248){document.getElementById('mascaracorta').value=29;}
            else if(document.getElementById('mascara4').value==252){document.getElementById('mascaracorta').value=30;}
            else                                                   {document.getElementById('mascara4').value =0;}
        }
        else{document.getElementById('mascara4').value=0;}
    }
    /*Utilizo "comprueba" para ejecutar este if solo si se hicieron cambios en el input "mascaracorta"*/
    if(comprueba==1){       
        /*"mascarabin1" es igual a 00000000 inicialmente, pero si mascaracorta = 1 entonces un cero se mueve hacia
            la izquieda y desaparece al tiempo que aparece un uno desde la derecha osea quedaria 00000001*/ 
        mascarabin1=("00000000"+"11111111111111111111111111111111").slice(0+mascaracorta,8+mascaracorta);   
        /*mascarabininv1 es igual a mascarabin1 invertida osea que si, mascarabin1 = 000000101 entonces el 
                                    resultado de mascarabininv1 = 101000000*/
        mascarabininv1=mascarabin1.split("").reverse().join("");
        /*mascara1 es igual a mascarabininv1 convertida de string a entero y de binario a decimal, osea que si
                                mascarabininv1 = 101000000 entonces mascara1 = 192 */
        mascara1=parseInt(mascarabininv1.substring(0,8),2);
        /*Si "mascaracorta" es igual o mayor que 8, entonces escribira el resultado de "mascara1" en el input de
        mascara1*/
        if(mascaracorta>=8&&mascaracorta<=30){document.getElementById("mascara1").value=mascara1;}
        else{document.getElementById("mascara1").value=0;document.getElementById("mascaracorta").value=0}
        /*Condiciono el input "mascara2" para que aumente solo si el numero en el input mascara1 es igual a 255, osea
        que la mascara no pueda ser por ejemplo 192.255.255.255, en este caso siempre seria 192.0.0.0*/
        if(document.getElementById('mascara1').value==255){
            /*Solo si lo introducido en el input "mascaracorta" es igual o mayor a 8 entonces ejecutara el siguiente codigo*/
            if(mascaracorta>=8){
                /*Reducimos el valor de "mascaracorta" en 8, por ejemplo para que mascara1 sea 255 "mascaracorta" debe ser
                8, entonces la reiniciamos a 0, para que mascarabin2 sea inicialmente igual a 00000000*/
                mascaracorta=mascaracorta-8;
                /*Mismo proceso que en mascarabin1*/
                mascarabin2=("00000000"+"11111111111111111111111111111111").slice(0+mascaracorta,8+mascaracorta);
                mascarabininv2=mascarabin2.split("").reverse().join("");
                mascara2=parseInt(mascarabininv2.substring(0,8),2);
                document.getElementById("mascara2").value=mascara2;   
            }
            /*Si mascaracorta es igual a "" osea a nada, si no se introduce nada en el input se le imprimira el valor 0*/
            else if(document.getElementById('mascara2').value==""){document.getElementById("mascara2").value=0;}    
        }
        /*En cualquier caso si el numero en el input mascara1 no es igual a 255 entonces el input mascara2 sera siempre
        igual a 0 ya que una mascara logica no puede ser 180.255.255.255 por ejemplo*/
        else{document.getElementById("mascara2").value=0;}
        /*Comienza proceso para el input mascara3, el proceso es identico al anterior de mascara2 pero condicionado por
        mascara2, es decir la mascara no puede ser 255.168.255.0 en este caso seria 255.168.0.0*/
        if(document.getElementById('mascara2').value==255){
            if(mascaracorta>=8){
                mascaracorta=mascaracorta-8;    
                mascarabin3=("00000000" + "11111111111111111111111111111111").slice(0+mascaracorta,8+mascaracorta);
                mascarabininv3 = mascarabin3.split("").reverse().join("");
                mascara3 = parseInt(mascarabininv3.substring(0, 8),2);
                document.getElementById("mascara3").value = mascara3;
            }
            else if(document.getElementById('mascara3').value==""){document.getElementById("mascara3").value = 0;}
        }
        else {
            document.getElementById("mascara3").value=0;
        }
        /*Comienza proceso para el input mascara4, el proceso es identico al anterior de mascara2 pero condicionado por
                mascara3, es decir la mascara no puede ser 255.255.168.255 en este caso seria 255.255.168.0*/
        if(document.getElementById('mascara3').value==255){
            if(mascaracorta>=8){
                mascaracorta=mascaracorta-8;    
                mascarabin4=("00000000"+"11111111111111111111111111111111").slice(0+mascaracorta,8+mascaracorta);
                mascarabininv4=mascarabin4.split("").reverse().join("");
                mascara4=parseInt(mascarabininv4.substring(0, 8),2);
                document.getElementById("mascara4").value=mascara4;
            }
            else if(document.getElementById('mascara4').value==""){document.getElementById("mascara4").value=0;}
        }
        else{document.getElementById("mascara4").value=0;}
        /*Si "dato1" esta entre 1 y 126 (clase A), el valor del input "mascara1" sera igual a 255, si esto se cumple
                e input "mascaracorta" es menor a 8, entonces input "mascaracorta" sera igual a 8*/
        if(dato1>=1&&dato1<=126){
            document.getElementById('mascara1').value=255;
            if(document.getElementById('mascaracorta').value<8){
                document.getElementById('mascaracorta').value=8;
            }
        }
        /*Si "dato1" esta entre 128 y 191 (clase B), el valor del input "mascara1" y "mascara2" sera igual a 255, si esto se
                    cumple e input "mascaracorta" es menor a 16, entonces input "mascaracorta" sera igual a 16*/
        else if(dato1>=128&&dato1<=191){
            document.getElementById('mascara1').value=255;
            document.getElementById('mascara2').value=255;
            if(document.getElementById('mascaracorta').value<16){
                document.getElementById('mascaracorta').value=16;        
            }
        }
        /*Si "dato1" esta entre 192 y 223 (clase C), el valor del input "mascara1", "mascara2" y "mascara3" sera igual a 255, si
                esto se cumple e input "mascaracorta" es menor a 24, entonces input "mascaracorta" sera igual a 24*/
        else if(dato1>=192&&dato1<=223){
            document.getElementById('mascara1').value=255;
            document.getElementById('mascara2').value=255;
            document.getElementById('mascara3').value=255;
            if(document.getElementById('mascaracorta').value<24){
                document.getElementById('mascaracorta').value=24;
            }
        }
    }
    /*Setea a 0 la variable "comprueba" para que comience en 0 cada vez que se ejecuta la funcion */
    comprueba = 0;
    
    var ipred = 32 - document.getElementById('mascaracorta').value;

    var ipredinv = 32 - ipred;
    
    console.log(ipred);

    var ipcompletabin = octeto1+octeto2+octeto3+octeto4;

    console.log(ipcompletabin);

    var ceros_red = ("00000000000000000000000000000000").slice(-ipred);

    var unos_red = ("11111111111111111111111111111111").slice(-ipred);

    var bin_red = (ipcompletabin).slice(0, ipredinv);

    ipredbin = bin_red+ceros_red;

    ipredbroadcastbin = bin_red+unos_red;

    var octetoipbroadcast1 = parseInt(ipredbroadcastbin.substring(0,8),2);
    var octetoipbroadcast2 = parseInt(ipredbroadcastbin.substring(8,16),2);
    var octetoipbroadcast3 = parseInt(ipredbroadcastbin.substring(16,24),2);
    var octetoipbroadcast4 = parseInt(ipredbroadcastbin.substring(24,32),2);


    var octetoipred1 = parseInt(ipredbin.substring(0,8),2);
    var octetoipred2 = parseInt(ipredbin.substring(8,16),2);
    var octetoipred3 = parseInt(ipredbin.substring(16,24),2);
    var octetoipred4 = parseInt(ipredbin.substring(24,32),2);

    var ipRedFinal = (octetoipred1+" - "+octetoipred2+" - "+octetoipred3+" - "+octetoipred4);
    
    var ipBroadcastFinal = (octetoipbroadcast1+" - "+octetoipbroadcast2+" - "+octetoipbroadcast3+" - "+octetoipbroadcast4);

    document.getElementById("dirDeRed").innerHTML="La IP de Red es: " + ipRedFinal;

    document.getElementById("dirDeBroadcast").innerHTML="La IP de Broadcast es: " + ipBroadcastFinal;
 
 //Convertir Decimal de mascara a binario

    mascara1=parseInt(document.getElementById('mascara1').value);
    mascara2=parseInt(document.getElementById('mascara2').value);
    mascara3=parseInt(document.getElementById('mascara3').value);
    mascara4=parseInt(document.getElementById('mascara4').value);
    
    mascarabin1 = mascara1.toString(2);
    mascarabin2 = mascara2.toString(2);
    mascarabin3 = mascara3.toString(2);
    mascarabin4 = mascara4.toString(2);

    mascarabin1=("0000000" + mascarabin1).slice(-8);
    mascarabin2=("0000000" + mascarabin2).slice(-8);
    mascarabin3=("0000000" + mascarabin3).slice(-8);
    mascarabin4=("0000000" + mascarabin4).slice(-8);

    var mascaraBinFinal = (mascarabin1+" - "+mascarabin2+" - "+mascarabin3+" - "+mascarabin4);

    document.getElementById("mascaraBinario").innerHTML="La Mascara de Subred en Binario: " + mascaraBinFinal;

    //Calculamos la cantidad de host posibles en nuestra red, elevando el numero 2 a el numero de bits utilizados para host -2 (dir de red y broadcast)

    var numerodeHost = Math.pow(2,ipred)-2;

    document.getElementById("numerodeHost").innerHTML="El numero de host utilizables es: " + numerodeHost;

    //Calculamos la cantidad de subredes posibles en nuestra red, elevando el numero 2 a el numero de bits disponiibles para red

    var numerodeSubRed = Math.pow(2,ipredinv);

    document.getElementById("numerodeSubRed").innerHTML="El numero de subredes posibles es: " + numerodeSubRed;
    
};

