$(document).ready(function(){
	var n = 0;
	$(function() {
   		$( "#tabs" ).tabs();
 	});

	$.getJSON("timeline.json").done(function(data) {
		for(var i in data.mensajes){
			$("#Mensajes").append("<div>" + "<img src=" + data.Mensajes[i].autor  + ", Asunto: " + data.Mensajes[i].titulo + "<li>"+ data.Mensajes[i].fecha + "</li>" + "</div>");
			$("#Mensajes").append("<div>" + "<img src="+data.Mensajes[i].avatar +">" +" "+ data.Mensajes[i].contenido + "</div>");
		}	
	}).fail(function(){
		alert("No se han podido cargar los mensajes");
	});

	$.getJSON("myline.json").done(function(data) {
		for(var i in data.mensajes){
			$("#tab2").append("<div>" + "<img src=" + data.Mensajes[i].autor  + ", Asunto: " + data.Mensajes[i].titulo + "<li>"+ data.Mensajes[i].fecha + "</li>" + "</div>");
			$("#tab2").append("<div>" + "<img src="+data.Mensajes[i].avatar +">" +" "+ data.Mensajes[i].contenido + "</div>");
			
		}
	}).fail(function(){
		alert("No se han podido cargar mis mensajes");
	});

	/*$("#update").click(function(){
		$.getJSON("update.json").done(function(data) {
			if(contador_msgs == 0){
				contador_msgs++;
				printMsgs(data.Msgs, "#newMsgs");
			}else{
				alert("No se han podido cargar mensajes nuevos");
			}
		}).fail(function(){
			alert("No se han podido cargar los nuevos mensajes");
		});
	});*/
});








/*
$(document).ready(function(){
	 var actualizado = false;
	 var menspend = [];
	 $(function() {
   		 $( "#tabs" ).tabs();
 	 });

 	 $(function() {
 	 	$("#boton").button();
 	 });
	
 	$.getJSON("update.json").done(function(data){
 		for(var i in data.mensajes){
 			menspend[i] = data.mensajes[i];
 		}
 		$("#menspend").html("quedan "+ menspend.length+" mensajes por mostrar");
 	})
	
	$.getJSON("timeline.json").done(function(data){
		for(var i in data.mensajes){
			$("#mensajes").append("<div>" + "<img src="+data.mensajes[i].avatar +">" +" "+ data.mensajes[i].autor +", Asunto: "+ data.mensajes[i].titulo);
			$("#mensajes").append("<div>"+data.mensajes[i].contenido+ "<li>"+data.mensajes[i].fecha+"</li>"+"</div>" );
			
		}
		$("#mensajes").accordion({collapsible: true, active:false, heightStyle: "content"})
	})

	$.getJSON("myline.json").done(function(data){
		for(var i in data.mensajes){
			$("#tab2").append("<div>" + "<img src="+data.mensajes[i].avatar +">" +" "+ data.mensajes[i].autor +", Asunto: "+ data.mensajes[i].titulo);
			$("#tab2").append("<div>"+data.mensajes[i].contenido+ "<li>"+data.mensajes[i].fecha+"</li>"+"</div>" );
			
		}
		$("#tab2").accordion({collapsible: true, active:false, heightStyle: "content"})
	})

	$("#boton").click(function(){
		$.getJSON("update.json").done(function(data){
		for(var i in data.mensajes){
			$("#mensajesnuevos").append("<div>" + "<img src="+data.mensajes[i].avatar +">" +" "+ data.mensajes[i].autor +", Asunto: "+ data.mensajes[i].titulo);
			$("#mensajesnuevos").append("<div>"+data.mensajes[i].contenido+ "<li>"+data.mensajes[i].fecha+"</li>"+"</div>" );
			
		}
		$("#mensajesnuevos").accordion({collapsible: true, active:false, heightStyle: "content"})
		$("#menspend").html("quedan 0 mensajes por mostrar");
	})
	})


});

*/