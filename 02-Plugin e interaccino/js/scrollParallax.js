//movimiento a la ventana
$(window).scroll(function () {
     var posY = window.pageYOffset; //el limite Y de la pagina
     $("#bloque2").css({
          "top": -180 - posY/3 + "px"
     });

})