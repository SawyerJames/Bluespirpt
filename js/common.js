 // 右下角悬浮
        $('.login').mouseover(function(){
      $('.special_ul').css({"display":"block"});
    });
     $('.login').mouseleave(function(){
      $('.special_ul').css({"display":"none"});
    });
      $('.special_ul').mouseover(function(){
      $('.special_ul').css({"display":"block"});
      
         // $('.login').attr('src').toString().slice(0,-4)+"1.png";
        
    });
      $('.special_ul').mouseleave(function(){
      $('.special_ul').css({"display":"none"});
    });


      $(".login").mouseover(function(){
        $(this).css({"cursor":"pointer"});
      $(this).css({"cursor":"hand"});
        $(this).attr("src",function(){
          return $(this).attr('src').toString().slice(0,-4)+"1.png";
        })
      });
      $(".login").mouseleave(function(){
        $(this).attr("src",function(){
          return $(this).attr('src').toString().slice(0,-5)+".png";
        })
      });


       $(".login_a").mouseover(function(){
        $(this).css({"cursor":"pointer"});
      $(this).css({"cursor":"hand"});
        $(this).attr("src",function(){
          return $(this).attr('src').toString().slice(0,-4)+"1.png";
        })
      });

       $(".login_a").mouseleave(function(){
        $(this).attr("src",function(){
          return $(this).attr('src').toString().slice(0,-5)+".png";
        })
      });
         $(".login_a").click(function(){
        
        $('#MEIQIA-BTN-HOLDER').css("display","none");
        $('#MEIQIA-IFRAME').css("display","block");
        
        $('#MEIQIA-BTN-HOLDER').css("z-index","-1");
        $('#MEIQIA-PANEL-HOLDER').css("visibility","visible");
        $('#MEIQIA-PANEL-HOLDER').css("z-index","2147483647");
        
      });
      
   

    // 回顶部
    $(".login_top").mouseover(function(){
      $(this).css({"cursor":"pointer"});
      $(this).css({"cursor":"hand"});
        $(this).attr("src",function(){
          return $(this).attr('src').toString().slice(0,-4)+"1.png";
        })
      });
      $(".login_top").mouseleave(function(){
        $(this).attr("src",function(){
          return $(this).attr('src').toString().slice(0,-5)+".png";
        })
      });

       $(".login_common").mouseover(function(){
        $(this).attr("src",function(){
          return $(this).attr('src').toString().slice(0,-4)+"1.png";
        })
      });
      $(".login_common").mouseleave(function(){
        $(this).attr("src",function(){
          return $(this).attr('src').toString().slice(0,-5)+".png";
        })
      });
   