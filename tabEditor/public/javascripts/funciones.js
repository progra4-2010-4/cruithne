var tocar = function(ruta){
	var snd = new Audio(ruta);
	snd.play();
}

$(function(){

	$(".blanche").click(function(event)
	{	var nombre = $(this)[0].id;
		tocar("sounds/" + nombre + ".mp3");
		$("#tab_body").append(nombre);
		$(".vex-tabdiv").append(nombre);
	});
	$(".noir").click(function(event)
	{	var nombre = $(this)[0].id;
		tocar("sounds/" + nombre + ".mp3");
		$("#tab_body").append(nombre);
		$(".vex-tabdiv").append(nombre);
	});

});


