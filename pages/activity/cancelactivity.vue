<template>
	<view>
		<!-- search搜索框 -->
		<!-- <zy-search :is-focus="false" :is-block="true" :show-want="false" @searchStart="gosearch"></zy-search> -->
		<view class="search">
			<!-- #ifdef APP-PLUS -->
				<image :src="search_icon_voice" mode="aspectFit" @click="startRecognize()" class="voice-icon"></image>
			<!-- #endif -->
			<template v-if="isFocus">
				<input maxlength="20" focus type="text" value="" confirm-type="search" @confirm="searchStart()" placeholder="请输入微信号搜索" v-model.trim="searchText"/>
			</template>
			<template v-else>
				<input maxlength="20" type="text" value="" confirm-type="search" @confirm="searchStart()" placeholder="请输入微信号搜索" v-model.trim="searchText"/>
			</template>
			<image :src="search_icon_search" mode="aspectFit" @click="searchStart()" class="search-icon"></image>
		</view>
		
		<view v-show="showInfo" class="member-info">
			<view class="member-info-result">{{ searchResult }}</view>
			<view>微信号：{{ memberInfo.wechat }}</view>
			<view>名字：{{ memberInfo.name }}</view>
			<view>乐器类型：{{ memberInfo.music_type }}</view>
			<view>能力分类：{{ memberInfo.level }}</view>
			<view>备注信息：{{ memberInfo.remark }}</view>
			<view v-show="showRedTip" class="redTip">提示: 您的微信号已经被管理员禁用!</view>
		</view>
		<view v-show="showCancelButton" @click="cancelClick()" class="cancel-button">取消报名</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activity_id: 0,
				
				searchText: '',
				searchResult: '',
				memberInfo: {},
				isFocus: false,
				showInfo: false,
				showRedTip: false,
				showCancelButton: false,
				
				search_icon_search: this.$mAssetsPath.search_icon_search,
				search_icon_voice: this.$mAssetsPath.search_icon_voice,
			}
		},
		onLoad: function(e) {
			this.activity_id = e.id;
			console.log(e)
		},
		methods: {
			async searchStart() {	// 触发搜索
				if (this.searchText == '') {
					uni.showToast({
						title: '请输入微信号',
						icon: 'none',
						duration: 1000
					});
					return false;
				}
				console.log(this.searchText)
				
				let paras = {
					activity_id: this.activity_id,
					wechat: this.searchText
				}
				let res = await this.$apis.searchMember(paras, {isRes: true});
				console.log(res)
				
				if (res.success) {
					this.showInfo = true
					if (parseInt(res.data.status) === 1) {
						this.showCancelButton = true
						this.showRedTip = false
					} else {
						this.showCancelButton = false
						this.showRedTip = true
					}
					this.searchResult = '以下是查询到的报名信息：';
					this.memberInfo = res.data;
							  
				} else {
					this.searchResult = res.error
					this.showInfo = false
					this.showCancelButton = false
					// this.searchResult = ''
					uni.showToast({
						title: '没有查到该微信号的报名信息',
						icon: 'none',
						duration: 1000
					});
				}
				
				// this.$http.request({
				// 	url: '/activity/searchMember',
				// 	method: 'post',
				// 	params: paras
				// }).then(res => {
				// 	console.log(res)
				// 	if (res.data.success) {
				// 		this.showInfo = true
				// 		if (parseInt(res.data.data.status) === 1) {
				// 			this.showCancelButton = true
				// 			this.showRedTip = false
				// 		} else {
				// 			this.showCancelButton = false
				// 			this.showRedTip = true
				// 		}
				// 		this.searchResult = '以下是查询到的报名信息：';
				// 		this.memberInfo = res.data.data;
								  
				// 	} else {
				// 		this.searchResult = res.data.error
				// 		this.showInfo = false
				// 		this.showCancelButton = false
				// 		// this.searchResult = ''
				// 		uni.showToast({
				// 			title: '没有查到该微信号的报名信息',
				// 			icon: 'none',
				// 			duration: 1000
				// 		});
				// 	}
				// }).catch(err => {
				// 	console.log(err)
				// })
					
			},
			startRecognize: function() {	//语音输入
				let _this = this;
				let options = {};
				options.engine = 'iFly';
				options.punctuation = false; // 是否需要标点符号 
				options.timeout = 10 * 1000;
				plus.speech.startRecognize(options, function(s) {
					_this.searchText = _this.searchText + s;
				});
			},
			
		    cancelClick: function() {
				const _this = this;
				if (this.searchText == '') {
					uni.showToast({
						title: '请输入微信号',
						icon: 'none',
						duration: 1000
					});
					return false;
				}
				
				uni.showModal({
				    title: '有琴提示',
				    content: '确定要取消本次活动的报名么',
				    success: function (res) {
				        if (res.confirm) {
				            _this.cancelJoin();
				        }
				    }
				});
				
			},
			async cancelJoin() {
				let paras = {
				  activity_id: this.activity_id,
				  wechat: this.searchText
				}
				
				let result = await this.$apis.cancelActivity(paras, {isRes: true});
				console.log(result)
				
				if (result.success) {
					uni.showToast({
						title: '取消成功'
					});
					setTimeout(function() {
						uni.navigateBack();
					}, 800);
				} else {
					uni.showToast({
						title: '取消失败，请重试',
						duration: 1000
					});
				}
				
				
				// _this.$http.request({
				// 	url: '/activity/cancelActivity',
				// 	method: 'post',
				// 	params: paras
				// }).then(res => {
				// 	console.log(res)
				// 	if (res.data.success) {
				// 		uni.showToast({
				// 			title: '取消成功'
				// 		});
				// 		setTimeout(function() {
				// 			uni.navigateBack();
				// 		}, 800);
				// 	} else {
				// 		uni.showToast({
				// 			title: '取消失败，请重试',
				// 			duration: 1000
				// 		});
				// 	}
				// }).catch(err => {
				// 	console.log(err)
				// })
			}
		}
	}
</script>

<style lang="less" scoped>
	/* #ifdef MP-WEIXIN */
	.search {
		margin-bottom: 25rpx!important;
	}
	/* #endif */
	/* #ifdef APP-PLUS */
	.search {
		margin-bottom: 3rpx!important;
	}
	/* #endif */
	.search{
		width: 98%;
		margin: 0px auto;
		position: relative;
		margin-top: 2rpx;
		// border-bottom: 1px solid #d5d5d6;
		// border-top: 1px solid #d5d5d6;
		input{
			background-color: #F7F7F7;
			padding: 10upx 74upx;
			font-size: 28upx;
			border-radius: 50upx;
			height: 64rpx;
		}
		.voice-icon{
			width: 36upx;
			height: 36upx;
			padding: 16upx 20upx 16upx 0;
			position: absolute;
			left: 16upx;
			top: 4upx;
			z-index: 10;
		}
		.search-icon{
			width: 36upx;
			height: 36upx;
			padding: 22upx 20upx 16upx 0;
			position: absolute;
			right: 0;
			top: 4upx;
			z-index: 10;
		}
	}
	
	.member-info {
		padding-left: 28rpx;
		color: #BBBBBB;
	}
	.member-info view {
		font-size: 28rpx;
		line-height: 48rpx;
	}
	.member-info-result {
		color: #6D6D72;
		font-size: 34rpx!important;
		margin-bottom: 20rpx;
		margin-top: 30rpx;
	}
	.cancel-button {
		background-color: #E04B28;
		padding: 10rpx;
		color: white;
		float: right;
		margin-right: 25rpx;
		border-radius: 8rpx;
		margin-top: 30rpx;
		text-align: center;
	}
</style>
