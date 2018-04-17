<template>
    <div class = "content">
        <form @submit.prevent="addWidget({ title, url })">
            <input v-model= "title" type='text' placeholder="TITULO"/>
            <input v-model= "url" type='text' placeholder="URL"/>
            <div>
                <button type="submit">Create</button>
            </div>
        </form>
    </div>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'WidgetAdd',
    components: {

    },
    data() {
        return{
        title:'',
        url:'',
        }
    },
    methods:{
        addWidget() {
            this.$store.dispatch( "addWidgetToList", { title: this.title, url: this.url })
        }
    }
}
</script>