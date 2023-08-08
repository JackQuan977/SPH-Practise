<template>
    <div>
        <!-- 使用三级联动的全局组件 ，全局组件不需要再import,直接使用-->
        <TypeNav/>
        <ListContainer/>
        <Recommend/>
        <Rank/>
        <Like/>
        <Floor/>
        <Floor/>
        <Brand/>
    </div>
</template>

<script>
//引入其余的组件
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
export default {
    name: '',
    components:{
        ListContainer,
        Recommend,
        Rank,
        Like,
        Floor,
        Brand
    },
    data() {
        return {
            
        }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
        
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
        
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>