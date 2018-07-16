// /本地创建图片的链接并且预览
var avatarInput=$('#avatar-input').get(0).files[0];
var Url= window.URL.createObjectURL(avatarInput);


//本地创建xls文件
var html="<html><head><meta charset='utf-8' /></head><body>"+temp+"</body></html>";
var blob = new Blob([html], { type: "application/vnd.ms-excel" });
var downloadLink= URL.createObjectURL(blob);
this.exportingPriceLink=`<a href="${downloadLink}" download="XXX.xls">下载</a>`
