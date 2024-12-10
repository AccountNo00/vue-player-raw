<template>
    <Breadcrumbs :title="title"/>
    <HistoryNav @send-data="handleData"/>
    <div class="history">
        <div class="table-responsive mt-4 history-table">
            <table class="table table-light" v-if="selectedList == 1">
                <thead class="bg-warning">
                    <tr>
                        <th>#</th>
                        <th>Game Event</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="index in 30" :key="index">
                        <td>sample</td>
                        <td>sample</td>
                        <td>sample</td>
                        <td>sample</td>
                        <td>sample</td>
                    </tr>
                </tbody>
            </table>
            <table class="table table-light" v-if="selectedList == 2">
                <thead class="bg-warning">
                    <tr>
                        <th>#</th>
                        <th>Transaction Type</th>
                        <th>Transaction Via</th>
                        <th>Transaction Information</th>
                        <th>Transaction Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="index in 40" :key="index">
                        <td>sample</td>
                        <td>sample</td>
                        <td>sample</td>
                        <td>sample</td>
                        <td>sample</td>
                        <td>sample</td>
                        <td>sample</td>
                    </tr>
                </tbody>
            </table>
            <table class="table table-light" v-if="selectedList == 3">
                <thead class="bg-warning">
                    <tr>
                        <th>#</th>
                        <th>Action</th>
                        <th>Game No.</th>
                        <th>Bet Amount</th>
                        <th>Bet Selected</th>
                        <th>Payout</th>
                        <th>Win Amount</th>
                        <th>Before Money</th>
                        <th>Amount</th>
                        <th>After Money</th>
                        <th>Date and time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="index in 40" :key="index">
                        <td>sample</td>
                        <td>sample</td>
                        <td>sample</td>
                        <td>sample</td>
                        <td>sample</td>
                        <td>sample</td>
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
</template>
<script>
import Breadcrumbs from '../../../components/breadcrumbs.vue';
import HistoryNav from '../../../components/history-nav.vue';
export default{
    data(){
        return{
            title: 'History',
            selectedList: 1,
        }
    },
    components:{
        Breadcrumbs,
        HistoryNav
    },
    methods:{
        handleData(value) {
            this.selectedList = value;
        },
    },
    mounted(){
    
    }
}
</script>
<style scoped>

</style>