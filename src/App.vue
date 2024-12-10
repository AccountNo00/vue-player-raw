<template>
	<customNav v-if="this.$route.path != '/login'" />
	<Footer v-if="this.$route.path != '/login'" />
	<router-view></router-view>
</template>
<script>
import "./assets/css/custom.css";
import customNav from "./components/custom-nav.vue";
import Footer from "./components/custom-footer.vue";
import { mapActions } from 'vuex';
export default {
	name: "App",
	components: {
		customNav,
		Footer,
	},
	methods: {
		...mapActions("auth", {
			authGetProfile: "getProfile",
			authLogout: "logoutUser",
		}),
        async profileInterval() {
            await this.authGetProfile();
        },
        startInterval() {
            this.intervalId = setInterval(this.profileInterval, 10000);
        },
        stopInterval() {
            clearInterval(this.intervalId);
        },
	},
    mounted(){
        if(this.$route.path == '/login'){
            this.stopInterval();
        }else{
            this.profileInterval();
            this.startInterval();
        }
    }
};
</script>
