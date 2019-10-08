<template>
	<view>
		<inputs
			:inputsArray="inputsArray" 
			activeName="确定报名" 
			@activeFc="activeFc" 
			@inputsChange="inputsChange"
			:fontSizeScaleSet="fontSizeScaleSet"
			:usingComponents="true"
			:titleSet="titleSet"
			pickerMode="arrowhead"
		/>
	</view>
</template>

<script>
	import inputs from '@/components/QuShe-inputs/inputs.vue';
	
	export default {
		components: {
			inputs,
		},
		data() {
			return {
				activity_id: 0,
				isNeedPicOrUrl: true,
				
				fontSizeScaleSet: { //inputs内的字体大小系数设置(字体大小为屏幕宽高度以此系数)
					allScale: .028,
					titleScale: .035,	//优先于allScale
					contentScale: .035	//优先于allScale
				},
				titleSet: {
					layout: 'left',
				},
				
				inputsArray: [  
					{
						variableName: 'name',
						title: '名字',
						placeholder: '请填写你的姓名或网名',
						maxlength: 32,
					},
					{
						variableName: 'wechat',
						title: '微信号',
						placeholder: "请填写自己的微信号",
						maxlength: 64,
					},
					
					{
						type: "picker-custom2",
						variableName: 'music_type',
						// border_top: "1px solid #f2f2f2",
						title: "乐器类型",
						itemArray: [
							[
								{
									name: '尤克里里', // name变量名需与下方steps.step_1_value相同
									value: 'ukulele' // 可添加多项自定义想要的数据
								}, 
								{
									name: '吉他',
									value: 'guitar'
								}, 
								{
									name: '鼓',
									value: 'drum'
								}
							]
						],
						steps: {
							step_1_value: 'name', // 第一级显示的属性名
						},
					},
					{
						type: "picker-custom2",
						variableName: 'level',
						// border_top: "1px solid #f2f2f2",
						title: "能力分类",
						itemArray: [
							[
								{
									name: '萌新', // name变量名需与下方steps.step_1_value相同
									value: 'one' // 可添加多项自定义想要的数据
								}, 
								{
									name: '入门',
									value: 'two'
								}, 
								{
									name: '大佬',
									value: 'three'
								}
							]
						],
						steps: {
							step_1_value: 'name', // 第一级显示的属性名
						},
					},
					{
						variableName: 'remark',
						title: '备注信息',
						placeholder: "随便说点什么吧...",
						maxlength: 64,
						ignore: true
					},
				
				],
				
				picInput: {
					type: "pics",
					variableName: "pic",
					title: "琴照上传",
					itemArray: [{
						title: "琴照",
						ignore: false
					}],
					border_bottom: "1px solid #f2f2f2",
					clearColor: "red",
					hide: false,
					customId: "imgBlob"
				},
				urlInput: {
					variableName: 'pic',
					title: '视频地址',
					placeholder: "请填写一个你的弹琴视频链接地址",
					maxlength: 128,
					ignore: false,
					hide: false,
				}
				
			}
		},
		onLoad: function(e) {
			this.activity_id = e.id;
		},
		methods: {
			// inputs内任何类型的值变更时都会触发此回调, 该方法接收一个所变更类型的对象
			inputsChange: function(obj) {
				console.log('change')
				console.log(obj)
				if (obj.index == 'wechat'){
					
					this.validateMemberByWechat(obj.newData)
					
					// this.$http.request({
					// 	url: '/activity/validateMemberByWechat',
					// 	method: 'post',
					// 	params: {wechat: obj.newData}
					// }).then(res => {
					// 	console.log(res)
					// 	if (res.data.success) {
					// 		this.isNeedPicOrUrl = false;
					// 	} else {
					// 		this.isNeedPicOrUrl = true;
					// 	}
					// }).catch(err => {
					// 	console.log(err)
					// })
				}
				
				
				if (obj.index == 'level') {
					if (this.isNeedPicOrUrl) {
						if (obj.newData.result[0].name == '萌新') {
							// console.log(JSON.parse(JSON.stringify(this.inputsArray)))
							if (this.inputsArray.length == 5) {
								this.inputsArray.splice(5, 0, this.picInput)
							} else {
								this.inputsArray.splice(5, 1, this.picInput);
							}
						} else {
							if (this.inputsArray.length == 5) {
								this.inputsArray.splice(5, 0, this.urlInput)
							} else {
								this.inputsArray.splice(5, 1, this.urlInput);
							}
						}
					} else {
						if (this.inputsArray.length > 5) {
							this.inputsArray.splice(5, 1);
						}
					}
				}
			},
			async validateMemberByWechat(wechat) {
				let res = await this.$apis.validateMemberByWechat({wechat: wechat}, {isRes: true})
				console.log(res)
				if (res.success) {
					this.isNeedPicOrUrl = false;
				} else {
					this.isNeedPicOrUrl = true;
				}
			},
			activeFc: function(res) {
				let _this = this;
				
				// 处理level和music_type字段数据
				res.level      = res.level.result[0].name;
				res.music_type = res.music_type.result[0].name;
				
				if (this.isNeedPicOrUrl) {
					if (this.isNumber(res.pic)) {
						uni.showToast({
							title: "请正确填写视频地址"
						})
						return;
					}
					
					if (res.level == '萌新') {
						if (this.isJSON(res.pic)) {
							let obj = JSON.parse(res.pic);
							if (!obj.success) {
								uni.showToast({
									title: "图片上传失败，请重试"
								})
								return;
							}
							res.pic = obj.url;
						}
					} else {
						if (!this.isURL(res.pic)) {
							uni.showToast({
								title: "请正确填写视频地址"
							})
							return;
						}
					}
				} else {
					res.pic = '';
				}
				
				res.activity_id = this.activity_id;
				res.isOldMember = this.isNeedPicOrUrl ? 2 : 1;
				
				console.log(res)
				// console.log(JSON.stringify(res));
				
				this.submitForm(res)
			},
			async submitForm(paras) {
				let res = await this.$apis.joinActivity(paras, {isRes: true});
				console.log(res)
				
				if (res.success) {
					uni.showToast({
						title: "恭喜! 报名成功"
					})
					setTimeout(function() {
						uni.navigateBack();
						
						// uni.navigateTo({
						// 	url: '../activityinfo/activityinfo?id=' + _this.activity_id
						// });
					}, 600);
				} else if (res.error == 'repeat') {
					uni.showToast({
						title: "不允许重复报名"
					})
				} else if (res.error == 'black') {
					uni.showToast({
						title: "你在黑名单中"
					})
				} else {
					uni.showToast({
						title: "报名失败，请稍后再试"
					})
				}
				
				// this.$http.request({
				// 	url: '/activity/joinActivity',
				// 	method: 'post',
				// 	params: res
				// }).then(res => {
				// 	console.log(res)
				// 	if (res.data.success) {
				// 		uni.showToast({
				// 			title: "恭喜! 报名成功"
				// 		})
				// 		setTimeout(function() {
				// 			uni.navigateBack();
							
				// 			// uni.navigateTo({
				// 			// 	url: '../activityinfo/activityinfo?id=' + _this.activity_id
				// 			// });
				// 		}, 600);
				// 	} else if (res.data.error == 'repeat') {
				// 		uni.showToast({
				// 			title: "不允许重复报名"
				// 		})
				// 	} else if (res.data.error == 'black') {
				// 		uni.showToast({
				// 			title: "你在黑名单中"
				// 		})
				// 	} else {
				// 		uni.showToast({
				// 			title: "报名失败，请稍后再试"
				// 		})
				// 	}
				// }).catch(err => {
				// 	uni.showToast({
				// 		title: "网络不佳，请求失败，请稍后再试"
				// 	})
				// 	console.log(err)
				// })
			},
			
			isJSON: function(str) {
				try {
					// 非json字符串在进行json格式化时会抛出异常
					JSON.parse(str);
					return true;
				} catch(e) {
					return false;
				}
			},
			isNumber: function(val) {
			    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
			    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
			    if (regPos.test(val) || regNeg.test(val)) {
			        return true;
			    } else {
			        return false;
			    }
			},
			isURL: function(url) {
			    const strRegex = /((^http)|(^https)|(^ftp)):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-/.,@?^=%&:/~/+#]*[\w\-/@?^=%&/~/+#])?/
			    const re = new RegExp(strRegex)
			    if (re.test(url)) {
					return true
			    } else {
			        return false
			    }
			}
		}
	}
</script>

<style>

</style>
