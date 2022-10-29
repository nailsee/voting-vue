<template>
    <div class="home">
        <div class="home__card" v-for="item in detailList" :key="item.id">
            <img :src="item.logo" />
            <div class="btn"  @click="handleJump(item.id)">查看详情</div>
            <div class="type">{{item.type_name}}</div>
        </div>
    </div>
</template>

<script>
import {
    publicMethod
} from "../../../utils/pubilc.js";
import axios from "../../../utils/request.js"
import {router} from '../../main'

export default {
    data() {
        return {
            detailList: [],

        }
    },
    methods: {
        handleJump(id) {
            console.log(id,'iddddd')
            router.push({ path: `/mine`, params: {id}})
        }
    },
    mounted() {
        try {
            axios.post('/typeList',{}).then(res => {
                console.log(res.data)
                if(res.data.code == 0) {
                    this.detailList = res.data.data;
                }
            }).catch(res=>{
                console.log(res,'res')
            })
        }catch (e) {

        }


    },
    created() {

    },
    destroyed() {
    }
}
</script>

<style scoped="scoped" lang="less">
.home {
    width: 96vw;
    margin: 0 auto;
   &__card {
        border: 1px solid #A5C7D5;
        height: 200px;
        padding: 5px;
        margin-bottom: 10px;
       position: relative;
       img {
           width: 100%;
           height: 150px;
           margin-bottom: 5px;
       }
       .btn {
           height: 40px;
           background: #4E87A3;
           font-family: 'PingFang SC';
           font-style: normal;
           font-weight: 400;
           font-size: 18px;
           color: #fff;
           text-align: center;
           line-height: 35px;
       }
       .type {
           position: absolute;
           width: 116px;
           height: 38px;
           font-family: 'PingFang SC';
           font-style: normal;
           font-weight: 600;
           line-height: 38px;
           font-size: 21px;
           text-align: center;
           color: #4E87A3;
           background: #F2F6FF;
           border-radius: 0px 0px 6px 6px;
           top: 5px;
           left: 50%;
           transform: translateX(-50%);

       }
   }
}
</style>
