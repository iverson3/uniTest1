<template>
	<view>
		<!-- 与swiper结合实现同步更新的效果 -->
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
		<swiper :current="TabCur" duration="300" @change="swiperChange">
		  <swiper-item v-for="(item,index) in tabList" :key="index">
		    <div>{{item.name}}</div>
			<div>{{item.name}}</div>
			<div>{{item.name}}</div>
			<div>{{item.name}}</div>
			<div>{{item.name}}</div>
			<div>{{item.name}}</div>
			<div>{{item.name}}</div>
			<div>{{item.name}}</div>
			<div>{{item.name}}</div>
		  </swiper-item>
		</swiper>
	</view>
</template>

<script>
	import WucTab from '@/components/wuc-tab/wuc-tab.vue';
	
	export default {
		components: { 
			WucTab 
		},
		data() {
			return {
				TabCur: 0,
				tabList: [
					{ id: 2, name: '类别1', sort: 1},
					{ id: 3, name: '类别2', sort: 1},
					{ id: 4, name: '类别3', sort: 1},
					{ id: 5, name: '类别4', sort: 1},
					{ id: 6, name: '类别5', sort: 1},
					{ id: 7, name: '类别6', sort: 1},
					{ id: 8, name: '类别7', sort: 1},
					{ id: 9, name: '类别8', sort: 1},
					{ id: 10, name: '类别9', sort: 1}
				],
			}
		},
		methods: {
			tabChange: function(index) {
				this.TabCur = index;
			},
			swiperChange: function(e) {
				let index = e.detail.current;
				this.TabCur = index;
				
				let cateid = this.tabList[index].id;
				console.log(cateid)
				// 有了cateid 再去调用api获取该分类下的数据
				// 具体实现方式可参考index页面的navbar组件
			}
		}
	}
</script>

<style>

</style>
