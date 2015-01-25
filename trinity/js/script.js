$(document).ready(function() {
	$('.contents').fullpage({
		menu: '.nav',
		verticalCentered: false,
		anchors: ['intro', 'infromation', 'cast', 'access']
	});
	$.fn.fullpage.setAllowScrolling(false);
});

$('.intro').click(function(){$('.bg').animate({top:'0'},1000);});
$('.information').click(function(){$('.bg').animate({top:'-200'},1000);});
$('.cast').click(function(){$('.bg').animate({top:'-400'},1000);});
$('.access').click(function(){$('.bg').animate({top:'-600'},1000);});

$(document).ready(function(){
	$(".more_information").colorbox({inline:true, width:"90%", height:"90%;"});
	$(".box_close").click(function(){
		parent.$.fn.colorbox.close(); return false;
	});

	$("#click").click(function(){
		$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
		return false;
	});
});

