<template>
    <div class="home">
        <!-- 背景图片 -->
        <!--        <el-row>-->
        <!--            <el-col :span="24">-->
        <!--                <el-carousel class="banner-carousel" :interval="3000" arrow="never">-->
        <!--                    <el-carousel-item v-for="item in 1" :key="item">-->
        <!--                        <img class="banner" src="../../../static/images/banner01.png" alt="">-->
        <!--                    </el-carousel-item>-->
        <!--                </el-carousel>-->
        <!--            </el-col>-->
        <!--        </el-row>-->
        <div class="banner-box">
            <img class="banner" src="../static/images/banner01.png" alt="">
        </div>
        <!-- 统计 -->
        <div class="vote_title_top">
            <div class="vote_title_t01">手指点一点，你来决定嘉定区
                 </div>
            <div class="vote_title_t01">规划展示馆的LOGO</div>
        </div>

        <div class="vote_title_desc">
            “嘉定区规划展示馆LOGO设计方案征集”活动自8月26日启动以来，收到来自社会各界人士的广泛关注与踊跃参与，至投稿截止日共计收到近百份投稿作品，经初步遴选其中62份符合评选要求，将参与本次网络投票（作品排序不代表排名）。
<!--            投票规则:-->
<!--            每人可参与投票一次；-->
<!--            参与投票作品分为四个系列，-->
<!--            每个系列最多可投2个作品，-->
<!--            共计最多可投8个作品。-->
<!--            “嘉定区规划展示馆LOGO设计方案征集”活动自8月26日启动以来，收到来自社会各界人士的参赛作品。-->
<!--            经各组别推荐，初审，组委会初步评议，参赛作品进入本次网络投票阶段 (作品排序不代表排名)。-->
        </div>

        <div class="vote_rule_wrap">
            <div class="vote_rule_p">投票规则:</div>
            <div class="vote_rule_p">每人可参与投票一次；</div>
            <div class="vote_rule_p">参与投票作品分为四个系列，</div>
            <div class="vote_rule_p">每个系列最多可投2个作品，</div>
            <div class="vote_rule_p">共计最多可投8个作品。</div>
            <div class="rank" @click="handleRank">{{rankName}}<br />排名</div>
        </div>

        <div class="vote_time_wrap">
            <div class="vote_time_left">
                <img src="../static/images/time.png"/>
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


        <!--  系列-->

        <!-- 内容 -->
<!--        <div class="main">-->
<!--            <div class="main-content" v-for="(item,index) in list" :key="item.id">-->
<!--                <div class="main-li">-->

<!--                    <div class="main-top" @click="onDetails(item)">-->
<!--                        <p class="am-badge-danger">{{ item.id }}号</p>-->
<!--                        <p style="color: #5087a2;">{{ item.vote }}票</p>-->
<!--                    </div>-->

<!--                    <div class="main-li-img">-->
<!--                        <div class="main-li-img-cont">-->
<!--                            <img :src="item.file_url" alt="" @click="onDetails(item)">-->

<!--                            &lt;!&ndash;							<div class="main-li-img-mask" v-if="item.is_checked">&ndash;&gt;-->
<!--                            &lt;!&ndash;								<van-icon name="checked" size="40px" color="#719db4" />&ndash;&gt;-->
<!--                            &lt;!&ndash;							</div>&ndash;&gt;-->
<!--                        </div>-->


<!--                    </div>-->

<!--                    <div class="main-bottom">-->
<!--                        &lt;!&ndash; <p>-->
<!--                            <i class="el-icon-star-off" style="color: #5087a2;" v-if="!item.is_vote"></i>-->
<!--                            <i class="el-icon-star-on" style="color: #5087a2;" v-else></i>-->
<!--                            <span style="color: #5087a2;">{{item.vote}}</span>-->
<!--                        </p>-->
<!--                        <el-button style="background: #5087a2;" type="danger" icon="el-icon-thumb" @click="vote(item)">-->
<!--                            投票-->
<!--                        </el-button> &ndash;&gt;-->
<!--                        <template v-if="item.is_vote">-->
<!--                            <el-button style=" width: 100%; background: #5087a2;" type="danger"-->
<!--                                       @click="vote_complete(item)">已投票-->
<!--                            </el-button>-->
<!--                        </template>-->
<!--                        <template v-else>-->
<!--                            <template v-if="item.is_checked">-->
<!--                                <el-button style=" width: 100%; background: #5087a2;" type="danger"-->
<!--                                           @click="vote_cancel(item)">取消选中-->
<!--                                </el-button>-->

<!--                            </template>-->
<!--                            <template v-else>-->
<!--                                <el-button style=" width: 100%; background: #5087a2;" type="danger"-->
<!--                                           @click="onCheckVote(item)">投票-->
<!--                                </el-button>-->
<!--                            </template>-->
<!--                        </template>-->

<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            &lt;!&ndash; <van-pagination v-model="currentPage" :page-count="12" mode="simple" /> &ndash;&gt;-->
<!--        </div>-->
        <router-view></router-view>

        <!-- 活动规则 -->
        <div class="footer">
            <span>*活动最终解释权，归主办方所有</span>
        </div>
        <!-- <wTab></wTab> -->
        <van-popup closeable v-model="show">
            <div class="votedet_wrap">
                <div class="votedet_top">
                    <div class="votedet_tleft">作品<span>{{ voteDetail.id }}</span></div>
                    <div class="votedet_tright">
                        {{ voteDetail.vote }}
                        <div class="votedet_trd">票</div>
                    </div>
                </div>
                <div class="vote_title_desc" v-html="voteDetail.intro"></div>
                <div class="vote_title_img">
                    <img :src="voteDetail.file_url" alt=""/>
                </div>

            </div>
        </van-popup>
<!--        :title="name +'排名'"-->

        <el-drawer
            :visible.sync="rankShow"
            class="card-body"
            size="95%"
            direction="btt"

            :before-close="handleClose">
            <div class="card-box" v-loading.fullscreen.lock="rankLoading">
                                <el-divider class="divider">{{ name }}排名</el-divider>
                <div class="card" v-for="(item, index) in rankList" :key="index">
                    <div class="card__img-box"><img :src="item.file_url"/></div>
                    <div class="card__content">
                        <div class="card__top">
                            <div>
                                <span class="no">NO.{{ index+1 }}</span>
                                <span class="name">作品{{ item.type }}-{{item.id}}</span>
                            </div>
                            <div>({{ item.vote }}票)</div>
                        </div>
                        <el-progress :show-text="false" :stroke-linecap="'butt'" :percentage="item.vote/rankVote * 100" color="#0C62F6"></el-progress>
                    </div>

                </div>
            </div>
        </el-drawer>
        <!--        <van-popup closeable v-model="rankShow">-->
        <!--            <div class="votedet_wrap">-->
        <!--                <div class="votedet_top">-->
        <!--                    <div class="votedet_tleft">所有排名</div>-->
        <!--                </div>-->
        <!--                <div class="card" v-for="(item, index) in new Array(20)">-->
        <!--                    <div class="card__img-box"><img src="../../../static/images/banner01.png"/></div>-->
        <!--                    <div class="card__content">-->
        <!--                        <div class="card__top">-->
        <!--                            <div>-->
        <!--                                <span class="no">NO.1</span>-->
        <!--                                <span class="name">作品 08</span>-->
        <!--                            </div>-->
        <!--                            <div>(1.01W票)</div>-->
        <!--                        </div>-->
        <!--                        <el-progress :show-text="false" :stroke-linecap="'butt'" :percentage="50" color="#0C62F6"></el-progress>-->
        <!--                    </div>-->

        <!--                </div>-->

        <!--            </div>-->
        <!--        </van-popup>-->
<!--        <div class="footer_wrap" v-if="checkList.length">-->
<!--            <div class="footer_wleft">-->
<!--                已选-->
<!--                <div v-for="item in checkList" :key="item.id">-->
<!--                    <img :src="item.file_url" alt=""/>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="footer_wcenter">-->
<!--                <div class="footer_wcsolid"></div>-->
<!--            </div>-->
<!--            <div class="footer_wright" @click="onSubmit">提交投票</div>-->
<!--        </div>-->

    </div>
</template>

<script>

import axios from "../utils/request.js"
import {publicMethod} from '../utils/pubilc'
import {isWXBrowser, getWechatCode, getUrlCode, isWechat} from "../utils/common";
// import rankView from '../rank/rank'

export default {
    // components: {rankView},
    name: 'App',
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
            rankShow: false,
            rankList: [], // 排名列表
            rankVote: 0,
            rankLoading: false,
            id: undefined,
            name: '所有',
            rankName: '总',

        }
    },
    methods: {
        handleRank() {
            try {
                this.rankLoading = true
                this.rankShow = true
                axios.post('/typeRank',{types: this.id}).then(res => {
                    console.log(res.data)
                    if(res.data.code == 0) {
                        this.rankList = res.data.data;
                        this.rankVote = res.data.data.reduce((pre,cur)=>pre+cur.vote,0)

                    }
                }).catch(res=>{
                    console.log(res,'res')
                })
                this.rankLoading = false

            }catch (e) {
                this.rankLoading = false
            }
        },
        handleClose() {
            this.rankShow = false
        },
        vote_complete() {
            this.$toast.success('该作品已投成功');
        },
        vote_cancel(data) {
            let useList = this.list;
            for (let i = 0; i < useList.length; i++) {
                if (useList[i].id == data.id) {
                    useList[i].is_checked = false;
                    //this.$set(useList, i , useList[i])
                }
            }

            let usecheckList = [];
            for (let i = 0; i < useList.length; i++) {
                if (useList[i].is_checked) {
                    usecheckList.push(useList[i]);
                }
            }

            this.checkList = JSON.parse(JSON.stringify(usecheckList))

            this.list = JSON.parse(JSON.stringify(useList))
        },
        onCheckVote(data) {
            console.log(data)
            let useList = this.list;
            let check_num = 0;
            for (let i = 0; i < useList.length; i++) {
                if (useList[i].is_checked) {
                    check_num++
                }
            }
            for (let i = 0; i < useList.length; i++) {
                if (check_num >= 3) {
                    this.$toast.success('每次最多投3个作品');
                } else {
                    if (useList[i].id == data.id) {
                        useList[i].is_checked = true;
                        //check_num ++
                        //this.$set(useList, i , useList[i])

                    }
                }
            }

            let usecheckList = [];
            for (let i = 0; i < useList.length; i++) {
                if (useList[i].is_checked) {
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
                if (res.status == 200) {
                    let useData = res.data;
                    console.log(useData)
                    if (useData.code == 0) {
                        let dataList = useData.data.data;
                        _this.list = dataList;
                        // _this.isVotes = useData.data.select;
                        console.log(dataList)

                        for (let i = 0; i < dataList.length; i++) {
                            dataList[i].is_checked = false;
                        }

                        _this.statistics.cysj = useData.data.count
                        _this.statistics.zps = useData.data.sum > 9999 ? (Math.trunc(useData.data.sum / 1000) / 10).toFixed(1) + 'w' : useData.data.sum
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
        onDetails(data) {
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
                if (res.status == 200) {
                    let useData = res.data;
                    console.log(useData)
                    if (useData.code == 0) {
                        let endTime = useData.data;
                        console.log(endTime * 1000 - (new Date().getTime()))
                        _this.time = endTime * 1000 - (new Date().getTime());
                    }
                }

            })
        },
        setNote(ids) {
            // console.log(openid)
            this.$toast.setDefaultOptions({duration: 0});
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

                if (res.status == 200) {
                    let useData = res.data;
                    console.log(useData)
                    this.$toast.setDefaultOptions({duration: 2000});
                    this.checkList = [];

                    if (useData.code == 0) {
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
            if (usecode) {
                this.$toast.setDefaultOptions({duration: 0});
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
                    if (res.status == 200) {
                        let useData = res.data;
                        console.log(useData)
                        if (useData.code == 0) {
                            // let useopenid = useData.data.openid;
                            this.useopenid = useData.data.openid;
                            localStorage.setItem('useopenid', useData.data.openid)
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
            if (usecheckList.length > 0) {
                if (usecheckList.length == 1) {
                    ids = usecheckList[0].id;
                } else if (usecheckList.length == 2) {
                    ids = usecheckList[0].id + ',' + usecheckList[1].id
                } else if (usecheckList.length == 3) {
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

    },
    destroyed() {
        clearInterval()
    },
    watch:{
        $route(to,from){
            if(!to.query.id) {
                this.id = undefined
                this.name = '所有'
                this.rankName = '总'
            }else {
                this.id = to.query.id
                this.name = to.query.name
                this.rankName = to.query.name

            }

            // this.$forceUpdate()
            console.log(to,to.query,this.id,this.name,'tttttt','----');
        }
    },
}
</script>

<style scoped="scoped" lang="less">

.banner-box {
    .banner {
        width: 100%;
        height: 208px;
    }
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

                & img {
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
    width: 96vw;
    margin: 20px auto;
    background: #F2F6FF;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        color: #000000;
        opacity: 0.2;
        font-family: 'PingFang SC';
        font-style: normal;
        font-weight: 400;
    }
}

.vote_title_top {
    width: 100%;
    height: auto;
    padding-top: 16px;

    .vote_title_t01 {
        width: 100%;
        height: 28px;
        line-height: 28px;
        font-size: 20px;
        font-weight: bold;
        color: #5087a2;
        text-align: center;
    }
}

.vote_title_desc {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 12px 30px;
    font-size: 14px;
    line-height: 20px;
    color: #78a2b7;
    text-indent: 2em;
}

.vote_rule_wrap {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 0 30px;
    position: relative;

    .vote_rule_p {
        width: 100%;
        font-size: 14px;
        line-height: 20px;
        color: #78a2b7;
    }

    .rank {
        position: absolute;
        right: 2vw;
        width: 70px;
        height: 70px;
        background: rgba(129, 167, 255, 0.16);
        font-family: 'PingFang SC';
        font-style: normal;
        font-weight: 700;
        bottom: 0;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}

.vote_time_wrap {
    width: 96vw;
    height: 80px;
    margin: 20px auto;
    display: flex;
    justify-content: flex-start;
}

.vote_time_left {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4E87A3;

    img {
        width: 50px;
    }
}

.vote_time_right {
    width: calc(96vw - 80px);
    height: 80px;
    background: #f2f6ff;
    box-sizing: border-box;
    padding-left: 10px;
    padding-top: 15px;
}

.vote_time_rtop {
    font-size: 14px;
    color: #719db4;
    line-height: 20px;
}

.vote_time_rdown {
    font-size: 18px;
    color: #719db4;
    line-height: 30px;
}

.vote_time_rds {
    font-size: 18px;
    color: #719db4;
    line-height: 30px;
}

.vote_time_wrap_two {
    width: 96vw;
    height: 65px;
    margin: 0 auto;
    background: #F2F6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000000;
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
}

.vote_time_wrap_tp {
    padding-right: 90px;
    color: #4E87A3;
    opacity: 0.8;
}

.votedet_wrap {
    width: 92vw;
    height: auto;
}

.votedet_top {
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

.votedet_tleft {
    font-size: 18px;
    color: #5087a2;

    span {
        padding-left: 10px;
    }
}

.votedet_tright {
    width: auto;
    font-size: 18px;
    color: #5087a2;
    display: flex;
    align-items: flex-start;
}

.votedet_trd {
    width: 100%;
    font-size: 12px;
    color: #5087a2;
    text-align: center;
    //padding-top: 5px;
}

.vote_title_img {
    width: 60%;
    height: auto;
    margin: 0 auto;

    img {
        display: block;
        width: 100%;
    }
}

.main-li-img-cont {
    width: 100%;
    position: relative;
}

.main-li-img-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer_wrap {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    background: #719db4;
    position: fixed;
    left: 0;
    bottom: 0;
}

.footer_wleft {
    width: 68vw;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 16px;
    color: #ffffff;
    box-sizing: border-box;
    padding-left: 10px;

    img {
        display: block;
        width: 36px;
        height: 36px;
        margin-left: 10px;
        border-radius: 50%;
    }
}

.footer_wcenter {
    width: 3px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer_wcsolid {
    width: 1px;
    height: 36px;
    background: #ffffff;
}

.footer_wright {
    width: 30vw;
    height: 50px;
    line-height: 50px;
    font-size: 16px;
    color: #ffffff;
    text-align: center;
}

.card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    &__img-box {
        width: 55px;
        height: 55px;
        border: 1px solid #D9D9D9;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 45px;
            height: 45px;
        }
    }

    &__content {
        flex: 1;
        margin-left: 10px;

    }

    &__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'PingFang SC';
        font-style: normal;
        font-weight: 500;
        color: #818181;
        font-size: 14px;
        margin-bottom: 10px;

        .no {
            padding-right: 10px;
        }

        .name {
            color: #000
        }

    }

}

.card-body {
    & /deep/ .el-drawer__header {
        margin-bottom: 0px;
        span {
            font-size: 20px;
            color: #818181;
            font-family: 'PingFang SC';
            font-style: normal;
            font-weight: 500;
        }
    }
}

.card-box {
    width: 90%;
    margin: 0 auto;

    .divider /deep/ .el-divider__text {
        font-size: 20px;
        color: #818181;
    }
}
</style>
