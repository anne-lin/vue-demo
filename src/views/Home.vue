<template>
  <div class="home">
      <Navbar :list="list"/>
      <br>
      <router-view></router-view>

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Navbar"

export default {
  name: 'home',
  components: {
    Navbar,
  },
  data(){
    return {
      list:[
        {
        id:"1",
        name:"首页",
        route:"/index"
      },{
        id:"2",
        name:"发布",
        route:"/index"
      },{
        id:"3",
        name:"管理",
        children:[{
          id:"3-1",
          name:"内容管理",
          route:"/index"
        },{
          id:"3-2",
          name:"内容同步",
          route:"/index"
        },{
          id:"3-3",
          name:"素材中心",
          route:"/index"
        }]
      },{
        id:"4",
        name:"数据",
        route:"/index"
      },{
        id:"5",
        name:"设置",
        route:"/index"
      }]
    }
  }
}
</script>
