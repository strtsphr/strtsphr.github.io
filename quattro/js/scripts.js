$(document).ready(function(){
  $(".more-info").colorbox({inline:true, width:"90%", height:"90%;"});
  $(".box-close").click(function(){
    parent.$.fn.colorbox.close(); return false;
  });

  $("#click").click(function(){
    $('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
    return false;
  });
});


WebFontConfig = {
  google: { families: [ 'Oswald:400,300,700:latin' , 'Open+Sans+Condensed:300:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

var wH = $(window).height();
$(function(){
  $('header').css('height',wH+'px');
});

// $(document).scroll(function() {
//   $(".bg-pc").css({
//     "background-position-y": (-$(this).scrollTop()/2.5)
//   })
// });

$(function(){
  $(window).scroll(function(){
    var y = jQuery(this).scrollTop();
    $('.bg-pc').css('background-position', '0 ' + parseInt( y / -4 ) + 'px');
  });
});