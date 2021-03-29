import h from './mySnabbdom/h.js'
import dispatch from './mySnabbdom/dispatch.js' 


//const mySnabbdom = h('h1', {}, '我是一个盒子')
//const mySnabbom3 = h('div', {}, h('span', {}, 'xx'))

const mySnabbdom = h('ul', {}, [
  h('li', { key: 'A' }, 'A'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'Q' }, 'Q'),
  h ('li', {key: 'D'}, 'D'),
  h ('li', {key: 'E'}, 'E'),

])

const mySnabbdom1 = h('ul', {}, [
  h('li', { key: 'E' }, 'E'),
  h('li', { key: 'D' }, 'D'),
  h('li', { key: 'C' }, 'C'),
  h('li', { key: 'B' }, 'B'),
  h('li', { key: 'A' }, 'A')
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