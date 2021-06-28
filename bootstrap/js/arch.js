function _(e1){
	return document.getElementById(e1);
}

function ajaxview(elem){
	
	$.get("./../include/arch_ajax.php?page="+elem, function(data, status){
		_('message').innerHTML  = "";
		_('main-page').innerHTML = data ;
	});	
}

function view(elem){
	ajaxview(elem);
	
	/*if(elem == "quote"){
		alert(elem);
	}else if(elem == "add-quote"){
		alert(elem);
	}*/
}

function uploadData(site){
	if(site == "uploadquote"){
		var quote = $('#cont').val();
		var quoteby = $("#quote-by").val();
		//alert(quote);
		if(quote == "" && quoteby == ""){
			alert("Please fill each of the field before submittiing");
		}else{
			$.ajax({
				type: 'POST',
				url: './../include/arch_ajax.php?page='+site,
				data: "quote_cont="+quote+"&quote_by="+quoteby,
				success: function(data){
					var msg = "<div class='alert alert-success'>";
					msg+= "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
					msg+= "<strong>QUOTE ADDED SUCCESSFULLY.</strong></div>";
					_('message').innerHTML  = msg;
					_('main-page').innerHTML = data ;
				}
			});
		}
	
	}
}

function deleteaction(site, id){
	if(site == "delquote"){
		if(confirm("ARE YOU SURE YOU WANT TO DELETE THIS QUOTE")){
			
			$.get('./../include/arch_ajax.php?page='+site+'&id='+id, function(data) {
				var msg = "<div class='alert alert-success'>";
					msg+= "<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>";
					msg+= "<strong>QUOTE DELETED SUCCESSFULLY.</strong></div>";
				_('message').innerHTML  = msg;
				_('main-page').innerHTML = data ;
			});
		}
	}
}

