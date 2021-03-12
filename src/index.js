import h from './mySnabbdom/h.js'
import dispatch from './mySnabbdom/diapatch.js' 


//const mySnabbdom = h('h1', {}, '我是一个盒子')
//const mySnabbom3 = h('div', {}, h('span', {}, 'xx'))

const mySnabbdom = h('h1', {}, [
  h ('span', {}, '哈哈'),
  h ('span', {}, '嘻嘻')
])


//获取container元素
const container = document.getElementById ('container')

//调用dispatch函数
dispatch (container, mySnabbdom)