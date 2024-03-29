import store from "@/store"
function HTTP(obj, config, callback) {
	// 默认配置
	let defaultConfig = {
		isRes: false,     // 是否需要直接返回请求的结果
		loading: false    // 是否需要显示"加载中"的提示
	}
	// 合并默认配置和用户自定义配置
	config = { ...defaultConfig, ...config};

	// 如果需要显示loading,mask防止点击穿透
	config.loading && uni.showLoading({
		title: '加载中',
		mask: true
	});
	
	// 这里可以当作"请求拦截器"使用
	// 可以在请求发出之前做统一的处理
	console.log('请求拦截处111')

	return new Promise((resolve, reject) => {
		let options = {
			url: "",
			method: "GET",
			data: {},
			dataType: "json",
			header: {
				"content-type": "application/json",
				"X-requested-With": "XMLHttpRequest"
			},
			success: (res) => {
				console.log("HTTP请求结果： ", res)
				uni.hideLoading();
				// 状态码为200
				if (res.statusCode == 200) {
					// 这里可以当作"响应拦截器"使用
					// 可以对请求的响应数据做初步的统一的处理
					console.log('响应拦截处')
					
					// 服务器端返回的数据格式
					// {
					// 	  code: 'expired',  // 可选的(一般涉及到登录验证接口的时候才会返回这个字段)
					// 	  success: true,
					// 	  data: [] | {},
					// 	  error: "error info"
					// }
					let data = res.data;
					
					if (typeof data.code != 'undefined') {
						// 自动校验用户是否登录过期
						if (data.code == "expired" || data.code == "notoken" || data.code == "wrongtoken" || data.code == "noopenid") {   
							store.dispatch("reLogin");
							return;
						}
						// 还可以对code进行其他判断处理
						if (data.code == "xxx") {
							// do something
						}
					}

					// 直接返回完整的请求结果
					if (config.isRes) {
						resolve(data)
					} else {  // 只返回请求结果中的数据部分
					
						if (data.success) {
							resolve(data.data)
						} else {
							wx.showToast({
								title: data.error,
								icon: "none",
								duration: 2000
							})
							reject(data.error);
						}
					}
				} else {
					reject("HTTP:状态码异常！");
				}
			},
			fail: (err) => {
				// 有callback函数传过来即意味着页面在请求失败后有需要自行处理的逻辑
				if (callback && (typeof callback === 'function')) {
					callback();
				}
				uni.hideLoading();
				uni.showToast({
					title: "网络异常，请稍后再试!",
					icon: "none",
				})
				reject("网络异常，请稍后再试!");
			},
			complete: () => {}
		}

		options = { ...options,
			...obj
		};
		
		// 这里也可以当作"请求拦截器"使用
		// 可以在请求发出之前做统一的处理
		console.log('请求拦截处222')
		
		const OPENID = uni.getStorageSync("openId");
		const TOKEN  = uni.getStorageSync("token");
		if (OPENID) options["header"]["openId"] = OPENID;
		if (TOKEN) options["header"]["token"] = TOKEN;

		if (options.url && options.method) {
			wx.request(options);
		} else {
			wx.showToast({
				title: 'HTTP：缺失参数',
				icon: "none",
				duration: 2000
			})
		}
	})

}



export default {
	GET(url, data = {}, config, callback) {
		return HTTP({
			url,
			data,
			method: "GET"
		}, config, callback);
	},
	POST(url, data = {}, config, callback) {
		return HTTP({
			url,
			data,
			method: "POST"
		}, config, callback);
	},

	POSTformdata(url, data = {}, config, callback) {
		return HTTP({
			url,
			data,
			method: "POST"
		}, config, callback);
	}
}
