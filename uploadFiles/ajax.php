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
						fail:function(err){
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
	</script>
</body>
</html>
