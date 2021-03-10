// 手写h函数

import { VNode } from './vnode.js'

// h('div', {}, '我是一个盒子')
// h('div', {}, [])
// h('div', {}, h())
//阉割版的h函数
export default function (sel, data, c) { 
  if (arguments.length < 3) {
    throw Error ('阉割版的h函数只支持三个参数')
  }
  if (typeof c === 'string' || typeof c === 'number') {
    //h('div', {}, '我是一个盒子') 第一种情况
    return VNode (sel, data, undefined, c, undefined)
  } else if (Array.isArray (c) && c.length > 0) {
    //h('div', {}, []) 第二种情况
    let children = []
    for (let i = 0; i < c.length; i++) {
      if (typeof c[i] === 'object' && c[i].hasOwnProperty ('sel')) {
        children.push (c[i])
      }
    }
    return VNode (sel, data, children, undefined, undefined)
  } else if (typeof c === 'object' && c.hasOwnProperty('sel')) {
    //h('div', {}, h()) 第三种情况
    let children = []
    children.push (c)
    return VNode (sel, data, children, undefined, undefined)
  } else {
    //第四种情况 第三个参数啥也不是
    throw Error ('请正确传递第三个参数')
  }
}