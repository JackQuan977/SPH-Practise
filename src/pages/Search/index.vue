<template>
    <div>
        <h1>params参数{{$route.params.keyword}}</h1>
        <h1>query参数{{$route.query.keyword}}</h1>
    </div>
</template>

<script>
export default {
    name: '',
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