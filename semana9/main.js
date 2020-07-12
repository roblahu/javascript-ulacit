let usuarios = [];

function ExternalAjax(){
	$.ajax({
		url: "https://reqres.in/api/users?per_page=12",
		type: "get",
		success: function(response){
			usuarios = response.data;
			$.each(usuarios, function(i, usuario){
				usuario.descripcion = "";	
			});
			mostrarResultados();	


		}
	});
}

function mostrarResultados(){
	$("#wrapper").text("");
	$("#wrapper").append("<th>Nombre</th><th>Apellido</th><th>Correo</th><th>Avatar</th><th>Descripcion</th><th>Borrar</th>")
	$.each(usuarios, function(i, usuario) {
		var btn = "<center><button type='button' onclick='eliminar(" + usuario.id +")'>Eliminar</button></center>";
		var tr = $('<tr>').append(
			$('<td>').text(usuario.first_name),
			$('<td>').text(usuario.last_name),
			$('<td>').text(usuario.email),
			$('<td>').append('<img src="' + usuario.avatar +'">'),
			$('<td>').append('<textarea id="'+ usuario.id+'">'+ usuario.descripcion +'</textarea><button onclick="guardarDescripcion('+ usuario.id +')">Agregar</button>' +'<button onclick="verDescripcion('+ usuario.id +')">Ver Descripcion</button>'),
			$('<td>').append(btn)
		); 
		$("#wrapper").append(tr);
	});
	$("#wrapper").append('<br>');
	/*arrays();*/
}

function eliminar(id){
	usuarios = jQuery.grep(usuarios, function(usuario) {
		return usuario.id != id;
	});
	mostrarResultados();
}

/*function arrays(){
var arr = [];
for (var i = 0; i < 10; i++) {
	arr[i] = [];
}
console.log(arr)
}*/

var descripcion = 0;
var array = [];
function guardarDescripcion(id){
	array[descripcion] = $("#" + id).val();
	descripcion++;
}

function verDescripcion(id){
	var elementos = "";   
	for (var y=0; y < array.length; y++){
		elementos += "'" + array[y] + "'" + " ";
	}
	$("#descripciones").text(elementos);
	alert(elementos);
}



