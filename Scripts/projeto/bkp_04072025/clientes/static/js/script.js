$(document).ready(function(){

	alert('Funcionando');

	//var deleteBtn = $('.delete-btn');

	$(document).on('click', '.delete-btn', function(e){
		
		e.preventDefault();

		var deLink = $(this).attr('href');
		var result = confirm("Quer deletar essa Tarefa?");

		if(result){
			window.location.href = deLink;
		}

	});

	$(document).on('click', '#search-btn', function(e){
		
		$('#search-form').submit();
	});	

	var baseUrl = "http://127.0.0.1:8000/";
	$(document).on('change', '#filter', function(e){
		
		var filter = $(this).val();
		window.location.href = baseUrl + '?filter=' + filter;
	});	

});