<template>
    <van-popup closeable v-model="rankShow">
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
</template>

<script>
	export default {
        name: 'rankView',
        props: ['rankShow'],
		data() {
			return {
                voteDetail: {

                }
			}
		}
	}
</script>

<style scoped="scoped" lang="less">

</style>
