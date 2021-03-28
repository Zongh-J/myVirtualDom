import h from './mySnabbdom/h.js'
import dispatch from './mySnabbdom/dispatch.js' 


//const mySnabbdom = h('h1', {}, '我是一个盒子')
//const mySnabbom3 = h('div', {}, h('span', {}, 'xx'))

const mySnabbdom = h('ul', {}, [
  h('li', { key: 'A' }, 'A'),
  h ('li', {key: 'B'}, 'B1'),
  h('li', { key: 'C' }, 'CC1'),
  
])

const mySnabbdom1 = h('ul', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B2'),
  h('li', { key: 'C' }, 'CC2'),
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