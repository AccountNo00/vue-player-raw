<template>
    <Breadcrumbs :title="title"/>
    <div class="msg-padding">
        <div class="msg-div">
            <div class="msg-details mb-3">
                <div class="msg-icon">
                    <i class="mdi mdi-lock"></i>
                </div>
                <h3 class="text-white mt-3">Change Password</h3>
                <h5 class="text-secondary">Enter your current password and new password</h5>
                <h5 class="text-secondary notice"><span class="text-warning">Notice:</span> If you no longer have access to your mobile number, kindly contact our Customer Service at <span class="text-info">customerservice@tripledg.com</span> for assistance.</h5>
            </div>
            <div class="px-4 pt-2">
                <div class="mb-3">
                    <label class="text-secondary">Current Password</label>
                    <div class="cp-input">
                        <input class="form-control input-theme" :type="showPasswordCurrent ? 'text':'password'"/>
                        <i  @click="toggleShowCurrent()"
                            :class="!showPasswordCurrent ? 'mdi mdi-eye-off':'mdi mdi-eye-outline'"
                        ></i>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="text-secondary">Password</label>
                    <div class="cp-input">
                        <input class="form-control input-theme" :type="showPassword ? 'text':'password'"/>
                        <i  @click="toggleShowPassword()"
                            :class="!showPassword ? 'mdi mdi-eye-off':'mdi mdi-eye-outline'"
                        ></i>
                    </div>
                </div>
                <div class="mb-4">
                    <label class="text-secondary">Confirm Password</label>
                    <div class="cp-input">
                        <input class="form-control input-theme" :type="showPasswordConfirm ? 'text':'password'"/>
                        <i  @click="toggleShowConfirm()"
                            :class="!showPasswordConfirm ? 'mdi mdi-eye-off':'mdi mdi-eye-outline'"
                        ></i>
                    </div>
                </div>
                <div>
                    <button class="btn-theme w-100" @click="showAlert()">Change Password</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Breadcrumbs from '../../../components/breadcrumbs.vue';
import Swal from 'sweetalert2';
export default{
    data(){
        return{
            title: 'Change Password',
            showPasswordCurrent: false,
            showPassword: false,
            showPasswordConfirm: false,
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
        },
        toggleShowCurrent(){
            if(this.showPasswordCurrent){
                this.showPasswordCurrent = false;
            }else{
                this.showPasswordCurrent = true;
            }
        },
        toggleShowPassword(){
            if(this.showPassword){
                this.showPassword = false;
            }else{
                this.showPassword = true;
            }
        },
        toggleShowConfirm(){
            if(this.showPasswordConfirm){
                this.showPasswordConfirm = false;
            }else{
                this.showPasswordConfirm = true;
            }
        },
        showAlert() {
            Swal.fire({
                title: 'Warning!',
                text: 'Under maintenance.',
                icon: 'warning',
                confirmButtonText: 'OK',
            });
        },
    },
    mounted(){
    }
}
</script>
<style scoped>

</style>