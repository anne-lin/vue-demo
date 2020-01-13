<template>
   <div>
        <ul class="tab-header">
            <li v-for="item in list" :key="item.id">
                <p>{{item.label}}</p>
            </li>
        </ul>
                    <solt name="tabUser"></solt>

       
   </div>
</template>

<script>
export default {
   props:["list"],
   data(){
       return {
           showSlot:""
       }
   },
   created(){
       if(this.list.length){
           this.showSlot=this.list[0].name;
           this.list.forEach((item,index)=>{
                item.id=index;
            })
       }
   },
   methods:{
       changeTab(name){
           this.showSlot=name;
       }
   }
}
</script>

<style lang="less" scoped>
    .tab-header{
        display: flex;
        li{
            padding: 10px 20px;
            border: 1px solid #E4E7ED;
            color:#409EFF;
            list-style: none
        }
    }
</style>