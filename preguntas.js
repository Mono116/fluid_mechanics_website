const preg = document.getElementById("pregunta");
const resp_input = document.getElementById("respuesta");
const btn_siguiente = document.getElementById("btn_siguiente");
const btn_confirmar = document.getElementById("btn_confirmar");
const pregunta_label = document.getElementById("pregunta_label");

let pregunta_actual = 0;
let respuesta_correcta = false;

const preguntas = [
	{
		question: "pregunta 1",
		answer: 1,
		deviation: .5
	},
	{
		question: "pregunta 2",
		answer: 2,
		deviation: .5
	},
	{
		question: "pregunta 3",
		answer: 3,
		deviation: .5
	}
];
const max_preguntas = preguntas.length;

function popular_preguntas() {
	preg.innerHTML = preguntas[pregunta_actual].question;
	resp_input.value = ""
	btn_confirmar.innerHTML = "Confirmar Respuesta";
	btn_siguiente.innerHTML = "Siguiente Pregunta";
	btn_siguiente.disabled = true;
	pregunta_label.innerHTML = "Pregunta " + (pregunta_actual + 1) + "/" + max_preguntas;
}

function confirmar_pregunta(pregunta) {
	if (respuesta_correcta) return;

	const respuesta_input = parseInt(resp_input.value);
	const i = preguntas[pregunta_actual];

	if (i.answer - i.deviation < respuesta_input
		&& respuesta_input < i.answer + i.deviation){
		respuesta_correcta = true;
		btn_siguiente.disabled = false;
		alert("respuesta correcta");

		if (pregunta_actual >= max_preguntas-1) {
			btn_siguiente.disabled = true;
		}
	} else {
		alert("respuesta incorrecta");
		respuesta_correcta = false;
	}
}

function siguiente_pregunta() {
	if (pregunta_actual < max_preguntas-1) {
		pregunta_actual += 1;
		popular_preguntas();
		respuesta_correcta = false;
	}
	else {
		alert("se acabaron las preguntas");
		btn_confirmar.disabled = true;
		btn_siguiente.disabled = true;
	}
}

// llenar primera pregunta al iniciar pagina
popular_preguntas();
