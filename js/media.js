$(function(){
	tabview(1);
	hotview(2,0);
	// 搜索时
	$('#search').on('click',function(){
		var key=$("input[name='search']").val();
		if(key){

			$.ajax({
				type: 'POST',
				url: '/news/queryNewsList',
				data: {
					key:key
				},
				dataType: 'json',
				success: function (data) {
					 $('.information_left').empty();   //清空里面的所有内容
                     var html = ''; 
                     if(data.trim()!=""&&date!=null){
                     	$.each(data, function(index, item){
                     		var result=date[index].result;
				            var rows=result.rows;
				            $.each(rows,function(i,n){
			              	// 媒体id
			                  var id=rows[i].id;
			                // 媒体类型
			                  var ifType=rows[i].ifType;
			                // 标题
			                  var title=rows[i].title;
			                // 副标题
			                  var lititleTitle=rows[i].lititleTitle;
			                // 图片地址
			                  var thumbnailUrl=rows[i].thumbnailUrl;
			                // 添加时间
			                  var addTime=rows[i].addTime;
			                // 概要
			                  var synopsis=rows[i].synopsis;
			                // 内容
			                  var content=rows[i].content;
                            html +='<li>'+
				                    '<div class="imgContent">'+
				                     ' <a href="details.html"><img src='+thumbnailUrl+' alt="新闻"></a>'+
				                    '</div>'+
				                    '<div class="txtContent">'+
				                     ' <h5>'+title+'</h5>'+
				                      '<span>'+content+'</span>'+
				                    '</div>'+
				                    '<div class="dateContent">'+
				                      '<span>'+md+'</span>'+
				                      '<span>'+year+'</span>'+
				                      '<a href='+details.html+'></a>'+
				                   '</div>'+
				                '</li>';
							})

                         });
                     }else{
                     	console.logo();
                     }                         
                     $('.information_left').html(html);
				}				
			});
		}
	});
	// 点击时
	$('.tab span').on('click',function(){
		if($(this).index()>-1){
			var iftype=$(this).index()+1;
			tabview(iftype);
		}	
	});
	// 左边资讯
	function tabview(value){
		//记录数
		var recordnum=0;
		$.ajax({
				type: 'POST',
				url: '/news/queryNewsList',
				data: {
					ifType:value					
				},
				dataType: 'json',
				success: function (data) {
					 $('.information_left').empty();   //清空里面的所有内容
                     var html = ''; 
                     if(data.trim()!=""&&date!=null){
                     	$.each(data, function(index, item){
                     		var result=date[index].result;
				            var rows=result.rows;

				            $.each(rows,function(i,n){
			              	// 媒体id
			                  var id=rows[i].id;
			                // 媒体类型
			                  var ifType=rows[i].ifType;
			                // 标题
			                  var title=rows[i].title;
			                // 副标题
			                  var lititleTitle=rows[i].lititleTitle;
			                // 图片地址
			                  var thumbnailUrl=rows[i].thumbnailUrl;
			                // 添加时间
			                  var addTime=rows[i].addTime;
			                // 获取年份
			                var str=addTime.split("-"); 
			                var year=strArray[0];
			                // 获取月日
			                var md=strArray[1]+'-'+strArray[2];
			                // 概要
			                  var synopsis=rows[i].synopsis;
			                // 内容
			                  var content=rows[i].content;
                            html +='<li>'+
				                    '<div class="imgContent">'+
				                     ' <a href="details.html"><img src='+thumbnailUrl+' alt="新闻"></a>'+
				                    '</div>'+
				                    '<div class="txtContent">'+
				                     ' <a href="details.html"><h5>'+title+'</h5></a>'+
				                      '<span>'+content+'</span>'+
				                    '</div>'+
				                    '<div class="dateContent">'+
				                      '<span>'+md+'</span>'+
				                      '<span>'+year+'</span>'+
				                      '<a href="details.html"></a>'+
				                   '</div>'+
				                '</li>';
							}) 
                         });
                     }else{
                     	console.logo();
                     }                         
                     $('.information_left').html(html);
				}				
			});
	};
	// 右边资讯
	function hotview(value1,value2){
		$.ajax({
				type: 'POST',
				url: '/news/queryNewsList',
				data: {
					ifType:value1,	
					idsType:value2				
				},
				dataType: 'json',
				success: function (data) {
					 $('.information_left').empty();   //清空里面的所有内容
                     var html = ''; 
                     if(data.trim()!=""&&date!=null){
                     	$.each(data, function(index, item){
                     		var result=date[index].result;
				            var rows=result.rows;
				            $.each(rows,function(i,n){
			              	// 媒体id
			                  var id=rows[i].id;
			                // 媒体类型
			                  var ifType=rows[i].ifType;
			                // 标题
			                  var title=rows[i].title;
			                // 副标题
			                  var lititleTitle=rows[i].lititleTitle;
			                // 图片地址
			                  var thumbnailUrl=rows[i].thumbnailUrl;
			                // 添加时间
			                  var addTime=rows[i].addTime;
			                // 获取年月日
			                  var str=addTime.split(" "); 
			                  var ymd=strArray[0];
			                // 获取时间
			                  var time=strArray[1];
			                // 概要
			                  var synopsis=rows[i].synopsis;
			                // 内容
			                  var content=rows[i].content;
                            html +='<li>'+
				                    '<div class="imgMsg">'+
				                    '<a href="details.html"><img src='+thumbnailUrl+' alt="新闻"></a>'+
				                    '</div>'+
				                    '<div class="txtMsg">'+
				                      '<a href="details.html><h5>'+title+'</h5></a>'+
				                      '<span>'+synopsis+'</span>'+
				                    '</div>'+
				                    '<div class="dateMsg">'+
				                      '<span>'+ymd+'</span>'+
				                      '<span>'+time+'</span>'+
				                    '</div>'+
				                '</li>';
							}) 
                         });
                     }else{
                     	console.logo();
                     }                         
                     $('.information_left').html(html);
				}				
			});
	}
	
})