/*$(document).ready(function(){
  $("#interno").click(function(){
    $.ajax({url: "demo.txt", 
    	success: function(result){
      		$("#div1").html(result);
    	}});
  	});
});*/


function ExternalAjax(){
	$.ajax({
		url: "https://reqres.in/api/users",
		type: "get",
		success: function(response){
			console.log(response);
			var myJSON = JSON.stringify(response);
			/*$("#div1").html(myJSON);*/


			$(".wrapper").append("<th>Nombre</th><th>Apellido</th><th>Correo</th><th>Avatar</th><th>Borrar</th>")
			$.each(JSON.parse(myJSON), function(i, data) {
				var btn = "<center><button type='button' onclick='agregar_a_carrito(" + data +")'>Agregar al Carrito!</button></center>";
				console.log(data);
				var tr = $('<tr>').append(
					$('<td>').text(data.first_name),
					$('<td>').text(data.last_name),
					$('<td>').text(data.email),
					$('<td>').text(data.avatar),
					$('<td>').append(btn)
					); 
				$(".wrapper").append(tr)
			});
			$(".wrapper").append('<br>')
		}
	});
}

