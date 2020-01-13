<template>
    <div class="nav">
        <ul>
            <li 
                v-for="(item,index) in list" 
                :key="item.id" class="menu" 
                :style="{backgroundColor: active == index ? 'aquamarine':'#f4f4f4' }" 
                @click="active=index">
                <template v-if="item.children">    
                    <p @click="toggle(index)">{{item.name}}<span :class="[active == index ? 'icon-down':'icon-up']"> > </span></p>
                    <transition name="fade" v-if="item.toggle">
                        <ul>
<li v-for="menuChildren in item.children" :key="menuChildren.id" class="menu-children">
                            <router-link :to="menuChildren.route">{{menuChildren.name}}</router-link>
                        </li>
                        </ul>
                    </transition>
                </template>
                <router-link :to="item.route" v-else>{{item.name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import { log } from 'util';
export default {
    props:["list"],
    data(){
        return { 
            active:0
        }
    },
    created(){
        this.list.forEach(item=>{
            if(item.children && item.children.length > 0){
                item.toggle=false;
            }
        });
    },
    methods:{
        toggle(index){
            this.list[index].toggle = !this.list[index].toggle;
            this.list.push();
        }
    }
}
</script>
<style lang="less" scoped>
    .router-link-active ~ li{
        background-color: aquamarine
    }
    .nav{
        width: 230px;
        background-color: #f4f4ff;
    }
    .menu,.menu-children{
        width: 100%;
        padding: 5px;
        color:#666;
        a{
           text-decoration: none;
           color:inherit
        }
    }
    .menu{
        border-bottom: 1px solid #ffffff;
    }
    .list-enter-active,.list-leave-active{
        transition:all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
    .icon-down,
    .icon-up{
        display: inline-block
    }
    .icon-down{
        transform: rotate(90deg)
    }
    .icon-up{
        transform: rotate(-90deg)
    }
    .fade-enter-active,
    .fade-enter-active{
       animation-direction: 3s;
    }
    
</style>