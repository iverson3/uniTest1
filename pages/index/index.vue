<template>
	<view class="content">
	
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in news" :key="index" @tap="gotoinfo" :data-newsid="item.id">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="item.url"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.name}}</view>
						<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
					</view>
				</view>
			</view>
		</view>
		
		
		<!-- #ifdef MP-WEIXIN -->
		<text>mp</text>
		<!-- #endif -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				news: []
			}
		},
		onLoad() {
			this.$http.request({
			    url: '/music/getMusicList',
			    method: 'post',
			    header: {},
			    params: {
					page: 1,
					pagesize: 10,
					name: '',
					type: '',
					level: '',
					order: ''
			    }
			}).then(res => {
				console.log(res)
				this.news = res.data.data.data
			}).catch(err => {
				console.log(err)
			})
		},
		methods: {
			gotoinfo(e) {
				var newsid = e.currentTarget.dataset.newsid;
				uni.navigateTo({
					url: '../info/info?newsid=' + newsid,
					success: res => {
						console.log('gotoinfo success')
					},
					fail: () => {
						console.log('gotoinfo fail')
					},
					complete: () => {
						console.log('gotoinfo complete')
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		flex: 1;
	}
	.uni-media-list {
		height: auto;
	}
</style>
