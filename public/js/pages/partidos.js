var disconnected = true;

$( document ).ready(function() {
	if(disconnected){
		renderPartidosJSON(partidos);
	}
	else{
		renderPartidosFromMongo();
	}
	
});

function renderPartidosFromMongo(){
	console.log("No hay conexion con la base de datos");
	alert("No hay conexion con la base de datos");
}

function renderPartidosJSON(partidos){
	

}
