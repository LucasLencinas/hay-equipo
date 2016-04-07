var partidos = [
	{
		fecha: 20160107,
		equipo1: ['Marian', 'Colo', 'Martin', 'Alan', 'Gaby'],
		equipo2: ['Lucas', 'Jony', 'Pablote', 'Agus O', 'GoResta'],
		diferenciaGoles: 2
	},{	
		fecha: 20160114,
		equipo1: ['Gaby', 'Alan', 'Marian', 'Agus O', 'Martin'],
		equipo2: ['Cabe', 'Agus L', 'GoResta', 'Pablote', 'Jony'],
		diferenciaGoles: 1
	},{	
		fecha: 20160121,
		equipo1: ['Marian', 'Colo', 'Fede', 'Martin', 'Agus O'],
		equipo2: ['Jony', 'Agus L', 'Pablote', 'GoResta', 'Alan'],
		diferenciaGoles: 5
	},{	
		fecha: 20160128,
		equipo1: ['Fede', 'Carda', 'Gaby', 'Martin', 'GoResta'],
		equipo2: ['Colo', 'Jony', 'Pablote', 'Agus O', 'Cabe'],
		diferenciaGoles: 4
	},{	
		fecha: 20160204,
		equipo1: ['Carda', 'Martin', 'Pablote', 'Agus L', 'Gaby'],
		equipo2: ['Jony', 'Fede', 'Colo', 'Agus O', 'GoResta'],
		diferenciaGoles: 8
	},{	
		fecha: 20160211,
		equipo1: ['Gaby', 'Jony', 'Martin', 'Fede', 'GoResta'],
		equipo2: ['Agus O', 'Agus L', 'Colo', 'Alan', 'Pablote'],
		diferenciaGoles: 5
	},{	
		fecha: 20160218,
		equipo1: ['Mati', 'Lucas', 'Fede', 'Jony', 'Martin'],
		equipo2: ['Cabe', 'Carda', 'Agus L', 'GoResta', 'Colo'],
		diferenciaGoles: 1
	},{	
		fecha: 20160225,
		equipo1: ['Agus O', 'Colo', 'CoLucas', 'CoLuNacho', 'Martin'],
		equipo2: ['Gaby', 'Agus L', 'Jony', 'GoResta', 'Fede'],
		diferenciaGoles: 7
	},{	
		fecha: 20160303,
		equipo1: ['Mati', 'Colo', 'Jony', 'Martin', 'Agus O'],
		equipo2: ['Cabe', 'Agus L', 'Alan', 'GoResta', 'Gaby'],
		diferenciaGoles: 7
	},{	
		fecha: 20160310,
		equipo1: ['Mati', 'Marian', 'Agus L', 'Cabe', 'Martin'],
		equipo2: ['GoResta', 'Lucas', 'Alan', 'LukAle', 'Jony'],
		diferenciaGoles: 0
	},{	
		fecha: 20160317,
		equipo1: ['GoResta', 'LucaFa', 'Agus O', 'Fede', 'Lucas'],
		equipo2: ['Gaby', 'Agus L', 'Martin', 'Marian', 'Cabe'],
		diferenciaGoles: 5
	},{	
		fecha: 20160331,
		equipo1: ['Carda', 'Agus L', 'Gaby', 'Cabe', 'Colo'],
		equipo2: ['Lucas', 'Marian', 'GoResta', 'Agus O', 'Martin'],
		diferenciaGoles: 4
	}
];

var jugadores = [
	{
		nombre: "Lucas",
		edad: 23,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}	
	},
	{
		nombre: "Colo",
		edad: 25,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}
	},
	{
		nombre: "Marian",
		edad: 23,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}	
	},
	{
		nombre: "Mati",
		edad: 25,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}
	},
	{
		nombre: "Gaby",
		edad: 23,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}	
	},
	{
		nombre: "Manu",
		edad: 25,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}
	},
	{
		nombre: "Agus O",
		edad: 23,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}	
	},
	{
		nombre: "Pablito",
		edad: 25,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}
	},
	{
		nombre: "Pablote",
		edad: 23,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}	
	},
	{
		nombre: "Carda",
		edad: 25,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}
	},
	{
		nombre: "Cristobal",
		edad: 23,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}	
	},
	{
		nombre: "Fede",
		edad: 25,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}
	},
	{
		nombre: "Agus L",
		edad: 23,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}	
	},
	{
		nombre: "Martin",
		edad: 25,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}
	},
	{
		nombre: "Jony",
		edad: 23,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}	
	},
	{
		nombre: "Gorra",
		edad: 25,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}
	},
	{
		nombre: "Alan",
		edad: 23,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}	
	},
	{
		nombre: "Cabe",
		edad: 25,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}
	},
	{
		nombre: "CoLucas",
		edad: 23,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}	
	},
	{
		nombre: "Colhacha",
		edad: 25,
		peso: 80,
		habilidades: {
			ARQ: 22,
			DEF: 44,
			MED: 66,
			DEL: 88
		}
	},
	]