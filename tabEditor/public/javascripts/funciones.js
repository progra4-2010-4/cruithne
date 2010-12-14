
var mapa = {"do1":"3/5","domas":"1/2","re":"5/5","mi":"2/4","fa":"3/4","sol":"5/4","la":"2/3","si":"0/2",
"c_sharp":"4/5","a_sharp":"3/3","g_sharp":"1/3","f_sharp":"4/4","d_sharp":"1/4"}

var tocar = function(ruta){
	var snd = new Audio("sounds/" + ruta+ ".mp3");
	$("#tab_body").append(mapa[ruta] + " ");
	
	if($(".vex-tabdiv").tabdiv("code") == ""){
	     $(".vex-tabdiv").tabdiv();
	     $(".vex-tabdiv").tabdiv("renderText",$(".vex-tabdiv").tabdiv("code") +"tabstave notation=true \n notes ");
	}
	$(".vex-tabdiv").tabdiv("renderText",$(".vex-tabdiv").tabdiv("code") +" "+ mapa[ruta] + " ")
	snd.play();


}

$(function(){

	/*$(".vex-tabdiv").tabdiv();
	$(".vex-tabdiv").tabdiv("renderText", "notes");*/
	$(".vex-tabdiv").tabdiv();
	$(".blanche").click(function(event)
	{	var nombre = $(this)[0].id;
		tocar(nombre);
		
	});
	$(".noir").click(function(event)
	{	var nombre = $(this)[0].id;
		tocar(nombre);
	});
	$("#show").click(function(event)
	{
		$("#tab_body_input").css({"display": "inherit"});
	});
	$("#show").css({"display": "block"});

	$(".duration").click(function(event)
	{	var nombre = $(this)[0].value;
		$("#tab_body").append(" :" + nombre + " ");
		s = $(".vex-tabdiv").tabdiv("code")
		$(".vex-tabdiv").tabdiv();
	        $(".vex-tabdiv").tabdiv("renderText",s +":" + nombre + " ");
	});

});


