

(function(){
  var g0=vPlayer,g1,g2,g3,g4,g5,g6,g7,g8,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,n0,n1,n2,n3;
  g1=function(b){return document.getElementById(b);}
  g2=g1('v_list'); g3=g1('v_title');
  n0=g1('v_stop'); n1=g1('v_loop'); n2=g1('v_favor'); n3=g1('v_play');
  g0.loop=!1;
  g0.sel=!1;
  g0.list=[];
  g0.idx=0;
  n1.classList.add('vp-off');

  b1=function(){
    b0=function(b){var c=document.createElement('DIV');c.className=b;return c;}
    g4=g0.i18n;
    b5('t101');

    g0.items.forEach(function(b){
      var x0,x1,x2;
      x0=b0('v-card');
      x1=b0('vc-title');
      x1.innerHTML=g4['c'+b.c];
      x0.appendChild(x1);
      x2=b0('vc-content');
      b.v.forEach(function(c){
        x1=document.createElement('BUTTON');
        x1.type='button';
        x1.className='vc-button';
        x1.dataset.voice=c;
        x1.innerHTML='<span>'+g4['v'+c]+'</span>';
        x1.addEventListener('click',b2);
        x2.appendChild(x1);
      });
      x0.appendChild(x2);
      g2.appendChild(x0);
    });

    Array.prototype.forEach.call(document.getElementsByClassName('vp-button'),(function(b){
      if(b.dataset.i18n)b.title=g4['t'+b.dataset.i18n];
    }));
    b3();
  };
  b2=function(b){
    var c=b.currentTarget,d;
    if(g0.sel){
      d=g0.list.indexOf(c);
      if(c.classList.toggle('vc-on'))
      {if(d<0)g0.list.push(c);}
      else
      {if(d>=0)g0.list.splice(d,1);}
    }
    else{
      b8(c);
    }
  };
  b3=function(){
    if(g6) g6.style.setProperty('--progress',Math.round(g5.currentTime*10000/g5.duration)/100+'%');
    if(g7&&g8<Date.now()) {g3.innerHTML=g7;g7=0;}
    window.requestAnimationFrame(b3);
  };
  b4=function(){
    var c=g0.list, d=g0.idx;
    if(c.length){
      if(d>=c.length) d=0;
      g0.idx=d+1;
      b8(c[d]);
    }
  };
  b7=function(){
    var b=!g6&&(g0.sel||g0.list.length);
    n0.style.display=b?'none':'';
    n3.style.display=b?'':'none';
  };
  b8=function(b){
    b9();
    g6=b;
    b5('v'+g6.dataset.voice);
    g5.src='https://voice.koinoyamai.ml/voice/'+g6.dataset.voice;
    b7();
  };
  b9=function(){
    if(g6){
      g6.style.removeProperty('--progress');
      g6=0;
      b5(g0.sel?'t104':'t101');
      g5.src='data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAVFYAAFRWAAABAAgAZGF0YQAAAAA=';
      b7();
    }
  };

  g5=document.createElement('AUDIO');
  g5.preload='metadata';
  g5.crossOrigin='anonymous';
  g5.autoplay=true;
  g5.loop=false;
  g5.addEventListener('ended',function(b){
    if(g6){
      var c=g0.list, d=g0.idx;
      if(g0.loop){
        if(c.length) b4();
        else g5.play();
      }
      else {
        if(g0.idx<g0.list.length) b4();
        else b9();
      }
    }
  });

  b5=function(b){
    if(g7) g7=g4[b];
    else g3.innerHTML=g4[b];
  };
  b6=function(b){
    if(!g7) g7=g3.innerHTML;
    g8=Date.now()+1500;
    g3.innerHTML=g4[b];
  };
  n0.addEventListener('click',function(b){
    b9();
  });
  n1.addEventListener('click',function(b){
    g0.loop=!n1.classList.toggle('vp-off');
    b6(g0.loop?'t102':'t103');
  });
  n2.addEventListener('click',function(b){
    g0.sel=n2.classList.toggle('vp-on');
    b7();
    if(!g6) b5(g0.sel?'t104':'t101');
    else if(g0.sel) b6('t104');
  });
  n3.addEventListener('click',function(b){
    b4();
  });

  b0=function(){
    if(g0.items&&g0.i18n) b1();
    else window.requestAnimationFrame(b0);
  };
  b0();
  b7();
})();

