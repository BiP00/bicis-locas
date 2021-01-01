function validateForm() {

	//función para borrar los span después de cada intento.
	$('.borrar').remove();

	//variables del formulario.
	var name = $("#name").val().trim();
	var apellido = $("#lastname").val();
	var letras = sonLetrasSolamente(name);
	//casos del nombre.
	if (name == '') {
		$("#name").parent().append("<span class='borrar'>Debe ingresar su nombre</span>");
	}
	else if ( letras == false) {
		$("#name").parent().append("<span class='borrar'>El nombre solo debe contener letras.</span>");
	}
	else if (name[0] != name[0].toUperrCase) {
		$("#name").parent().append("<span class='borrar'>La primera letra debe ser mayúscula.</span>");
	}
	//casos del apellido.
	if (apellido == '') {
		$("#lastname").parent().append("<span class='borrar'>Debe ingresar su apellido</span>");
	}
}

function sonLetrasSolamente(check){
	if(/^[a-zA-Z ]+$/.test(check)){
	return true;}
	else {
			return false;
	}
	}