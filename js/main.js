function main() {
	var traduzir = '';
	var traduzido = '';
	
	$('#txtTraduzido').attr('readonly', true);
	
	$('#btnTraduzir').on('click', function() {
		traduzir = $('#txtTraduzir').val().toUpperCase() + " ";
		$('#txtTraduzir').val(traduzir);
		traduzido = traduzir.replace(/ACABOU/g,"ACOBOU").replace(/PALMEIRAS/g, "SEM MUNDIAL").replace(/CORINTHIANS/g,"GALINHADA").replace(/SANTOS/g,"VIÚVAS DO PELÉ").replace(/SÃO PAULO/g,"BAMBIS");
		traduzido = traduzido.replace(/GORDO/g, "DOLLYFAT").replace(/GORDA/g, "DOLLYFAT").replace(/CACHORRO/g, "DOLLYDOG").replace(/GATO/g, "DOLLYGATO");
		traduzido = traduzido.replace(/CH/g,"X").replace(/LH/g, "LI").replace(/LIA/g,"LHA").replace(/Ç/g,"S").replace(/SS/g, "Ç").replace(/ÃE/g,"AIN").replace(/Ó/g,"OH");
		traduzido = traduzido.replace(/ÃO/g,"AUM").replace(/O\s/g, "U ").replace(/E\s/g, "I ").replace(/Z\s/g, "S ").replace(/É\s/g, "EH ").replace(/M\s/g, "N ").replace(/L\s/g, "U ").replace(/GE/g, "JE").replace(/AR\s/g, "Á ").replace(/ÊS\s/g, "EIZ ").replace(/ÓS\s/g, "OIZ ");
		traduzido = traduzido.replace(/FILHO/g, "CATARRENTO").replace(/CRIANÇA/g, "CATARRENTO").replace(/NAMORADO/g, "DOLLYNALDO").replace(/NAMORADA/g, "DOLLYNETE").replace(/AVÔ/g, "DOLLYVO").replace(/AVÓ/g, "DOLLYAVO").replace(/PAI/g, "DOLLYPAE").replace(/MÃE/g, "DOLLYMAIN");
		$('#txtTraduzido').val(traduzido);	
	});
}

$(document).ready(main);
