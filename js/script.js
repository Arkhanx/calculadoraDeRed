/* ========================================================================
 * Caculadora de Red
 * Ever Fabian Caro Guerra
 * ========================================================================*/

//  Definicion de variables
//================================================================
  var comprueba,
    decimal1, decimal2, decimal3, decimal4, clase,
    octeto1, octeto2, octeto3, octeto4,
    mascara1, mascara2, mascara3, mascara4,
    mascarabin1, mascarabin2, mascarabin3, mascarabin4,
    ipred, ipredinv, tipodered;
//================================================================


//Variable prueba inicialmente es igual a 0
//==========
comprueba=0;
//==========

/* Esta función se ejecuta si hay algún cambio en el input "mascaracorta" le asigna a la variable 
   comprueba el valor 1 pero si no hay nungún cambio en "mascaracorta" seguira siendo 0.*/
//====================================
function pruebaCambio(){comprueba=1;}
//===================================


//Función principal, se ejecutara al hacer click en el boton "Calcular".
//==================
function Calcular(){

                        //--------------------Todo lo referente a la IP-------------------------\\
    

    //Función util para utilizar en todos los "if".
    //===========================================================================================================
    function ifmultiples(nombreuno, valoruno, nombredos, valordos){
        if(document.getElementById(nombreuno).value>valoruno){document.getElementById(nombredos).value=valordos;}
    }
    //===========================================================================================================

    //Si el valor del input "decimal*" es mayor a 255 lo redondeara a 255.
    //============================================
    ifmultiples("decimal1", 255, "decimal1", 255);
    ifmultiples("decimal2", 255, "decimal2", 255);
    ifmultiples("decimal3", 255, "decimal3", 255);
    ifmultiples("decimal4", 255, "decimal4", 255);
    //============================================

    //Función para setear cada decimal cuando no este entre 1 y 255.
    //============================================================================================
    function seteoacero(nombre, valor){
        if(document.getElementById(nombre).value>=1&&document.getElementById(nombre).value<=255){}
        else{document.getElementById(nombre).value=valor;}
    }

    //Si input "decimal1" no es un numero entre 1 y 255 lo seteara a 10.
    //=========================
    seteoacero("decimal1", 10);
    //Si input "decimal2|3|4" no es un numero entre 1 y 255 lo seteara a 0.
    //=========================
    seteoacero("decimal2", 0);
    seteoacero("decimal3", 0);
    seteoacero("decimal4", 0);
    //=========================
    
    //Tomamos los valores de los inputs decimal1|2|3|4, en las variables decimal1|2|3|4.
    //========================================================
    decimal1=parseInt(document.getElementById("decimal1").value);
    decimal2=parseInt(document.getElementById("decimal2").value);
    decimal3=parseInt(document.getElementById("decimal3").value);
    decimal4=parseInt(document.getElementById("decimal4").value);
    //========================================================

    //Este "if" determina que según el dato en cada input "decimal" la calse de red es privada o publica.
    //========================================================================================================================
    if (decimal1==10 || decimal1==172&&decimal2>=16&&decimal2<=31 || decimal1==192&&decimal2==168) {tipodered = " / Privada";}
    else{tipodered = " / Publica";}
    //========================================================================================================================

    //Determinamos la clase de red en base al numero almacenado en "decimal1".
    //===================================================================================================================
    if     (decimal1>=1&&decimal1<=126)  {document.getElementById("claseDeRed").innerHTML="Clase de Red: A" + tipodered;}
    else if(decimal1>=128&&decimal1<=191){document.getElementById("claseDeRed").innerHTML="Clase de Red: B" + tipodered;}
    else if(decimal1>=192&&decimal1<=223){document.getElementById("claseDeRed").innerHTML="Clase de Red: C" + tipodered;}
    else if(decimal1>=224&&decimal1<=239){document.getElementById("claseDeRed").innerHTML="Clase de Red: D";}
    else if(decimal1>=240&&decimal1<=255){document.getElementById("claseDeRed").innerHTML="Clase de Red: E";}
    else                                 {document.getElementById("claseDeRed").innerHTML="Error de clase de Red";}
    //===================================================================================================================

    //Convertimos los decimales almacenados en decimal1|2|3|4 a binario con toString(base2).
    //=============================
    octeto1 = decimal1.toString(2);
    octeto2 = decimal2.toString(2);
    octeto3 = decimal3.toString(2);
    octeto4 = decimal4.toString(2);
    //=============================

    
    /*Le añadimos 7 ceros por delante al resultado de octeto1|2|3|4 y mostramos solo los 8 primeros digitos de izquierda a derecha, osea 
      si octeto1 es igual a 101 entonces "0000000" + 101 = "0000000101" pero solo se mostrara "00000101", gracias a .slice(-8);*/
    //======================================
    octeto1=("0000000" + octeto1).slice(-8);
    octeto2=("0000000" + octeto2).slice(-8);
    octeto3=("0000000" + octeto3).slice(-8);
    octeto4=("0000000" + octeto4).slice(-8);
    //======================================

    //Escribe en el documento html en <p id="ipBinario"> el resultado de los numeros convertidos a binario.
    //=============================================================================================================================
    document.getElementById("ipBinario").innerHTML = "Dirección IP en Binario: "+octeto1+" - "+octeto2+" - "+octeto3+" - "+octeto4;
    //=============================================================================================================================




                //---------------------------------Todo lo referente a la Mascara------------------------------------------\\


    //Variable "mascaracorta" es igual al dato introducido en el input "mascaracorta".
    //=====================================================================
    mascaracorta = parseInt(document.getElementById('mascaracorta').value);
    //=====================================================================

    /*Utilizamos la variable "comprueba" para ejecutar este if solo si no se hicieron cambios en el input "mascaracorta",
      ya que si no se hicieron cambios su valor debe ser igual a cero.*/
    //===============
    if(comprueba==0){
        
        //Utilizamos el valor de "decimal1" para definir la mascara por defecto según la clase de red.
        //============================================
        if(decimal1>=1&&decimal1<=126){
        document.getElementById("mascara1").value=255;
        }
        else if(decimal1>=128&&decimal1<=191){
        document.getElementById("mascara1").value=255;
        document.getElementById("mascara2").value=255;
        }
        else if(decimal1>=192&&decimal1<=223){
        document.getElementById("mascara1").value=255;
        document.getElementById("mascara2").value=255;
        document.getElementById("mascara3").value=255;
        }
        //============================================

        //Si "mascara1" es igual a 255, "mascaracorta" sera igual a ocho siempre.
        //==================================================================================================
        if(document.getElementById("mascara1").value==255){document.getElementById("mascaracorta").value=8;}
        else                                              {document.getElementById("mascara1").value=0;
                                                           document.getElementById("mascaracorta").value=0;}
        //==================================================================================================

        //Función para darle valor al input "mascaracorta" según lo introducido en los inputs "mascara1|2|3|4"
        //======================================================================================================================
        function mascaras(nombreuno, nombredos, valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8){
            if  (document.getElementById(nombreuno).value==255){
                if     (document.getElementById(nombredos).value==128){document.getElementById('mascaracorta').value=valor1;}
                else if(document.getElementById(nombredos).value==192){document.getElementById('mascaracorta').value=valor2;}
                else if(document.getElementById(nombredos).value==224){document.getElementById('mascaracorta').value=valor3;}
                else if(document.getElementById(nombredos).value==240){document.getElementById('mascaracorta').value=valor4;}
                else if(document.getElementById(nombredos).value==248){document.getElementById('mascaracorta').value=valor5;}
                else if(document.getElementById(nombredos).value==252){document.getElementById('mascaracorta').value=valor6;}
                else if(document.getElementById(nombredos).value==254){document.getElementById('mascaracorta').value=valor7;}
                else if(document.getElementById(nombredos).value==255){document.getElementById('mascaracorta').value=valor8;}
                else                                                  {document.getElementById(nombredos).value=0;}
            }
            //Limitamos las mascaras para setearlas a cero si son erroneas, por ejemplo no puede ser 255.128.255.0
            //===============================================
            else{document.getElementById(nombredos).value=0;}
        }
        //========================================================================================================================

        /*Llamamos función "mascara" para setear "mascara2|3|4" respectivamente, en el caso del input "mascara4" dejamos 
          los parametros "value7" y "value8" a "" (nada) ya que la mascara no puede ser 255.255.255.254 o 255.255.255.255*/
        //=========================================================================
        mascaras("mascara1", "mascara2",  9, 10, 11, 12, 13, 14, 15, 16);
        mascaras("mascara2", "mascara3", 17, 18, 19, 20, 21, 22, 23, 24);
        mascaras("mascara3", "mascara4", 25, 26, 27, 28, 29, 30, 24, 24);
        
        if      (document.getElementById("mascara4").value==254){document.getElementById("mascara4").value=0;}
        else if (document.getElementById("mascara4").value==255){document.getElementById("mascara4").value=0;}
        //=========================================================================

    }
    //=====================
    
    /*Utilizamos la variable "comprueba" para ejecutar este if solo si se hicieron cambios en el input "mascaracorta",
      ya que si se hicieron cambios su valor debe ser igual a uno.*/
    //===============
    if(comprueba==1){       
        
        /*"mascarabin1" es igual a 00000000 inicialmente, pero si mascaracorta = 1 entonces un cero se mueve hacia
          la derecha y desaparece al tiempo que aparece un uno desde la izquierda osea quedaria 10000000*/
        //==============================================================================================
        mascarabin1=("1111111111111111111111111111111100000000").slice(32-mascaracorta,40-mascaracorta);
        //==============================================================================================
        
        /*mascara1 es igual a mascarabin1 convertida de string a entero y de binario a decimal, osea que si
          mascarabin1 = 11000000 entonces mascara1 = 192 */
        //==============================================
        mascara1=parseInt(mascarabin1.substring(0,8),2);
        //==============================================
        
        //Si "mascaracorta" es igual o mayor que 8, entonces escribira el resultado de "mascara1" en el input de mascara1
        //===============================================================================================
        if(mascaracorta>=8&&mascaracorta<=30){document.getElementById("mascara1").value=mascara1;}
        else{document.getElementById("mascara1").value=0;document.getElementById("mascaracorta").value=0}
        //===============================================================================================
        
        /*Función para automatizar proceso de conseguir el decimal de la mascara ejemplo 255.255.255.192 mediante el calculo
          de lo introducido en "mascaracorta".*/
        //====================================================================
        function mascarasbin (nombreuno, nombredos, nombretres, nombrecuatro){
        
            /*Condiciono el input "mascara2" para que aumente solo si el numero en el input "mascara1" es igual a 255, osea
            que la mascara no pueda ser por ejemplo 192.255.255.255, en este caso siempre seria 192.0.0.0*/
            //=================================================
            if(document.getElementById(nombreuno).value==255){
            //================================================
                
                //Solo si lo introducido en el input "mascaracorta" es igual o mayor a 8 entonces ejecutara el siguiente codigo
                //==================
                if(mascaracorta>=8){
                    
                    /*Reducimos el valor de "mascaracorta" en 8, por ejemplo para que mascara1 sea 255 "mascaracorta" debe ser
                    8, entonces la reiniciamos a 0, para que mascarabin2 sea inicialmente igual a 00000000*/
                    //==========================
                    mascaracorta=mascaracorta-8;
                    //==========================
                    
                    //Mismo proceso que en mascarabin1.
                    //============================================================================================
                    nombredos=("1111111111111111111111111111111100000000").slice(32-mascaracorta,40-mascaracorta);
                    nombretres=parseInt(nombredos.substring(0,8),2);
                    document.getElementById(nombrecuatro).value=nombretres;
                    //============================================================================================
                }
                //===================
                
                //Si "mascara2" es igual a "" osea a nada, si no se introduce nada en el input se le imprimira el valor 0.
                //==================================================================================================
                else if(document.getElementById(nombrecuatro).value==""){document.getElementById(nombrecuatro).value=0;}
                //==================================================================================================
            }
            /*En cualquier caso si el numero en el input mascara1 no es igual a 255 entonces el input mascara2 sera siempre
            igual a 0 ya que una mascara logica no puede ser 180.255.255.255 por ejemplo*/
            //==================================================
            else{document.getElementById(nombrecuatro).value=0;}
            //==================================================
        };
        //=====================================================================
        
        //Ejecutamos la función "mascarasbin" para setear los "input" "mascara1|2|3|4 según el valor de "mascaracorta"
        //=========================================================
        mascarasbin("mascara1", mascarabin2, mascara2, "mascara2");
        mascarasbin("mascara2", mascarabin3, mascara2, "mascara3");
        mascarasbin("mascara3", mascarabin4, mascara3, "mascara4");
        //=========================================================
        
        /*Si "decimal1" esta entre 1 y 126 (clase A), el valor del input "mascara1" sera igual a 255, si esto se cumple
          y el input "mascaracorta" es menor a 8, entonces input "mascaracorta" sera igual a 8*/
        //=======================================================================================================
        if(decimal1>=1&&decimal1<=126){
            document.getElementById('mascara1').value=255;
            if(document.getElementById('mascaracorta').value<8){document.getElementById('mascaracorta').value=8;}
        }
        //=======================================================================================================
        
        /*Si "decimal1" esta entre 128 y 191 (clase B), el valor del input "mascara1" y "mascara2" sera igual a 255, si esto se
          cumple y el input "mascaracorta" es menor a 16, entonces input "mascaracorta" sera igual a 16*/
        //=========================================================================================================
        else if(decimal1>=128&&decimal1<=191){
            document.getElementById('mascara1').value=255;
            document.getElementById('mascara2').value=255;
            if(document.getElementById('mascaracorta').value<16){document.getElementById('mascaracorta').value=16;}
        }
        //=========================================================================================================
        
        /*Si "decimal1" esta entre 192 y 223 (clase C), el valor del input "mascara1", "mascara2" y "mascara3" sera igual a 255, si
          esto se cumple y el input "mascaracorta" es menor a 24, entonces input "mascaracorta" sera igual a 24*/
        //=========================================================================================================
        else if(decimal1>=192&&decimal1<=223){
            document.getElementById('mascara1').value=255;
            document.getElementById('mascara2').value=255;
            document.getElementById('mascara3').value=255;
            if(document.getElementById('mascaracorta').value<24){document.getElementById('mascaracorta').value=24;}
        }
        //=========================================================================================================
    }
    //======================
    
    
    //Setea a cero la variable "comprueba" para que comience en cero cada vez que se ejecuta la funcion "pruebaCambio".
    //============
    comprueba = 0;
    //============
    
    //Utilizaremos el resultado de "ipred" para determinar la cantidad de bits destinados para host.
    //=========================================================
    ipred = 32 - document.getElementById('mascaracorta').value;
    //=========================================================
    
    /*Utilizaremos "ipredinv" para determinar la cantidad de bits que no cambiaremos a cero, en la red
      es decir, si "ipred" es igual a 5, entonces "ipredinv" igual a 27.*/
    //====================
    ipredinv = 32 - ipred;
    //====================

    /*Utilizamos "bin_red" para quitarle a la ip completa en binario desde derecha a izquierda una cantidad de caracteres
      igual al resultado de "ipredinv"*/
    //=================================================================
    var bin_red = (octeto1+octeto2+octeto3+octeto4).slice(0, ipredinv);
    //=================================================================
    
    /*Utilizamos la variable "ceros_red" para obtener una cantidad de ceros igual al resultado de "ipred",
    osea que si "ipred" igual a 5, entonces "ceros_red" igual 00000*/
    //=================================================================
    var ceros_red = ("00000000000000000000000000000000").slice(-ipred);
    //=================================================================
    
    /*Utilizamos la variable "ceros_red" para obtener una cantidad de unos igual al resultado de "ipred",
    osea que si "ipred" igual a 5, entonces "ceros_red" igual 11111*/
    //================================================================
    var unos_red = ("11111111111111111111111111111111").slice(-ipred);
    //================================================================

    //Unimos el resultado de "bin_red" y "ceros_red" para crear la dirección de red completa.
    //===============================
    var ipredbin = bin_red+ceros_red;
    //===============================
    
    //Unimos el resultado de "bin_red" y "unos_red" para crear la dirección de broadcast completa.
    //=======================================
    var ipbroadcastbin = bin_red+unos_red;
    //=======================================
    
    //Utilizamos estas variables para dividir la ipred en octetos separarados.
    //=======================================================
    var octetoipred1 = parseInt(ipredbin.substring(0,8),2);
    var octetoipred2 = parseInt(ipredbin.substring(8,16),2);
    var octetoipred3 = parseInt(ipredbin.substring(16,24),2);
    var octetoipred4 = parseInt(ipredbin.substring(24,32),2);
    //=======================================================
    
    //ipRedFinal es la ip de red completa separada por "-" para cada octeto.
    //=======================================================================================
    var ipRedFinal = (octetoipred1+" - "+octetoipred2+" - "+octetoipred3+" - "+octetoipred4);
    //=======================================================================================
    
    //Utilizamos estas variables para dividir la ipbroadcast en octetos separarados.
    //======================================================================
    var octetoipbroadcast1 = parseInt(ipbroadcastbin.substring(0,8),2);
    var octetoipbroadcast2 = parseInt(ipbroadcastbin.substring(8,16),2);
    var octetoipbroadcast3 = parseInt(ipbroadcastbin.substring(16,24),2);
    var octetoipbroadcast4 = parseInt(ipbroadcastbin.substring(24,32),2);
    //======================================================================
    
    //ipRedFinal es la ip de broadcast completa separada por "-" para cada octeto.
    //=====================================================================================================================
    var ipBroadcastFinal = (octetoipbroadcast1+" - "+octetoipbroadcast2+" - "+octetoipbroadcast3+" - "+octetoipbroadcast4);
    //=====================================================================================================================

    //Convertiremos lo introducido en los inputs "mascara1|2|3|4" a binario.
    //============================================================================
    mascarabin1 = parseInt(document.getElementById('mascara1').value).toString(2);
    mascarabin2 = parseInt(document.getElementById('mascara2').value).toString(2);
    mascarabin3 = parseInt(document.getElementById('mascara3').value).toString(2);
    mascarabin4 = parseInt(document.getElementById('mascara4').value).toString(2);
    //============================================================================
    
    //Mostramos por defecto ocho ceros, que se moveran dependiento el valor de "mascarabin1|2|3|4".
    //==============================================
    mascarabin1=("0000000" + mascarabin1).slice(-8);
    mascarabin2=("0000000" + mascarabin2).slice(-8);
    mascarabin3=("0000000" + mascarabin3).slice(-8);
    mascarabin4=("0000000" + mascarabin4).slice(-8);
    //==============================================
    
    //mascaraBinFinal es la mascara completa en binario separada por "-" para cada octeto.
    //========================================================================================
    var mascaraBinFinal = (mascarabin1+" - "+mascarabin2+" - "+mascarabin3+" - "+mascarabin4);
    //========================================================================================

    //Calculamos la cantidad de host posibles en nuestra red, elevando el numero 2 a el numero de bits utilizados para host -2 (dir de red y broadcast).
    //=====================================
    var numerodeHost = Math.pow(2,ipred)-2;

    //Calculamos la cantidad de subredes posibles en nuestra red, elevando el numero 2 a el numero de bits disponiibles para red
    //========================================
    var numerodeSubRed = Math.pow(2,ipredinv);
    //========================================
    
    //Escribimos en el HTML el resultado de cada uno de estos apartados.
    //==========================================================================================================
    document.getElementById("dirDeRed").innerHTML="La IP de Red es: " + ipRedFinal;
    document.getElementById("dirDeBroadcast").innerHTML="La IP de Broadcast es: " + ipBroadcastFinal;
    document.getElementById("mascaraBinario").innerHTML="La Mascara de Subred en Binario: " + mascaraBinFinal;
    document.getElementById("numerodeHost").innerHTML="El numero de host utilizables es: " + numerodeHost;
    document.getElementById("numerodeSubRed").innerHTML="El numero de subredes posibles es: " + numerodeSubRed;
    //==========================================================================================================
        
};

