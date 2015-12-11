$(function(){
	$('#todo').keyup(function (e){
		if (e.keyCode == 13 && $(this).val()) {
			var newTodo = $(this).val();
			var listeItem = '<li><input type="checkbox">' + newTodo + '<button><i class="fa fa-times"></i></button></li>';
			$('#todoListe').append(listeItem);
			$(this).val('');
		}
	});
	
	$('#todoListe').on('click', ':checkbox', function() {
		$(this).parent().toggleClass('raye');
	});

	$('#active').click(function() {
		$(':checked').parent().addClass('hide');
		$(':checkbox:not(:checked)').parent().removeClass('hide');
	});

	$('#complet').click(function() {
		$(':checkbox:not(:checked)').parent().addClass('hide');
		$(':checked').parent().removeClass('hide');
	});

	$('#all').click(function() {
		$(':hidden').removeClass('hide');
	});
});
