

<style>
	/*@import "../../../static/jquery-3d-menu-with-search/css/jquery-accordion-menu.css"*/
	.pre1{position: relative;}
	.pre1Img{position: absolute;width: 44px;top: 32%;left: 32%;}
	.pre2{position: relative;}
	.pre2Img{position: absolute;width: 44px;top: 31%;left: 63%;}
	.vlcPlayer{width: 500px;height:300px}
	.cirAdd{background: rgb(91,175,241);color: #fff;width: 100px;}
	
	.vjs-modal-dialog-content{display: none;}
	.vjs-control-bar{display: none !important;}
	.vjs-modal-dialog {display: none !important;}
	/*.video-js{width: 300px !important;height: 300px !important;}*/
	.vjs-big-play-button{display: none !important;}
	/*.vjs-custom-skin > .video-js{width: 43%;}*/
	/*.vjs-tech{width: 500px !important;height: 300px !important;}*/
	/*.video-player{width: 500px;height:300px}*/
	 .video-js .vjs-tech {
    position: absolute;
    top: 80px;
    left: 30px;
    bottom: 0;
    width: 55%;
   height: 84%;}
	.player2 .video-js .vjs-tech {
    position: absolute;
    top: 80px;
    left: 30px;
    bottom: 0;
    width: 60.5%;
    height: 61.3%;}
    .player3 .video-js .vjs-tech {
    position: absolute;
    top: 80px;
    left: 30px;
    bottom: 0;
    width: 43.5%;
    height: 44.3%;}
/*.video-js {width: 35%;}*/
.getV span{cursor: pointer;display: inline-block;padding: 0 20px;}
</style>
<template>
	<div style="margin: 30px;">
		<div style="margin: 30px 30px;display: flex;">
			<!--<Button @click="addNew" class="cirAdd" shape="circle" style="height: 30px;margin-right: 10px;margin-bottom: 20px;" >新增</Button>-->
			<!--<div @click="getTest" class="btn">新增</div>-->
			<!--<div class="getV" v-for="item in items" >
					
				 <span @click="getVie(item)" style="cursor: pointer;display: inline-block;padding: 10px;">{{item.name}}</span>
					
			</div>-->
			<div class="getV" style="">										 
					<span @click="getOne">四分屏</span>	
					<span @click="getTwo">视频一</span>	
					<span @click="getThree">视频二</span>	
					<span @click="getFour">视频三</span>	
					<span @click="getFive">视频四</span>	
			</div>
			</div>	
			<div style="display: flex;">
				<div>
					<!--<p style="margin-right: 20px;font-size: 15px;font-weight: 400;">请选择:</p>-->
					<p style="margin-right: 20px;" v-model="tunnelName">{{tunnelName}}</p>
					
				    <!--<p style="margin:-10px 20px;">监控点一</p>-->
				    
				</div></br>											
			</div>	
			<div style="width: 600px;height: 300px;" v-show="video1">
				<video-player  class="video-js vjs-default-skin vjs-big-play-centered" 
					:options="playerOptions1"></video-player> 
			</div>
			<div style="width: 600px;height: 300px;" v-show="video2">
				<video-player  class="video-js vjs-default-skin vjs-big-play-centered" 
					:options="playerOptions2"></video-player> 
			</div>
			<div style="width: 600px;height: 300px;" v-show="video3">
				<video-player  class="video-js vjs-default-skin vjs-big-play-centered" 
					:options="playerOptions3"></video-player> 
			</div>
			<div style="width: 600px;height: 300px;" v-show="video4">
				<video-player  class="video-js vjs-default-skin vjs-big-play-centered" 
					:options="playerOptions4"></video-player> 
			</div>
			<div style="width: 600px;height: 300px;" v-show="video5">
				<video-player  class="video-js vjs-default-skin vjs-big-play-centered" 
					:options="playerOptions5"></video-player> 
			</div>
			<!--<div style="display: flex;">
			<getProp  :srcVideo="getSrc"></getProp>
			</div>	-->
	</div>
</template>

<script>
//	require('videojs-flash')
	import getProp from '../components/getProp'
//	import VideoPlayer from 'vue-video-player' 
	export default {
        data () {
            return {
            	screenSize:[{sizeName:'大',size:1},{sizeName:'中',size:2},{sizeName:'小',size:3}],                      	           	    
            	tunnelName:'',bigSize:true,middleSize:false,smallSize:false,getSrc:'rtmp://10.10.1.100:1935/live/live1',
            	screenS:'',items:[{src: "rtmp://10.10.1.100:1935/live/live1"}],
            	
            	playerOptions1: {
         			 sources: [{
			            type: "rtmp/mp4",
			            src: "rtmp://10.10.1.100:1935/live/live"
//						src:this.getSrc
			          }],
			          isFullscreen:true,
			          techOrder: ['flash'],
//			          flash:{swf:'/static/leshi_v2.swf'},
			          autoplay: true,
//			          width:400,	
			          height:300,	
			          controls: false
		        },
		        playerOptions2: {
         			 sources: [{
			            type: "rtmp/mp4",
			            src: "rtmp://10.10.1.100:1935/live/live1"
//						src:this.getSrc
			          }],
			          isFullscreen:true,
			          techOrder: ['flash'],
//			          flash:{swf:'/static/leshi_v2.swf'},
			          autoplay: true,
//			          width:400,	
			          height:300,	
			          controls: false
		        },
		         playerOptions3: {
         			 sources: [{
			            type: "rtmp/mp4",
			            src: "rtmp://10.10.1.100:1935/live/live2"
//						src:this.getSrc
			          }],
			          isFullscreen:true,
			          techOrder: ['flash'],
//			          flash:{swf:'/static/leshi_v2.swf'},
			          autoplay: true,
//			          width:400,	
			          height:300,	
			          controls: false
		        },
		         playerOptions4: {
         			 sources: [{
			            type: "rtmp/mp4",
			            src: "rtmp://10.10.1.100:1935/live/live3"
//						src:this.getSrc
			          }],
			          isFullscreen:true,
			          techOrder: ['flash'],
//			          flash:{swf:'/static/leshi_v2.swf'},
			          autoplay: true,
//			          width:400,	
			          height:300,	
			          controls: false
		        },
		         playerOptions5: {
         			 sources: [{
			            type: "rtmp/mp4",
			            src: "rtmp://10.10.1.100:1935/live/live4"
//						src:this.getSrc
			          }],
			          isFullscreen:true,
			          techOrder: ['flash'],
//			          flash:{swf:'/static/leshi_v2.swf'},
			          autoplay: true,
//			          width:400,	
			          height:300,	
			          controls: false
		        },
		        video1:true,video2:false,video3:false,video4:false,video5:false,
              }
        },
        components:{
        	getProp
        },
        computed: {
		    player () {
		      return this.$refs.videoPlayer.player		      
		     }
		    },
		    
        watch:{
			tunnelName(val){
				console.log(val,1)
				this.tunnelName=val
				console.log(this.tunnelName)
			},
		},	
		
        created(){
        	
//      	this.$refs
//      	this.tunnelName=localStorage.getItem('tunnelName')
//      	this.$http({ //不要删
//				method:'post',
////				url:Server + 'tunnel/location/getInfos',
//				url:Server+'tunnel/tunnel/c825673976e94700890400f3590f71ad/get',
//				headers:{
//				"token":localStorage.getItem('token')},
//				data:{
//					"tunnelId":localStorage.getItem('tunnelId')
//				}
//				
//			}).then(res=>{
//				console.log(res)
//				
//			})        							
        	eventBus.$on('eventBusName', function(val) {
	       		　　console.log(val)
	       			this.tunnelName=val
//	       			console.log(this.tunnelName,1)
	       		}
	       )
        	this.$http({ //不要删
					method:'post',
					url:Server + 'tunnel/video/queryVideo',
					headers:{
					"token":localStorage.getItem('token')},
					data:{"tunnelId":localStorage.getItem('tunnelId')}
			}).then(res=>{
				console.log(res.data)
				
				if(res.data.data.length!=0){
					this.items=res.data.data
					console.log(this.items)
					//this.items.pop()						
					//console.log(this.items)
				}
				
			})
       },
       mounted(){
       	//console.log(this.$refs,2)       	       	
       },

       methods:{
       	getOne(){
       		this.video1=true
       		this.video2=false  
       		this.video3=false
       		this.video4=false
       		this.video5=false
       		// video1:true,video2:false,video3:false,video4:false,video5:false,
       	},
       	getTwo(){
       		this.video1=false
       		this.video2=true       		 
       		this.video3=false
       		this.video4=false
       		this.video5=false
       	},
       	getThree(){
       		this.video1=false
       		this.video2=false  
       		this.video3=true
       		this.video4=false
       		this.video5=false
       	},
       	getFour(){
       		this.video1=false
       		this.video2=false  
       		this.video3=false
       		this.video4=true
       		this.video5=false
       	},
       	getFive(){
       		this.video1=false
       		this.video2=false  
       		this.video3=false
       		this.video4=false
       		this.video5=true
       	},
       	getVie(item){
       		this.getSrc=item.rtsp
       		console.log(item)
       	},
       	getTest(){
       		this.middleSize=true
       		this.smallSize=false
       	},
       	getSize(value){
       		console.log(value)
       		if(value==1){
       			this.bigSize=true
       			this.middleSize=false
       			this.smallSize=false
       		}else if(value==2){
       			this.bigSize=false
       			this.middleSize=true
       			
       			this.smallSize=false
       		}else if(value==3){
       			this.bigSize=false
       			this.middleSize=false
       			this.smallSize=true
       			
       		}
       	},
       	addNew(){
       		this.$http({
					method:'post',
					url:Server + 'tunnel/video/save',
					headers:{
					"token":localStorage.getItem('token')},
					data:{
						"type":1,
						"tunnel_id":localStorage.getItem('tunnelId'),
						"rtsp":"rtmp://10.10.1.102:1935/live/live",
						"name":"视频二"
					}
					
			}).then(res=>{
				console.log(res)
			})
       	}
       }

    }
</script>
