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

jQuery(function($){
  $('.site-main > section').hide();
  $('.site-nav a').click(function () {
    $('.site-main > section').hide().filter(this.hash).fadeIn();
    $('.site-nav a').removeClass('active');
    $(this).addClass('active');
    if($('nav li.cast a').hasClass('active')){
      //$('.wrap').css('background-position', '0 0');
      $('.section-cast').scroll(function(){
        var sh = $(this).height();
        var dy = $(this).scrollTop();
        var rb = sh / 100;
        var rc = dy / rb;
        var pr = Math.round(rc);
        if( pr > 100 ) pr = 100;
        $('.wrap').css('background-position', '50% ' + (50+(pr / 2)) + '%');
        //$('.wrap').css('background-position', '0 ' + pr / 2 + '%');
      });
    }else{
      $('.wrap').css('background-position', '50% 50%');
    };
    if($('nav li.top a').hasClass('active')){
      $('.wrap').css('background-size', '125%');
    }else{
      $('.wrap').css('background-size', '100%');
    };
    return false;
  }).filter(':eq(0)').click();
});

// $(function(){
// $('.section-cast').jScrollPane();
// });

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
