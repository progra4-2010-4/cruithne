
var mapa = {"do1":"3/5","domas":"1/2","re":"5/5","mi":"2/4","fa":"3/4","sol":"5/4","la":"2/3","si":"0/2",
"c_sharp":"4/5","a_sharp":"3/3","g_sharp":"1/3","f_sharp":"4/4","d_sharp":"1/4"}

var duraciones = {":w":1,":h":1/2,":q":1/4,":8":1/8,":16":1/16,":32":1/32}

var agregarnotas = function(ruta,texto)
{
	$(".vex-tabdiv").tabdiv();
	$(".vex-tabdiv").tabdiv("renderText",cambiartexto());
}


var tocar = function(ruta){
	var snd = new Audio("sounds/" + ruta+ ".mp3");
	$("#tab_body").append(mapa[ruta] + " ");
	agregarnotas(ruta,undefined)
	snd.play();
}

var cambiartexto = function()
{
	suma = 0;
	inic = 1/8;
	contador = 0
	s = $("#tab_body").text().split(" ");
	x = s.length;
	a = [];
	texto = "";
	for(i = 0; i < x; i++){ if(s[i] != "") a.push(s[i]);}
	x = a.length;
	
	for(i = 0; i < x; i++)
	{
		texto = texto + " " + a[i] + " ";
		if(duraciones[a[i]] == undefined)
		{
			suma += inic;
			if(suma >= 1)
			{
				suma = 0;contador++;
				if(contador == 1) texto += "|";
				if(contador == 2)
				{
					texto = texto + "\n\ntabstave notation=true \nnotes ";
					contador = 0;
				}
			}
		}
		else
		{
			inic = duraciones[a[i]];
		}
	} 
	texto = "tabstave notation=true \nnotes " + texto;
	return texto;
}
$(function(){

	$(".vex-tabdiv").tabdiv();
	$(".blanche").click(function(event)
	{	var nombre = $(this)[0].id;
		tocar(nombre);
		
	});
	$(".noir").click(function(event)
	{	var nombre = $(this)[0].id;
		tocar(nombre);
	});
	$("#show").css({"display": "block"});
	$("#show").click(function(event)
	{
		$("#tab_body_input").css({"display": "block"});
	});

	$(".duration").click(function(event)
	{	var nombre = $(this)[0].value;
		$("#tab_body").append(" :" + nombre + " ");
		agregarnotas(undefined,nombre)
		
	});
	$(".create").click(function(event)
	{
		$("#tab_body").text(cambiartexto());
	});

});


