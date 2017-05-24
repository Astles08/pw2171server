var iniciaApp = function(){
	alert("Hola App");
	var entrar=function(){
		alert($("#txtUsuario").val());
		alert($("#txtClave").val());
	}
	//Sección de declaración de eventos
	var teclaUsuario=function(tecla){
		if(tecla.which==13){
			$("#txtClave").focus();
		}
	}
	var teclaClave=function(tecla){
		if(tecla.which==13){
			entrar();
		}
	}
	$("#btnEntrar").on("click",entrar);
	$("#txtUsuario").on("keypress",teclaUsuario);
	$("#txtClave").on("keypress",teclaClave);
}
$(document).ready(iniciaApp);