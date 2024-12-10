<template>
    <Breadcrumbs :title="title"/>
    <HistoryNav @send-data="handleData"/>
    <div class="history">
        <div class="table-responsive mt-4 history-table">
            <table class="table" v-if="selectedList == 1">
                <thead class="bg-theme text-dark">
                    <tr>
                        <th>#</th>
                        <th>Game Event</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row,index in data.list" :key="index">
                        <td>{{index + 1}}</td>
                        <td>{{row.title}}</td>
                        <td>{{row.status == 1 ? 'Ongoing' : row.status == 2 ? 'FINISHED' : ''  }}</td>
                        <td>
                            {{`${dateOnly(row.created_at)}`}}
                            <br>
                            <span class="text-warning">{{`${timeOnly(row.created_at)}` }}
                            </span>
                        </td>
                        <td>
                            <button class="btn-theme btn-sm p-2">View Results</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="table" v-if="selectedList == 2">
                <thead class="bg-theme text-dark">
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
                    <tr v-for="row,index in data.list" :key="index">
                        <td>{{index + 1}}</td>
                        <td>
                            <span :class="row.type == 1 ? 'text-success': row.type == 2 ? 'text-danger': 'text-secondary'">
                                {{
                                    row.type === 1 ? "Deposit" : row.type === 2 ? "Withdraw" : row.type === 6 ? "Raffle Reward" : ''
                                }}
                            </span>
                        </td>
                        <td class="text-uppercase">{{`MERCHANT(${row.processor})`}}</td>
                        <td>{{row.note}}</td>
                        <td>{{row.amount}}</td>
                        <td>{{row.status}}</td>
                        <td>
                            <button class="btn-theme btn-sm p-2">View Results</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table class="table" v-if="selectedList == 3">
                <thead class="bg-theme text-dark">
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
                    <tr v-for="row,index in data.list" :key="index">
                        <td>{{index + 1}}</td>
                        <td>sample</td>
                        <td>{{row.bets.match_number}}</td>
                        <td>{{row.details.amount}}</td>
                        <td>
                            {{
                                row.bets ? row.bets.select === 'left' && row.bets.is_super === 1
                                    ? "STRAIGHT 3 APPLE NA PULA" : row.bets.select === 'right' && row.bets.is_super === 1
                                        ? "STRAIGHT 3 APPLE NA PUTI" : row.bets.select === 'left' && row.bets.is_super === 0
                                            ? "APPLE NA PULA" : row.bets.select === 'right' && row.bets.is_super === 0
                                                ? "APPLE NA PUTI" : row.bets.select === 'cancel' ? "CANCELLED" : "WAITING RESULT" : '-'
                            }}
                        </td>
                        <td>{{row.details.odds}}</td>
                        <td>{{row.details.win_amount}}</td>
                        <td>{{row.details.before_money}}</td>
                        <td>
                            <span :class="row.bets.status == 2 ? 'text-danger':'text-success'">{{row.amount}}</span>
                        </td>
                        <td>{{row.details.after_money}}</td>
                        <td>
                            {{`${dateOnly(row.created_at)}`}}
                            <br>
                            <span class="text-warning">{{`${timeOnly(row.created_at)}` }}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import Breadcrumbs from '../../../components/breadcrumbs.vue';
import HistoryNav from '../../../components/history-nav.vue';
import formatter from "../../../components/mixins/formatter";
import { mapActions } from 'vuex';
export default{
    data(){
        return{
            title: 'History',
            selectedList: 1,
			data: {
				list: [],
				links: [],
				current_page: 1,
				per_page: 1,
				last_page: 1,
			},
        }
    },
    components:{
        Breadcrumbs,
        HistoryNav
    },
    mixins:[formatter],
    methods:{
        ...mapActions('history',{
            listOfBets: "betList",
            listOfTransactions: "transactionList",
            listOfPointLogs: "pointLogs",
        }),
        handleData(value) {
            this.selectedList = value;
            this.initList(1);
        },
        async initList(p) {
			var pl = {
				page: p ? p : 1,
				limit: 10,
				order: "desc",
			};
			this.loading = true;
			const data = this.selectedList == 1 ? await this.listOfBets(pl) : this.selectedList == 2 ? await this.listOfTransactions(pl) :  this.selectedList == 3 ? await  this.listOfPointLogs(pl)  : '';
			this.loading = false;
			this.data.list = data.data;
			this.data.links = data.links;
			this.data.current_page = data.current_page;
			this.data.per_page = data.per_page;
			this.data.last_page = data.last_page;
		},
    },
    mounted(){
        this.initList(1);
    }
}
</script>
<style scoped>

</style>