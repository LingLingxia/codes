// /本地创建图片的链接并且预览
var avatarInput=$('#avatar-input').get(0).files[0];
var Url= window.URL.createObjectURL(avatarInput);


//本地创建xls文件
var html="<html><head><meta charset='utf-8' /></head><body>"+temp+"</body></html>";
var blob = new Blob([html], { type: "application/vnd.ms-excel" });
var downloadLink= URL.createObjectURL(blob);
this.exportingPriceLink=`<a href="${downloadLink}" download="XXX.xls">下载</a>`


//接受服务器端二进制文件并生产zip文件
api.pagePack({ codes: tmp }).then((data:any) => {
  const fileName = data.headers['content-disposition'].split('filename=')[1];
  const blob = new Blob([data.data], { type: 'application/zip' });
  const k = URL.createObjectURL(blob); //生产url  <a href =${k} download = ${fileName}>点击下载</a>
  self.showDownLoad(k, fileName);
})


//读取本地文件并解析

