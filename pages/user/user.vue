<template>
	<view>
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
		
		<!-- 与swiper结合实现同步更新的效果 -->
		<wuc-tab :tab-list="tabList" :tabCur.sync="TabCur" @change="tabChange"></wuc-tab>
		<swiper :current="TabCur" duration="300" @change="swiperChange">
		  <swiper-item v-for="(item,index) in tabList" :key="index">
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
				tabList: [{ name: '精选' }, { name: '订阅' }],
			}
		},
		methods: {
			tabChange: function(index) {
				this.TabCur = index;
			}
		}
	}
</script>

<style>

</style>
