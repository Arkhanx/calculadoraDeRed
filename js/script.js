function noenviar() {
  return false;
};

var ip, mascara, tipodeip;

function calcular() {
  ip = $("#ip").val().split(".");
  mascara = $("#mascara").val().split(".");

  if (ip[0]>=10&&ip[0]<=255&&ip[1]<=255&&ip[2]<=255&&ip[3]<=255) {

    if (ip[0]==10 || ip[0]==172&&ip[1]>=16&&ip[1]<=31 || ip[0]==192&&ip[1]==168) {
      tipodeip = "Privada";
    }
    else{
      tipodeip = "Publica";
    }

    console.log(tipodeip);
    $('#tabla').html('<tr><td class="tabla__titulo col-xs-6">Tipo de IP :</td><td class="tabla__resultado col-xs-6">'+tipodeip+'</td></tr>');

  }
};

$("#boton").click(calcular);
