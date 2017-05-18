$('.electricity').click(function(){
	$(this).parent('.tab').children().removeClass('active');
	$(this).addClass('active');
	$('.ele').show();
	$('.ins').hide();
});
$('.institution').click(function(){
	$(this).parent('.tab').children().removeClass('active');
	$(this).addClass('active');
	$('.ins').show();
	$('.ele').hide();
});
$('#form1').submit(function(){
	// $.post('/cooperate/saveCooperateUser',function(data){

		var companyName =  $.trim($("input[name='companyName']").val());
		var companyType =  $.trim($("input[name='contactName']").val());
		var contactPhone =  $.trim($("input[name='job']").val());
		var contactName =  $.trim($("input[name='contactPhone']").val());
		// var contactPosition =  $.trim($("input[name='companyType']:checked").val());
		var consultContext =  $.trim($("textarea[name='instructions']").val());

		var obj = {
			companyName :companyName,
			companyType :companyType,
			contactPhone :contactPhone,
			contactName :contactName,
			// contactPosition :contactPosition,
			consultContext :consultContext
		};
		if(companyName&&companyType&&contactPhone&&contactName&&consultContext){
			$.ajax({
				type: 'POST',
				url: '/cooperate/saveCooperateUser',
				data: obj,
				success: function (data) {
					if(data.sub_code == 0){
						$('.info').show();
						setTimeout(function () {
							$('.info').hide();
						},3000)
					}
				},
				dataType: 'json'
			});
		}else {

		}
	// })
	return false;
});
$('#form2').submit(function(){
	// $.post('/cooperate/saveCooperateUser',function(data){

	var companyName =  $.trim($("input[name='companyName']").val());
	var companyType =  $.trim($("input[name='contactName']").val());
	var contactPhone =  $.trim($("input[name='job']").val());
	var contactName =  $.trim($("input[name='contactPhone']").val());
	// var contactPosition =  $.trim($("input[name='companyType']:checked").val());
	var consultContext =  $.trim($("textarea[name='instructions']").val());

	var obj = {
		companyName :companyName,
		companyType :companyType,
		contactPhone :contactPhone,
		contactName :contactName,
		// contactPosition :contactPosition,
		consultContext :consultContext
	};
	if(companyName&&companyType&&contactPhone&&contactName&&consultContext){
		$.ajax({
			type: 'POST',
			url: '/cooperate/saveCooperateUser',
			data: obj,
			success: function (data) {
				if(data.sub_code == 0){
					$('.info').show();
					setTimeout(function () {
						$('.info').hide();
					},3000)
				}
			},
			dataType: 'json'
		});
	}else {

	}
	// })
	return false;
});

//核心正则
jQuery.validator.addMethod("isZipCode", function(value, element) {
	var tel = /^(13[0-9]|15[012356789]|18[0236789]|14[57])[0-9]{8}$/;
	return this.optional(element) || (tel.test(value));
}, "请正确填写您的联系电话");
jQuery.validator.addMethod("nameCode", function(value, element) {
	var tel = /^([A-Za-z]|[\u4E00-\u9FA5])+$/;
	return this.optional(element) || (tel.test(value));
}, "用户名只能是汉字或汉字+字母的格式");


$().ready(function() {
	$.validator.setDefaults({
		submitHandler: function() {

		}
	});
	$('#qyname1').on('blur',function(){
		var companyNmae=$('#qyname1').val();
		$.ajax({
			type: 'POST',
			url: '/cooperate/judgeCooperateExist',			
			dataType: 'json',
			data: {
				companyName:companyNmae
			},
			success: function (data) {
				if(data){
					alert("企业名称已申请");
				}
			}
			
		});
	});
	$('#qyname2').on('blur',function(){
		var companyNmae=$('#qyname2').val();
		$.ajax({
			type: 'POST',
			url: '/cooperate/judgeCooperateExist',			
			dataType: 'json',
			data: {
				companyName:companyNmae
			},
			success: function (data) {
				if(data){
					alert("企业名称已申请");
				}
			}
			
		});
	});

// 在键盘按下并释放及提交后验证提交表单
	$("#form1").validate({
		rules: {
			companyName: "required",
			contactName: {
				required :true,
				nameCode :true
			},
			job : "required",
			contactPhone : {
				required :true,
				isZipCode : true
			},
			instructions : "required"
		},
		messages: {
			companyName: "请输入企业名称(最多可以输入25个汉字)",
			contactName: {
				required : "请输入联系人姓名(最多可以输入10个汉字)",
				nameCode : "用户名只能是汉字或字母，或汉字加字母的格式"
			},
			job : "请输入联系人职位(最多可以输入10个汉字)",
			contactPhone : {
				required : "请输入联系电话",
				isZipCode : '请正确填写您的联系电话'
			},
			instructions : "请填写您的需求(最多可以输入50个汉字)"
		}
	});
	$("#form2").validate({
		rules: {
			companyName: "required",
			contactName: {
				required :true,
				nameCode :true
			},
			job : "required",
			contactPhone : {
				required :true,
				isZipCode : true
			},
			instructions : "required"


		},
		messages: {
			companyName: "请输入企业名称(最多可以输入25个汉字)",
			contactName: {
				required : "请输入联系人姓名(最多可以输入10个汉字)",
				nameCode : "用户名只能是汉字或汉字+字母的格式"
			},
			job : "请输入联系人职位(最多可以输入10个汉字)",
			contactPhone : {
				required : "请输入联系电话",
				isZipCode : '请正确填写您的联系电话'
			},
			instructions : "请填写您的需求(最多可以输入50个汉字)"
		}
	});

});