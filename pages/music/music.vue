<template>
	<view class="container">
		<view class="fix-tool-tab">
			<!-- search搜索框 -->
			<!-- <zy-search :is-focus="false" :is-block="true" :show-want="false" @searchStart="gosearch"></zy-search> -->
			<view class="search">
				<!-- #ifdef APP-PLUS -->
					<image src="../../static/zy-search/voice.svg" mode="aspectFit" @click="startRecognize()" class="voice-icon"></image>
				<!-- #endif -->
				<template v-if="isFocus">
					<input maxlength="20" focus type="text" value="" confirm-type="search" @confirm="searchStart()" placeholder="请输入关键词搜索" v-model.trim="searchText"/>
				</template>
				<template v-else>
					<input maxlength="20" type="text" value="" confirm-type="search" @confirm="searchStart()" placeholder="请输入关键词搜索" v-model.trim="searchText"/>
				</template>
				<image src="../../static/zy-search/search.svg" mode="aspectFit" @click="searchStart()" class="search-icon"></image>
			</view>
			
			<!-- picker选择器 -->
			<view class="cate-section">
				<view @tap="showSelector(0)" class="cate-item">
					<text>{{type}}</text>
					<uni-icons type="arrowdown" size="30"></uni-icons>
				</view>
				<view @tap="showSelector(1)" class="cate-item">
					<text>{{level}}</text>
					<uni-icons type="arrowdown" size="30"></uni-icons>
				</view>
				<view @tap="showSelector(2)" class="cate-item">
					<text>{{sort}}</text>
					<uni-icons type="arrowdown" size="30"></uni-icons>
				</view>
			</view>
		</view>
		
		
		<view class="list">
			<!-- 曲谱列表 -->
			<mescroll-uni :fixed="false" :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" >
				<view class="uni-list">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in musicList" :key="index" @tap="gotoinfo" :data-newsid="item.id">
						<view class="uni-media-list">
							<image class="uni-media-list-logo" :src="item.url"></image>
							<view class="uni-media-list-body">
								<view class="uni-media-list-text-top">{{item.name}}</view>
								<view class="uni-media-list-text-bottom uni-ellipsis">{{item.created_at}}</view>
							</view>
						</view>
					</view>
				</view>
			</mescroll-uni>
		</view>
		
		
		<w-picker
			class="typepicker"
			mode="selector" 
			:defaultVal="[0]" 
			@confirm="onTypeConfirm" 
			:current="true"
			ref="typeselector" 
			themeColor="#f00"
			:selectList="typeList"
		></w-picker>
		<w-picker
			class="levelpicker"
			mode="selector" 
			:defaultVal="[0]" 
			@confirm="onLevelConfirm" 
			:current="true"
			ref="levelselector" 
			themeColor="#f00"
			:selectList="levelList"
		></w-picker>
		<w-picker
			class="sortpicker"
			mode="selector" 
			:defaultVal="[0]" 
			@confirm="onSortConfirm" 
			:current="true"
			ref="sortselector" 
			themeColor="#f00"
			:selectList="sortList"
		></w-picker>
	</view>
</template>

<script>
	// import zySearch from '@/components/zy-search/zy-search.vue'
	import wPicker from "@/components/w-picker/w-picker.vue";
	import uniIcons from "@/components/uni-icons/uni-icons.vue";
	import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue";
	
	export default {
		components: {
			wPicker,
			uniIcons,
			MescrollUni,
			// zySearch
		},
		data() {
			return {
				searchText:'',		
				isFocus: false,
				
				selectList: [
					{default: '类型', ref: 'typeselector'},
					{default: '难度', ref: 'levelselector'},
					{default: '排序', ref: 'sortselector'}
				],
				page: 1,
				
				type: '类型',
				typeList:[
					{
						label: "全部",
						value: 1
					}
					,{
						label: "单音",
						value: 2
					},
					{
						label: "指弹",
						value: 3
					},
					{
						label: "弹唱",
						value: 4
					},
					{
						label: "合奏",
						value: 5
					}
				],
				
				level: '难度',
				levelList:[
					{
						label: "全部",
						value: 1
					}
					,{
						label: "萌新",
						value: 2
					},
					{
						label: "入门",
						value: 3
					},
					{
						label: "进阶",
						value: 4
					},
					{
						label: "困难",
						value: 5
					},
					{
						label: "大神",
						value: 6
					}
				],
				
				sort: '排序',
				sortList:[
					{
						label: "综合",
						value: 'mix'
					}
					,{
						label: "时间",
						value: 'created_at'
					},
					{
						label: "热度",
						value: 'views'
					},
					{
						label: "曲名",
						value: 'name'
					}
				],
				
				mescroll: null, // mescroll组件的实例对象
				downOption: {
					use: true,  // 是否启用下拉刷新; 默认true
					auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
				},
				upOption: {
					use: true,  // 是否启用上拉加载; 默认true
					auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
					page: {
						num: 0,  // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 3  // 每页数据的数量,默认10
					},
					noMoreSize: 0, // 配置列表的总数量要大于等于多少条才显示'-- END --'的提示
					empty: {
						tip: '暂无相关数据'
					}
				},
				
				musicList: [],
			}
		},
		onLoad: function() {
			
		},
		methods: {
			showSelector: function(index){
				let item = this.selectList[index];
				this.$refs[item.ref].show();
			},
			onTypeConfirm(val){
				console.log(val);
				this.type = val.result;
				if (this.mescroll) {
					this.downCallback(this.mescroll)
				} else {
					this.page = 1;
					this.getData()
				}
			},
			onLevelConfirm(val){
				console.log(val);
				this.level = val.result;
				if (this.mescroll) {
					this.downCallback(this.mescroll)
				} else {
					this.page = 1;
					this.getData()
				}
			},
			onSortConfirm(val){
				console.log(val);
				this.sort = val.result;
				if (this.mescroll) {
					this.downCallback(this.mescroll)
				} else {
					this.page = 1;
					this.getData()
				}
			},
			
			downCallback: function(mescroll){
				console.log('下拉刷新')
				this.page = 1
				mescroll.resetUpScroll();  // 重置列表为第一页 (自动执行 page.num=1, 再触发upCallback方法 )
			},
			
			/*上拉加载的回调*/
			upCallback: function(mescroll) {
				console.log('上拉加载')
				this.mescroll = mescroll
				this.getData()
			},
			
			getData: function() {
				let type = (this.type == '全部' || this.type == '类型')? '' : this.type
				let level = (this.level == '全部' || this.level == '难度')? '' : this.level
				let sort = (this.sort == '排序')? 'mix' : this.sort
				for (let s of this.sortList) {
					if (sort == s.label) {
						sort = s.value
						break
					}
				}
				
				// 根据页面选择的条件 调用api从服务器端获取数据
				this.$http.request({
					url: '/music/getMusicList',
					method: 'post',
					header: {},
					params: {
						page: this.page,
						pagesize: this.upOption.page.size,
						name: this.searchText,
						type: type,
						level: level,
						order: sort
					}
				}).then(res => {
					console.log(res)
					let data = res.data.data;
					let curPageData = data.data; 
					let totalSize   = data.total; 
					
					// 如果是第一页 则置空列表数据
					if(this.page == 1) {
						this.musicList = [];
					}   
					this.musicList = this.musicList.concat(curPageData); // 追加新数据
					
					if (this.mescroll) {
						// 成功隐藏下拉加载状态
						this.mescroll.endBySize(curPageData.length, totalSize); 
					}
					
					// 判断是否还有下一页
					if (data.last_page > this.page) {
						this.page = this.page + 1;
					}
				}).catch(err => {
					if (this.mescroll) {
						// 失败隐藏下拉加载状态
						this.mescroll.endErr()
					}
					console.log(err)
				})
			},
			
			searchStart: function() {	// 触发搜索
				// if (this.searchText == '') {
				// 	uni.showToast({
				// 		title: '请输入关键字',
				// 		icon: 'none',
				// 		duration: 1000
				// 	});
				// 	return false;
				// } else {
					console.log(this.searchText)
					if (this.mescroll) {
						this.downCallback(this.mescroll)
					} else {
						this.page = 1;
						this.getData()
					}
				// }
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
		}
	}
</script>

<style lang="less" scoped>
	.container {
		display: flex;
		flex-direction: column;
	}
	
	.fix-tool-tab {
		position: fixed;
		width: 100%;
		z-index: 10000;
	}
	
	/* picker选择器 */
	/* #ifdef MP */
	.cate-section{
		position:relative;
		z-index:5;
		border-radius:16upx 16upx 0 0;
		margin-top:-20upx;
		background-color: #F7F7F7;
	}
	/* #endif */
	
	.cate-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap:wrap;
		padding: 15upx 22upx 16upx 22upx; 
		background: #F7F7F7;
		.cate-item {
			display: flex;
			flex-direction: row;
			align-items: center;
			font-size: 20upx;
			color: #333333;
			text {
				font-size: 38rpx;
			}
		}
	}
	.ad-1{
		width: 100%;
		height: 210upx;
		padding: 10upx 0;
		background: #fff;
		image{
			width:100%;
			height: 100%; 
		}
	}
	
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
	
	// 数据列表容器
	.list {
		display: flex;
		flex-direction: column;
		height: auto;
		min-height: 500rpx;
		width: 100%;
		padding-top: 180rpx;
	}
	.uni-media-list-body {
		height: auto;
	}
</style>
