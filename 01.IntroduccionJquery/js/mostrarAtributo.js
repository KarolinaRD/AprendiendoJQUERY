var usuario = ""; //creamos variables globales
var password = "";

$("#boton").click(function(){ //al hacer clicl,ejecutamos funcino

	usuario = $("[type='text']").val();
	password = $("[type='password']").val();

	console.log(usuario)
	console.log(password)

});