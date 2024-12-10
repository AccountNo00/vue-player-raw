<template>
    <Breadcrumbs :title="title"/>
    <div class="wallet mt-4">
        <div class="player-details me-3">
            <div class="mb-4">
                <div class="text-center">
                    <i class="text-warning mdi mdi-account-outline" style="font-size: 75px;"></i>
                    <h6 class="text-white">Welcome</h6>
                    <h5 class="text-white">PLAYER PLAYER</h5>
                </div>
            </div>
            <div>
                <button class="w-100 p-3" @click="type = 'cash-in'" :class="type == 'cash-in' ? 'cash-btn-active':'cash-btn'">Cash-In</button>
                <button class="w-100 p-3" @click="type = 'cash-out'" :class="type == 'cash-out' ? 'cash-btn-active':'cash-btn'">Cash-Out</button>
            </div>
        </div>
        <div class="transaction">
            <div class="text-center text-white">
                <i class=" mdi mdi-cash fs-1"></i>
                <h5 class="text-white">Cash-In</h5>
                <span class="">Enter the amount and choice of your Cash-in</span>
            </div>
            <div class="cash-in-type p-4">
                <label class="mb-3 text-capitalize text-white">{{ type }} Type</label>
                <div class="select-payment">
                    <div class="col-4" @click="cash_in_type = 'bank'">
                        <div class="d-flex cash-card justify-content-between">
                            <div class="d-flex flex-column ">
                                <h5 class="text-white">via Bank</h5>
                                <div>
                                    <button class="btn btn-warning btn-sm">Select</button>
                                </div>
                            </div>
                            <img src="../../../assets/images/payment/bank.png" height="40"/>
                        </div>
                    </div>
                    <div class="col-4" @click="cash_in_type = 'portal'">
                        <div class="d-flex cash-card justify-content-between">
                            <div class="d-flex flex-column ">
                                <h5 class="text-white">Payment Portals</h5>
                                <div>
                                    <button class="btn btn-warning btn-sm">Select</button>
                                </div>
                            </div>
                            <img src="../../../assets/images/payment/merchant.png" height="40"/>
                        </div>
                    </div>
                    <div class="col-4" @click="cash_in_type = 'outlet'">
                        <div class="d-flex cash-card justify-content-between">
                            <div class="d-flex flex-column ">
                                <h5 class="text-white">Gaming Site</h5>
                                <div>
                                    <button class="btn btn-warning btn-sm">Select</button>
                                </div>
                            </div>
                            <img src="../../../assets/images/payment/outlet.png" height="40"/>
                        </div>
                    </div>
                </div>
                <div class="cash-in d-flex flex-column justify-content-center mt-3" v-if="type == 'cash-in'">
                    <img class="mb-2" src="../../../assets/images/payment/QRPh.png" height="120"/>
                    <img class="mb-2" src="../../../assets/images/payment/OnlineBanking.png" height="120"/>
                </div>
                <div class="cash-out d-flex flex-column justify-content-center mt-3" v-if="type == 'cash-out'">
                    <img class="mb-2" src="../../../assets/images/payment/cashOutPh.png" height="120"/>
                </div>
                <div>
                    <div class="mb-3" v-if="cash_in_type == 'bank'">
                        <select class="form-control mb-3" v-model="bankType">
                            <option value="manual">Manual</option>
                        </select>
                        <div class="mb-3 cashin-inputs">
                            <input class="form-control" placeholder="Bank Name"/>
                            <label><i class="mdi mdi-bank me-2"></i>Bank Name</label>
                        </div>
                    </div>
                    <div  v-if="cash_in_type == 'portal'">
                        <select class="form-control mb-3" v-model="portalType">
                            <option value="dragonpay">Dragon Pay</option>
                            <option value="fortunepay">Fortune Pay</option>
                        </select>
                    </div>
                    <div v-if="cash_in_type == 'bank'">
                        <div class="mb-3 cashin-inputs">
                            <input class="form-control" placeholder="Account Name"/>
                            <label><i class="mdi mdi-card-account-details-outline me-2"></i>Account Name</label>
                        </div>
                        <div class="mb-3 cashin-inputs">
                            <input class="form-control" placeholder="Account Number"/>
                            <label><i class="mdi mdi-wallet-outline me-2"></i>Account Number</label>
                        </div>
                        <div class="btn-value mb-3">
                            <button class="btn btn-warning">₱500</button>
                            <button class="btn btn-warning">₱1000</button>
                            <button class="btn btn-warning">₱1500</button>
                            <button class="btn btn-warning">₱2000</button>
                            <button class="btn btn-warning">₱3000</button>
                        </div>
                        <div class="mb-2 cashin-inputs">
                            <input class="form-control" placeholder="Amount"/>
                            <label><i class="mdi mdi-currency-php me-2"></i>Amount</label>
                        </div>
                        <div class="mb-2">
                            <label>Transaction Screenshot</label>
                            <input class="form-control" type="file"/>
                        </div>
                        <div class="mb-2">
                            <button class="btn btn-warning w-100">Submit</button>
                        </div>
                    </div>
                    <div v-if="portalType">
                        <div class="mb-3 cashin-inputs">
                            <input class="form-control" placeholder="Enter Email" type="email"/>
                            <label><i class="mdi mdi-card-account-details-outline me-2"></i>Enter Email</label>
                        </div>
                        <div class="mb-3 cashin-inputs">
                            <input class="form-control" placeholder="Enter Mobile Number"/>
                            <label><i class="mdi mdi-wallet-outline me-2"></i>Mobile Number</label>
                        </div>
                        <div class="btn-value mb-3">
                            <button class="btn btn-warning">₱500</button>
                            <button class="btn btn-warning">₱1000</button>
                            <button class="btn btn-warning">₱1500</button>
                            <button class="btn btn-warning">₱2000</button>
                            <button class="btn btn-warning">₱3000</button>
                        </div>
                        <div class="mb-2 cashin-inputs">
                            <input class="form-control" placeholder="Enter Amount"/>
                            <label><i class="mdi mdi-currency-php me-2"></i>Amount</label>
                        </div>
                        <div class="mb-2">
                            <label>Transaction Screenshot</label>
                            <input class="form-control" type="file"/>
                        </div>
                        <div class="mb-2">
                            <button class="btn btn-warning w-100">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Breadcrumbs from '../../../components/breadcrumbs.vue';
export default{
    data(){
        return{
            title: 'Transaction',
            type: 'cash-in',
            cash_in_type: '',
            bankType: '',
            portalType: null,
        }
    },
    components:{
        Breadcrumbs
    },
    methods:{
    },
    mounted(){
    
    }
}
</script>
<style scoped>

</style>