<style>
	/*.video-js .vjs-tech {
    position: absolute;
    top: 80px;
    left: 30px;
    bottom: 0;
    width: 92%;
    height: 92%;}*/
   .video-js{width: 83%;}
</style>
<template>
	<div style="width: 600px;height: 300px;">
		<video-player  class="video-js vjs-default-skin vjs-big-play-centered" 
			:options="playerOptions"></video-player> 
	</div>
</template>

<script>
	require('videojs-flash')
	export default {
		data(){
			return{				
				 playerOptions: {
         			 sources: [{
			            type: "rtmp/mp4",
//			            src: "rtmp://10.10.1.100:1935/live/live"
						src:this.srcVideo
			          }],
			          isFullscreen:true,
			          techOrder: ['flash'],
			          autoplay: true,
//			          width:400,	
			          height:300,	
			          controls: false
		        }
			}
		},
		props:["srcVideo"],
	  	computed: {
		    player () {
		      return this.$refs.videoPlayer.player		      
		     }
	    },
		watch:{
			srcVideo(val){
				console.log(val)
				this.srcVideo=val
				return val
			}
		},		
		created(){
			console.log(this.srcVideo)			
		},
		mounted(){
			console.log(this.srcVideo)			
		}
	}
</script>

<style>
</style>