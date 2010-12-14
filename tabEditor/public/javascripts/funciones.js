
var mapa = {"do1":"3/5","domas":"1/2","re":"5/5","mi":"2/4","fa":"3/4","sol":"5/4","la":"2/3","si":"0/2",
"c_sharp":"4/5","a_sharp":"3/3","g_sharp":"1/3","f_sharp":"4/4","d_sharp":"1/4"}

var duraciones = {":w":1,":h":1/2,":q":1/4,":8":1/8,":16":1/16,":32":1/32}

var versiones = []

var pueda = {":w":true,":h":true,":q":true,":8":true,":16":true,":32":true,"3/5":true,"1/2":true,"5/5":true,"2/4":true,
"3/4":true,"5/4":true,"2/3":true,"0/2":true,"4/5":true,"3/3":true,"1/3":true,"4/4":true,"1/4":true}

var agregarnotas = function()
{
	$(".vex-tabdiv").tabdiv();
	s = cambiartexto();
	versiones.push(s);
	if(versiones.length > 0)
	{
	   $("#undo").removeClass("invisible").addClass("visto");
	}
	$(".vex-tabdiv").tabdiv("renderText",s);
}

var limpiar = function(texto)
{
	if(texto===undefined)
		return "";
	d = texto.split(" ");
	a = [];
	x = d.length;
	devolver =""
	for(i = 0; i < x; i++){ if(pueda[d[i]]) a.push(d[i]);}
	x = a.length;
	for(i = 0; i < x; i++){ devolver = devolver + a[i] +" ";}
	return devolver;
}

var undo = function()
{
	x = versiones.pop();
	if(versiones.length == 0)
	{
		$("#undo").removeClass("visto").addClass("invisible");
	}
	$(".vex-tabdiv").tabdiv();
	$(".vex-tabdiv").tabdiv("renderText",versiones[versiones.length -1]);
	$("#tab_body").text(limpiar(versiones[versiones.length -1]))
}

var tocar = function(ruta){
	var snd = new Audio("sounds/" + ruta+ ".mp3");
	$("#tab_body").append(mapa[ruta] + " ");
	agregarnotas()
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
	for(i = 0; i < x; i++){ if(pueda[s[i]]) a.push(s[i]);}
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
		agregarnotas()
		
	});
	$(".create").click(function(event)
	{
		$("#tab_body").text(cambiartexto());
	});

	$("#tab_body").keyup(function () {
		s = $("#tab_body").text();
	     	$(".vex-tabdiv").tabdiv();
	        $(".vex-tabdiv").tabdiv("renderText",s);
        }).keyup();

	$("#undo").click(function(event){
		undo();
	});
	
});


