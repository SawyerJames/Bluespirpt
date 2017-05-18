$(function(){
	$('#search').on('click',function(){
		var qyname=$('#qyname').val();
		var frname=$('#franme').val();
		$.ajax({
             type: "POST",
             url: "/blackList/queryBlackList",
             dataType: "json",
             data: {

             	enterpriseName:qyname, 
             	legalPerson:frname
             },            
             success: function(data){
                         $('#table').empty();   //清空resText里面的所有内容
                         var html = ''; 
                         if(data.trim()!=""&&date!=null){
                         	$.each(data, function(index, item){
                         		var result=date[index].result;
					            var rows=result.rows;
					            $.each(rows,function(i,n){
				              	// 企业名称
				                  var enterpriseName=rows[i].enterpriseName;
				                // 法人姓名
				                  var legalPerson=rows[i].legalPerson;
				                // 法人身份证
				                  var legalPersonIdCard=rows[i].legalPersonIdCard;
				                // 欠款金额(元)
				                  var amount=rows[i].amount;
				                // 逾期天数(天)
				                  var overdueDays=rows[i].overdueDays;
				                // 注册地
				                  var workLocation=rows[i].workLocation;				                              	
	                            html +='<tr>'+
								        '<td>'+enterpriseName+'</td>'+
								        '<td>'+legalPerson+'</td>'+
								        '<td>'+legalPersonIdCard+'</td>'+
								        '<td>'+amount+'</td>'+
								        '<td>'+overdueDays+'</td>'+
								        '<td>'+workLocation+'</td>'+
								        '</tr>';
								}) 
	                         });
                         }else{
                         	html='<div class="imgContent"><img src='+images/no_data.png+'></img><p>暂无数据</p></div>';
                         }                         
                         $('#table').html(html);
            }

         });
    });

})