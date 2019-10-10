<template>
	<view>
		<view class="activity-des">
		    <view class="activity-pic">
				<image mode="widthFix" :src="activityDetail.pic"></image>
			</view>
		    <view>
		        <view class="activity-title">{{activityDetail.name}}</view>
		    </view>
		    <view>
				<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">活动时间</view>
						<view class="uni-list-cell-right">{{activityTime}}</view>
					</view>
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">活动地点</view>
						<view class="uni-list-cell-right">{{activityDetail.address}}</view>
					</view>
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">主办方</view>
						<view class="uni-list-cell-right">{{activityDetail.author}}</view>
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
		            <view class="member-count-text">已报名({{memberSum}})</view>
					<view v-show="canJoin" @click="cancelJoin(activityDetail.id)" class="cancel-join member-count-cancel">取消报名>></view>
		        </view>
				
				<view class="uni-list">
					<view class="uni-list-cell" v-for="(member,index) in memberList" :key="index">
						<view class="uni-media-list">
							<view class="uni-media-list-top">
								<view class="uni-media-list-top-left">{{member.name}}</view>
								<view class="uni-media-list-top-right">{{member.music_type + "-" + member.level}}</view>
							</view>
							<view class="uni-media-list-bottom">{{'留言：' + member.remark}}</view>
						</view>
					</view>
				</view>
		    </view>
	
		    <view class="activity-join-div" v-show="canJoin" @click="gotoJoin(activityDetail.id)">
		        <view class="activity-join">
		            立即报名
		        </view>
		    </view>
		
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
				activityDetail: null,
				memberList: [],
			}
		},
		onLoad: function(e) {
			console.log(this.curActid)
			this.activityDetail = this.curActivityDetail
			
			console.log(getCurrentPages())
		},
		
		// 每次页面出现，该方法都会执行 (包括uni.navigateBack()返回上个页面)
		onShow: function() {
			console.log('activityinfo page show')
			this.refreshData()
			
			if (typeof this.$mRoutesConfig.activityinfo.after == 'function') {
				this.$mRoutesConfig.activityinfo.after()
			}
		},
		computed: {
			...mapState(['curActid']),
			...mapGetters(['curActivityDetail']),
			memberSum: function() {
				return this.memberList.length;
			},
			activityTime: function () {
				if (!this.activityDetail) {
					return '';
				}
			
				const m_start = parseInt(this.activityDetail.start_time.substr(5, 2))
				const d_start = parseInt(this.activityDetail.start_time.substr(8, 2))
				const m_end = parseInt(this.activityDetail.end_time.substr(5, 2))
				const d_end = parseInt(this.activityDetail.end_time.substr(8, 2))
				// 判断活动开始时间和结束时间是否位于同一天之内
				if (m_start === m_end && d_start === d_end) {
					return this.activityDetail.start_time.substr(5, 11) + ' - ' + this.activityDetail.end_time.substr(11, 5)
				} else {
					return this.activityDetail.start_time.substr(5, 11) + '至' + this.activityDetail.end_time.substr(5, 11)
				}
			    // return this.$format(new Date(parseInt(this.activityDetail.start_time) * 1000), 'MM月DD日 HH:mm') + ' - ' + this.$format(new Date(parseInt(this.activityDetail.end_time) * 1000), 'HH:mm')
			},
			// 活动是否已结束
			isOverTime: function () {
				if (!this.activityDetail) {
					return true;
				}
				let end_time = this.activityDetail.end_time.replace(/-/g, '/')
				let end_timestamp = parseInt(new Date(end_time).getTime() / 1000)
				let now_timestamp = parseInt(new Date().getTime() / 1000)
				if (now_timestamp >= end_timestamp) {
					return true
				} else {
					return false
				}
			},
			// 距离活动开始是否只剩12小时 是否还可以报名
			canJoin: function () {
				if (!this.activityDetail) {
					return false;
				}
				let start_time = this.activityDetail.start_time.replace(/-/g, '/')
				let s_timestamp = parseInt(new Date(start_time).getTime() / 1000)
				let now_timestamp = parseInt(new Date().getTime() / 1000)
				if (s_timestamp > now_timestamp + 12 * 60 * 60) {
					return true
				} else {
					return false
				}
			}
		},
		methods: {
			async refreshData() {
				let activityid = this.curActid;
				
				let res = await this.$apis.getMemberList({id: activityid});
				console.log(res)
				this.memberList = res;
				
				// 增加访问量
				let res2 = await this.$apis.incrementView({id: activityid});
			},
			gotoJoin: function(id) {
				this.$mRouter.push({
					route:  this.$mRoutesConfig.joinactivity,
					query: {
						id: id
					}
				})
			},
			cancelJoin: function(id) {
				this.$mRouter.push({
					route:  this.$mRoutesConfig.cancelactivity,
					query: {
						id: id
					}
				})
			}
		}
	}
</script>

<style scoped>
	.activity-des {
	    /* margin-top: 46px; */
	}
	.activity-pic {
		margin-top: -25rpx;
		width: 100%;
	}
	.activity-pic image {
		width: 100%!important;
		height: auto;
		will-change: transform;
	}
	.activity-title {
	    font-size: 46rpx;
	    padding: 20rpx 30rpx 30rpx 30rpx;
		line-height: 1.4;
	}
	.uni-list-cell {
		padding: 10rpx 0 10rpx 0;
	}
	.uni-list-cell-right {
		text-align: right;
		padding-right: 20rpx;
	}
	.activity-content-div {
		padding: 0 20rpx;
	}
	.activity-content-label {
	    color: gray;
		padding: 20rpx 0 10rpx 20rpx;
		font-size: 26rpx;
	}
	.activity-content {
	    padding: 0 30rpx 40rpx 30rpx;
	}
	.activity-member-list {
	    width: 100%;
	    min-height: 40rpx;
	    margin-bottom: 100rpx;
		padding-bottom: 80rpx;
	}
	.member-count {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	    font-size: 36rpx;
	    color: #5390e4;
	    background-color: #E0E0E0;
	    padding: 20rpx 0 20rpx 30rpx;
	}
	.member-count-cancel {
	}
	.uni-media-list {
		display: flex;
		flex-direction: column;
		padding-top: 10rpx;
		padding-bottom: 10rpx;
	}
	.uni-media-list-top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.cancel-join {
	    padding-right: 24rpx;
	    font-size: 24rpx;
	    color: gray;
	    line-height: 46rpx;
	}
	.activity-join-div {
	    position: fixed;
	    bottom: 6rpx;
	    left: 0;
	    width: 100%;
	    height: 70rpx;
	}
	.activity-join {
	    width: 96%;
	    height: 100%;
	    margin: 0 auto;
	    line-height: 70rpx;
	    background-color: #5390e4;
	    text-align: center;
	    font-size: 40rpx;
	    color: white;
	    border-radius: 12rpx;
	}
	.canot-join {
	    background-color: lightgrey;
	    color: red;
	}
</style>
