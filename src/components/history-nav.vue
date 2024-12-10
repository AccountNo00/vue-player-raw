<template>
	<div class="history-nav">
		<div class="history-links row text-white">
			<div class="d-flex justify-content-between align-items-center" @click="sendData(1)">
				<h3 class="text-uppercase text-white">Bet list</h3>
				<i class="mdi mdi-format-list-bulleted fs-2"></i>
			</div>
			<div class="d-flex justify-content-between align-items-center" @click="sendData(2)">
				<h3 class="text-uppercase text-white">Transaction list</h3>
				<i class="mdi mdi-format-list-bulleted fs-2"></i>
			</div>
			<div class="d-flex justify-content-between align-items-center" @click="sendData(3)">
				<h3 class="text-uppercase text-white">Point Logs</h3>
				<i class="mdi mdi-format-list-bulleted fs-2"></i>
			</div>
		</div>
	</div>
  <!-- end footer -->
</template>
<script>
export default{
    data(){
        return{
        }
    },
    methods:{
		sendData(val) {
			this.$emit('send-data', val);
		},
    },
    mounted(){
    
    }
}
</script>
<style scoped>

</style>
