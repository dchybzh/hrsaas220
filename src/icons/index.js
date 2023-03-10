import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon' // svg component

// register globally 注册全局 SvgIcon组件
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
// 以上两行代码的含义，就是将所有的 svg 目录下的所有的.svg后缀的文件全都引入到项目中
