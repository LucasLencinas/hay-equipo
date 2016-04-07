
/*global $*/
/*global jugadores*/
/*global partidos*/
		
		
var mapDivsAndFunctions = [];
mapDivsAndFunctions['partidos-div.html'] = {loadFunction: cargarPartidos}
mapDivsAndFunctions['posiciones-div.html'] = {loadFunction: cargarPosiciones}
mapDivsAndFunctions['canchas-div.html'] = {loadFunction: cargarCanchas}
mapDivsAndFunctions['estadisticas-div.html'] = {loadFunction: cargarEstadisticas}
mapDivsAndFunctions['historial-div.html'] = {loadFunction: cargarHistorial}
mapDivsAndFunctions['jugadores-div.html'] = {loadFunction: cargarJugadores}
mapDivsAndFunctions['juntadas-div.html'] = {loadFunction: cargarJuntadas}
mapDivsAndFunctions['tercer-tiempo-div.html'] = {loadFunction: cargarTercerTiempo}

			
$("#left-menu a").click(function(e){
  $(".container-fluid").load(e.target.getAttribute("data-div"), function(){
  	mapDivsAndFunctions[e.target.getAttribute("data-div")].loadFunction();
  });
  /*Tengo que testear esto. No se si la funcion loadFunction va a funcionar*/
});

function cargarPartidos() {

	jugadores.forEach(function(jugador, index, array) {
		var habilidadMaxima = habilidadDeJugador(jugador);
		$(".noJuegan").append("<li class=\"ui-state-highlight\"><span>" + jugador.nombre + "</span><span style=\"float: right;\">" + habilidadMaxima + "</span></li>");
	});

  $( ".ui-widget-content" ).draggable();

	$( "#sortable1, #sortable2" ).sortable({
    connectWith: ".connectedSortable"
  }).disableSelection();

	$( ".equipo1, .equipo2" ).droppable({
		cursor: "move",
		drop: function( event, ui ) {
		setTimeout(function(){
			renderJugadoresEnCancha();
		}, 50);
		//Uso este delay porque hay problemas con
		//el drop sino, no me toma el texto en el primer elemento agregado
		},
		remove : function( event, ui ){
		console.log("algo se removio");
		setTimeout(function(){
			renderJugadoresEnCancha();
		}, 50);
		}
	});

}

function habilidadDeJugador(jugador){
	var arrayHabilidades = Object.keys( jugador.habilidades ).map(function ( key ) { return jugador.habilidades[key]; });
	return Math.max.apply( null, arrayHabilidades );
}

function renderJugadoresEnCancha(){
	console.log("Se dropeo algo en las listas sortable1 o sortable2");
	var cancha="c5";
	var equipo="e1";
	var posicion="p";
	var habilidad;
	$('.equipo1 > li').each(function (index) {
		console.log("#" + cancha + "-" + equipo + "-" + posicion + (index+1));
		$( "#" + cancha + "-" + equipo + "-" + posicion + (index+1) ).css( "background-image", "url('img/azules.jpg')" );
		$( "#" + cancha + "-" + equipo + "-" + posicion + (index+1) ).children().text($(this).children().first().text()).css("font-family","\'Open Sans Condensed\', sans-serif");;
		habilidad = $(this).children().last().text(habilidadJugadorEnPosicion($("#pos1  li:eq(" + index +")").text(), $(".equipo1  li:eq(" + index + " ) span").first().text()  ))
		//$(".equipo1  li:eq(" + index + " ) span").last().text(habilidad);
	});
	equipo = "e2";
	$('.equipo2 > li').each(function (index) {
		console.log("#" + cancha + "-" + equipo + "-" + posicion + (index+1));
		$( "#" + cancha + "-" + equipo + "-" + posicion + (index+1) ).css( "background-image", "url('img/rojos1.jpg')" );
		$( "#" + cancha + "-" + equipo + "-" + posicion + (index+1) ).children().text($(this).children().first().text()).css("font-family","\'Open Sans Condensed\', sans-serif");
		habilidad = $(this).children().last().text(habilidadJugadorEnPosicion($("#pos2  li:eq(" + index +")").text(), $(".equipo2  li:eq(" + index + " ) span").first().text()  ))
		//$(".equipo2  li:eq(" + index + " ) span").last().text(habilidad);
	});
}

function habilidadJugadorEnPosicion(posicionJugador, nombreJugador){
var jugador = jugadores.find(function (element, index, array){
	return element.nombre == nombreJugador;
});
return jugador.habilidades[posicionJugador];

}
	
	
function cargarPosiciones(){
	
}

function cargarCanchas(){
	alert("No implementada todavia");
}

function cargarEstadisticas(){
	alert("No implementada todavia");
}

function cargarHistorial(){
	var stringFecha, anio, mes, dia, stringEquipo1, stringEquipo2, historialPartidosDiv;
	
	partidos.sort(function(a,b){
   if(a.fecha > b.fecha){ return 1}
    if(a.fecha < b.fecha){ return -1}
      return 0;
	});
	
	partidos.forEach(function(partido, index, array) {
		historialPartidosDiv = "";
		stringFecha = partido.fecha.toString();
		anio = stringFecha.substring(0, 4);
		mes = stringFecha.substring(4, 2);
		dia = stringFecha.substring(6, 2);
		
		historialPartidosDiv += "<div class='col-lg-3 col-md-4'>";
		historialPartidosDiv += "<h4>Fecha: " + anio + "-" + mes + "-" + dia + "</h4>";
		if(partido.diferenciaGoles == 0){
			stringEquipo1 = "Equipo 1";
			stringEquipo2 = "Equipo 2";
			$("historialPartidos").append("<h5>Empate</h5>");
		}else{
			stringEquipo1 = "Equipo Ganador";
			stringEquipo2 = "Equipo Perdedor";
			$("historialPartidos").append("<h5>Diferencia de Goles: " + partido.diferenciaGoles + "</h5>");
		}
		historialPartidosDiv += "<div class='table-responsive'><table class='table table-bordered table-hover table-striped'>";
		historialPartidosDiv += "<thead><tr><th>" + stringEquipo1 +"</th><th>" + stringEquipo2 + "</th></tr></thead>";
		historialPartidosDiv += "<tbody>";	
		
		partido.equipo1.forEach(function(jugador, index, array){
			historialPartidosDiv += "<tr><td>" + jugador  + "</td><td>" + partido.equipo2[index]  + "</td></tr>";	
		});
		historialPartidosDiv += "</tbody></table></div></div>";	
		$("#historialPartidos").append(historialPartidosDiv);	
	});

}

function cargarJugadores(){
	alert("No implementada todavia");
}

function cargarJuntadas(){
	alert("No implementada todavia");
}

function cargarTercerTiempo(){
	alert("No implementada todavia");
}
