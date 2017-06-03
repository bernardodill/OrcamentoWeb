

	var nomeItem;
	var quantidade=1;
	var precoUnitario;
	var numLinhas=0;
	var total=0
	
	$(".campo-nome").on('input', function(){
		nomeItem = $(".campo-nome").val();
	});
		
	$('.campo-quantidade').on('input', function(){
		quantidade = $(".campo-quantidade").val();
	});

	$('.campo-precoUnitario').mask('000.000,00', {reverse:true});
	
	$('.campo-precoUnitario').on('input', function(){
		precoUnitario = $('.campo-precoUnitario').val();
		//console.log(precoUnitario);
	});
	
	function pontoVirgula(){
		precoUnitario = precoUnitario.replace('.','');
		
		precoUnitario = precoUnitario.replace(',','.');
	}


	function ShowHideList(){
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

	function formataNumero(valor){
		if(valor.toString().indexOf(".") == -1){
			return valor = parseFloat(valor);
		}
		return valor;
	}


	function adicionaItem(){
		$("form.lista table tbody").append(
			"<tr>"+
				"<td><input type='text' name='fld-item[]' readonly class='input-lista' value='"+nomeItem+"'></td>"+
				"<td><input type='text' name='fld-quantidade[]' readonly class='input-lista' value='"+quantidade+"'></td>"+
				"<td><input type='text' name='fld-precoUnitario[]' readonly class='input-lista' value='"+formataNumero(precoUnitario)+"'></td>"+
				"<td><input type='text' name='fld-subTotal[]' readonly class='input-lista subTotal' value='"+formataNumero(calculaSubTotal()).toFixed(2)+"'></td>"+
				"<td class='r'><a href='javascript:void(0)' class='remove'>Excluir</a></td>"+
			"</tr>"
		);
		resetaCampos();
		atualizaTotal();
	}


	function resetaCampos(){
		$('.campo-nome').val("");
		nomeItem="";
		$(".campo-quantidade").val(1);
		quantidade=1;
		$(".campo-precoUnitario").val("");
		precoUnitario=0;
	}

	$(document).on("click", ".remove", function(){
		
		$(this).parent().parent().remove();
		numLinhas--;
		if(numLinhas == 0){
			ShowHideList();
		}
		atualizaTotal();
	});
	
	$(".add-button").on("click", function(){
		
		if(nomeItem != "" && nomeItem != undefined  && quantidade>=1 && precoUnitario!="" && precoUnitario != undefined){
			
			if($("form.lista").hasClass('hidden')){
				ShowHideList();	
			};
			pontoVirgula();
			adicionaItem();
			numLinhas++;
		}
	});

	function atualizaTotal(){
		total=0;
		$("table tbody .subTotal").each(function(){
			total += parseFloat(this.value);

		});
		$(".valor-total").val("Total: R$ "+total.toFixed(2));
	}


	
	










