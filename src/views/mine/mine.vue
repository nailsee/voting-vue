<template>
    <!-- 内容 -->
    <div class="main">
        <header-view v-bind="{statistics, name, titleName}"/>

        <div class="main-content" v-for="(item,index) in list" :key="item.id">
            <div class="main-li">
                <div class="main-top" @click="onDetails(item)">
                    <p class="am-badge-danger">{{ item.type }}-{{ item.id }}</p>
                    <p style="color: #5087a2;">{{ item.vote }}票</p>
                </div>

                <div class="main-li-img">
                    <div class="main-li-img-cont">
                        <img :src="item.file_url" alt="" @click="onDetails(item)">
                    </div>
                </div>

                <div class="main-bottom">
                    <template v-if="item.is_vote">
                        <el-button style=" width: 100%; background: #5087a2;" type="danger"
                                   @click="vote_complete(item)">已投票
                        </el-button>
                    </template>
                    <template v-else>
                        <template v-if="item.is_checked">
                            <el-button style=" width: 100%; background: #5087a2;" type="danger"
                                       @click="vote_cancel(item)">取消选中
                            </el-button>

                        </template>
                        <template v-else>
                            <el-button style=" width: 100%; background: #5087a2;" type="danger"
                                       @click="onCheckVote(item)">投票
                            </el-button>
                        </template>
                    </template>

                </div>
            </div>
        </div>
        <div class="footer_wrap" v-if="checkList.length">
            <div class="footer_wleft">
                已选
                <div v-for="item in checkList" :key="item.id">
                    <img :src="item.file_url" alt=""/>
                </div>
            </div>
            <div class="footer_wcenter">
                <div class="footer_wcsolid"></div>
            </div>
            <div class="footer_wright" @click="onSubmit">提交投票</div>
        </div>
        <van-popup closeable v-model="show">
            <div class="votedet_wrap">
                <div class="votedet_top">
                    <div class="votedet_tleft">作品<span>{{ voteDetail.type }}-{{ voteDetail.id }}</span></div>
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
        <!-- <van-pagination v-model="currentPage" :page-count="12" mode="simple" /> -->
    </div>
</template>

<script>
import {router} from '../../main'
import axios from "../../../utils/request";
import HeaderView from '../../components/header'

	export default {
        components: {HeaderView},

        data() {
			return {
                id: undefined,
                list: [],
                show: false,
                voteDetail: '',
                checkList: [],
                useopenid: '',
                rankShow: false,
                statistics: 0,
                name: '',
                titleName: '', // header标题
            }
		},
		methods:{
            getCustomerList() {
                let _this = this;
                let postData = {
                    page: 1,
                    page_size: 100,
                    wx_id: _this.useopenid,
                    types: _this.id,
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
                            console.log(dataList)

                            for (let i = 0; i < dataList.length; i++) {
                                dataList[i].is_checked = false;
                            }
                            _this.statistics = useData.data.sum > 9999 ? (Math.trunc(useData.data.sum / 1000) / 10).toFixed(1) + 'w' : useData.data.sum

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
                    if (check_num >= 2) {
                        this.$toast.success('每次最多投2个作品');
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
		},
        mounted() {
            console.log(this.id,this.name,'---------+++++++')
        },
        beforeMount() {
            const {app:{_route:{query:{id,name}}}} = router
            this.name = name
            this.id = id
            this.titleName = name + '  累计票数'
            this.useopenid = localStorage.getItem('useopenid')
            this.getCustomerList()

        },
        watch: {
            $route(to,from){
                this.name = to.query.name
                this.id = to.query.id
                this.titleName = to.query.name + '  累计票数'
                this.getCustomerList()
            }
        }
    }
</script>

<style scoped="scoped" lang="less">
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
    margin-bottom: 15px;
    img {
        display: block;
        width: 100%;
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
}
</style>
