<template>
	<view>
		<view class="activity-des">
		    <view class="activity-pic">
				<image mode="aspectFit" :src="activityDetail.pic"></image>
			</view>
		    <view>
		        <view class="activity-title">{{activityDetail.name}}</view>
		    </view>
		    <view>
				<view class="uni-list">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<!-- <view class="uni-media-list"> -->
							<view class="uni-list-cell-left">活动时间</view>
							<view class="uni-list-cell-right">{{activityTime}}</view>
						<!-- </view> -->
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<!-- <view class="uni-media-list"> -->
							<view class="uni-list-cell-left">活动地点</view>
							<view class="uni-list-cell-right">{{activityDetail.address}}</view>
						<!-- </view> -->
					</view>
					<view class="uni-list-cell" hover-class="uni-list-cell-hover">
						<!-- <view class="uni-media-list"> -->
							<view class="uni-list-cell-left">主办方</view>
							<view class="uni-list-cell-right">{{activityDetail.author}}</view>
						<!-- </view> -->
					</view>
				</view>
		    </view>
		    <view>
		        <view class="activity-content-label">活动详情：</view>
		        <view class="activity-content-div">
					<rich-text class="activity-content" :nodes="activityDetail.content"></rich-text>
		        </view>
		    </view>
		
		    <view class="activity-member-list">
		        <view class="member-count">
		            已报名({{memberSum}})
					<navigator :url="'../activity/CancelJoinActivity?id='+activityDetail.id" hover-class="navigator-hover">
						<button type="default" v-show="canJoin" class="cancel-join">取消报名>></button>
					</navigator>
		        </view>
				
				<view class="uni-list">
					<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(member,index) in memberList" :key="index">
						<view class="uni-media-list">
							<view class="uni-media-list-top">
								<view class="">{{member.name}}</view>
								<view class="">{{member.music_type + member.level}}</view>
							</view>
							<view class="uni-media-list-bottom">{{'留言：' + member.remark}}</view>
						</view>
					</view>
				</view>
		    </view>
		
		    <navigator :url="'../activity/JoinActivity?id='+activityDetail.id" hover-class="navigator-hover">
		    <view class="activity-join-div" v-show="canJoin">
		        <view class="activity-join">
		            立即报名
		        </view>
		    </view>
		    </navigator>
		    <view class="activity-join-div" v-show="!canJoin">
		        <view class="activity-join canot-join">
		            活动报名已截止
		        </view>
		    </view>
		    <view class="activity-join-div" v-show="!canJoin && isOverTime">
		        <view class="activity-join canot-join">
		            活动已结束
		        </view>
		    </view>
		</view>
		
	</view>
</template>

<script>
	import {mapGetters, mapState} from 'vuex';
	
	export default {
		data() {
			return {
				activityDetail: {
				  id: 0,
				  name: '',
				  author: '',
				  pic: '',
				  content: '',
				  views: 0,
				  start_time: 0,
				  end_time: 0
				},
				memberList: [],
				
				finished: true,
			}
		},
		onLoad: function() {
			console.log(this.activityList)
			console.log(this.curActid)
			console.log(this.curActivityDetail)
			// this.getMemberList()
			// this.initDetailData()
			// this.incrementView()
		},
		computed: {
			...mapState(['activityList', 'curActid']),
			...mapGetters(['curActivityDetail']),
			memberSum: function() {
				return this.memberList.length;
			},
			activityTime: function () {
			  // const m_start = parseInt(this.activityDetail.start_time.substr(5, 2))
			  // const d_start = parseInt(this.activityDetail.start_time.substr(8, 2))
			  // const m_end = parseInt(this.activityDetail.end_time.substr(5, 2))
			  // const d_end = parseInt(this.activityDetail.end_time.substr(8, 2))
			  // // 判断活动开始时间和结束时间是否位于同一天之内
			  // if (m_start === m_end && d_start === d_end) {
			  //   return this.activityDetail.start_time.substr(5, 11) + ' - ' + this.activityDetail.end_time.substr(11, 5)
			  // } else {
			  //   return this.activityDetail.start_time.substr(5, 11) + '至' + this.activityDetail.end_time.substr(5, 11)
			  // }
			  return 'xxxxxx time'
			  // return this.$format(new Date(parseInt(this.activityDetail.start_time) * 1000), 'MM月DD日 HH:mm') + ' - ' + this.$format(new Date(parseInt(this.activityDetail.end_time) * 1000), 'HH:mm')
			},
			// 活动是否已结束
			isOverTime: function () {
			  // let end_time = this.activityDetail.end_time.replace(/-/g, '/')
			  // let end_timestamp = parseInt(new Date(end_time).getTime() / 1000)
			  // let now_timestamp = parseInt(new Date().getTime() / 1000)
			  // if (now_timestamp >= end_timestamp) {
			  //   return true
			  // } else {
			  //   return false
			  // }
			  return true;
			},
			// 距离活动开始是否只剩12小时 是否还可以报名
			canJoin: function () {
			  // let start_time = this.activityDetail.start_time.replace(/-/g, '/')
			  // let s_timestamp = parseInt(new Date(start_time).getTime() / 1000)
			  // let now_timestamp = parseInt(new Date().getTime() / 1000)
			  // if (s_timestamp > now_timestamp + 12 * 60 * 60) {
			  //   return true
			  // } else {
			  //   return false
			  // }
			  return false;
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.activity-des {
	    margin-top: 46px;
	}
	.activity-pic img {
	    width: 100%;
	}
	.activity-title {
	    font-size: 25px;
	    padding: 0 15px 0 15px;
	}
	.activity-content-label {
	    color: gray;
	    padding: 5px 0 5px 15px;
	}
	.activity-content-div img {
	    max-width: 100%;
	}
	.activity-content {
	    padding: 0 15px 20px 15px;
	}
	.activity-content img {
	    max-width: 100%;
	}
	.activity-member-list {
	    width: 100%;
	    min-height: 20px;
	    margin-bottom: 50px;
	}
	.member-count {
	    font-size: 18px;
	    color: #5390e4;
	    background-color: #E0E0E0;
	    padding: 10px 0 10px 15px;
	}
	.cancel-join {
	    float: right;
	    padding-right: 12px;
	    font-size: 12px;
	    color: gray;
	    line-height: 23px;
	}
	.activity-join-div {
	    position: fixed;
	    bottom: 3px;
	    left: 0;
	    width: 100%;
	    height: 35px;
	}
	.activity-join {
	    width: 96%;
	    height: 100%;
	    margin: 0 auto;
	    line-height: 35px;
	    background-color: #5390e4;
	    text-align: center;
	    font-size: 20px;
	    color: white;
	    border-radius: 6px;
	}
	.canot-join {
	    background-color: lightgrey;
	    color: red;
	}
</style>
