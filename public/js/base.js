
/*global $*/
/*global jugadores*/
		
		
var mapDivsAndFunctions = [];
mapDivsAndFunctions['partidos-div.html'] = {loadFunction: cargarJugadores, id: 1}

			
$("#left-menu a").click(function(e){
  $(".container-fluid").load(e.target.getAttribute("data-div"), function(){
  	mapDivsAndFunctions[e.target.getAttribute("data-div")].loadFunction();
  });
  /*Tengo que testear esto. No se si la funcion loadFunction va a funcionar*/
});

function cargarJugadores() {

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