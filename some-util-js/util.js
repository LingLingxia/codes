
var globalF = {
	stringifyQS: function(obj) {
		var ret = [];

		for (var key in obj) {

			if (obj[key] !== null && obj[key] !== undefined) {

				ret.push(`${key}=${encodeURIComponent(obj[key])}`);
			}
		}

		return ret.join("&");
	},

	decodeString: function(qs) {
		var ret = {};
		var str=qs.split("&");
		var newStr=str.map(x=>x.split('=',2));
		for( var key in newStr){

			var item=newStr[key];
			ret[item[0]] = decodeURIComponent(item[1]);
		}
		return ret;

	},

	setLocalStorage: function(key, val) {
		if (window.localStorage) {
			try{
				window.localStorage.setItem(prefix + key, val);
			}catch (err){
				localStorage.clear();
				this.showTips('quotaExceededError','/login');
			}
		} else {
			document.cookie = `${prefix+key}=${val}`
		}
	},
	getLocalStorage: function(key) {
		if (window.localStorage) {
			return window.localStorage.getItem(prefix + key);
		} else {
		 	return this.getCookie(prefix + key);
		}
	},

	removeLocalStorage: function(key) {
		if (window.localStorage) {
			window.localStorage.removeItem(prefix + key);
		} else {
			document.cookie = `${prefix+key}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
		}
	},

	setSessionStorage: function(key, val) {
		if (window.SessionStorage) {
			window.SessionStorage.setItem(prefix + key, val);
		}else{
			document.cookie = `${prefix+key}=${val}`
		}
	},
	getSessionStorage: function(key) {
		if (window.SessionStorage) {
			return window.SessionStorage.getItem(prefix + key);
		}else{
			return this.getCookie(prefix + key);
		}
	},
	removeSessionStorage: function(key) {
		if (window.SessionStorage) {
			window.SessionStorage.removeItem(prefix + key);
		}else{
			document.cookie = `${prefix+key}=;expires=Thu, 01 Jan 1970 00:00:00 GMT`;
		}
	},
    storeRedirectUrl(key){
		var redirectUrl=this.getRedirectUrl(key);
		if(redirectUrl){
			this.setLocalStorage(key,redirectUrl);//如果有回调的url则存储
		}
    },
	redirect: function(key, newURL) {
		var redirectUrl=this.getLocalStorage(key)||this.getRedirectUrl(key);
		if (redirectUrl) {
				this.removeLocalStorage(key)
				location.href = redirectUrl;
		} else {
			location.href = newURL;
		}
	},
	getRedirectUrl:function( key ){
		var search='';
		var queryString=location.href.split('?'+key+'=');
		if(queryString.length>1){
			search=queryString[1];
		}
		if (search) {
			return  decodeURIComponent(search);
		}
	},
	checkPassword: function(password) {
		if(password.length<8){
			return 0;
		}
		var ret=0;
		var pattern=[
			/[0-9]/,
			/[a-z]/,
			/[A-Z]/,
			/[~!@#$%^&*()-+\\\/\[\]\{\}\:\;\'\",.<>?`|]/
		];

		for(var i=0;i<pattern.length;i++){
			if(pattern[i].test(password)){
				ret++;
			}
		}
		return ret;
	},

	simpleCheckEmail: function(email) {
		if ('' == email||email.length>255) {
			return false;
		}
		var reg = /^[-+_a-z0-9][-+_\.a-z0-9]{0,62}@[a-z0-9][-a-z0-9]{0,62}(\.[a-z0-9][-a-z0-9]{0,62})*$/i;
		if (!reg.test(email)) {
			return false;
		}
		return true;
	},

	deepClone(obj) {
		var ret = obj.constructor == Array ? [] : {};
		for (var i in obj) {
			if (typeof obj[i] == 'object') {
				ret[i] = obj[i] == null ? null : globalF.deepClone(obj[i]);
			} else {
				ret[i] = obj[i];
			}
		}
		return ret;
	},

	getCookie(key) {
		var cookies = document.cookie.split(';'),
			len = cookies.length;
		var ret;
		for (var i = 0; i < len; i++) {
			if (cookies[i].split('=')[0].trim() == key) {
				ret = cookies[i].split('=')[1];
				break;
			}
		}
		return ret;
	},
	setTokenAndExpires(data) {
		this.setLocalStorage('token', data.access_token);
		var curTime = new Date();
		var expireTime = curTime.getTime() + Number(data.expires_in) * 1000;
		this.setLocalStorage('expires', expireTime); //存下token的过期时间

		httpManager.token = this.getLocalStorage('token');
        httpManager.expires = this.getLocalStorage('expires')
	},
	showTips(tipId ,url ) {//直接传需要显示的文字进来
		tip=TIPS[tipId]?TIPS[tipId]:tipId;
		console.log(tip);
		jQuery('#common-err').html(tip.toString());

		jQuery('#common-err-wrap').removeClass('hide');

		jQuery('#common-err-wrap').click(function(event){
			if(event.target==this){
				jQuery('#close-common-err').trigger('click');
			}
		})

		jQuery('#close-common-err').click(function(){
			
   		 	jQuery('#common-err-wrap').addClass('hide');
   		 	if(url){
   		 		globalF.redirect('redirect', url);
   		 	}

		});
	},
	unique( arr ){
		if(arr.length<=0) return [];
  
		arr.sort();
		let ret=[];
		ret[0]=arr[0];
		let k=1,len=arr.length,i=1;
		while(i<len){
			  if(arr[i]==arr[i-1]){
					i++;
			  }else{
					ret[k++]=arr[i++];
			  }
		}
		return ret;
  }

}

