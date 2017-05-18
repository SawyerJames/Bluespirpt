 $(function(){
         $(".div1").mouseover(function(){    
          $(".div2").hide();
          $(".div3").show();
          var pic1_w = $('.pic1').css("width");
          $(".div1").css({"width":pic1_w});
           $(".div3").css("width",pic1_w);
        });
        $(".div1").mouseleave(function(){
          $(".div2").show();
          $(".div3").hide();
          $(this).css({"width":"35%"})
        });

      })

       
       $(function(){
        $(".div1t").mouseover(function(){
          $(".div2t").hide();
          $(".div3t").show();
          var pic1_w = $('.pic1').css("width");
          $(".div1t").css({"width":pic1_w});
           $(".div3t").css("width",pic1_w);
        });
        $(".div1t").mouseleave(function(){
          $(".div2t").show();
          $(".div3t").hide();
          $(this).css({"width":"35%"})
        });

      })

 
        $(function(){
        $(".div1th").mouseover(function(){
          $(".div2th").hide();
          $(".div3th").show();
          var pic1_w = $('.pic1').css("width");
          $(".div1th").css({"width":pic1_w});
           $(".div3th").css("width",pic1_w);
        });
        $(".div1th").mouseleave(function(){
          $(".div2th").show();
          $(".div3th").hide();
          $(this).css({"width":"35%"})
        });

      })

        $(function(){
        $(".div1f").mouseover(function(){
          $(".div2f").hide();
          $(".div3f").show();
          var pic1_w = $('.pic1').css("width");
          $(".div1f").css({"width":pic1_w});
           $(".div3f").css("width",pic1_w);
        });
        $(".div1f").mouseleave(function(){
          $(".div2f").show();
          $(".div3f").hide();
          $(this).css({"width":"35%"})
        });

      })

       
     var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        slidesPerColumn: 2,
        paginationClickable: true,
        spaceBetween: 30
    });

// 数据雨
$(function() { 
var maxSize = 50; //数字最大的尺寸
var time =260; //时隔多长时间产生一个数字,值越小,数字越大
var flake;
//随机截取字符串
function rd(n,m){
    var c = m-n+1; 
    return Math.floor(Math.random() * c + n);
    }
var str1;
setInterval(function(){
var position=rd(2,5);
var p1=rd(4,8);
var str="011101111111011101110";
str1=str.substring(p1,position); 
//创建一个盒子,设置绝对定位,创建数字放进去
flake = $('<div class="rain"></div>').css('position', 'absolute').html(str1);
},time);

setInterval(function() { //设置定时器
        var dataRain = $(".dataRain"); 
        var width = $(document).width(); 
        var height = $(document).height(); 
        var startLeft = Math.random() * width; 
        var endLeft = Math.random() * width; 
        //var flakeSize = mianSize * Math.random(); //设置数字大小
        var flakeOpacity = 0.9 + Math.random() * 0.9; 
        var endFlakeOpacity = 0.01 + Math.random() * 0.1; 
        var durationTime = 10 * Math.random() + 10 * height; 
        flake.clone().appendTo(dataRain).css({
            'left': startLeft,
            //'font-size': flakeSize,设置数字随机大小
            'opacity': flakeOpacity,
            'color': "#fff",
            'top': "-20px"
        }).animate({
            'top': endLeft,
            'opacity': endFlakeOpacity,
            'top': "460px"/*设置消失的位置*/
        },
        durationTime,
        function() {
            flake.html(str1); 
            $(this).remove();
        });
    },
    time);
});



