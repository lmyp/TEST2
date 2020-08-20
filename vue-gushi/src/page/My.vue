<template>
    <div>
        My
        <div v-if="statusData.length == 0">
            收藏夹为空
        </div>
        <div v-else class="content" 
            v-for="(item,index) in statusData"
            @click="todetail(item.saveData.detailid)" 
            :key="index" >
            {{item.saveData.title}}-{{item.saveData.author}}
        </div>
       {{statusData}}
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        data() {
            return {
                
            }
        },
        methods: {
            todetail(id) {
                console.log('999999',id)
                this.$router.push({
                    name: 'detail',   // 只能用 name
                    params: {
                        gushiid: id
                    }
                })
            }
        },
        computed: {
            ...mapState(['statusData']),
        },
        mounted() {
            console.log('mmmmmmm')
        },
    }
</script>

<style scoped>
.content {
    line-height: 40px;
    height: 40px;
    text-align: center;
    border-bottom: 1px solid #000;
}
</style>