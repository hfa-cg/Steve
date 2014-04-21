function beatb() {
  $(".b .yellow_block").animate({height:'70px'},120,function(){
    $(".b .yellow_block").animate({height:'10px'},400);
  });
  $(".b .green_block").animate({height:'50px'},140,function(){
    $(".b .green_block").animate({height:'10px'},450,function(){
      beatb();
    });
  });      
};

function beata() {
  $(".a .green_block").animate({height:'50px'},140,function(){
    $(".a .green_block").animate({height:'20px'},450,function(){
      beata();
    });
  });      
};

function beatc() {
  $(".c .red_block").animate({height:'90px'},100,function(){
    $(".c .red_block").animate({height:'10px'},350);
  });
  $(".c .yellow_block").animate({height:'80px'},120,function(){
    $(".c .yellow_block").animate({height:'10px'},400);
  });
  $(".c .green_block").animate({height:'50px'},140,function(){
    $(".c .green_block").animate({height:'20px'},450,function(){
      beatc();
    });
  });      
};

function beatd() {
  $(".d .green_block").animate({height:'50px'},140,function(){
    $(".d .green_block").animate({height:'10px'},450,function(){
      beatd();
    });
  });      
};

function beate() {
  $(".e .yellow_block").animate({height:'70px'},120,function(){
    $(".e .yellow_block").animate({height:'10px'},400);
  });
  $(".e .green_block").animate({height:'50px'},140,function(){
    $(".e .green_block").animate({height:'10px'},450,function(){
      beate();
    });
  });      
};

function beatf() {
  $(".f .green_block").animate({height:'50px'},140,function(){
    $(".f .green_block").animate({height:'20px'},450,function(){
      beatf();
    });
  });      
};

function beatg() {
  $(".g .red_block").animate({height:'90px'},100,function(){
    $(".g .red_block").animate({height:'10px'},350);
  });
  $(".g .yellow_block").animate({height:'80px'},120,function(){
    $(".g .yellow_block").animate({height:'10px'},400);
  });
  $(".g .green_block").animate({height:'50px'},140,function(){
    $(".g .green_block").animate({height:'20px'},450,function(){
      beatg();
    });
  });      
};

function beath() {
  $(".h .green_block").animate({height:'50px'},140,function(){
    $(".h .green_block").animate({height:'10px'},450,function(){
      beath();
    });
  });      
};