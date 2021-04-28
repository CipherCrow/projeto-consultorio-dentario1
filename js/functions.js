$(function(){
	$('.navegacao a').hover(function(){
		$('.navegacao li').removeClass('selected');
		$(this).parent().addClass('selected');
	})
	$('.navegacao a').click(function(){
		setTimeout(function(){
		$('.navegacao li').removeClass('selected');
		$('.invisa').addClass('selected');

		},3000);
	})
})