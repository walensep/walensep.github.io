function main() {
	var traduzir = '';
	var traduzido = '';
	
	$('#txtTraduzido').attr('readonly', true);
	
	$('#btnTraduzir').on('click', function() {
		traduzir = $('#txtTraduzir').val().toUpperCase() + " ";
		$('#txtTraduzir').val(traduzir);
		traduzido = traduzir.replace(/ACABOU/g,"ACOBOU").replace(/PALMEIRAS/g, "SEM MUNDIAL").replace(/CORINTHIANS/g,"GALINHADA").replace(/SANTOS/g,"VIÚVAS DO PELÉ").replace(/SÃO PAULO/g,"BAMBIS");
		traduzido = traduzido.replace(/LÉSBICA/g, "SAPATISTA").replace(/PAU/g,"GIROMBA").replace(/BUCETA/g, "DOLLYCETA");
		traduzido = traduzido.replace(/MÃE\sSOLTEIRA/g, "DOLLYPOLTA").replace(/DROGADO/g, "ZÉ1 DROGUINHA").replace(/PEDREIRO/g, "PEDREIRISTA").replace();
		traduzido = traduzido.replace(/GORDO/g, "DOLLYFAT").replace(/GORDA/g, "DOLLYFAT").replace(/CACHORRO/g, "PULGUENTO1").replace(/GATO/g, "DOLLYGATO").replace(/SEXO/g, "CRUZO1");
		traduzido = traduzido.replace(/FILHO/g, "CATARRENTO").replace(/CRIANÇA/g, "CATARRENTO").replace(/NAMORADO/g, "DOLLYNALDO").replace(/NAMORADA/g, "DOLLYNETE").replace(/AVÔ/g, "DOLLYVOH").replace(/AVÓ/g, "DOLLYAVOH").replace(/PAI/g, "DOLLYPAE").replace(/MÃE/g, "DOLLYMAIN");
		traduzido = traduzido.replace(/CH/g,"X").replace(/LH/g, "LI").replace(/LIA/g,"LHA").replace(/Ç/g,"S").replace(/SS/g, "Ç").replace(/ÃE/g,"AIN").replace(/Ó/g,"OH");
		traduzido = traduzido.replace(/ÃO/g,"AUM").replace(/O\s/g, "U ").replace(/E\s/g, "I ").replace(/Z\s/g, "S ").replace(/É\s/g, "EH ").replace(/M\s/g, "N ").replace(/L\s/g, "U ").replace(/GE/g, "JE").replace(/AR\s/g, "Á ").replace(/ÊS\s/g, "EIZ ").replace(/ÓS\s/g, "OIZ ");
		traduzido = traduzido.replace(/CU\s/g,"COOL ").replace(/COCA/, "RATO");
		traduzido = traduzido.replace(/COMER/g,"COMAR").replace(/DIZER/g,"DIGAR").replace(/DISSE/g, "DIGOU").replace(/GAY/g, "BUMBUM GULOSO");
		traduzido = traduzido.replace(/ESCREVER/g, "ESCREVINHAR").replace(/VAGABUNDA/g, "GABUNDA");
		traduzido = traduzido.replace(/O1/g,"O").replace(/É1/g, "É");
		$('#txtTraduzido').val(traduzido);	
	});
}

$(document).ready(main);
