import store from "@/store"
function HTTP(obj, config) {

	let defaultConfig = {
		isRes: false,     // 是否需要直接返回请求的结果
		loading: false    // 是否需要显示"加载中"的提示
	}

	config = { ...defaultConfig,
		...config
	}


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
				console.log("HTTP请求结果：",res)
				uni.hideLoading();
				// 状态码为200
				if (res.statusCode == 200) {
					
					// 这里可以当作"响应拦截器"使用
					// 可以对请求的响应数据做初步的统一的处理
					console.log('响应拦截处')
					
					let data = res.data;
					
					// 服务器端返回的数据结构 需要修改
					// data.code = '01'

					//自动校验用户是否登录过期
					if (data.code == "01") {
						store.dispatch("reLogin");
						return;
					}

					//返回 { code:10000,msg:"消息",data:[] }
					//返回 { code:10000,error:"消息",data:[] }
					if (config.isRes) {
						// 直接返回请求结果数据
						resolve(data)
					} else { // 返回 data:[]
					
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
					
						// data.code = '00'
						
						// if (data.code == "00") {
						// 	resolve(data.data || true)
						// } else {
						// 	wx.showToast({
						// 		title: data.error,
						// 		icon: "none",
						// 		duration: 2000
						// 	})
						// 	reject(data.error);
						// }
					}
				} else {
					reject("HTTP:状态码异常！");
				}
			},
			fail: (err) => {
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
		if (OPENID) options["header"]["openId"] = OPENID;

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
	GET(url, data = {}, config) {
		return HTTP({
			url,
			data,
			method: "GET"
		}, config);
	},
	POST(url, data = {}, config) {
		return HTTP({
			url,
			data,
			method: "POST"
		}, config);
	},

	POSTformdata(url, data = {}, config) {
		return HTTP({
			url,
			data,
			method: "POST"
		}, config);
	}
}
