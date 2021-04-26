

(function(){
  var g0=vPlayer,g1,g2,g3,g4,g5,g6,b0,b1,b2,b3;
  g1=function(b){return document.getElementById(b);}
  g2=g1('v_main'); g3=g1('v_title');
  g0.i18n= null;
  g0.items=null;

  b1=function(){
    g4=g0.i18n;
    g3.innerHTML='ready';
    g0.items.forEach(function(b){
      var x0,x1,x2;
      x0 = document.createElement('DIV');
      x0.className='v-card';
      x1 = document.createElement('DIV');
      x1.className='vc-title';
      x1.innerHTML=g4['c'+b.c];
      x2 = document.createElement('DIV');
      x2.className='vc-content';
      x0.appendChild(x1); x0.appendChild(x2);
      b.v.forEach(function(c){
        x1=document.createElement('BUTTON');
        x1.type='button';
        x1.className='vc-button';
        x1.dataset.voice=c;
        x1.innerHTML=g4['v'+c];
        x1.addEventListener('click',b3);
        x2.appendChild(x1);
      });
      g2.appendChild(x0);
    });
    b0=function(){
      if(g6) g6.style.setProperty('--progress',Math.round(g5.currentTime*10000/g5.duration)/100+'%');
      window.requestAnimationFrame(b0);
    };
  };
  b3=function(b){
    g6=b.target;
    g3.innerHTML=g6.innerHTML;
    g5.src='https://voice.koinoyamai.ml/voice/'+g6.dataset.voice;
    //g5.play();
  };

  g5=document.createElement('AUDIO');
  g5.preload='metadata';
  g5.crossOrigin='anonymous';
  g5.autoplay = true;
  g5.loop = false;

  b0=function(){
    if(g0.items&&g0.i18n) b1();
    window.requestAnimationFrame(b0);
  };
  window.requestAnimationFrame(b0);
})();

