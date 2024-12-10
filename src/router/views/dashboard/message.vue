<template>
    <Breadcrumbs :title="title"/>
    <div class="msg-padding">
        <div class="msg-div">
            <div class="msg-details mb-3">
                <div class="msg-icon">
                    <i class="mdi mdi-email-outline"></i>
                </div>
                <h3 class="text-warning mt-3">Message Inbox</h3>
                <button class="btn btn-warning" @click="goToCreate()">Create Message</button>
            </div>
            <div class="msg-table table-responsive mx-4">
                <table class="table table-light">
                    <thead class="bg-warning">
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="index in 1" :key="index">
                            <td>sample</td>
                            <td>sample</td>
                            <td>sample</td>
                            <td>sample</td>
                            <td>sample</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import Breadcrumbs from '../../../components/breadcrumbs.vue';
export default{
    data(){
        return{
            title: 'Message List',
        }
    },
    components:{
        Breadcrumbs
    },
    methods:{
        goToCreate(){
            this.$router.push({
                path:'/message-create'
            })
        }
    },
    mounted(){
    }
}
</script>
<style scoped>

</style>