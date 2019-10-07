export default {
	
	dateUtils: {
		UNITS: {
			'年': 31557600000,
			'月': 2629800000,
			'天': 86400000,
			'小时': 3600000,
			'分钟': 60000,
			'秒': 1000
		},
		humanize: function (milliseconds) {
			var humanize = '';
			for (var key in this.UNITS) {
				if (milliseconds >= this.UNITS[key]) {
					humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
					break;
				}
			}
			return humanize || '刚刚';
		},
		format: function (dateStr) {
			var date = this.parse(dateStr)
			var diff = Date.now() - date.getTime();
			if (diff < this.UNITS['天']) {
				return this.humanize(diff);
			}
			var _format = function (number) {
				return (number < 10 ? ('0' + number) : number);
			};
			return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDate()) + '-' +
				_format(date.getHours()) + ':' + _format(date.getMinutes());
		},
		parse: function (str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
			var a = str.split(/[^0-9]/);
			return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
		}
	},
	
    formatTime(time) {
		if (typeof time !== 'number' || time < 0) {
			return time
		}
	
		var hour = parseInt(time / 3600)
		time = time % 3600
		var minute = parseInt(time / 60)
		time = time % 60
		var second = time
	
		return ([hour, minute, second]).map(function (n) {
			n = n.toString()
			return n[1] ? n : '0' + n
		}).join(':')
	},
	
	formatLocation(longitude, latitude) {
		if (typeof longitude === 'string' && typeof latitude === 'string') {
			longitude = parseFloat(longitude)
			latitude = parseFloat(latitude)
		}
	
		longitude = longitude.toFixed(2)
		latitude = latitude.toFixed(2)
	
		return {
			longitude: longitude.toString().split('.'),
			latitude: latitude.toString().split('.')
		}
	},

	/* 
	 * 将cityNo 转 cityName
	 * cityData:原数据
	 * cityNo：二级地区编码
	 */
	getCityName(cityData, cityNo) {
		if (!cityNo) return;
		if (!(cityData instanceof Array)) return;
		// 9112
		cityNo += "";
		for (let i = 0; i < cityData.length; i++) {
			let sheng = cityData[i];
			for (let j = 0; j < sheng.children.length; j++) {
				let shi = sheng.children[j];
				if (shi.value == cityNo) {
					// 使用return 终止循环
					return `${sheng.label}-${shi.label}`;
				}
			}
		}
	},

	/* 
	 * obj 转 params字符串参数  
	 * 例子：{a:1,b:2} => a=1&b=2
	 */
	objParseParam(obj) {
		let paramsStr = "";
		if (obj instanceof Array) return paramsStr;
		if (!(obj instanceof Object)) return paramsStr;
		for (let key in obj) {
			paramsStr += `${key}=${obj[key]}&`;
		}
		return paramsStr.substring(0, paramsStr.length - 1);
	},

	/* 
	 * obj 转 路由地址带参数
	 * 例子：{a:1,b:2} => /pages/index/index?a=1&b=2
	 */
	objParseUrlAndParam(path, obj) {
		let url = path || "/";
		let paramsStr = "";
		if (obj instanceof Array) return url;
		if (!(obj instanceof Object)) return url;
		paramsStr = this.objParseParam(obj);
		paramsStr && (url += "?");
		url += paramsStr;
		return url;
	},

	/* 
	 * 获取url字符串参数
	 */
	getRequestParameters(locationhref) {
		let href = locationhref || "";
		let theRequest = new Object();
		let str = href.split("?")[1];
		if (str != undefined) {
			let strs = str.split("&");
			for (let i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
			}
		}
		return theRequest;
	},

	/* 
	 * 银行卡每四位空格
	 */
	formatCardNo(cardNo) {
		cardNo += "";
		return cardNo.replace(/\s/g, '').replace(/[^\d]/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
	},

	/**
	 * 乘法，解决js精度损失问题
	 * @param {*} arg1 
	 * @param {*} arg2 
	 */
	accMul(arg1, arg2) {
		arg1 = arg1 || 0;
		var m = 0,
			s1 = arg1.toString(),
			s2 = arg2.toString();
		try {
			m += s1.split(".")[1].length
		} catch (e) {}
		try {
			m += s2.split(".")[1].length
		} catch (e) {}
		return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
	},
}
