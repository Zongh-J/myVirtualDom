//感受diff算法
import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
import { h } from 'snabbdom/h' 

const containerNode = document.getElementById ('container')
const btnNode = document.getElementById ('btn')

//创建patch函数
const patch = init([classModule, propsModule, styleModule, eventListenersModule])

//创建虚拟节点
const myVirtualNode1 = h ('ul', {}, [
  h ('li', {class: {li: true}, key:'A'}, 'A'),
  h ('li', {class: {li: true}, key:'B'}, 'B'),
  h ('li', {class: {li: true}, key:'C'}, 'C'),
  h ('li', {class: {li: true}, key:'D'}, 'D'),
])

//更新虚拟节点1
const myVirtualNode2 = h ('ul', {}, [
  h ('li', {class: {li: true}}, 'A'),
  h ('li', {class: {li: true}, key:'B'}, 'B'),
  h ('li', {class: {li: true}, key:'C'}, 'C'),
  h ('li', {class: {li: true}, key: 'D'}, 'D')
])

btnNode.addEventListener ('click', function () { 
  patch (myVirtualNode1, myVirtualNode2)
})

//虚拟节点上树
patch (containerNode, myVirtualNode1)
