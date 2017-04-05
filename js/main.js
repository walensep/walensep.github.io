function main() {
	var traduzir = '';
	var traduzido = '';
	
	$('#txtTraduzido').attr('readonly', true);
	
	$('#btnTraduzir').on('click', function() {
		traduzir = $('#txtTraduzir').val().toUpperCase() + " ";
		$('#txtTraduzir').val(traduzir);
		traduzido = traduzir.replace(/ACABOU/g,"ACOBOU").replace(/PALMEIRAS/g, "SEM MUNDIAL").replace(/CORINTHIANS/g,"GALINHADA").replace(/SANTOS/g,"VIÚVAS DO PELÉ").replace(/SÃO PAULO/g,"BAMBIS");
		traduzido = traduzido.replace(/EVANGÉLICO/g, "DOLLYCRENTE1").replace(/TESTEMUNHA DE JEOVÁ/g, "DOLLYCRENTE1").replace(/CRENTE/g, "DOLLYCRENTE1").replace(/MULHER/g,"MOLIER").replace(/HOMEM/g,"OMI").replace(/PARAÍSO/g,"DOLLYLÂNDIA");
		traduzido = traduzido.replace(/DORMIR/g, "DURMAR").replace(/ADOLESCENTE/g,"ADOLLYSCENTE1").replace(/LÉSBICA/g, "SAPATISTA").replace(/DISSE/g, "DIGOU").replace(/PAU/g,"GIROMBA").replace(/BUCETA/g, "DOLLYCETA").replace(/USE/g,"USEIE");
		traduzido = traduzido.replace(/FICAR/g, "FINCAR1").replace(/SEJA/g, "SEJE1").replace(/TENHA/g, "TENHE").replace(/FAZER/g, "FASSAR").replace(/JOVEM/g, "CATARRENTO1").replace(/POBRE/g, "PROBI").replace(/FDP/g, "DAPUTA").replace(/GRÁVIDA/g, "PRENHA").replace(/MOTORISTA/g, "DIRIGISTA");
		traduzido = traduzido.replace(/MOTOQUEIRO/g, "MOTOQUISTA").replace(/MOTOBOY/g, "MOTOQUISTA").replace(/WHATSAPP/g,"UATISAP").replace(/WHATS/g,"UATISAP").replace(/FIQUE/g,"FIQUEIE").replace(/TORÇA/g,"TORCEIE");
		traduzido = traduzido.replace(/MÃE\sSOLTEIRA/g, "DOLLYPOLTA").replace(/DROGADO/g, "ZÉ1 DROGUINHA").replace(/PEDREIRO/g, "PEDREIRISTA").replace();
		traduzido = traduzido.replace(/GORDO/g, "DOLLYFAT").replace(/GORDA/g, "DOLLYFAT").replace(/CACHORRO/g, "PULGUENTO1").replace(/GATO/g, "DOLLYGATO").replace(/SEXO/g, "CRUZO1");
		traduzido = traduzido.replace(/FILHO/g, "CATARRENTO1").replace(/CRIANÇA/g, "CATARRENTO1").replace(/NAMORADO/g, "DOLLYNALDO").replace(/NAMORADA/g, "DOLLYNETE1").replace(/AVÔ/g, "DOLLYVÔ1").replace(/AVÓ/g, "DOLLYVÓ1").replace(/PAI/g, "DOLLYPAI").replace(/MÃE/g, "DOLLYMAIN");
		traduzido = traduzido.replace(/CH/g,"X").replace(/LH/g, "LI").replace(/LIA/g,"LHA").replace(/Ç/g,"S").replace(/SS/g, "Ç").replace(/ÃE/g,"AIN").replace(/Ó/g,"OH").replace(/SE/g,"ÇE");
		traduzido = traduzido.replace(/ÃO/g,"AUM").replace(/O\s/g, "U ").replace(/E\s/g, "I ").replace(/Z\s/g, "S ").replace(/É\s/g, "EH ").replace(/M\s/g, "N ").replace(/L\s/g, "U ").replace(/GE/g, "JE").replace(/AR\s/g, "Á ").replace(/ÊS\s/g, "EIZ ").replace(/ÓS\s/g, "OIZ ");
		traduzido = traduzido.replace(/CU\s/g,"COOL ").replace(/CÚ\s/g,"COOL ").replace(/COCA/, "RATO");
		traduzido = traduzido.replace(/COMER/g,"COMAR").replace(/DIZER/g,"DIGAR").replace(/GAY/g, "BUMBUM GULOSO");
		traduzido = traduzido.replace(/ESCREVER/g, "ESCREVINHAR").replace(/VAGABUNDA/g, "GABUNDA").replace(/VOCÊ/g,"VUSSÊ").replace(/VC/g,"SUNSSÊ");
		traduzido = traduzido.replace(/O1/g,"O").replace(/Ó1/g, "Ó").replace(/Ô1/g, "Ô").replace(/É1/g, "É").replace(/E1/g,"E").replace(/AR1/g, "AR");
		$('#txtTraduzido').val(traduzido);	
	});
}

$(document).ready(main);
