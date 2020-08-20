<template>
    <div>
        <div class="detailHead">
            <span class="line" @click="goHome"></span>
            <span class="headTitle">诗词详情</span>
        </div>
        <div class="gushiContent">
            <div>{{gushiDetail.title}}</div>
            <div class="author">{{gushiDetail.author}}</div>
            <div v-html="gushiDetail.content">{{gushiDetail.content}}</div>
        </div>
        {{status}}
        {{statusData}}
        <!-- {{getStatusData}} -->
        <!-- [{"ids":1,stat:true},{"ids":2,stat:true}] -->
        <div v-show="status == (false)" @click="addCollection">
            <span><img src="" alt=""></span>
            <span> {{shouchang}}</span>
        </div>
        <div v-show="status == true" @click="delCollection">
            <span><img src="" alt=""></span>
            <span>{{noshou}}</span>
        </div>
       
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import axios from 'axios'
import Vue from 'vue'
    export default {
        data() {
            return {
                // gushiDetail: {}
                status: false,
                shouchang:'收藏',
                noshou: '已收藏'
            }
        },
        methods: {
            goHome() {
                this.$router.go(-1)
            },
            addCollection() {
                this.status = !this.status
                var saveData = this.gushiDetail
                
                // console.log('saveDar:',saveData)
                this.$store.commit('changeStatus', {
                    status: true,
                    saveData,
                    id: this.$route.params.gushiid
                })
            },
            delCollection() {
                this.status = !this.status
                this.$store.commit('delStatus', {
                    // status: false,
                    id: this.$route.params.gushiid
                })
            }
        },
        computed: {
            ...mapState(['gushiDetail','statusData']),
            ...mapGetters(['getStatusData']),
        },
        mounted() {
            var stuData = this.statusData
            console.log('ssd',stuData) 
            console.log('length',stuData.length)
            let obj = {}
            stuData.forEach(item=> {
                obj[item.id] = item.status
            })
            var keys =[];
            　　for(var i in obj){
                　　keys.push(i);
            }
            var b = keys.map(Number)
            console.log('b',b)
            
            var gushiid = this.$route.params.gushiid
            console.log('gushiid',gushiid)
            console.log('b2',b.includes(gushiid))
            if(b.includes(gushiid) == true) {
                this.shouchang = '1ss'
            }
            this.$store.commit('getDetailid',gushiid)
            this.$store.dispatch('getDetail')
            //  axios({
            //     method: 'get',
            // //    https://api.jisuapi.com/tangshi/detail?appkey=yourappkey&detailid=1
            //     url: `/api/tangshi/detail?appkey=7f2920c783c6865a&detailid=${gushiid}`,
            //     withCredentials: true,
            //     headers: {
            //         'Content-Type': 'application/json',
            //         // 'Content-Type': 'application/x-www-form-urlencoded',
            //     }
            //     }).then(res => {
            //     console.log('detail',res)
            //     this.gushiDetail = res.data.result
            // })
        },
    }
</script>

<style scoped>
.detailHead {
    text-align: center;
    margin-top: 10px;
    /* position: relative; */
}
.line {
    width: 10px;
    height: 10px;
    border-top: 2px solid #000;
    border-left: 2px solid #000;
    transform: rotate(-45deg);
    display: inline-block;
    position: absolute;
    left: 10px;
}
.gushiContent {
    text-align: center;
    margin-top: 30px;
}
.gushiContent .author{
    margin-top: 10px;
}
</style>