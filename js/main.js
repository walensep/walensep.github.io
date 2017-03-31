function main() {
	var traduzir = '';
	var traduzido = '';
	
	$('#txtTraduzido').attr('readonly', true);
	
	$('#btnTraduzir').on('click', function() {
		traduzir = $('#txtTraduzir').val();
		traduzido = traduzir.replace(/lh/g, "li").replace(/ç/g,"s").replace(/ss/g, "ç").replace(/ão/g,"aum").replace(/ãe/g,"aie").replace("ó","oh");
		$('#txtTraduzido').val(traduzido);	
	});
}

$(document).ready(main);
