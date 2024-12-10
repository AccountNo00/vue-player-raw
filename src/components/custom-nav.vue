<template>
    <div class="custom-nav d-flex justify-content-between">
        <div class="logo">
            <img src="../assets/images/logo.png" height="90">
        </div>
        <div class="d-flex align-items-center menu-responsive">
            <i class="mdi mdi-menu"></i>
        </div>
        <div class="routers">
            <h5>Balance: {{profile.points ? profile.points : 0}}</h5>
            <router-link class="router-link text-white" to="/">Home</router-link>
            <router-link class="router-link text-white" to="/history">History</router-link>
            <router-link class="router-link text-white" to="/wallet">Wallet</router-link>
            <div>
                <b-dropdown id="dropdown-offset" offset="25" class="m-2">
                    <template #button-content>
                        <i class="mdi mdi-cog"></i>
                    </template>
                    <b-dropdown-item ><router-link to="/message">Message</router-link></b-dropdown-item>
                    <b-dropdown-item ><router-link to="/profile">Profile</router-link></b-dropdown-item>
                    <b-dropdown-item ><router-link to="/change-password">Change Password</router-link></b-dropdown-item>
                    <b-dropdown-item @click="contactUs()">Contact US</b-dropdown-item>
                    <b-dropdown-item ><span class="text-danger" @click="logout()">LOGOUT</span></b-dropdown-item>
                </b-dropdown>
            </div>
        </div>
    </div>
    <div class="contact-us" :hidden="contact_modal">
        <div class="custom-grid  margin-200">
            <div class="d-flex justify-content-center cu-logo">
                <img src="../assets/images/logo.png" height="400"/>
            </div>
            <div class="d-flex flex-column cu-responsive">
                <h4 class="text-white">CONTACT</h4>
                <h5 class="text-warning mx-2"><span class="text-white">SMART: </span>0919-056-7779</h5>
                <h5 class="text-warning mx-2"><span class="text-white">Telephone: </span>02-8860-5951</h5>
                <h4 class="text-white mt-4">EMAIL</h4>
                <h5 class="text-warning mx-2">customerservice@tripledg.com</h5>
                <h4 class="text-white mt-4">MESSAGE</h4>
                <h5 class="text-warning mx-2">https://dev-ftf-player.tripledg.co/message-create</h5>
            </div>
        </div>
        <div class="text-end">
            <button class="btn-theme back-btn" @click="contactUs()">Back</button>
        </div>
    </div>
</template>
<script>
import $cookies from "vue-cookies";
import { mapGetters } from 'vuex';
export default{
    data(){
        return{
            contact_modal: true,
        }
    },
    components:{
    },
    methods:{
		...mapGetters("auth", ["profile"]),
        contactUs(){
            if(this.contact_modal){
                this.contact_modal = false;
            }else{
                this.contact_modal = true;
            }
        },
        logout(){
            $cookies.remove("token");
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        }
    },
    mounted(){
        console.log(this.profile)
    }
}
</script>
<style scoped>
.back-btn{
    position: absolute;
    bottom: 10px;
    right: 10px;
}
</style>