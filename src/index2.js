/*
 * @Author: your name
 * @Date: 2021-03-04 23:43:37
 * @LastEditTime: 2021-03-06 22:39:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \virtual-dom\src\index.js
 */
import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
import { h } from 'snabbdom/h' 

//创建patch函数
const patch = init([classModule, propsModule, styleModule, eventListenersModule])

//创建虚拟节点
const VNode1 = h ('a', {
  props: {href: 'http://www.atguigu.com'}
}, '尚硅谷')

const VNode2 = h ('div', {class: {'box': true, 'btn': true}}, [
  h ('span', {class: {'span': true}}, 'xxx')
], {text: '111'})

//获取页面的container
console.log(VNode2)
//让虚拟节点上树
const container = document.getElementById ('container')
patch(container, VNode2)