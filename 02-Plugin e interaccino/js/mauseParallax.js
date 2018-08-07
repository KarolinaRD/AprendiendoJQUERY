//evento del movimiento del mause, ese evento es en tooodo el documento
//selecciona todo el documento
//accion que ejecutara es mausemove, esa accion ejecutara una funcion que es 
$(document).mousemove(function (e) { //este objeto es el que capturare la posicion
    //capturar su posicion
    var posX = e.clientX/100;

    $("#cristiano").css({
         "left":38 + posX/3 + "%"
    });
    $("#hazard").css({
     "left":5 - posX/5 + "%"
    });
    $("#suarez").css({
     "right":5 - posX/3 + "%"
     });
     $("#messi").css({
          "right":15 - posX/5 + "%"
     });
     $("#messi").css({
          "right":13 + posX/6 + "%"
     });
     $("#zlatan").css({
          "right":25 - posX/6 + "%"
     });
     $("#totti").css({
          "right":30 - posX/2 + "%"
     });
     $("#ozil").css({
          "left":34 - posX/5 + "%"
     });
     $("#james").css({
          "left":28 + posX/2 + "%"
     });
     $("#iniesta").css({
          "left":20 + posX/5 + "%"
     });
});
