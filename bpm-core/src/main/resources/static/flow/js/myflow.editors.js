(function ($) {
    var myflow = $.myflow;

    $.extend(true, myflow.editors, {
        inputEditor: function () {
            var _props, _k, _div, _src, _r;
            this.init = function (props, k, div, src, r) {
                _props = props;
                _k = k;
                _div = div;
                _src = src;
                _r = r;
                if(myflow.config.isRoot) {
                    var flow = myflow.config.root[0];
                    if(_k == "name"){
                        console.log("这是啥？",flow);
                        $('<input style="width:100%;"/>').val(flow.name.value).change(function () {
                            props[_k].value = $(this).val();
                        }).appendTo('#' + _div);
                    }else if(_k == "key"){
                        $('<input style="width:100%;"/>').val(flow.key.value).change(function () {
                            props[_k].value = $(this).val();
                        }).appendTo('#' + _div);
                    }else if(_k == "desc"){
                        $('<input style="width:100%;"/>').val(flow.desc.value).change(function () {
                            props[_k].value = $(this).val();
                        }).appendTo('#' + _div);
                    }
                    $('#' + _div).data('editor', this);
                }else{
                    $('<input style="width:100%;"/>').val(props[_k].value).change(function () {
                        props[_k].value = $(this).val();
                    }).appendTo('#' + _div);
                    $('#' + _div).data('editor', this);
                }
            }
            this.destroy = function () {
                $('#' + _div + ' input').each(function () {
                    _props[_k].value = $(this).val();
                });
            }
        },
        selectEditor1: function (arg) {
            var _props, _k, _div, _src, _r;
            this.init = function (props, k, div, src, r) {
                _props = props;
                _k = k;
                _div = div;
                _src = src;
                _r = r;

                var sle = $('<select  style="width:100%;"/>').val(props[_k].value).change(function () {
                    props[_k].value = $(this).val();
                }).appendTo('#' + _div);

                if (typeof arg === 'string') {
                    $.ajax({
                        type: "GET",
                        url: arg,
                        success: function (data) {
                            var opts = eval(data);
                            if (opts && opts.length) {
                                for (var idx = 0; idx < opts.length; idx++) {
                                    sle.append('<option value="' + opts[idx].value + '">' + opts[idx].name + '</option>');
                                }
                                sle.val(_props[_k].value);
                            }
                        }
                    });
                } else {
                    for (var idx = 0; idx < arg.length; idx++) {
                        sle.append('<option value="' + arg[idx].value + '">' + arg[idx].name + '</option>');
                    }
                    sle.val(_props[_k].value);
                }

                $('#' + _div).data('editor', this);
            };
            this.destroy = function () {
                $('#' + _div + ' input').each(function () {
                    _props[_k].value = $(this).val();
                });
            };
        }
    });

})(jQuery);