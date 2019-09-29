<template>
	<view>
		<mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" >
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in activityList" :key="index" @tap="gotoinfo" :data-activityid="item.id">
					<view class="uni-media-list">
						<image class="uni-media-list-logo" :src="item.pic"></image>
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{item.name}}</view>
							<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
						</view>
					</view>
				</view>
			</view>
		</mescroll-uni>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex';
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
	
	export default {
		components: {
			MescrollUni
		},
		data() {
			return {
				// 下拉刷新的常用配置
				downOption: { 
					use: true,  // 是否启用下拉刷新; 默认true
					auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
				},
				// 上拉加载的常用配置
				upOption: {
					use: true,  // 是否启用上拉加载; 默认true
					auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
					page: {
						num: 0,  // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 100 // 每页数据的数量,默认10
					},
					noMoreSize: 1, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
					empty: {
						tip: '暂无相关数据'
					}
				},
				
				// 列表数据
				activityList: [],
				orderby: 'created_at'
			}
		},
		methods: {
			...mapMutations(['setActivityList', 'setCurActId']),
			downCallback: function(mescroll){
				console.log('下拉刷新')
				mescroll.resetUpScroll();  // 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
			},
			upCallback: function(mescroll) {
				console.log('上拉加载更多')
				
				this.$http.request({
					url: '/activity/getActivityList',
					method: 'post',
					params: {
						orderby: this.orderby
					}
				}).then(res => {
					console.log(res)
					
					// 接口返回的当前页数据列表 (数组)
					let curPageData = res.data.data; 
					let totalSize   = res.data.data.length; 
					
					// 设置列表数据
					if(mescroll.num == 1) this.activityList = []; // 如果是第一页需手动置空列表
					this.activityList = this.activityList.concat(curPageData); //追加新数据
					
					// 把活动列表数据添加到store
					this.setActivityList(this.activityList)
					
					// 成功隐藏下拉加载状态
					mescroll.endBySize(curPageData.length, totalSize); 
				}).catch(err => {
					console.log(err)
					// 失败隐藏下拉加载状态
					mescroll.endErr()
				})
			},
			gotoinfo: function(e) {
				var id = e.currentTarget.dataset.activityid;
				this.setCurActId(id);
				uni.navigateTo({
					url: '../activityinfo/activityinfo?id=' + id
				});
			},
		}
	}
</script>

<style>
	.uni-media-list-body {
		height: auto;
	}
</style>
