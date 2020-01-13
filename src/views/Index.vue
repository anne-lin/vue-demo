<template>
    <div>
        <Tabs :list="list">              
            <template slot="tabUser"></template>
        </Tabs>
    </div>
</template>

<script>
import Tabs from "../components/Tabs"

export default {
    data(){
        return {
          list:[{
            name:"tabUser",
            label:"用户管理"
          },{
            name:"tabSet",
            label:"配置管理"
          },{
            name:"tabRole",
            label:"角色管理"
          },{
            name:"tabTime",
            label:"定时"
          }]
        }
    },
    components:{
        Tabs
    }
}
</script>