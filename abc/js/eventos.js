var iniciaApp = function(){
	var entrar=function(){
		var usuario = $("#txtUsuario").val();
		var clave   = $("#txtClave").val();
		var parametros = "opcion=valida"+
						 "&usuario="+usuario+
						 "&clave="+clave+
						 "&id="+Math.random();
		var validaEntrada = $.ajax({
			method:"POST",
			url:"php/datos.php",
			data: parametros,
			dataType:"json"
		});
		validaEntrada.done(function(data){
			alert(data.respuesta);
			if(data.respuesta==true){
				$("#datosUsuario").hide();
				$("nav").show("slow");
				$("#secUsuarios").show("slow");
			}
			else
			{
				alert("A ti no por feo");
			}
		});
		validaEntrada.fail(function(jqError,textStatus){
			alert("Solicitud Rechazada por feo:"+textStatus);
		});
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
	var datosUsuario=function(){
		var usuario=$("#txtNomUsuario").val();
		var parametros="opcion=datosusuario"+"&usuario="+usuario+"&id="+Math.random();
		var du=$.ajax({
			method:"POST",
			url:"php/datos.php",
			data: parametros,
			dataType:"json"
		});
		du.done(function(data){
			if(data.respuesta==true){
				$("#txtNomNombre").val(data.nombre);
				$("#txtNomClave").val(data.clave);
				$("#txtNomDepto").val(data.departamento);
				$("#txtNomvigencia").val(data.vigencia);
			}else{
				$("#txtNomNombre").focus();
			}
		});
		du.fail(function(jqError,textStatus){

		});
	}
	var teclaNomUsuario=function(tecla){
		if(tecla.which==13){
			datosUsuario();
		}
	}
	var altas=function(){

		var usuario=$("#txtNomUsuario").val();
		var nombre=$("#txtNomNombre").val();
		var clave=$("#txtNomClave").val();
		var depto=$("#txtNomDepto").val();
		var vigencia=$("#txtNomVigencia").val();
		var parametros="opcion=alta"+
					   "&usuario="+usuario+
					   "&nombre="+nombre+
					   "&clave="+clave+
					   "&departamento="+depto+
					   "&vigencia="+vigencia+
					   "&id="+Math.random();

		var altaUsuario=$.ajax({
			method:"POST",
			url:"php/datos.php",
			data: parametros,
			dataType:"json"
		});
		altaUsuario.done(function(data){
			// var_dump(data);
			alert(data);
			if(data.respuesta==true){
				alert("Usuario dado de alta");
			}else{
				alert("Usuario existente o no s epudo registrar. Por favor ya no lo intente ¬¬");
			}
		});
		altaUsuario.fail(function(jqError,textStatus){

		});
	}
	//Selección de declaración de eventos
	$("#btnEntrar").on("click",entrar);
	$("#txtUsuario").on("keypress",teclaUsuario);
	$("#txtClave").on("keypress",teclaClave);
	$("#txtNomUsuario").on("keypress",teclaNomUsuario);
	$("#btnAltas").on("click",altas);
}
$(document).ready(iniciaApp);