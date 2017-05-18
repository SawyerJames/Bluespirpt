<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>用户咨询信息管理</title>
    <link rel="stylesheet" href="${base.contextPath}/css/public.css"/>
    <link rel="stylesheet" href="${base.contextPath}/css/enterprise.css"/>
    <link rel="stylesheet" href="${base.contextPath}/plugin/bootstrap/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="${base.contextPath}/plugin/bootstrap-table/css/bootstrap-table.min.css"/>
    <script type="text/javascript" src="${base.contextPath}/js/jquery-2.2.4.min.js"></script>
    <script type="text/javascript" src="${base.contextPath}/plugin/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="${base.contextPath}/plugin/bootstrap-table/js/bootstrap-table.min.js"></script>
    <script type="text/javascript"
            src="${base.contextPath}/plugin/bootstrap-table/js/locale/bootstrap-table-zh-CN.min.js"></script>
    <script type="text/javascript" src="${base.contextPath}/js/public.js"></script>
    <script type="text/javascript" src="${base.contextPath}/js/datetime.js"></script>
</head>
<body>

<div class="box_screen">
    <input id="status_hidden" type="hidden" value="1">
    <!--box-->
    <div class="F_box_credit">
        <div class="audit_choose_navigation">
            <div class="audit_choose_1" status="1">待处理</div>
            <div class="audit_choose_2 audit_choose" status="2">已处理</div>
        </div>
        <div class="table-responsive">
            <div class="FY_table_contain audit_table_box">
                <table id="audit_table"></table>
            </div>
            <div class="FY_table_contain audit_table_box">
                <table id="audit_table2"></table>
            </div>
        </div>
    </div>
</div>
<script>
    $(function () {
        var table1, table2;
        //点击按钮样式初始化
        var move = function (obj, text) {
            $(obj).each(function (i) {
                if (!$($(obj)[i]).hasClass(text)) {
                    $($(obj)[i]).addClass(text);
                }
            })
        };
        $($(".audit_table_box")[0]).show();
        $(".audit_choose_navigation div").click(function () {
            var index = $(this).index();
            var status = $(this).attr('status');
            $("#status_hidden").val(status);
            if (status == 2) {
                if (!table2) {
                    initTable2();
                }else{
                    $('#audit_table2').bootstrapTable('refresh');
                }
            }
            //表格显示样式
            $(".audit_table_box").hide();
            $($(".audit_table_box")[index]).show();
            //调用 点击按钮样式初始化
            move('.audit_choose_navigation div', 'audit_choose')
            //点击指定按钮样式改变
            $($(".audit_choose_navigation div")[index]).removeClass('audit_choose');
            //点击指定展示框样式改变
            $($(".audit_list_li")[index]).addClass('audit_list_li_color');
        });


        //条件查询
        function searchCondition(params) {
            params.status = $("#status_hidden").val();
            return params;
        }

        //格式化
        function formatterNo(value, row, index){
            return index+1;
        }
        function formatterType(value){
            switch (value) {
                case 1:
                    return '企业';
                case 2:
                    return '电商';
                case 3:
                    return '金融机构';
            }
        }

        //表格初始化
        table1 = $('#audit_table').bootstrapTable({
            url: '${base.contextPath}/consulting/getConsultingList',
            striped: true,//隔行换色
            /*sortName:'no',//排序字段
             sortOrder:'desc',//排序方式*/
            pagination: true,//分页工具栏
            pageNumber: 1,
            pageSize: 10,
            pageList: [10, 20, 50, 100],
            columns: [{
                field: 'no',
                title: '序号',
                halign: 'center',
                align: 'center',
                formatter: formatterNo
            }, {
                field: 'companyName',
                title: '公司名称',
                halign: 'center',
                align: 'center'
            }, {
                field: 'companyType',
                title: '公司类型',
                halign: 'center',
                align: 'center',
                formatter: formatterType
            }, {
                field: 'contactName',
                title: '联系人姓名',
                halign: 'center',
                align: 'center'
            }, {
                field: 'contactPhone',
                title: '联系电话',
                halign: 'center',
                align: 'center'
            }, {
                field: 'contactPosition',
                title: '联系职位',
                halign: 'center',
                align: 'center'
            }, {
                field: 'consultingContext',
                title: '咨询内容',
                halign: 'center',
                align: 'center',
                formatter: function (value) {
                    return (value==null||value==""||value==undefined)?"":(value.length>10)?value.substr(0,10):value;
                }
            }, {
                field: 'addTime',
                title: '提交时间',
                halign: 'center',
                align: 'center',
                formatter: $.myTime.UnixToDate
            }, {
                field: 'id',
                title: '操作',
                halign: 'center',
                align: 'center',
                formatter: function (value) {
                    return "<a class='ok_a' _id='" + value + "' href='#'>标注已答复</a>";
                }
            }], queryParams: searchCondition
        });

        function initTable2() {
            table2 = $('#audit_table2').bootstrapTable({
                url: '${base.contextPath}/consulting/getConsultingList',
                striped: true,//隔行换色
                /*sortName:'no',//排序字段
                sortOrder:'desc',//排序方式*/
                pagination: true,//分页工具栏
                pageNumber: 1,
                pageSize: 10,
                pageList: [10, 20, 50, 100],
                columns: [{
                    field: 'no',
                    title: '序号',
                    halign: 'center',
                    align: 'center',
                    formatter: formatterNo
                }, {
                    field: 'companyName',
                    title: '公司名称',
                    halign: 'center',
                    align: 'center'
                }, {
                    field: 'companyType',
                    title: '公司类型',
                    halign: 'center',
                    align: 'center',
                    formatter: formatterType
                }, {
                    field: 'contactName',
                    title: '联系人姓名',
                    halign: 'center',
                    align: 'center'
                }, {
                    field: 'contactPhone',
                    title: '联系电话',
                    halign: 'center',
                    align: 'center'
                }, {
                    field: 'contactPosition',
                    title: '联系职位',
                    halign: 'center',
                    align: 'center'
                }, {
                    field: 'consultingContext',
                    title: '咨询内容',
                    halign: 'center',
                    align: 'center',
                    formatter: function (value) {
                        return (value==null||value==""||value==undefined)?"":(value.length>10)?value.substr(0,10):value;
                    }
                }, {
                    field: 'addTime',
                    title: '提交时间',
                    halign: 'center',
                    align: 'center',
                    formatter: $.myTime.UnixToDate
                },{
                    field: 'alterTime',
                    title: '处理时间',
                    halign: 'center',
                    align: 'center',
                    formatter: $.myTime.UnixToDate
                }, {
                    field: 'personName',
                    title: '处理人',
                    halign: 'center',
                    align: 'center'
                }], queryParams: searchCondition
            });
        }

        //标注已答复
        $("#audit_table").on("click",".ok_a",function(event){
            event.preventDefault();/**/
            var id  = $(this).attr("_id");
            if(id){
                //提交
                $.ajax({
                    url:'${base.contextPath}/consulting/dispose',
                    type:'POST',
                    data:{id:id},
                    success:function(data){
                        if(data){
                            $('#audit_table').bootstrapTable('refresh');
                        }else{
                            alert("失败！");
                        }
                    },
                    error:function(){
                        alert("失败！");
                    }
                });
            }
        });

    });
</script>
</body>
</html>
