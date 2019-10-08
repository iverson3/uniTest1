<template>
	<view class="content">
		<view class="info-title">{{info.name}}</view>
		<rich-text class="info-content" :nodes="info.content"></rich-text>
		
		<u-link class="link" :href="'https://www.baidu.com/'" :text="'链接'"></u-link>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsid: 0,
				info: {}
			}
		},
		onLoad(e) {
			console.log(e.newsid)
			this.newsid = e.newsid
			
			this.getData()
		},
		methods: {
			async getData() {
				// uni.showLoading({
				// 	title: "加载中..."
				// })
				
				let res = await this.$apis.getDetail({id: this.newsid});
				console.log(res)
				
				this.info = res;
				
				
				
				// this.$http.request({
				//     url: '/music/getDetail',
				//     method: 'post',
				//     header: {},
				//     params: {
				// 		id: this.newsid
				//     }
				// }).then(res => {
				// 	uni.hideLoading()
				// 	console.log(res.data.data)
				// 	this.info = res.data.data
				// }).catch(err => {
				// 	uni.hideLoading()
				// 	console.log(err)
				// })
			}
		}
	}
</script>

<style>
	.content {
		flex: 1;
		padding: 10rpx 2%;
		width: 96%;
		flex-wrap: wrap;
	}
	.info-title {
		line-height: 2em;
		font-weight: 700;
		font-size: 38rpx;
		text-align: center;
	}
	.info-content{
		
	}
</style>
