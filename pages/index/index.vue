<template>
	<view class="content">
		<!-- 头部轮播 -->
		<view class="carousel-section">
			<!-- 标题栏和状态栏占位符 -->
			<view class="titleNview-placing"></view>
			<!-- 背景色区域 -->
			<view class="titleNview-background"></view>
			<swiper class="carousel" circular @change="swiperChange">
				<swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item" @click="navToDetailPage({id: item.id})">
					<image class="carousel-item-image" :src="item.src" />
				</swiper-item>
			</swiper>
			<!-- 自定义swiper指示器 -->
			<view class="swiper-dots">
				<text class="num left-num">{{swiperCurrent+1}}</text>
				<text class="sign">/</text>
				<text class="num">{{swiperLength}}</text>
			</view>
		</view>
		
		<!-- Grid九宫格 - 商品类别 -->
		<uni-grid :column="4" @change="clickGrid">
			<uni-grid-item v-for="(cate, index) in cateList" :key="index">
				<!-- <navigator :url="'../info/info?newsid='+cate.cateid"> -->
					<image :src="cate.url" class="image" mode="aspectFill" />
					<text class="text">{{ cate.text }}</text>
				<!-- </navigator> -->
			</uni-grid-item>
		</uni-grid>
		
		
		<view class="navbar">
			<view 
				v-for="(item, index) in navList" :key="index" 
				class="nav-item" 
				:class="{current: tabCurrentIndex === index}"
				@click="tabClick(index)"
			>
				{{item.text}}
			</view>
		</view>
		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(tabItem,tabIndex) in navList" :key="tabIndex">
				<!-- 空白页 -->
				<empty v-if="tabItem.loaded === true && tabItem.musicList.length === 0"></empty>
				
				<!-- 曲谱列表 -->
				<view class="uni-list" v-else>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in tabItem.musicList" :key="index" @tap="gotoinfo" :data-newsid="item.id">
						<view class="uni-media-list">
							<image class="uni-media-list-logo" :src="item.url"></image>
							<view class="uni-media-list-body">
								<view class="uni-media-list-text-top">{{item.name}}</view>
								<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
							</view>
						</view>
					</view>
				</view>
				
				<!-- 这个地方不需要"加载更多"的组件 因为这里只需要加载一次数据就够了(最多十条数据)  -->
				<!-- <uni-load-more :status="tabItem.loadingType"></uni-load-more> -->
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';
	import uniGrid from "@/components/uni-grid/uni-grid.vue";
	import uniGridItem from "@/components/uni-grid/uni-grid-item.vue";
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import empty from "@/components/empty";
	
	export default {
		components: {
			uniGrid,
			uniGridItem,
			uniLoadMore,
			empty
		},
		data() {
			return {
				carouselList: [],
				swiperCurrent: 0,
				swiperLength: 0,
				
				tabCurrentIndex: 0,
				navList: [
					{
						id: 2,
						state: 'views',
						text: '最热曲谱',
						loadingType: 'more',
						musicList: []
					},
					{
						index: 3,
						state: 'created_at',
						text: '最新曲谱',
						loadingType: 'more',
						musicList: []
					},
					{
						index: 5,
						state: 'views',
						text: '冷门曲谱',
						loadingType: 'more',
						musicList: []
					},
				],
				
				// 这部分数据也可以通过api接口从服务器端获取
				cateList: [{
						cateid: 1,
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-1.png',
						text: '新浪'
					},
					{
						cateid: 2,
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
						text: '微信'
					},
					{
						cateid: 3,
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/gird-3.png',
						text: 'QQ'
					},
					{
						cateid: 4,
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-6.png',
						text: '抖音'
					},
					{
						cateid: 5,
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-7.png',
						text: '百度'
					},
					{
						cateid: 6,
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-8.png',
						text: '支付宝'
					},
					{
						cateid: 7,
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-9.png',
						text: '字节跳动'
					},
					{
						cateid: 8,
						url: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-4.png',
						text: '手机'
					}
				]
			}
		},
				
		async onLoad(query) {
			await this.$AppEntryController.main(query);
			
			/* 首页轮播图数据 */
			this.carouselList = [{
					id: 2,
					src: this.$mAssetsPath.index_swiper_1
				},
				{
					id: 3,
					src: this.$mAssetsPath.index_swiper_2
				},
				{
					id: 5,
					src: this.$mAssetsPath.index_swiper_3
				}
			];
			this.swiperLength = this.carouselList.length;
			
			this.tabCurrentIndex = 0;
			this.loadMusicData('tabChange')
		},
		computed: {
		},
		methods: {
			...mapMutations(['logout']),
			gotoinfo: function(e) {
				var newsid = e.currentTarget.dataset.newsid;
				
				this.$mRouter.push({
					route:  this.$mRoutesConfig.musicinfo,
					query: {
						newsid: newsid
					}
				})
			},
			tologout: function() {
				// 退出登录后不需要显示的刷新页面，因为退出登录成功后 state改变 页面会自动重新加载
				// 这是遵循vue的state状态机制的
				this.logout();
			},
			
			clickGrid: function(e) {
				var index = e.detail.index;
				// uni.navigateTo({
				// 	url: "/pages/info/info?newsid=" + this.cateList[index].cateid
				// });
			},
			
			swiperChange: function(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
			},
			navToDetailPage: function(item) {
				console.log(item)
				this.$mRouter.push({
					route:  this.$mRoutesConfig.musicinfo,
					query: {
						newsid: item.id
					}
				})
			},
			
			async loadMusicData(source){
				// 这里是将订单挂载到tab列表下
				let index   = this.tabCurrentIndex;
				let navItem = this.navList[index];
				let state   = navItem.state;
				
				// tab切换只有第一次需要加载数据
				if(source === 'tabChange' && navItem.loaded === true){
					return;
				}
				// 防止重复加载
				if(navItem.loadingType === 'loading' || navItem.loadingType === 'noMore'){
					return;
				}
				navItem.loadingType = 'loading';
		
				let paras = {
					page: 1,
					pagesize: 10,
					name: '',
					type: '',
					level: '',
					order: state
				}
				let data = await this.$apis.getMusicList(paras);
				console.log(data)
				
				data.data.forEach(item => {
					navItem.musicList.push(item);
				})
			
				// loaded新字段用于表示数据加载完毕，如果为空可以显示空白页
				this.$set(navItem, 'loaded', true);
				// 判断是否还有数据，有改为more，没有改为noMore (此页面只加载一页数据)
				navItem.loadingType = 'noMore';
			}, 
			// swiper 切换
			changeTab(e){
				this.tabCurrentIndex = e.target.current;
				this.loadMusicData('tabChange');
			},
			// 顶部tab点击
			tabClick(index){
				this.tabCurrentIndex = index;
			}
		}
	}
</script>

<style>
	.content {
		flex: 1;
	}
	
	/* #ifdef MP */
	.carousel-section{
		padding: 0;
	}
	.titleNview-placing {
		padding-top: 0;
		height: 0;
	}
	.carousel{
	}
	.carousel-item{
		padding: 0;
	}
	.swiper-dots{
		left:45upx;
		bottom:40upx;
	}
	.carousel-item-image {
		width: 100%;
		height: 100%;
	}
	/* #endif */
	
	/* 头部 轮播图 */
	.carousel-section {
		position: relative;
	}
	.titleNview-placing {
		height: var(--status-bar-height);
		box-sizing: content-box;
	}
	.titleNview-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 426upx;
		transition: .4s;
	}
	.carousel {
		width: 100%;
		height: 350upx;
	}
	.carousel-item {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.carousel-item-image {
		width: 100%;
		height: 100%;
		border-radius: 10upx;
	}
	.swiper-dots {
		display: flex;
		position: absolute;
		left: 60upx;
		bottom: 15upx;
		width: 72upx;
		height: 36upx;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
		background-size: 100% 100%;
	}
	.num {
		width: 36upx;
		height: 36upx;
		border-radius: 50px;
		font-size: 24upx;
		color: #fff;
		text-align: center;
		line-height: 36upx;
	}
	.sign {
		position: absolute;
		top: 0;
		left: 50%;
		line-height: 36upx;
		font-size: 12upx;
		color: #fff;
		transform: translateX(-50%);
	}
	
	
	.uni-media-list {
		height: auto;
	}
	
	.image {
		width: 50upx;
		height: 50upx;
	}
	.text {
		font-size: 26upx;
		margin-top: 10upx;
	}
	
	
	.swiper-box{
		/* height: calc(100% - 40px); */
		height: 700px;
	}
	.navbar{
		display: flex;
		height: 40px;
		padding: 0 5px;
		background: #F4F5F6;
		box-shadow: 0 1px 5px rgba(0,0,0,.06);
		position: relative;
		z-index: 10;
	}
	.nav-item{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		font-size: 15px;
		color: #555555;
		position: relative;
	}
	.current{
		color: #555555;
	}
	.current:after{
		content: '';
		position: absolute;
		left: 50%;
		bottom: 0;
		transform: translateX(-50%);
		width: 44px;
		height: 0;
		border-bottom: 2px solid #555555;
	}
	
	/* load-more */
	.uni-load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center
	}
	@-webkit-keyframes load {
		0% {
			opacity: 1
		}
	
		100% {
			opacity: .2
		}
	}
</style>
