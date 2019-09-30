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
						
						ignore: true
					},
					{
						variableName: 'wechat',
						title: '微信号',
						placeholder: "请填写自己的微信号",
						maxlength: 64,
						
						ignore: true
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
						ignore: true
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
						ignore: true
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
					variableName: "pic1",
					title: "琴照上传",
					itemArray: [{
						title: "",
						ignore: false
					}],
					border_bottom: "1px solid #f2f2f2",
					clearColor: "#c0ebd7",
					hide: false,
					// customId: "imgBlob"
				},
				urlInput: {
					variableName: 'pic2',
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
				if (obj.index == 'level') {
					if (obj.newData.result[0].name == '萌新') { 
						
						console.log(this.inputsArray)
						if (this.inputsArray.length == 5) {
							this.inputsArray.splice(4, 0, this.picInput)
						} else {
							this.inputsArray.splice(5, 1, this.picInput);
						}
						console.log(this.inputsArray)
						
						// this.inputsArray[5].hide = false
						// this.inputsArray[6].hide = true
					} else {
						console.log(this.inputsArray)
						if (this.inputsArray.length == 5) {
							this.inputsArray.splice(4, 0, this.urlInput)
						} else {
							this.inputsArray.splice(5, 1, this.urlInput);
						}
						console.log(this.inputsArray)
						
						// this.inputsArray[5].hide = true
						// this.inputsArray[6].hide = false
					}
				}
			},
			activeFc: function(res) {
				// uni.showToast({
				// 	title: "获取输入成功"
				// })
				
				if (res.pic1 == '' && res.pic2 == '') {
					if (res.level == '萌新') {
						uni.showToast({
							title: "请先上传琴照"
						})
					} else {
						uni.showToast({
							title: "请先填写视频地址"
						})
					}
					return;
				}
				
				let pic = '';
				if (res.pic1 != '') {
					// 处理图片上传的结果数据
					let obj = JSON.parse(res.pic1)
					if (!obj.success) {
						uni.showToast({
							title: "图片上传失败，请重试"
						})
						return;
					}
					pic = obj.url;
				} else {
					pic = res.pic2;
				}
				
				res.pic = pic;
				delete res.pic1;
				delete res.pic2;
				
				// 处理level和music_type字段数据
				res.level      = res.level.result[0].name;
				res.music_type = res.music_type.result[0].name;
				
				res.activity_id = this.activity_id;
				
				console.log(res)
				// console.log(JSON.stringify(res));
				
				
			}
		}
	}
</script>

<style>

</style>
