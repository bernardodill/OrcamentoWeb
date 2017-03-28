

	var nomeItem;
	var quantidade=1;
	var precoUnitario;


	
	$(".campo-nome").on('input', function(){
		nomeItem = $(".campo-nome").val();
	});
		

	
	$('.campo-quantidade').on('input', function(){
		quantidade = $(".campo-quantidade").unmask();
		
	});

	 
	$('.campo-precoUnitario').mask('000.000.000.000.000,00', {reverse:true});
	
	$('.campo-precoUnitario').on('input', function(){
		precoUnitario = $(".campo-precoUnitario").val();
	});
	

	function iniciaLista(){
		if($(".lista").hasClass("hidden")){
			$(".lista").removeClass("hidden");
			$(".lista").show();
		} else{
			$(".lista").hide();
			$(".lista").addClass("hidden");
		}
	}

	function calculaSubTotal(){
		return quantidade * precoUnitario;
	}


	function adicionaItem(){
		$("form.lista table tbody").append(
			"<tr>"+
				"<td><input type='text' readonly class='input-lista' value='"+nomeItem+"'></td>"+
				"<td><input type='text' readonly class='input-lista' value='"+quantidade+"'></td>"+
				"<td><input type='text' readonly class='input-lista' value='"+precoUnitario+"'></td>"+
				"<td><input type='text' readonly class='input-lista' value='"+calculaSubTotal().toFixed(2)+"'></td>"+
			"</tr>"
		);
			
		
	}

	$(".add-button").on("click", function(){
		if(nomeItem != "" && nomeItem != undefined  && quantidade>=1 && precoUnitario!="" && precoUnitario != undefined){
			
			if($("form.lista").hasClass('hidden')){
				iniciaLista();	
			};
			
			adicionaItem();
		}
	});

	


	









