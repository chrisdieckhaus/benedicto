
$(document).ready(function(){
    $("#button-div").on('mouseenter',function(){
      $(this).addClass("outer-hover");
    });
    
    $("#button-div").on('mouseleave',function(){
      $(this).removeClass("outer-hover");
      $(this).addClass("outer");
    });
    
    $(".outer").on('click',function(){
        console.log("Click");
        $("#prayer").slideToggle();
    });
    
    
    });