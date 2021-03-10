/*
 * @Author: your name
 * @Date: 2021-03-07 13:18:06
 * @LastEditTime: 2021-03-07 23:43:47
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \virtual-dom\src\index3.js
 */
import h from './mySnabbdom/h.js'

const mySnabbdom = h ('div', {}, '我是一个盒子')

const mySnabbdom2 = h ('div', {}, [
  h ('span', {}, [
   
  ])
])

const mySnabbom3 = h('div', {}, h('span', {}, 'xx'))
 console.log(mySnabbdom2);