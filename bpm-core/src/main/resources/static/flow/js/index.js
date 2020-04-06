$(function () {
    var flowJson = getFlowDesign();
    $('#myflow').myflow({
        basePath: "",
        allowStateMutiLine: true,
        restore: eval("(" + flowJson + ")"),
        tools: {
            save: function (data) {
                console.log(data);
                var flowDesignMsg = {
                    "flowId": "4ce08c32bcbab235fc6e6276e21b4f38",
                    "flowJson": data
                }
                $.ajax({
                    url: '/flowDesign/saveFlowDesign',
                    type: 'post',
                    dataType: 'json',
                    contentType: "application/json;charset=utf-8",//这个参数也是header参数
                    data: JSON.stringify(flowDesignMsg),
                    cache: false,
                    success: function (res) {
                        createWebFlow(getFlowDesign())
                    }
                });
            },
            publish: function (data) {
                console.log("发布", eval("(" + data + ")"));
            },
            addPath: function (id, data) {
                console.log("添加连接线", id, eval("(" + data + ")"));
                var node = eval("(" + data + ")");
                var lineMsg = {
                    "flowId": "4ce08c32bcbab235fc6e6276e21b4f38",
                    "flowLineId": id.substring(4, id.length),
                    "startNodeId": node.from.substring(4, node.from.length),
                    "endNodeId": node.to.substring(4, node.to.length)
                }
                $.ajax({
                    url: '/flowLine/saveFlowLine',
                    type: 'post',
                    dataType: 'json',
                    contentType: "application/json;charset=utf-8",//这个参数也是header参数
                    data: JSON.stringify(lineMsg),
                    cache: false,
                    success: function (res) {
                    }
                });
            },
            addRect: function (id, data) {
                var node = eval("(" + data + ")");
                var nodeMsg = {
                    "flowId": "4ce08c32bcbab235fc6e6276e21b4f38",
                    "nodeId": id.substring(4, id.length),
                    "nodeName": node.text.text,
                    "nodeType": node.type
                }
                $.ajax({
                    url: '/flowTaskNode/saveFlowTaskNode',
                    type: 'post',
                    dataType: 'json',
                    contentType: "application/json;charset=utf-8",//这个参数也是header参数
                    data: JSON.stringify(nodeMsg),
                    cache: false,
                    success: function (res) {
                        if (res.code == '-1') {
                            alert(JSON.stringify(res.data));
                        }
                    }
                });
            },
            clickPath: function (id) {
                console.log("点击线", id)
            },
            clickRect: function (id, data) {
                console.log("点击状态", id, eval("(" + data + ")"));
            },
            deletePath: function (id) {
                var lineMsg = {
                    "flowLineId": id.substring(4, id.length)
                }
                $.ajax({
                    url: '/flowLine/deleteFlowLine',
                    type: 'post',
                    dataType: 'json',
                    contentType: "application/json;charset=utf-8",//这个参数也是header参数
                    data: JSON.stringify(lineMsg),
                    cache: false,
                    success: function (res) {
                    }
                });
            },
            deleteRect: function (id, data) {
                var nodeMsg = {
                    "flowId": "4ce08c32bcbab235fc6e6276e21b4f38",
                    "nodeId": id.substring(4, id.length)
                }
                $.ajax({
                    url: '/flowTaskNode/deleteFlowTaskNode',
                    type: 'post',
                    dataType: 'json',
                    async: false, // 同步
                    contentType: "application/json;charset=utf-8",//这个参数也是header参数
                    data: JSON.stringify(nodeMsg),
                    cache: false,
                    success: function (res) {
                        if (res.code == '-1') {
                            alert(JSON.stringify(res.data));
                        }
                    }
                });
                console.log("删除状态", id, eval("(" + data + ")"));
            },
            revoke: function (id) {

            }
        }
    });

    function getFlowDesign() {
        var flowJson = "{states:{rect1585875230378:{type:'start',ID:'',text:{text:'开始'}, attr:{ x:237, y:156, width:50, height:50}},rect1585875231944:{type:'state',ID:'',text:{text:'状态'}, attr:{ x:187, y:291, width:100, height:50}},rect1585875239753:{type:'state',ID:'',text:{text:'状态'}, attr:{ x:197, y:428, width:100, height:50}},rect1585875242464:{type:'end',ID:'',text:{text:'结束'}, attr:{ x:211, y:539, width:50, height:50}}},paths:{path1585875253537:{lineID:'',from:'rect1585875230378',to:'rect1585875231944', dots:[],text:{text:'',textPos:{x:0,y:-10}}, props:{text:{value:''}}},path1585875255768:{lineID:'',from:'rect1585875231944',to:'rect1585875239753', dots:[],text:{text:'',textPos:{x:0,y:-10}}, props:{text:{value:''}}},path1585875257505:{lineID:'',from:'rect1585875239753',to:'rect1585875242464', dots:[],text:{text:'',textPos:{x:0,y:-10}}, props:{text:{value:''}}}}}";
        var flowDesign = {
            "flowId": "4ce08c32bcbab235fc6e6276e21b4f38"
        }
        $.ajax({
            url: '/flowDesign/getFlowDesign',
            type: 'post',
            dataType: 'json',
            async: false, // 同步
            contentType: "application/json;charset=utf-8",//这个参数也是header参数
            data: JSON.stringify(flowDesign),
            cache: false,
            success: function (res) {
                flowJson = res.data.flowJson;
            }
        });
        return flowJson;
    }

    function createWebFlow(flowJson) {
        $('#myflow').empty();
        $('#myflow').myflow({
            basePath: "",
            restore: eval("(" + flowJson + ")"),
            tools: {
                save: {
                    onclick: function (data) {
                        var flowDesignMsg = {
                            "flowId": "4ce08c32bcbab235fc6e6276e21b4f38",
                            "flowJson": data
                        }
                        $.ajax({
                            url: '/flowDesign/saveFlowDesign',
                            type: 'post',
                            dataType: 'json',
                            contentType: "application/json;charset=utf-8",//这个参数也是header参数
                            data: JSON.stringify(flowDesignMsg),
                            cache: false,
                            success: function (res) {
                            }
                        });
                    }
                }
            }
        });
    }
});