import Vue from 'vue'
import Vuex from 'vuex'
import  axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        statusData: [],
        gushiList: [],
        gushiDetail: [],
        saveList: [],
        gushiid: ''
    },
    mutations: {
       initList(state,list) {
           state.gushiList  = list
       },
       getDetailid(state,id) {
            // console.log('vuexid',id)
            state.gushiid = id
       },
       detailList(state,list) {
            state.gushiDetail = list
       },
       //改变status
       changeStatus(state,e) {
        //    console.log('e',e) //{status:true,id:1}
        //    var length = statusData.length
           if(!state.statusData.find((item) => item.id == e.id)) {
            state.statusData.push(e)
           }
       },
       delStatus(state,{id}) {
        //    console.log('dellllllid',id) //{id:1}
           state.statusData.forEach( ( item,index) => {
            // console.log('items:',item,index)
            if( item.id == id ){
                //console.info( item )
                //找到index的下标值
                state.statusData.splice( index, 1 );
            }
        })
       }
    },
    actions: {
        getData(context) {
            axios.get('../../static/data.json').then((res)=> {
                // console.log(res)
                context.commit('initList',res.data.songci)
            }) 
            // axios({
            //     method: 'get',
            //     // http://www.thenewstep.cn/test/testToken.php:
            //     url: `/api/songci/chapter?appkey=7f2920c783c6865a`,
            //     withCredentials: true,
            //     headers: {
            //       'Content-Type': 'application/json',
            //       // 'Content-Type': 'application/x-www-form-urlencoded',
            //     }
            //   }).then(res => {
            //     console.log('res',res)
            //     context.commit('initList',res.data.result)
            // })
        },
        getDetail({commit,rootState}) {
            // console.log('detailState:',rootState)
            var id = rootState.gushiid - 1
            axios.get('../../static/data.json').then((res)=> {
                // console.log('details:',res.data.tang[id])
                commit('detailList',res.data.tang[id])
            }) 
            
            // axios({
            //     method: 'get',
            // //    https://api.jisuapi.com/tangshi/detail?appkey=yourappkey&detailid=1
            //     url: `/api/songci/detail?appkey=7f2920c783c6865a&detailid=${rootState.gushiid}`,
            //     withCredentials: true,
            //     headers: {
            //         'Content-Type': 'application/json',
            //         // 'Content-Type': 'application/x-www-form-urlencoded',
            //     }
            //     }).then(res => {
            //     console.log('detail',res)
            //     commit('detailList',res.data.result)
            //     // this.gushiDetail = res.data.result
            // })
        }
    },
    getters: {
        getStatusData: state => {
            // console.log('state:',state)
            // return state.statusData.map(({id,status}) => {
                // console.log('iiid',id,status)
                // iiid 1 true iiid 2 true
                // if(state.gushiid == id) {
                    // return {
                        // ids: id,
                        // stat:status
                    // }
                // }
            // }) 
        }
    }
})