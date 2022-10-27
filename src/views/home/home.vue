<template>
	<div class="home">
		<!-- 头部跑马灯 -->
		<!-- <van-notice-bar :text="lists" left-icon="volume-o" /> -->
		<!-- 背景图片 -->
		<el-row>
			<el-col :span="24">
				<el-carousel class="banner-carousel" :interval="3000" arrow="never">
					<el-carousel-item v-for="item in 1" :key="item">
						<img class="banner" src="../../../static/images/banner01.png" alt="">
					</el-carousel-item>
				</el-carousel>
			</el-col>
		</el-row>
		<!-- 统计 -->
		<div class="vote_title_top">
			<div class="vote_title_t01">快来为您喜欢的“嘉定区规划展</div>
			<div class="vote_title_t01">示馆LOGO设计方案”投票</div>
		</div>

		<div class="vote_title_desc">
<!--			“嘉定区规划展示馆LOGO设计方案征集”活动自9月启动以来，收到来自社会各界人士的参赛作品。-->
<!--			经各组别推荐，初审，组委会初步评议，共{{statistics.cysj}}个作品进入本次网络投票阶段 (作品排序不代表排名)。-->
            “嘉定区规划展示馆LOGO设计方案征集”活动自8月26日启动以来，收到来自社会各界人士的参赛作品。
            经各组别推荐，初审，组委会初步评议，参赛作品进入本次网络投票阶段  (作品排序不代表排名)。
		</div>

		<div class="vote_rule_wrap">
			<div class="vote_rule_p">投票规则: </div>
			<div class="vote_rule_p">每人可参与投票一次</div>
			<div class="vote_rule_p">每次最多投3个作品</div>
		</div>

		<div class="vote_time_wrap">
			<div class="vote_time_left">
				<i class="el-icon-time" style="color:#ffffff;font-size: 40px;"></i>
			</div>
			<div class="vote_time_right">
				<div class="vote_time_rtop">距离投票结束还有：</div>
				<div class="vote_time_rdown">
					<van-count-down :time="time">
						<template #default="timeData">
							<span class="vote_time_rds">{{ timeData.days }}</span>
							<span class="vote_time_rds">天</span>
							<span class="vote_time_rds">:</span>
							<span class="vote_time_rds">{{ timeData.hours }}</span>
							<span class="vote_time_rds">时</span>
							<span class="vote_time_rds">:</span>
							<span class="vote_time_rds">{{ timeData.minutes }}</span>
							<span class="vote_time_rds">分</span>
							<span class="vote_time_rds">:</span>
							<span class="vote_time_rds">{{ timeData.seconds }}</span>
							<span class="vote_time_rds">秒</span>
						</template>
					</van-count-down>

				</div>
			</div>
		</div>

		<div class="vote_time_wrap_two">
			<el-row>
				<el-col :span="24">
					<div class="total">
						<div class="total-header">
<!--							<div class="total-li">-->
<!--								<p class="vote_time_wrap_tp">参与作品</p>-->
<!--								<p>{{statistics.cysj}}</p>-->
<!--							</div>-->
<!--							<div class="total-li">-->
								<p class="vote_time_wrap_tp">累计票数</p>
								<p>{{statistics.zps}}</p>
<!--							</div>-->
							<!-- <div class="total-li">
								<p class="vote_time_wrap_tp">访问量</p>
								<p>{{statistics.lll}}</p>
							</div> -->
						</div>
						<!-- 投票时间 -->
						<!-- <div>
								<i class="el-icon-date" style="color: #F37B1D;font-size: 14px;"></i>
								<span>投票日期 : </span>
								<span>{{createTime}}到{{endTime}}</span>
							</div> -->
					</div>
				</el-col>
			</el-row>
		</div>
		<!-- 搜索 -->
		<!-- <el-form class="search-form">
			<el-form-item>
				<el-input v-model="searchData" placeholder="请输入商家编号或关键字"></el-input>
			</el-form-item>
			<el-button type="primary" icon="el-icon-search" class="search-btn" @click="searchBtn"></el-button>
			<el-button type="primary" icon="el-icon-refresh-right" class="search-reset" @click="resetBtn"></el-button>
		</el-form> -->
		<!-- 内容 -->
		<div class="main">
			<div class="main-content" v-for="(item,index) in list" :key="item.id">
				<div class="main-li">

					<div class="main-top"  @click="onDetails(item)">
						<p class="am-badge-danger">{{item.id}}号</p>
						<p style="color: #5087a2;">{{item.vote}}票</p>
					</div>

					<div class="main-li-img">
						<div class="main-li-img-cont">
							<img :src="item.file_url" alt="" @click="onDetails(item)">

<!--							<div class="main-li-img-mask" v-if="item.is_checked">-->
<!--								<van-icon name="checked" size="40px" color="#719db4" />-->
<!--							</div>-->
						</div>


					</div>

					<div class="main-bottom">
						<!-- <p>
							<i class="el-icon-star-off" style="color: #5087a2;" v-if="!item.is_vote"></i>
							<i class="el-icon-star-on" style="color: #5087a2;" v-else></i>
							<span style="color: #5087a2;">{{item.vote}}</span>
						</p>
						<el-button style="background: #5087a2;" type="danger" icon="el-icon-thumb" @click="vote(item)">
							投票
						</el-button> -->
						<template v-if="item.is_vote">
								<el-button style=" width: 100%; background: #5087a2;" type="danger" @click="vote_complete(item)">已投票</el-button>
						</template>
						<template v-else>
							<template v-if="item.is_checked">
								<el-button style=" width: 100%; background: #5087a2;" type="danger" @click="vote_cancel(item)">取消选中</el-button>

							</template>
							<template v-else>
								<el-button style=" width: 100%; background: #5087a2;" type="danger" @click="onCheckVote(item)">投票</el-button>
							</template>
						</template>

					</div>
				</div>
			</div>
			<!-- <van-pagination v-model="currentPage" :page-count="12" mode="simple" /> -->
		</div>
		<!-- 活动规则 -->
		<div class="footer">
			<!-- <div class="footer-hhgz">
				<i class="el-icon-bell"></i>
				<span>活动规则</span>
			</div> -->
			<div class="footer-content">
				<!-- <p>本次网络评选大赛活动真实可靠、公平公正、免费报名、免费参与、请各位商家放心！我方不会收取商家任何参与费用。</p>
				<p>每个微信号间隔2小时可投一票，每天最多可投12票。活动中加速投票为自愿赠送行为，独自承担相关责任，与主办方无关，赠送后无法退还，主办方不承担任何法律责任，请各位商家谨慎使用</p>
				<p>在商家详情页面，商家可联系工作人员修改展示图片，在参赛宣言可展示商家的促销信息，产品信息，介绍信息，招聘信息等等。</p>
				<p>如有问题可以添加主办方微信号：123456789</p>
				<p>
					<strong>互联网时代 :</strong>
					<span>网络宣传传播更快、便捷、高效！老店需要持续宣传，树立品牌形象! 新店更需要大力宣传，提高知名度!</span>
				</p>
				<p><strong>主办单位：诚信商家网</strong></p>
				<p><strong>协办单位：天歌文化传播</strong></p>
				<p><strong>特别感谢：腾讯社交广告服务商（天歌文化）</strong></p>
				<p><strong>特别说明:如遇到活动链接失效，请联系客服重新获取活动链接</strong></p> -->
				<p style="float: left; color: #a3a3a3; font-size: 13px;"><strong>*活动最终解释权，归主办方所有</strong></p>
			</div>
		</div>
		<!-- <wTab></wTab> -->

		<van-popup closeable v-model="show">
			<div class="votedet_wrap">
				<div class="votedet_top">
					<div class="votedet_tleft">作品<span>{{voteDetail.id}}</span></div>
					<div class="votedet_tright">
						{{voteDetail.vote}}
						<div class="votedet_trd">票</div>
					</div>
				</div>
				<div class="vote_title_desc"  v-html="voteDetail.intro"></div>
				<div class="vote_title_img">
					<img :src="voteDetail.file_url" alt="" />
				</div>

			</div>
		</van-popup>

		<div class="footer_wrap" v-if="checkList.length">
			<div class="footer_wleft">
				已选
				<div v-for="item in checkList" :key="item.id">
					<img :src="item.file_url" alt="" />
				</div>
			</div>
			<div class="footer_wcenter">
				<div class="footer_wcsolid"></div>
			</div>
			<div class="footer_wright" @click="onSubmit">提交投票</div>
		</div>
	</div>
</template>

<script>
	import {
		publicMethod
	} from "../../../utils/pubilc.js";
	import axios from "../../../utils/request.js"

    import {isWXBrowser, getWechatCode, getUrlCode, isWechat} from "../../../utils/common";

	export default {
		data() {
			return {
				//头部滚动字幕
				lists: '2019首届黑龙江省哈尔滨市呼兰县A-9“诚信商家”的评选大赛特别提示:本次活动、公平、公正、公开、此活动免费报名，免费参与，本次活动主要是宣传推广，增加商家人气！本次评选大赛商家均由黑龙江省哈尔滨市呼兰县市民推荐。',
				//统计数据
				statistics: {
					cysj: 0,
					zps: 0,
					lll: 0,
				},
				//搜索数据
				searchData: undefined,
				currentPage: 1, //当前页码
				list: [
					// {
					// 	num: 27,
					// 	name: '赛唯洗衣生活馆',
					// 	img: require('../../../static/images/list.jpeg'),
					// 	flag: false,
					// 	number: 7469
					// },
					//{
						// file_url: "https://api.chuguji.com/uploads/images/1.jpg"
						// id: 1
						// intro: "1.标志内部象“嘉”，代表嘉定区；\r\n2.标志象展馆的俯视图，体现规划展示的特色，表达规划展示、科普教育、文化交流的职能；\r\n3.绿蓝渐变体现创新活力城，宜居新嘉定的主题。\r\n字体标准：\r\n中文：三极素纤简\r\n英文∶arial narrow∶"
						// is_vote: false
						// name: "1号作品"
						// type: ""
						// vote: 1
					//}
				],
                isVotes: [],
				searchList: [], //搜索的数据
				createTime: '2019-11-08',
				endTime: '2019-12-01',
				timer: null, //活动结束时间
				//time: 30 * 60 * 60 * 1000,
				time: 0,
				show: false,
				voteDetail: '',
				checkShow: false,
				columns: ['直接投票', '多选投票'],
				checkList: [],
                useopenid: null,

			}
		},
		methods: {

			vote_complete() {
				this.$toast.success('该作品已投成功');
			},
			vote_cancel(data) {
				let useList = this.list;
				for(let i=0;i<useList.length; i++) {
					if(useList[i].id == data.id){
						useList[i].is_checked = false;
						//this.$set(useList, i , useList[i])
					}
				}

				let usecheckList = [];
				for(let i=0;i<useList.length; i++) {
					if(useList[i].is_checked){
						usecheckList.push(useList[i]);
					}
				}

				this.checkList = JSON.parse(JSON.stringify(usecheckList))

				this.list = JSON.parse(JSON.stringify(useList))
			},
			onCheckVote(data){
				console.log(data)
				let useList = this.list;
				let check_num = 0;
				for(let i=0;i<useList.length; i++) {
					if(useList[i].is_checked){
						check_num ++
					}
				}
				for(let i=0;i<useList.length; i++) {
						if(check_num >= 3){
							this.$toast.success('每次最多投3个作品');
						} else {
							if(useList[i].id == data.id){
								useList[i].is_checked = true;
								//check_num ++
								//this.$set(useList, i , useList[i])

							}
						}
				}

				let usecheckList = [];
				for(let i=0;i<useList.length; i++) {
					if(useList[i].is_checked){
						usecheckList.push(useList[i]);
					}
				}

				this.checkList = JSON.parse(JSON.stringify(usecheckList))

				this.list = JSON.parse(JSON.stringify(useList))

				//this.$set(useList)
			},

			//投票按钮
			vote(e) {
				this.checkShow = true;
				// if (e.flag) {
				// 	this.$toast('您已经投过票了');
				// } else {
				// 	e.vote++;
				// 	e.flag = true;
				// 	let num = 0;
				// 	this.list.forEach((item, index) => {
				// 		num += item.vote;
				// 	})
				// 	this.statistics.zps = num; //总票数
				// 	this.$toast.success('投票成功');
				// }
			},
			//搜索按钮
			searchBtn() {
				this.$toast('您点击了搜索');
			},
			//重置按钮
			resetBtn() {
				this.$toast('您点击了重置');
				this.searchList = []; //清空搜索数据
				this.searchData = undefined;
			},
			getCustomerList() {
				let _this = this;
				let postData = {
					page: 1,
					page_size: 100,
                    wx_id: _this.useopenid,
				}
				axios.post('/list', postData).then(res => {
					console.log('获取用户数据')
					//console.log(res)
					if(res.status == 200){
						let useData = res.data;
						console.log(useData)
						if(useData.code == 0){
							let dataList = useData.data.data;
							_this.list = dataList;
                            // _this.isVotes = useData.data.select;
							console.log(dataList)

							for(let i=0; i<dataList.length; i++) {
								dataList[i].is_checked = false;
							}

							_this.statistics.cysj = useData.data.count
                            _this.statistics.zps = useData.data.sum > 9999 ? (Math.trunc(useData.data.sum/ 1000) / 10).toFixed(1) + 'w' : useData.data.sum
							// _this.statistics.zps = useData.data.sum
                            // (Math.trunc(num/ 1000) / 10).toFixed(2)) + '万' : num
							// _this.statistics.cysj = _this.list.length; //参与商家
							// let num = 0;
							// _this.list.forEach((item, index) => {
							// 	num += item.vote; //累加计算总数
							// })
							// _this.statistics.zps = num; //总票数
							// _this.statistics.lll = _this.$cookies.get('counter') || num; //统计

						}
					}
				})
			},
			onDetails(data){
				console.log(data)
				this.show = true;
				let reg = new RegExp("\r\n", "g");
				let useintro = data.intro;
				let setintro = useintro.replaceAll(reg, '<br/>');
				data.intro = setintro;

				console.log(data)
				this.voteDetail = data;
			},
			getEndTime() {
				let _this = this;
				//https://web.mugglecloud.cn/
				axios.post('/endTime').then(res => {
					console.log('获取结束时间')
					console.log(res)
					if(res.status == 200){
						let useData = res.data;
						console.log(useData)
						if(useData.code == 0){
							let endTime = useData.data;
							console.log(endTime * 1000 - (new Date().getTime()))
							_this.time = endTime * 1000 - (new Date().getTime());
						}
					}

				})
			},
			setNote(ids){
				// console.log(openid)
                this.$toast.setDefaultOptions({ duration: 0 });
                this.$toast.loading({
                	message: '投票中...',
                	forbidClick: true,
                });

				let postData = {
					wx_id: this.useopenid,
					pids: ids,
				}

				axios.post('/vote', postData).then(res => {
					this.$toast.clear();
					console.log(res)

					if(res.status == 200){
						let useData = res.data;
						console.log(useData)
						this.$toast.setDefaultOptions({ duration: 2000 });
						this.checkList = [];

						if(useData.code == 0){
							this.$toast.success('投票成功');
						} else {
							this.$toast.fail(useData.msg)
						}
						this.getCustomerList();
					}
				})

			},
			getuserInfo(ids) {
				console.log(ids)

				let usecode = localStorage.getItem('code');
				if(usecode){
					this.$toast.setDefaultOptions({ duration: 0 });
					// this.$toast.loading({
					// 	message: '投票中...',
					// 	forbidClick: true,
					// });
					let postData = {
						code: usecode, //'081pwk0w3M4HqZ2oVM2w3krvZc1pwk06'
					}
					axios.post('/userInfo', postData).then(res => {
						console.log('获取用户信息')
						console.log(res)
						if(res.status == 200){
							let useData = res.data;
							console.log(useData)
							if(useData.code == 0){
								// let useopenid = useData.data.openid;
                                this.useopenid = useData.data.openid;
                                this.getCustomerList();
								// this.setNote(useopenid, ids);
							} else {
								// this.$toast.setDefaultOptions({ duration: 2000 });
								// this.$toast.fail('获取信息失败，请刷新页面重试')
								// localStorage.clear();
								this.setCode();
							}
						}
					})
				} else {
					// this.$toast.fail('获取信息失败，请刷新页面重试');
					this.setCode();
				}

			},
			setCode() {
				let appid = "wx1b8a3e3ffa15e39d"; //微信APPid
				let local = window.location.href;
				window.location.href =
				"https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
				appid +
				"&redirect_uri=" +
				encodeURIComponent(local) +
				"&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
			},
			onSubmit() {
				let usecheckList = this.checkList;

				console.log(usecheckList)
				let ids = '';
				if(usecheckList.length > 0){
					if(usecheckList.length == 1){
						ids = usecheckList[0].id;
					} else if(usecheckList.length == 2){
						ids = usecheckList[0].id + ',' + usecheckList[1].id
					} else if(usecheckList.length == 3){
						ids = usecheckList[0].id + ',' + usecheckList[1].id + ',' + usecheckList[2].id
					}
					// this.getuserInfo(ids)
                    this.setNote(ids)

				} else {
					this.$toast.fail('请选择作品');
				}


			},
		},
		mounted() {

			//获取活动结束时间
			// let endTime = this.endTime + ' 18:59:00';
			// let time = publicMethod.getTimestamp(endTime);
			// this.timer = publicMethod.computedResidualTime(time)
			// setInterval(() => {
			// 	this.timer = publicMethod.computedResidualTime(time)
			// }, 1000)
			this.getEndTime();
			// this.getCustomerList();
			// this.getuserInfo();
            if (isWXBrowser && isWechat) { //    wx9ac3136b83da4dc4
                let appid = "wx1b8a3e3ffa15e39d"; //微信APPid
                let code = getUrlCode().code; //是否存在code
                let local = window.location.href;
                // let local = 'https://********';
                if (code == null || code === "") {
                    //不存在就打开上面的地址进行授权
                    window.location.href =
                        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
                        appid +
                        "&redirect_uri=" +
                        encodeURIComponent(local) +
                        "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";
                } else {
                    localStorage.setItem('code', code)
                    this.getuserInfo();
                    // localStorage.code = code
                    console.log('获取到的用户code')
                    console.log(code)
                    // 拿到code之后就要范湖给后台 让后台返回对应的account_token和openid,尽量使用account_token 这个的刷新时间是两个小时，openid暴露出来不太好,拿到token之后就处理相关的业务逻辑
                }
            }
		},
		created() {
			// if (isWXBrowser) {
			// 	getWechatCode();
			// }
		},
		destroyed() {
			clearInterval()
		}
	}
</script>

<style scoped="scoped" lang="less">
	.van-notice-bar {
		position: absolute;
		width: 100%;
		top: 0;
		left: 0;
		height: 14px;
		padding: 6px 0;
		font-size: 12px;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.6);
		color: #FFF;
		z-index: 4;
		display: flex;
		align-items: center;

	}

	.home /deep/ .van-notice-bar__content {
		text-indent: 120px !important;
	}
	.home /deep/ .van-notice-bar__left-icon {
		margin: 0 6px !important;
	}

	.banner-carousel {
		height: 208px;

		& .banner {
			width: 100%;
			height: 208px;
		}
	}

	.banner-carousel /deep/ .el-carousel__container {
		height: 208px !important;
	}
    .banner-carousel /deep/ .el-carousel__indicator--horizontal {
        display: none;
    }
	.total {
		width: 100%;
		height: 130px;

		& .total-header {
			width: 100%;
			height: 80px;
			display: flex;
			align-items: center;
			justify-content: center;

			& .total-li {
				width: 125px;
				text-align: center;

				p {
					&:first-of-type {
						font-size: 12px;
					}

					&:last-of-type {
						font-size: 20px;
						margin-top: 8px;
					}
				}
			}
		}

		.total-timer {
			width: 100%;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			padding: 6px 0;
			border-top: 1px dotted #333;
			border-bottom: 1px dotted #333;

			div {
				width: 100%;
				margin: 3px 18px 0;

				& span {
					font-size: 15px;
				}
			}
		}
	}

	.search-form {
		position: relative;
		width: 350px;
		margin: 0 auto;

		& .el-form-item {
			width: 258px;
			margin: 10px 0 !important;
		}

		.search-btn,
		.search-reset {
			position: absolute;
			width: 48px;
			right: 0;
			top: 0;
			border-radius: 0 !important;
			background: #E6E6E6;
			display: flex;
			justify-content: center;
			border: 1px solid #DCDFE6;
		}

		.search-btn {
			right: 48px;
			border-right: 1px solid #DCDFE6 !important;
		}
	}

	.main {
		width: 96%;
		margin: 0 auto;

		box-sizing: border-box;
		padding-bottom: 20px;
		overflow: hidden;

		& .main-content {
			width: 43%;
			padding: 3px;
			margin: .5rem;
			float: left;
			border: 1px solid #CCC;

			& .main-li {
				position: relative;
				height: 220px;

				& .main-li-img {
					position: absolute;
					top: 26px;
					left: 0;
					width: 100%;
					height: calc(100% - 26);
					display: flex;
					justify-content: center;
					align-items: center;

					& img{
						display: block;
						width: 100%;
					}
				}

				.main-top,
				.main-bottom {
					position: absolute;
					left: 0;
					display: flex;
					align-items: center;
				}

				.main-top {
					width: 100%;
					height: 26px;
					background: rgba(255, 255, 255, .7);
					top: 0;
					font-size: 12px;
                    justify-content: space-between;
					& .am-badge-danger {
						min-width: 10px;
						color: #fff;
						line-height: 1;
						background: #5f5f5f;
						padding: 2px 3px;
						margin: 0 6px;
					}
				}

				& .main-bottom {
					width: 100%;
					bottom: 0;
					height: 32px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					background: #FFF;

					& p {
						display: flex;
						align-items: center;
						flex-grow: 1;
						height: 100%;
						overflow: hidden;
						background: #f5f5f5;

						& span {
							color: #F37B1D;
						}

						& i {
							margin: 0 4px;
						}
					}

					& button {
						background: #dd514c;
						height: 32px;
						width: 72px;
						border: none;
						border-radius: 0 !important;
						font-size: 13px;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}
		}

		& .van-pagination {
			clear: both;
			text-align: center;
			padding-top: 30px;
		}
	}

	.footer {
		width: 100%;
		border-top: 1px dotted #ccc;
		padding-bottom: 120px;

		& .footer-hhgz {
			width: 90%;
			margin: 20px auto 40px;
			font-size: 14px;
		}

		& .footer-content {
			width: 90%;
			margin: 0 auto;

			& p {
				font-size: 12px;
				margin: 18px 0;
			}
		}
	}
	.vote_title_top{
		width: 100%;
		height: auto;
		padding-top: 16px;
		.vote_title_t01{
			width: 100%;
			height: 28px;
			line-height: 28px;
			font-size: 20px;
			font-weight: bold;
			color: #5087a2;
			text-align:center;
		}
	}
	.vote_title_desc{
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 12px 30px;
		font-size: 14px;
		line-height: 20px;
		color: #78a2b7;
	}
	.vote_rule_wrap{
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 0 30px;
		.vote_rule_p{
			width: 100%;
			font-size: 14px;
			line-height: 20px;
			color: #78a2b7;
		}
	}
	.vote_time_wrap{
		width: 96vw;
		height: 80px;
		margin: 20px auto;
		display: flex;
		justify-content: flex-start;

	}
	.vote_time_left{
		width: 80px;
		height: 80px;
		background: #5087a2;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.vote_time_right{
		width: calc(96vw - 80px);
		height: 80px;
		background: #f2f6ff;
		box-sizing: border-box;
		padding-left: 10px;
		padding-top: 15px;

	}

	.vote_time_rtop{
		font-size: 14px;
		color: #719db4;
		line-height: 20px;
	}

	.vote_time_rdown{
		font-size: 18px;
		color: #719db4;
		line-height: 30px;
	}
	.vote_time_rds{
		font-size: 18px;
		color: #719db4;
		line-height: 30px;
	}

	.vote_time_wrap_two{
		width: 96vw;
		height: 80px;
		margin: 0 auto;
		background: #f2f6ff;
	}
	.vote_time_wrap_tp{
		font-size: 16px;
		color: #719db4;
		//padding-top: 5px;
        padding-right: 90px;
	}
	.votedet_wrap{
		width: 92vw;
		height: auto;
	}
	.votedet_top{
		width: 90%;
		height: 80px;
		margin: 0 auto;
		border-bottom: 1px dashed #333333;
		display: flex;
		box-sizing: border-box;
		padding-right: 50px;
		padding-top: 20px;
		justify-content: space-between;
	}
	.votedet_tleft{
		font-size: 18px;
		color: #5087a2;
		span{
			padding-left: 10px;
		}
	}
	.votedet_tright{
		width: auto;
		font-size: 18px;
		color: #5087a2;
        display: flex;
        align-items: flex-start;
	}
	.votedet_trd{
		width: 100%;
		font-size: 12px;
		color: #5087a2;
		text-align: center;
		//padding-top: 5px;
	}
	.vote_title_img{
		width: 60%;
		height: auto;
		margin: 0 auto;
		img{
			display: block;
			width: 100%;
		}
	}
	.main-li-img-cont{
		width: 100%;
		position: relative;
	}
	.main-li-img-mask{
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(255,255,255, 0.8);
		left: 0;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.footer_wrap{
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: space-between;
		background: #719db4;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	.footer_wleft{
		width: 68vw;
		height: 50px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 16px;
		color: #ffffff;
		box-sizing: border-box;
		padding-left: 10px;
		img{
			display: block;
			width: 36x;
			height: 36px;
			margin-left: 10px;
			border-radius: 50%;
		}
	}
	.footer_wcenter{
		width: 3px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.footer_wcsolid{
		width: 1px;
		height: 36px;
		background: #ffffff;
	}
	.footer_wright{
		width: 30vw;
		height: 50px;
		line-height: 50px;
		font-size: 16px;
		color: #ffffff;
		text-align: center;
	}
</style>
