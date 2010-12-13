$(function(){
	$("#do1").click(function(){
		tocar("sounds/DO.mp3");
		$("#tab_body").append(" 0/4");
		$(".vex-tabdiv").append("do ");
	});
	$("#domas").click(function(){
		tocar("sounds/DO2.mp3");
		$(".vex-tabdiv").append("do2 ");
		$("#tab_body").append("do2 ");
	});
	
	$("#re").click(function(){
		tocar("sounds/RE.mp3");
		$(".vex-tabdiv").append("re ");
		$("#tab_body").append("2/4 ");
	});
	$("#mi").click(function(){
		tocar("sounds/MI.mp3");
		$(".vex-tabdiv").append("mi ");
		$("#tab_body").append("mi ");
	});
	$("#fa").click(function(){
		tocar("sounds/FA.mp3");
		$(".vex-tabdiv").append("fa ");
		$("#tab_body").append("fa ");
	});
	$("#sol").click(function(){
		tocar("sounds/SOL.mp3");
		$(".vex-tabdiv").append("sol ");
		$("#tab_body").append("sol ");
	});
	$("#la").click(function(){
		tocar("sounds/LA.mp3");
		$(".vex-tabdiv").append("la ");
		$("#tab_body").append("la ");
	});
	$("#si").click(function(){
		tocar("sounds/SI.mp3");
		$(".vex-tabdiv").append("si ");
		$("#tab_body").append("si ");
	});

	
});

var tocar = function(ruta){
	var snd = new Audio(ruta);
	snd.play();
}
