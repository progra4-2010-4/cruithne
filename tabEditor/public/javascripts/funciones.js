$(function(){
	$("#do1").click(function(){
		tocar("sounds/DO.mp3");
		$("#tab_body").append("<span>notes :q 0/4</span>");
		$(".vex-tabdiv").append("<span>notes :q 0/4</span>");
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
	$("#c_sharp").click(function(){
		tocar("sounds/piano_C_sharp.mp3");
		$(".vex-tabdiv").append("#do ");
		$("#tab_body").append("#do ");
	});
	$("#a_sharp").click(function(){
		tocar("sounds/piano_A_sharp.mp3");
		$(".vex-tabdiv").append("A_sharp");
		$("#tab_body").append("A_sharp ");
	});
	$("#g_sharp").click(function(){
		tocar("sounds/piano_G_sharp.mp3");
		$(".vex-tabdiv").append("G_sharp ");
		$("#tab_body").append("G_sharp ");
	});
	$("#f_sharp").click(function(){
		tocar("sounds/piano_F_sharp.mp3");
		$(".vex-tabdiv").append("F_sharp ");
		$("#tab_body").append("F_sharp  ");
	});
	$("#d_sharp").click(function(){
		tocar("sounds/piano_D_sharp.mp3");
		$(".vex-tabdiv").append("D_sharp ");
		$("#tab_body").append("D_sharp");
	});

	
});

var tocar = function(ruta){
	var snd = new Audio(ruta);
	snd.play();
}
