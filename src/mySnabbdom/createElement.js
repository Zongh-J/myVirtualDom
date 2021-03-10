//v_node：要插入的节点， point：标杆元素
//利用标杆元素找它的父级元素插入虚拟节点，然后移除标杆元素

//注意：这是一个简化版的操作dom元素的函数，其中，虚拟dom的text和children属性不可共存(因为都是第三个属性)
export default function (v_node, point) {
  //创建真实dom节点
  const nodeDom = document.createElement (v_node.sel)
  //判断虚拟节点的第三个属性是文本还是数组，文本直接上树渲染，是数组则需要递归调用
  if (v_node.text && (v_node.children == undefined || v_node.children.length === 0)) {
    //文本节点，直接上树
    const node_text = v_node.text
    nodeDom.innerText = node_text
    point.parentNode.insertBefore (nodeDom, point)
    point.parentNode.removeChild (point)
  } else if (Array.isArray (v_node.children) && v_node.children.length > 0) {
    console.log('数组，递归调用');
  }
}