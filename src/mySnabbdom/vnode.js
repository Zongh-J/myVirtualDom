//VNode函数，用来返回virtual node对象

export function VNode (sel, data, children, text, elm) {
  return {
    sel, data,children, text, elm
  }
}