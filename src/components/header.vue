<template>
    <div>
        <div class="route">{{ name }}</div>
        <div class="vote_time_wrap_two">
            <p class="vote_time_wrap_tp">{{ titleName }}</p>
            <p>{{ statistics }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "header",
    props: ['statistics', 'name', 'titleName'],

}
</script>

<style scoped lang="less">
.route {
    background: #4E87A3;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin-bottom: 20px;
    font-family: 'PingFang SC';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #fff;
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
    margin-bottom: 20px;

}

.vote_time_wrap_tp {
    padding-right: 90px;
    color: #4E87A3;
    opacity: 0.8;
}
</style>
