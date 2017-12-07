<template>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		mounted(){
			this.getId()
		},
		methods:{
			getId(){
				var th = this; 
				var id = this.$route.query.id;
				console.log("id"+id);
				this.$router.push({path:'/tunnelGeneral?id='+id});
			},
		}
	}
</script>

<style>
</style>