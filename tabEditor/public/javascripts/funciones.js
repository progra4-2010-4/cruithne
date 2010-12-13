$(function(){
	$("#do1").click(function(){
		tocar("sounds/DO.mp3");
		$("#tab_body").append("do ");
		$(".prueba").append("do ");
	});
	$("#domas").click(function(){
		tocar("sounds/DO2.mp3");
		$(".prueba").append("do2 ");
		$("#tab_body").append("do2 ");
	});
	
	$("#re").click(function(){
		tocar("sounds/RE.mp3");
		$(".prueba").append("re ");
		$("#tab_body").append("re ");
	});
	$("#mi").click(function(){
		tocar("sounds/MI.mp3");
		$(".prueba").append("mi ");
		$("#tab_body").append("mi ");
	});
	$("#fa").click(function(){
		tocar("sounds/FA.mp3");
		$(".prueba").append("fa ");
		$("#tab_body").append("fa ");
	});
	$("#sol").click(function(){
		tocar("sounds/SOL.mp3");
		$(".prueba").append("sol ");
		$("#tab_body").append("sol ");
	});
	$("#la").click(function(){
		tocar("sounds/LA.mp3");
		$(".prueba").append("la ");
		$("#tab_body").append("la ");
	});
	$("#si").click(function(){
		tocar("sounds/SI.mp3");
		$(".prueba").append("si ");
		$("#tab_body").append("si ");
	});

	
});

var tocar = function(ruta){
	var snd = new Audio(ruta);
	snd.play();
}
