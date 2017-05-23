<?php
include("utilerias.php");
$conexion=conecta();//servidor y bd
$u=GetSQLValueString($_GET["txtUsuario"],"text");
//esta consultya está mal ¿porqué?
$consulta=sprintf("delete from usuarios where usuario=%s",$u);
mysql_query($consulta);
if(mysql_affected_rows()>0){
	print("usuario eliminado :)!");
}
else{
	print("Usuario no existe :c");
}
?>