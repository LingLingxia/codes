<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<input type="file" id="file" name="file">
	<button>upload</button>
	<input type="text" id="username" name="username">
	<input type="password" id="password" name="password">
	<div class="data"></div>
	<p class="per">100</p>
	<script src="http://code.jquery.com/jquery-latest.js"></script>
	<script>
		$(function(){

			function onprogress(evt){
				$('.per').html(Math.floor(100*evt.loaded/evt.total)+'%');
			}
			$('button').click(function(){


				var fd = new FormData();
				fd.append('file',$('#file').get(0).files[0]);
				$.ajax({
					url:'files/upload.php',
					method:'POST',//php后台用$_FILES接收数据，不用$_POST
					data:fd,
					contentType:false,
					processData:false,
						success:function(data){
						$('.data').html(data);
					},
						error:function(err){
						$('.data').html(err);
					},
					xhr:function(){
						var xhr=$.ajaxSettings.xhr();//获取原生的xhr对象？
						if(onprogress && xhr.upload){
							xhr.upload.addEventListener('progress', onprogress,false);
							return xhr;
						}
					}
				});


				
			});

		});

		//axios版本

	uploadFile() {
    const fd = new FormData();
    const d:any = document;
    const file = d.getElementById('file').files[0];
    if (!file) {
      alert('请选择图片');
      return;
    }
    const tmpArr:Array<string> = file.name.split('.');
    tmpArr.pop();
    const name = tmpArr.join('');
    if (this.checkInput(name)) {
      alert('图片命名不合法');
      return;
    }
    fd.append('file', file);
    api.upload(fd).then((data:any) => {
    }).catch((err:any) => {

		}
	}

	upload(params:any){
  //不要处理数据 直接传fd
    return axios({
      method:'POST',
      url:'',
      data:params,
      transformRequest:[]
    })
  },
	</script>
</body>
</html>
