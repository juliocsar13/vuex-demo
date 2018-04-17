<template>
    <li v-if="widget"> 
        <div class="card-widget">
            <div class="title--widget"> {{widget.title}} </div>
            <a href="#" @click="addDataToHotsPot(widget)">
                <img class="img--widget" v-bind:src='widget.url'/>
            </a>
        </div>
    </li>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    props: ['widget'],
    name: 'WidgetCard',
     methods: mapActions([
        'addDataToHotsPot'
    ]),
}
</script>
<style scoped>
    .img--widget {
        width: 100%;
    }   
    .card-widget {
        width: 100%;
        border-radius: 5px;
        text-align: center;
    }
    
</style>