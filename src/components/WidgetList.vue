<template>
    <ul class="scroll--widget" >
        <WidgetCard 

            v-for="widget in widgets" 
            :key="widget.id"
            :widget.sync="widget" ></WidgetCard>
    </ul>
</template>
<script>
import WidgetCard from './WidgetCard';
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'WidgetList',
    components: { WidgetCard },
    computed: mapGetters({
        widgets: 'allWidgets',
    }),
    created(){
        this.$store.dispatch('getAllWidgets')
    }
}
</script>
<style>
    .scroll--widget {
        overflow: scroll;
        height:88vh;
    }
</style>