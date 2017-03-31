function main() {
	var traduzir = '';
	var traduzido = '';
	
	$('#txtTraduzido').attr('readonly', true);
	
	$('#txtTraduzir').keyup(function(){
    		this.value = this.value.toUpperCase();
	});
	
	$('#btnTraduzir').on('click', function() {
		traduzir = $('#txtTraduzir').val();
		traduzido = traduzir.replace(/ACABOU/g,"ACOBOU").replace(/PALMEIRAS/g, "SEM MUNDIAL").replace(/CORINTHIANS/g,"GALINHADA").replace(/SANTOS/g,"VIÚVAS DO PELÉ").replace(/SÃO PAULO/g,"BAMBIS");
		traduzido = traduzido.replace(/NAMORADO/g, "DOLLYNALDO").replace(/NAMORADA/g, "DOLLYNETE");
		traduzido = traduzido.replace(/LH/g, "LI").replace(/Ç/g,"S").replace(/SS/g, "Ç").replace(/ÃO/g,"AUM").replace(/ÃE/g,"AIE").replace(/Ó/g,"OH");
		$('#txtTraduzido').val(traduzido);	
	});
}

$(document).ready(main);
