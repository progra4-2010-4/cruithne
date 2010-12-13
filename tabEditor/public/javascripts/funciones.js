$(function(){
	
	$(".vex-tabdiv").tabdiv();
	$(".vex-tabdiv").tabdiv("renderText", "notes");
	$("#do1").click(function(){
		tocar("sounds/DO.mp3");
		/*el contenido/lo que se va guardar se encuentra en
	        tab_body, cuando se toca el boton de do1, se agrega el texto al body, y al div de vextab
		el problema es camibar dinamicamente la tablatura */
		$("#tab_body").append(" 3/5");
		$(".vex-tabdiv").tabdiv("renderText",$(".vex-tabdiv").tabdiv("code") + " 3/5");	
		
	});
	$("#domas").click(function(){
		tocar("sounds/DO2.mp3");	
		$("#tab_body").append(" 1/2");
		$(".vex-tabdiv").tabdiv("renderText",$(".vex-tabdiv").tabdiv("code") + " 1/2");	
	});
	
	$("#re").click(function(){
		tocar("sounds/RE.mp3");
		$("#tab_body").append(" 5/5");
		$(".vex-tabdiv").tabdiv("renderText",$(".vex-tabdiv").tabdiv("code") + " 5/5");	
	});
	$("#mi").click(function(){
		tocar("sounds/MI.mp3");
		$("#tab_body").append(" 2/4");
		$(".vex-tabdiv").tabdiv("renderText",$(".vex-tabdiv").tabdiv("code") + " 2/4");	
	});
	$("#fa").click(function(){
		tocar("sounds/FA.mp3");
		$("#tab_body").append(" 3/4");
		$(".vex-tabdiv").tabdiv("renderText",$(".vex-tabdiv").tabdiv("code") + " 3/4");	
	});
	$("#sol").click(function(){
		tocar("sounds/SOL.mp3");
		$("#tab_body").append(" 5/4");
		$(".vex-tabdiv").tabdiv("renderText",$(".vex-tabdiv").tabdiv("code") + " 5/4");	
	});
	$("#la").click(function(){
		tocar("sounds/LA.mp3");
		$("#tab_body").append(" 2/3");
		$(".vex-tabdiv").tabdiv("renderText",$(".vex-tabdiv").tabdiv("code") + " 2/3");	
	});
	$("#si").click(function(){
		tocar("sounds/SI.mp3");
		$("#tab_body").append("si ");
		$("#tab_body").append("notes 0/2");
		$(".vex-tabdiv").tabdiv("renderText",$(".vex-tabdiv").tabdiv("code") + " 0/2");	
	});
	$("#c_sharp").click(function(){
		tocar("sounds/piano_C_sharp.mp3");
		$("#tab_body").append(" 4/5");
		$(".vex-tabdiv").tabdiv("renderText",$(".vex-tabdiv").tabdiv("code") + " 4/5");	
	});
	$("#a_sharp").click(function(){
		tocar("sounds/piano_A_sharp.mp3");
		$("#tab_body").append(" 3/3");
		$(".vex-tabdiv").tabdiv("renderText",$(".vex-tabdiv").tabdiv("code") + " 3/3");	
	});
	$("#g_sharp").click(function(){
		tocar("sounds/piano_G_sharp.mp3");
		$("#tab_body").append(" 1/3");
		$(".vex-tabdiv").tabdiv("renderText",$(".vex-tabdiv").tabdiv("code") + " 1/3");	
	});
	$("#f_sharp").click(function(){
		tocar("sounds/piano_F_sharp.mp3");
		$("#tab_body").append(" 4/4");
		$(".vex-tabdiv").tabdiv("renderText",$(".vex-tabdiv").tabdiv("code") + " 4/4");	
	});
	$("#d_sharp").click(function(){
		tocar("sounds/piano_D_sharp.mp3");
		$("#tab_body").append("notes 1/4");
		$(".vex-tabdiv").tabdiv("renderText",$(".vex-tabdiv").tabdiv("code") + " 1/4");	
	});
});

var tocar = function(ruta){
	var snd = new Audio(ruta);
	snd.play();
}
