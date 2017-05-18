function Partner(){
	this.getPromise = function(){	 
	   var promise = $.ajax({
		    url:"/partner/queryPartnerList",		    
		    dataType:'json',		    
		    type:'POST'		    
		   
		 });
		 return promise;
	}
	this.loop=function(){
		var This=this;
		var promise=This.getPromise();
		// $('.swiper-wrapper').empty();  是否先清除数据，自行决定
		promise.done(function(res){
			$.each(res,function(index,item){                 
              var result=json[index].result;
              var rows=result.rows;
              $.each(rows,function(i,n){
                  var url=rows[i].url;
                  var logo=rows[i].logo;
                  var title=rows[i].title;
                  This.AddLoop(url,logo,title);
              })
           
            });

		})
	}
	this.AddLoop=function(url,logo,title){
		var This=this;
		var viewstr="";
		viewstr=  '<li class="goodlist">'+
                    '<a href="javascript:void(0)" target="_blank" style="overflow:hidden; display:block; float:left;">'+
                        '<img src="images/advantage.png" class="pics" />'+
                            '<div class="mask">'+
                                '<span>我是标题</span>'+
                            '</div>'+
                     '</a>'+
                  '</li>'
		var newob=$(viewstr);
		$('.piclist .mainlist').append(newob);
	}
}

