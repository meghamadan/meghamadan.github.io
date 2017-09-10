$('#dev').hover(
  function(){
  	   $("#hovergif").attr("src","/static/img/dev.gif");
  	   $("#dev").css("background",'#18602f');
   }, 
   function() { 
       $("#hovergif").attr("src","/static/img/profile.png");
       $("#dev").css("background",'');
});

$('#atl').hover(
  function(){
  	   $("#hovergif").attr("src","/static/img/atl.gif");
  	   $("#atl").css("background",'#A6192E');
   }, 
   function() { 
       $("#hovergif").attr("src","/static/img/profile.png");
       $("#atl").css("background",'');
});

$('#nyu').hover(
  function(){
  	   $("#hovergif").attr("src","/static/img/nyu.gif");
  	   $("#nyu").css("background",'#57078E');
   }, 
   function() { 
       $("#hovergif").attr("src","/static/img/profile.png");
       $("#nyu").css("background",'');
});

$('#india').hover(
  function(){
  	   $("#hovergif").attr("src","/static/img/harman.gif");
  	   $("#india").css("background",'#2255A4');
  	   $("#india").css("color", '#F88E20');
   }, 
   function() { 
       $("#hovergif").attr("src","/static/img/profile.png");
       $("#india").css("background",'');
       $("#india").css("color", '');
});

$('#us').hover(
  function(){
  	   $("#hovergif").attr("src","/static/img/tobin.gif");
  	   $("#us").css("background",'#d42729');
  	   $("#us").css("color", '#0157ae');
   }, 
   function() { 
       $("#hovergif").attr("src","/static/img/profile.png");
       $("#us").css("background",'');
       $("#us").css("color", '');
});

$('#cosmos').hover(
  function(){
  	   $("#hovergif").attr("src","/static/img/cosmos.gif");
  	   $("#cosmos").css("background",'#F13E80');
   }, 
   function() { 
       $("#hovergif").attr("src","/static/img/profile.png");
       $("#cosmos").css("background",'');
});

$('#graphics').hover(
  function(){
  	   $("#graphicsinfo").css("display","block")
  	   $("#graphicsimg").css("filter","none")
  	   $("#graphicsimg").css("transform","scale(1.1)")
  	   $("#graphicsimg").css("-webkit-transform","scale(1.1)")
   }, 
   function() { 
       $("#graphicsinfo").css("display","none")
       $("#graphicsimg").css("filter","grayscale(100%)")
       $("#graphicsimg").css("transform","scale(1.0)")
  	   $("#graphicsimg").css("-webkit-transform","scale(1.0)")
});

$('#informed').hover(
  function(){
  	   $("#informedinfo").css("display","block")
  	   $("#informedimg").css("filter","none")
  	   $("#informedimg").css("transform","scale(1.1)")
  	   $("#informedimg").css("-webkit-transform","scale(1.1)")
   }, 
   function() { 
       $("#informedinfo").css("display","none")
       $("#informedimg").css("filter","grayscale(100%)")
       $("#informedimg").css("transform","scale(1.0)")
  	   $("#informedimg").css("-webkit-transform","scale(1.0)")
});

$('#ev').hover(
  function(){
  	   $("#evinfo").css("display","block")
  	   $("#evimg").css("filter","none")
  	   $("#evimg").css("transform","scale(1.1)")
  	   $("#evimg").css("-webkit-transform","scale(1.1)")
   }, 
   function() { 
       $("#evinfo").css("display","none")
       $("#evimg").css("filter","grayscale(100%)")
       $("#evimg").css("transform","scale(1.0)")
  	   $("#evimg").css("-webkit-transform","scale(1.0)")

});