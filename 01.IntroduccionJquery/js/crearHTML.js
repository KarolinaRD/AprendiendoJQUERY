$("#boton3").click(function(){

	//Reemplazar el contenido
	//valores de los atributos con comilla compuesta   
	//$("#contenedor").html('<div id="c1">Adios</div>');

	//Agregar contenido
	$("#contenedor").append('<div id="c2">Adios</div>');

	//Agregar cajas HTML antes de la caja Seleccionada
	$("#c1").before('<h1>Título</h1>');

	//Agregar cajas HTML después de la caja Seleccionada
	$("#c1").after('<h3>Párrafo</h3>');

	//Agregar texto nuevo antes del texto ya escrito
	$("#c1").prepend('Bienvenidos ');

	//Reemplazar con texto nuevo, el texto ya escrito
	$("#c2").text('Cualquier cosa');

});