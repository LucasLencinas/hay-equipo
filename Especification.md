# API

Acciones:

partidos:{
  equipoGanador: {jugadores: [Strings]},
  equipoPerdedor: {jugadores: [Strings]},
  diferenciaDeGoles: Int,
  fecha: dd7mm7aaaa,
  estado: armando/jugando/terminado,
  cancha: "String",
  jugadoresEnReserva: [{}]
}
GET /partidos
Devuelve todos los partidos

GET /partidos/{id}
Devuelve el partido con ese id

POST /partidos
Guarda un partido

DELETE /partidos/{id}
Borra un partido con ese id

PUT /partidos/{id}
Modifica el partido con ese id

grupos --> Agrupacion de personas que juegan varios partidos juntos. Los de First Data, los del los miercoles a la noche, los de los domingos, etc

grupo:{
  partidos: [{
    id: int,
    equipoGanador: {jugadores: [Strings]},
    equipoPerdedor: {jugadores: [Strings]},
    diferenciaDeGoles: Int,
    fecha: dd7mm7aaaa,
    cancha: "String"
    estado: armando/jugando/terminado,
    jugadoresEnReserva: [{}]
  }],
  jugadores: [{
    id: int,
    nombre: "",
    edad: Int,
    frase: "",
    foto: "asd.png",
    habilidad: [Int],
    posiciones: [Strings]  
  }],
  canchas: [{
    id: int,
    nombre: "",
    lugar: "",
    canchasDe: [Ints]
  }]
}

GET /grupos
Devuelve los grupos

GET /grupos/{id}
Devuelve un grupo con ese id

POST /grupos
Guarda un grupo

DELETE /grupos/{id}
Borra un grupo con ese id

PUT /grupos/{id}
Modifica el grupo con ese id


partidos

usuarios

jugadores

canchas
