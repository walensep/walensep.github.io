function main() {
	var traduzir = '';
	var traduzido = '';
	
	$('#txtTraduzido').attr('readonly', true);
	
	$('#btnTraduzir').on('click', function() {
		traduzir = $('#txtTraduzir').val().toUpperCase() + " ";
		$('#txtTraduzir').val(traduzir);
		traduzido = traduzir.replace(/ACABOU/g,"ACOBOU").replace(/PALMEIRAS/g, "SEM MUNDIAL").replace(/CORINTHIANS/g,"GALINHADA").replace(/SANTOS/g,"VIÚVAS DO PELÉ").replace(/SÃO PAULO/g,"BAMBIS");
		traduzido = traduzido.replace(/O\s/g, "U ").replace(/E\s/g, "I ").replace(/Z\s/g, "S ").replace(/É\s/g, "EH ").replace(/M\s/g, "N ").replace(/L\s/g, "U ").replace(/GE/g, "JE").replace(/AR\s/g, "Á ");
		traduzido = traduzido.replace(/FILHO/g, "CATARRENTO").replace(/CRIANÇA/g, "CATARRENTO").replace(/NAMORADO/g, "DOLLYNALDO").replace(/NAMORADA/g, "DOLLYNETE").replace(/AVÔ/g, "DOLLYVO").replace(/AVÓ/g, "DOLLYAVO").replace(/PAI/g, "DOLLYPAE").replace(/MÃE/g, "DOLLYMAIN");
		traduzido = traduzido.replace(/LH/g, "LI").replace(/LIA/g,"LHA").replace(/Ç/g,"S").replace(/SS/g, "Ç").replace(/ÃO/g,"AUM").replace(/ÃE/g,"AIN").replace(/Ó/g,"OH");
		$('#txtTraduzido').val(traduzido);	
	});
}

$(document).ready(main);
