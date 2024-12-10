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
                <button class="w-100 p-3 cash-btn-active">Profile</button>
                <button class="w-100 p-3 cash-btn" @click="gotoChangePassword()">Change Password</button>
            </div>
        </div>
        <div class="transaction p-4">
            <div class="profile-inputs">
                <div>
                    <label class="text-white">First Name</label>
                    <input class="form-control input-theme"/>
                </div>
                <div>
                    <label class="text-white">Last Name</label>
                    <input class="form-control input-theme"/>
                </div>
            </div>
            <div class="profile-inputs">
                <div>
                    <label class="text-white">Username</label>
                    <input class="form-control input-theme"/>
                </div>
                <div>
                    <label class="text-white">Email address</label>
                    <input class="form-control input-theme" type="email"/>
                </div>
            </div>
            <div class="profile-inputs">
                <div>
                    <label class="text-white">Phone Number</label>
                    <input class="form-control input-theme"/>
                </div>
                <div>
                    <label class="text-white">Address</label>
                    <input class="form-control input-theme" />
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
            title: 'User Profile',
            type: 'profile',
        }
    },
    components:{
        Breadcrumbs
    },
    methods:{
        gotoChangePassword(){
            this.$router.push({
                path: '/change-password'
            });
        }
    },
    mounted(){
    
    }
}
</script>
<style scoped>

</style>