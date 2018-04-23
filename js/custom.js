
//自定验证方法
// 身份证号码验证 
jQuery.validator.addMethod("isIdCardNo", function (value, element) {
    var regIdCard=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/; 
    return this.optional(element) || (regIdCard.test(value));
}, jQuery.format("请正确输入您的身份证号码"));

// 手机号码验证 
jQuery.validator.addMethod("isMobilePhone", function (value, element) {
    var length = value.length;
    var mobile = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
    return this.optional(element) || (length == 11 && mobile.test(value));
}, jQuery.format("请正确填写您的手机号码"));

// 电话号码验证   
jQuery.validator.addMethod("isTel", function (value, element) {
    var tel = /^(0\d{2}-\d{8}(-\d{1,4})?)|(0\d{3}-\d{7,8}(-\d{1,4})?)$/g;
    return this.optional(element) || (tel.test(value));
}, jQuery.format("请正确填写您的电话号码"));

// 联系电话(手机/电话皆可)验证 
jQuery.validator.addMethod("isPhone", function (value, element) {
    var length = value.length;
    var mobile = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
    var tel = /^(0\d{2}-\d{8}(-\d{1,4})?)|(0\d{3}-\d{7,8}(-\d{1,4})?)$/;
    return this.optional(element) || (tel.test(value) || mobile.test(value));
}, jQuery.format("请正确填写您的联系电话"));

// 邮政编码验证 
jQuery.validator.addMethod("isZipCode", function (value, element) {
    var tel = /^[0-9]{6}$/;
    return this.optional(element) || (tel.test(value));
}, jQuery.format("请正确填写您的邮政编码"));

// 中文字两个字节   
jQuery.validator.addMethod("byteRangeLength", function (value, element, param) {
    var length = value.length;
    for (var i = 0; i < value.length; i++) {
        if (value.charCodeAt(i) > 127) {
            length++;
        }
    }
    return this.optional(element) || (length >= param[0] && length <= param[1]);
}, jQuery.format("请确保输入的值在3-15个字节之间(一个中文字算2个字节)"));

// 字符验证   
jQuery.validator.addMethod("userName", function (value, element) {
    var name=/^[\u0391-\uFFE5\w]+$/;
    return this.optional(element) || (name.test(value));
}, jQuery.format("用户名只能包括中文字、英文字母、数字和下划线"));

//邮箱验证
jQuery.validator.addMethod("isEmail",function(value,element){
    var email=/^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+$/;
    return this.optional(element) || (email.test(value));
},jQuery.format("请正确填写您的邮箱信息"));

//网址验证
jQuery.validator.addMethod("isNet",function(value,element){
    var net=/^(([hH][tT]{2}[pP][sS]?)|([fF][tT][pP]))\:\/\/[wW]{3}\.[\w-]+\.\w{2,4}(\/.*)?$/;
    return this.optional(element) || (net.test(value));
},jQuery.format("请正确填写网址"));

//ip地址验证
jQuery.validator.addMethod("isIp",function(value,element){
    var ip=/^((([1-9]\d?)|(1\d{2})|(2[0-4]\d)|(25[0-5]))\.){3}(([1-9]\d?)|(1\d{2})|(2[0-4]\d)|(25[0-5]))$/;
    return this.optional(element) || (ip.test(value));
},jQuery.format("请正确填写ip地址"));

//日期验证
jQuery.validator.addMethod("isDate",function(value,element){
    var date=/^[1-9]\d{3}([-|\/|\.])?((0\d)|([1-9])|(1[0-2]))\1(([0|1|2]\d)|([1-9])|3[0-1])$/;
    return this.optional(element) || (date.test(value));
},jQuery.format("请正确填写日期格式"));

//qq验证
jQuery.validator.addMethod("isQq",function(value,element){
    var qq=/^[1-9][0-9]{4,}$/;
    return this.optional(element) || (qq.test(value));
},jQuery.format("请正确填写您的qq号"));

//地址验证
jQuery.validator.addMethod("isAddress",function(value,element){
    var address=/^[\u4E00-\u9FA5A-Za-z\d\-\_]{5,60}$/;
    return this.optional(element) || (address.test(value));
},jQuery.format("请正确填写您的地址"));

//密码验证
jQuery.validator.addMethod("isPassword",function(value,element){
    var password=/^[\u0391-\uFFE5\w]+$/;
    return this.optional(element) || (password.test(value));
},jQuery.format("密码只能包括中文字、英文字母、数字和下划线"));

$(function(){
    $("form").validate({
        ignore:[],
        onkeyup:function(element) { $(element).valid();}
    });
});