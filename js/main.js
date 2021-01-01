function validateForm() {

	//función para borrar los span después de cada intento.
	$('.borrar').remove();

	//variables del formulario.
	var name = $("#name").val().trim();
	var apellido = $("#lastname").val();
	var letrasN = soloLetras(name);
	var letrasA = soloLetras(apellido);
	var mail = $('#input-email').val();
	var correo = validEmail(mail);
	var pass = $('#input-password').val();
	var seleccion = $('select').val();
	//casos del nombre.
	if (name == '') {
		$("#name").parent().append("<span class='borrar'>Debe ingresar su nombre</span>");
	}
	else if (letrasN == false) {
		$("#name").parent().append("<span class='borrar'>El nombre solo debe contener letras.</span>");
	}
	else if (name[0] != name[0].toUpperCase()) {
		$("#name").parent().append("<span class='borrar'>La primera letra debe ser mayúscula.</span>");
	}
	//casos del apellido.
	if (apellido == '') {
		$("#lastname").parent().append("<span class='borrar'>Debe ingresar su apellido</span>");
	}
	else if (letrasA == false) {
		$("#lastname").parent().append("<span class='borrar'>El apellido solo debe contener letras.</span>");
	}
	else if (apellido[0] != apellido[0].toUpperCase()) {
		$("#lastname").parent().append("<span class='borrar'>La primera letra debe ser mayúscula.</span>");
	}
	//casos del correo.
	if (correo == false) {
		$("#input-email").parent().append("<span class='borrar'>El correo debe tener un formato válido.</span>");
	}
	//casos de la contraseña.
	if(pass.length < 6){
		$('#input-password').parent().append("<span class='borrar'>La contraseña debe tener al menos 6 caracteres.</span>")
	}
	else if(pass == '123456'){
		$('#input-password').parent().append("<span class='borrar'>La contraseña no puede ser 123456.</span>")
	}
	else if(pass == '098765'){
		$('#input-password').parent().append("<span class='borrar'>La contraseña no puede ser 098765.</span>")
	}
	else if(pass.toUpperCase() == 'PASSWORD'){
		$('#input-password').parent().append("<span class='borrar'>La contraseña no puede ser 'password'.</span>")
	}
	//selección.
	if(seleccion == 0){
		$('select').parent().append("<span class ='borrar'>Debe seleccionar una preferencia.</span>")
	}
}

function soloLetras(check) {
	if (/^[a-zA-Z ]+$/.test(check)) {
		return true;
	}
	else {
		return false;
	}
}

function validEmail(email) {
	var re = /\S+@\S+\.\S+/;
	return re.test(email);
}