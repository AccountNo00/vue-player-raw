<template>
	<div class="breadcrumbs">
		<div class="bread-description">
			<h1 class="text-white">{{title}}</h1>
			<span>{{ `Home > ${title}` }}</span>
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
	props: {
		title: {
			type: String,
			default: '',
		},
	},
    methods:{
    
    },
    mounted(){
    
    }
}
</script>
<style scoped>

</style>
