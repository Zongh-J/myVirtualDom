import h from './mySnabbdom/h.js'
import dispatch from './mySnabbdom/diapatch.js' 


const mySnabbdom = h('h1', {}, '我是一个盒子')
//const mySnabbom3 = h('div', {}, h('span', {}, 'xx'))

// const mySnabbdom = h('ul', {}, [
//   h ('li', {}, '哈哈'),
//   h ('li', {}, '嘻嘻')
// ])

const mySnabbdom1 = h('h1', {}, [
  h ('p', {}, '哈哈'),
  h ('p', {}, '嘻嘻')
])


//获取container元素
const container = document.getElementById ('container')
//获取btn元素
const btnNode = document.getElementById ('btn')

//调用dispatch函数
dispatch (container, mySnabbdom)

btnNode.onclick = function () { 
  dispatch (mySnabbdom, mySnabbdom1)
 }