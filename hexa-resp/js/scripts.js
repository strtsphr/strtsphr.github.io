$(function() {
  var h = $(window).height();
  $('.loader-bg ,.loader').height(h).css('display','block');
  $('.wrap').css('display','none');
});

$(window).load(function () { //全ての読み込みが完了したら実行
  $('.loader-bg').delay(900).fadeOut(800);
  $('.loader').delay(600).fadeOut(300);
  $('.wrap').css('display', 'block');
});

$(function(){
  setTimeout('stopload()',10000);
});

function stopload(){
  $('.wrap').css('display','block');
  $('.loader-bg').delay(900).fadeOut(800);
  $('.loader').delay(600).fadeOut(300);
}

$(function() {
  var wH = $(window).height();
  $('.section-top .heading-logo').css('height', wH + 'px');
  $('.bg').css('height', wH + 'px');
});

WebFontConfig = {
  google: { families: [ 'Oswald:400,300:latin', 'Montserrat:400,700:latin', 'Ubuntu:400,700:latin' ] }
};
(function() {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();
