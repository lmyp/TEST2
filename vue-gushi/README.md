var statusData = [
    {
        id: 1,
        status: true
    },
    {
        id: 2,
        status: true
    }
]
let obj = {}
statusData.forEach(item=> {
    obj[item.id] = item.status
})
 
// console.log('obj', JSON.stringify(obj, null, 2));
// console.log(obj)
var keys =[];
　　for(var i in obj){
    　　keys.push(i);
}
// console.log(keys);
var b = keys.map(Number)
console.log(b)
console.log(b.includes(2))
//zhuan hua shuzu
// console.log(statusData)
// console.log(statusData.includes(1))
//对象转数组
// let arr = []
// let obj = {
//     dr: "dr001",
//     ljy: "ljy002"
// }
 
// for(let prop in obj) {
//     arr.push({
//         name: prop,
//         ct: obj[prop]
//     })
// }
 
// console.log('arr', JSON.stringify(arr, null, 2));
// arr [
//     {
//       "name": "dr",
//       "ct": "dr001"
//     },
//     {
//       "name": "ljy",
//       "ct": "ljy002"
//     }
//   ]
//===================================
//数组转对象
// let arr = [
//     {
//     name: 'dr',
//     ct: 'dr001'
//     },
//     {
//         name: 'ljy',
//         ct: 'ljy002'
//     }]
// let obj = {}
// arr.forEach(item=> {
//     obj[item.name] = item.ct
// })
 
// console.log('obj', JSON.stringify(obj, null, 2));