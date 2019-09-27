<template>
	<view>
		
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
</template>

<script>
	// import zySearch from '@/components/zy-search/zy-search.vue'
	import wPicker from "@/components/w-picker/w-picker.vue";
	import uniIcons from "@/components/uni-icons/uni-icons.vue";
	
	export default {
		components: {
			wPicker,
			uniIcons,
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
			}
		},
		methods: {
			showSelector: function(index){
				let item = this.selectList[index];
				this.$refs[item.ref].show();
			},
			onTypeConfirm(val){
				console.log(val);
				this.type = val.result;
				this.getData()
			},
			onLevelConfirm(val){
				console.log(val);
				this.level = val.result;
				this.getData()
			},
			onSortConfirm(val){
				console.log(val);
				this.sort = val.result;
				this.getData()
			},
			getData: function() {
				console.log(this.searchText)
				console.log(this.type)
				console.log(this.level)
				console.log(this.sort)
				// 根据页面选择的条件 调用api从服务器端获取数据
			},
			
			searchStart: function() {	//触发搜索
				let _this = this;
				if (_this.searchText == '') {
					uni.showToast({
						title: '请输入关键字',
						icon: 'none',
						duration: 1000
					});
					return false;
				}else{
					console.log(_this.searchText)
					_this.getData()
					// uni.getStorage({
					// 	key:'search_cache',
					// 	success(res){
					// 		let list = res.data;
					// 		console.log(list);
					// 		if(list.length > 5){
					// 			for(let item of list){
					// 				if(item == _this.searchText){
					// 					return false;
					// 				}
					// 			}
					// 			list.pop();
					// 			list.unshift(_this.searchText);
					// 		}else{
					// 			for(let item of list){
					// 				if(item == _this.searchText){
					// 					return false;
					// 				}
					// 			}
					// 			list.unshift(_this.searchText);
					// 		}
					// 		uni.setStorage({
					// 			key: 'search_cache'
					// 		});
					// 	},
					// 	fail() {
					// 		uni.setStorage({
					// 			key: 'search_cache'
					// 		});
					// 	}
					// })
				}
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
			}
		}
	}
</script>

<style lang="less" scoped>
	/* 分类 */
	/* #ifdef MP */
	.cate-section{
		position:relative;
		z-index:5;
		border-radius:16upx 16upx 0 0;
		margin-top:-20upx;
	}
	/* #endif */
	
	.cate-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap:wrap;
		padding: 30upx 22upx 0 22upx; 
		background: #fff;
		.cate-item {
			display: flex;
			flex-direction: row;
			align-items: center;
			font-size: 20upx;
			color: #333333;
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
	
	.search{
		width: 640upx;
		margin: 30upx auto 0;
		position: relative;
		input{
			background-color: #F7F7F7;
			padding: 10upx 74upx;
			font-size: 28upx;
			// border-radius: 50upx;
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
			padding: 16upx 20upx 16upx 0;
			position: absolute;
			right: 0;
			top: 4upx;
			z-index: 10;
		}
	}
</style>
