// Seleccionar el formulario por su ID
var formulario = document.querySelector("#formulario");

// Función que se ejecutará al enviar el formulario
formulario.onsubmit = function (e) {
  // Prevenir que la página se recargue al enviar el formulario
  e.preventDefault();

  // Obtener los valores de los elementos del formulario
  var nombre = formulario.elements["name"].value;
  var edad = formulario.elements["age"].value;
  var nacionalidad = formulario.elements["nationality"].value;

  // Validar que la edad sea mayor o igual a 18 años
  if (!validarEdad(edad)) {
    return; // Detener la ejecución si la edad no es válida
  }

  // Agregar invitado a la lista si la validación es exitosa
  agregarInvitado(nombre, edad, nacionalidad);

  // Limpiar el formulario después de enviar los datos
  formulario.reset();
};

// Función para validar la edad del invitado
function validarEdad(edad) {
  // Si la edad es menor a 18, mostrar una alerta y devolver false
  if (edad < 18) {
    alert("Es requerido que la edad sea igual o mayor a 18 años.");
    return false;
  }
  // Si la edad es válida, devolver true
  return true;
}

// Función para agregar un invitado a la lista
function agregarInvitado(nombre, edad, nacionalidad) {
  // Convertir el valor de nacionalidad a su forma textual
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  // Seleccionar el contenedor donde se añadirá la lista de invitados
  var lista = document.getElementById("lista-invitados"); // Se selecciono el id correcto

  // Crear un nuevo elemento para el invitado
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista", "mt-3", "p-3", "border", "rounded", "bg-light");
  lista.appendChild(elementoLista);

  // Crear un elemento para cada dato del invitado
  crearElemento("Nombre", nombre, elementoLista);
  crearElemento("Edad", edad, elementoLista);
  crearElemento("Nacionalidad", nacionalidad, elementoLista);

  // Crear un botón para eliminar al invitado
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.classList.add("btn", "btn-danger", "mt-2");
  elementoLista.appendChild(botonBorrar);

  // Añadir un evento al botón para eliminar al invitado cuando se haga clic en él
  botonBorrar.onclick = function () {
    elementoLista.remove();
  }
}

// Función para crear un nuevo elemento en la lista del invitado
function crearElemento(descripcion, valor, contenedor) {
  // Crear un span para la descripción del dato (por ejemplo, "Nombre:")
  var spanNombre = document.createElement("span");
  spanNombre.textContent = descripcion + ": ";

  // Crear un input para mostrar el valor (por ejemplo, el nombre del invitado)
  var inputNombre = document.createElement("input");
  inputNombre.value = valor;
  inputNombre.readOnly = true; // Hacer el input de solo lectura para que no se pueda editar
  inputNombre.classList.add("form-control", "mb-2");

  // Añadir los elementos al contenedor del invitado
  contenedor.appendChild(spanNombre);
  contenedor.appendChild(inputNombre);
}
