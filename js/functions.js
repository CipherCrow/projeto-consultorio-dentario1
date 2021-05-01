$(function(){
	//menu mobile
	$('.mobile i').click(function(){
		$('.mobile ul').slideToggle();
	});
	//menu hover desktop
	$('.desktop a').hover(function(){
		$('.desktop li').removeClass('selected');
		$(this).parent().addClass('selected');
	})
	$('.desktop a').click(function(){
		setTimeout(function(){
		$('.desktop li').removeClass('selected');
		$('.invisa').addClass('selected');

		},3000);
	})
})