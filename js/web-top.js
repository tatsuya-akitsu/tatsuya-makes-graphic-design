var Intro = function() {
  
  var 
    textMaskAlpha,
    textMaskTitle,
    background,
    body,
    tl,
    svg,
    title,
    replay;
  
  var _init = function() {
    svg           = document.getElementById('svg');
    textMaskAlpha = document.getElementById('alpha');
    textMaskTitle = document.getElementById('title');
    background    = document.getElementById('background');
    body          = document.getElementsByTagName('body')[0];
    tl            = new TimelineLite({delay:1});
    title         = document.getElementById('siteTitle');
    replay         = document.getElementById('replay');
    
    _setVisible();
    _animateHero(); 
    _addEventHandlers();
  }
  
  var _addEventHandlers = function() {
    replay.addEventListener('click', _play, false);
  }
  
  var _setVisible = function() {
    TweenLite.set(".will-animate", {visibility: 'visible'});
  }
  
  var _animateHero = function() {   
    tl
      .to(svg, 0.6, { opacity: 0, scale: 1.5, transformOrigin: '50% 50%', ease:Power1.easeOut})
      .from(title, 0.6, { scale: 0.5, opacity: 0, transformOrigin: '50% 50%', ease:Back.easeOut}, 0);   
  }
  
  var _play = function() {
    tl.restart({delay:0.3});
  }
  
  return {
    init: _init
  }
}();

Intro.init();