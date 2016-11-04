var ua = navigator.userAgent.toLowerCase();
if(ua.indexOf('iphone')!==-1 || ua.indexOf('android')!==-1){
  location.href = 'm/index.html';
}

var btn =  document.getElementById('position-gift');
var bg = document.getElementById('bg-body');
var body = document.getElementById('body');
var content = document.getElementById('alert-body');
var close = document.getElementById('close');
if (btn) {
  btn.onclick=function(){
    bg.style.display = 'block';
    content.style.display = 'block';
    body.style.overflow = 'hidden';
  };
}
if (close) {
  close.onclick =function(){
    body.style.overflow = 'auto';
    bg.style.display = 'none';
    content.style.display = 'none';
  };
}
if (window.WOW) {
  new WOW().init();
}
