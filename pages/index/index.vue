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
			<view class="uni-list-cell">
				<view class="uni-media-list">
					<view class="uni-media-list-body">
						<view v-if="hasLogin">
							{{username}}
							<view class="logout" @tap="tologout">退出登录</view>
						</view>
						<view v-else>
							<navigator url="../login/login" hover-class="navigator-hover">
								<button type="default">登录</button>
							</navigator>
						</view>
						
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
	import {mapState, mapMutations} from 'vuex';
	
	export default {
		data() {
			return {
				news: []
			}
		},
		onLoad() {
			console.log('hasLogin: ')
			console.log(this.hasLogin)
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
		computed: {
			...mapState(['hasLogin', 'username'])
		},
		methods: {
			...mapMutations(['logout']),
			gotoinfo: function(e) {
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
			},
			tologout: function() {
				// 退出登录后不需要显示的刷新页面，因为退出登录成功后 state改变 页面会自动重新加载
				this.logout();
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
