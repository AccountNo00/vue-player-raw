<template>
    <div class="main-lg-container">
        <div class="login-container">
            <div class="text-center mb-5">
                <img src="../../../assets/images/logo.png" height="100"/>
            </div>
            <h5 class="text-white">LOGIN TO YOUR ACCOUNT</h5>
            <div class="login-input mb-3">
                <i class="mdi mdi-account-outline"></i>
                <input placeholder="Username" v-on:keyup.enter="tryToLogin" v-model="this.username"/>
            </div>
            <div class="login-input mb-4">
                <i class="mdi mdi-lock"></i>
                <input placeholder="Password" v-on:keyup.enter="tryToLogin" :type="toggleShow ? 'text':'password'" v-model="this.password"/>
                <span class="text-secondary" :class="toggleShow ? 'mdi mdi-eye-outline' : 'mdi mdi-eye-off'" @click="togglePassword()"></span>
            </div>
            <div class="text-center">
                <button class="btn-theme w-100 border-radius-100 mb-3" @click="tryToLogin()">Sign In</button>
                <span class="fs-3 cursor-pointer" style="color: #ffc827;">Forgot Password ?</span>
                <h5 class="mt-4 text-white">Download APK Here</h5>
                <img class="dl-btns" src="../../../assets/images/dl_button.png" height="50">
                <div class="dl-gcash-apk mt-3">
                    <h5 class="mt-4 text-white">Download Gcash APK Here</h5>
                    <img class="dl-btns" src="../../../assets/images/dl_button_gcash.png" height="50">
                </div>
            </div>
        </div>
        <div class="sign-up text-center">
            <h3 class="text-theme mb-5" style="font-size: 30px;">Welcome to Triple Diamond</h3>
            <p class="mt-4 text-white fs-5">Don't have an Account yet ? <a href="#" style="color: #ffc827;">Sign Up</a></p>
            <h4 class="mt-1 text-white fs-2">ACCREDITED BY</h4>
            <div class="text-center above-21 mb-4">
                <img src="../../../assets/images/rg-gaming.png" height="100"/>
            </div>
            <img class="mb-3" src="../../../assets/images/pagcor-logo.png" height="100"/>
            <h5 class="text-white text-start mb-5 text-uppercase">by using this site you agree with the <span class="text-theme">terms and conditions, privacy policy</span>, and the  <span class="text-theme">responsible gaming</span></h5>
            <h5 class="text-white text-start">We're ready to assist you!<span class="text-theme"> Contact Us</span></h5>
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2';
// import $cookies from "vue-cookies";
import { mapActions } from 'vuex';
export default{
    data(){
        return{
            credentials:{
                username: 'username',
                password: 'password',
            },
            username: null,
            password: null,
            toggleShow: false,
        }
    },
    components:{
    },
    methods:{
        ...mapActions('auth',{
            playerLogin: "loginUser",
        }),
        togglePassword(){
            if(this.toggleShow == false){
                this.toggleShow = true;
            }else{
                this.toggleShow = false;
            }
        },
        async tryToLogin(){
            if(!this.username || !this.password){
                Swal.fire({
                    title: 'Warning',
                    html: `Please fill <strong>USERNAME/PASSWORD</strong> field.`,
                    icon: 'warning',
                });
            }else{
                var pl = {
                    credentials: this.username,
                    password: this.password,
                }
                const res = await this.playerLogin(pl);
                if(res.status == 200 || res.status == '200'){
                    this.$router.push({path:"/"});
                }else{
                    Swal.fire({
                        title: 'Warning!',
                        text: 'Wrong username/password',
                        icon: 'error',
                        confirmButtonText: 'OK',
                    });
                }
            }
        }
    },
    mounted(){
    }
}
</script>
<style scoped>

</style>