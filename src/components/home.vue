<style>
	@import "../../static/css/home.css";
	* {
		box-sizing: border-box;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
	}
	
	body {
		background: #f0f0f0;
	}
	
	.totalStyle .content {
		width: 230px;
		margin: 20px 0;
	}
	
	.totalStyle .filterinput {
		background-color: rgba(249, 244, 244, 0);
		border-radius: 15px;
		width: 90%;
		height: 30px;
		border: thin solid #FFF;
		text-indent: 0.5em;
		font-weight: bold;
		color: #FFF;
	}
	
	.totalStyle #demo-list a {
		/*overflow:hidden;
			text-overflow:ellipsis;
			-o-text-overflow:ellipsis;
			white-space:nowrap;*/
		width: 100%;
		display: block;
	}
	
	.totalStyle #demo-list a i {
		font-size: 24px;
	}
	
	.totalStyle .head {
		width: 100%;
		height: 60px;
		background: #fff;
	}
	
	.totalStyle .ban {
		position: absolute;
		left: 302px;
		margin: 15px 0 0 0;
	}
	
	.totalStyle .plus {
		position: absolute;
		left: 230px
	}
	
	.totalStyle .viewContent {
		width: 78%;
		position: absolute;
		margin-left: 303px;
		background: #fff;
		top: 80px;
		left:-25px;
		padding-bottom: 40px;
<<<<<<< .mine
		overflow: hidden;
		min-height: 596px;
||||||| .r4
=======
		min-height:596px;
>>>>>>> .r23
	}
	
<<<<<<< .mine
	.totalStyle .rightImg{margin-left:45px;display: inline-block;width: 55px;height:60px;background: #0095FF;text-align: center;}
	.totalStyle .rightImg img{margin: 10px 0 0 0px ;width: 30px;}
||||||| .r4
	.totalStyle .rightImg {
		margin-left: 45px;
		display: inline-block;
		width: 55px;
		height: 50px;
		background: #0095FF;
		text-align: center;
	}
	
	.totalStyle .rightImg img {
		margin: 10px 0 0 0px;
		width: 30px;
	}
=======
	
	/*.totalStyle .ivu-menu-item .ivu-menu-item-active .ivu-menu-item-selected{background: none !important;}*/
	
	.totalStyle .rightImg {
		margin-left: 45px;
		display: inline-block;
		width: 55px;
		height: 60px;
		background: #0095FF;
		text-align: center;
	}
	
	.totalStyle .rightImg img {
		margin: 10px 0 0 0px;
		width: 30px;
	}
>>>>>>> .r23
	
	.totalStyle .ivu-menu-vertical .ivu-menu-submenu-title-icon {
		line-height: 27px !important;
		top: -25px;
	}
	/*.totalStyle .ivu-menu-vertical .ivu-menu-submenu-title-icon{top: -22px;}*/
	
	.totalStyle .tagSpan {
		width: 100px;
		text-align: center;
		color: #fff;
		display: inline-block;
		height: 30px;
		margin-right: 10px;
		line-height: 30px;
		background: aquamarine;
		border-radius: 9px;
		cursor: pointer;
	}
</style>
<template>
	<div class="totalStyle">
		<div class="head" v-if="indexhide">
			<div style="margin-left: 300px;line-height: 50px;height:50px;display: flex;justify-content: space-between;">
				<div>
				<Menu mode="horizontal" :theme="theme1">
					<MenuItem name="1">
						<Icon color="#31B0D5" type="ios-paper"></Icon>
					<a @click="tennelGeneral">隧道概要</a>
					</MenuItem>
					<Submenu name="2">
						<template slot="title">
							<Icon color="#31B0D5" type="ios-people"></Icon>
							<a>人员考勤</a>
						</template>
						<MenuItem name="2-1">
							<Icon type="android-list" color="#31B0D5"></Icon>
						<a @click="personInfo">人员信息</a>
						</MenuItem>
						<MenuItem name="2-2">
						<Icon type="calendar" color="#31B0D5"></Icon>
						<a @click="attenceInfo">考勤管理</a>
						</MenuItem>
					</Submenu>
					<MenuItem name="3">
<<<<<<< .mine
			            <a @click="personLocation">人员定位</a>
			        </MenuItem>
			        <MenuItem name="4">
			            <a @click="envirment">环境监测</a>
			        </MenuItem>
			        <MenuItem name="5">
			            <a @click="vadio">视频监控</a>
			        </MenuItem>
			        <MenuItem name="6">
			            <a @click="worklog">施工日志</a>
			        </MenuItem>
			        <MenuItem name="7">
			        	<router-link to='/managePeople'>
			            <Icon type="android-person"></Icon>
			            		用户管理
			            </router-link>
			        </MenuItem>
					<!--<Submenu v-for="(nav,index) in subdata" :name="nav.title" :key='nav.title' :value='nav.title'>
						<template slot="title">
							<span>
								<router-link :to="nav.url?nav.url:''">
									{{nav.title}}
								</router-link>
							</span>
						</template>
							<MenuItem v-for="(data,index) in nav.child" :name="data.title" :key='data.title' :value='data.title'>
							<router-link :to="data.url?data.url:''">
								{{data.title}}
							</router-link>
||||||| .r4
			            <a @click="personLocation">人员定位</a>
			        </MenuItem>
			        <MenuItem name="4">
			            <a @click="envirment">环境监测</a>
			        </MenuItem>
			        <MenuItem name="5">
			            <a @click="vadio">视频监控</a>
			        </MenuItem>
			        <MenuItem name="6">
			            <a @click="worklog">施工日志</a>
			        </MenuItem>
					<!--<Submenu v-for="(nav,index) in subdata" :name="nav.title" :key='nav.title' :value='nav.title'>
						<template slot="title">
							<span>
								<router-link :to="nav.url?nav.url:''">
									{{nav.title}}
								</router-link>
							</span>
						</template>
							<MenuItem v-for="(data,index) in nav.child" :name="data.title" :key='data.title' :value='data.title'>
							<router-link :to="data.url?data.url:''">
								{{data.title}}
							</router-link>
=======
						<Icon type="location" color="#31B0D5"></Icon>
					<a @click="personLocation">人员定位</a>
					</MenuItem>
					<MenuItem name="4">
						<Icon type="arrow-graph-up-right" color="#31B0D5"></Icon>
					<a @click="envirment">环境监测</a>
					</MenuItem>
					<MenuItem name="5">
						<Icon type="ios-camera" color="#31B0D5"></Icon>
					<a @click="vadio">视频监控</a>
					</MenuItem>
					<MenuItem name="6">
						<Icon type="android-clipboard" color="#31B0D5"></Icon>
					<a @click="worklog">施工日志</a>
					</MenuItem>
					<MenuItem name="7">
						<Icon type="settings" color="#31B0D5"></Icon>
					<router-link to='/managePeople'>
						用户管理
					</router-link>
					</MenuItem>
>>>>>>> .r23

				</Menu>
<<<<<<< .mine
				</div>
				<div>
					<a @click="exit" class="rightImg">
						<img src="../assets/img/exit.svg" />
					</a>
				</div>
||||||| .r4

=======
			</div>

>>>>>>> .r23
			<div>
				<a @click="exit" class="rightImg" style="position: absolute; top: 0;left: 90%;">
					<img src="../assets/img/exit.svg" />
				</a>
			</div>
<<<<<<< .mine
			
||||||| .r4

=======
>>>>>>> .r23
		</div>
		<div class="content">
			<div id="jquery-accordion-menu" class="jquery-accordion-menu red">

				<div class="jquery-accordion-menu-header" id="form" style="background: #0095FF;">
					<h4 style="line-height: 100px;color: aliceblue;font-size: 20px;text-align: center;">隧道施工信息化云平台</h4>
					<span></span>
				</div>

				<ul id="demo-list">
					<Row>
						<Col span="8">
						<Menu :theme="theme2"  :open-names="['1']" >
							<Submenu v-for="item in navs1" :name="item.id" :key='item.title' :value='item.title'>
								<template slot="title">
									<span @click="ds(item.url)">
                    	<router-link :to="item.url?item.url:''">
                    	<i v-if="item.id == 1"></i>
                    	<i v-else :class=item.icon aria-hidden="true"></i>
                    	{{item.title}}                   	                      		                       		
                      </router-link>
                     </span>
								</template>
<<<<<<< .mine
								<MenuItem :name='item2.id' v-for="item2 in item.children"  :key='item2.name' :value='item.name'>
								<span @click="ds1(item2)">
||||||| .r4
								<MenuItem v-for="item2 in item.children" :name="item2.title" :key='item2.title' :value='item.title'>
								<span @click="ds1">
=======
								<MenuItem v-for="item2 in item.children" :name="item2.name" :key='item2.name' :value='item.name'>
								<span @click="ds1(item2.id)">
>>>>>>> .r23
                    	<router-link :to="item2.url?item2.url:''">
                    	 <i :class=item2.icon aria-hidden="true"></i>                    	 
                    	{{item2.name}}
                    	</router-link>
                    	</span>
								</MenuItem>
							</Submenu>
						</Menu>
						</Col>
					</Row>
				</ul>
				<div class="jquery-accordion-menu-footer">
				</div>
			</div>
		</div>

		<div class="ban">
			<h3>{{$route.name}}</h3>

		</div>
		<div style="width:100%;">
			<div class="viewContent">
				<router-view></router-view>
			</div>
		</div>
	</div>
	</div>
</template>
<script>
	export default {

		data() {
			return {
				indexhide: true,
				navs: [
				],
				theme2: 'dark',
				showArrow: false,
				bg: '1',
				tags: [],
				sets: [],
				theme1: 'light',
				subdata: [{
						title: '隧道概要',
						url: '/tunnelGeneral',
						name: 1
					},
					{
						title: '人员考勤',
						child: [{
							title: '人员信息',
							url: '/personInfo',
							name: 2
						}, {
							title: '考勤信息',
							url: '/attenceInfo',
							name: 3
						}]
					}, {
						title: '人员定位',
						url: '/personLocation',
						name: 4
					}, {
						title: '环境监测',
						name: 8,
						child: [{
							title: '实时数据',
							url: '/real_timeData',
							name: 9
						}, {
							title: '报警数据',
							url: '/chart',
							name: 10
						}, {
							title: '历史数据',
							url: '/chart',
							name: 11
						}]
					}, {
						title: '视频监控',
						name: 12
					}, {
						title: '施工日志',
						name: 13
					}

				],navs1:[]
			}
		},

		mounted() {
			this.getUrl(),
				this.getTunnel()
			this.refresh()
//			var websocket = null;
		 //   判断当前浏览器是否支持WebSocket
//		    if('WebSocket' in window){
//		        websocket = new WebSocket("ws://10.59.3.7:8092/websocket");
//		    }
//		    else{
//		        alert('Not support websocket')
//		    }
		    
		},
		methods: {
<<<<<<< .mine
			refresh(){
				
				this.$http({
					method:'POST',
					url:Server + 'tunnel/home/tap',
//					url:"http://10.59.3.26/tunnel/home/tap",
					headers:{
					"token":localStorage.getItem('token')},				
				}).then(res=>{
//					this.items=res.data.page.list
					console.log(res)
					this.navs1=res.data.data
				})
			},
			tennelGeneral(){
				this.$router.push({path:'/tunnelGeneral'});
||||||| .r4
			tennelGeneral(){
				this.$router.push({path:'/tunnelGeneral'});
=======
			tennelGeneral() {
				this.$router.push({
					path: '/tunnelGeneral'
				});
>>>>>>> .r23
			},
			personInfo() {
				this.$router.push({
					path: '/personInfo'
				})
			},
			attenceInfo() {
				this.$router.push({
					path: '/attenceInfo'
				})
			},
			personLocation() {
				this.$router.push({
					path: '/personLocation'
				})
			},
<<<<<<< .mine
			envirment(){
				this.$router.push({path:'/nowDataGas'})
||||||| .r4
			envirment(){
				this.$router.push({path:'/real_timeData'})
=======
			envirment() {
				this.$router.push({
					path: '/nowDataGas'
				})
>>>>>>> .r23
			},
			vadio() {
				this.$router.push({
					path: '/nowVideo'
				})
			},
			worklog() {
				this.$router.push({
					path: '/action'
				})
			},
			getTunnel() {
				var th = this;
				th.$http({
					method: 'post',
					url: Server + 'tunnel/home/tap',
					data: {},
					headers: {
						"Content-Type": "application/json",
						"token": localStorage.getItem('token')
					}
				}).then(function(obj) {
					th.navs = obj.data.data;
					console.log(obj.data.data);
				})
			},
			getUrl() {
				var th = this;
				var url = window.location.href;
				if(url.indexOf('view') < 0) {
					this.indexhide = true;
				} else {
					this.indexhide = false
				};
				var id = localStorage.getItem('tunnelid');
				if(id == null) {
					th.$Message.info('请先选择隧道')
				}
			},
			decreaseTag(tag, index) {
				console.log(index)
				this.sets.splice(index, 1)

				if(this.sets.length > 0 && this.sets.length != 1) {
					this.$router.push({
						path: this.sets[this.sets.length - 1].url
					})
				}
				if(this.sets.length == 1) {
					this.$router.push({
						path: tag.url
					})
				}

			},
			ds(url) {
				
				var sd = {
					name: this.$route.name,
					url: this.$route.path
				}
				this.sets.push(sd)

				this.sets = this.uniqeByKeys(this.sets, ['name', 'url']);

			},

<<<<<<< .mine
			ds1(name) {
				this.$router.push({path:'/tunnelGeneral'})
//				this.$router.push({path:'/nowDataGas'})
				console.log(name.id)
				localStorage.setItem('tunnelId',name.id)
				eventBus.$emit('eventBusId',name.id);
				localStorage.setItem('tunnelName',name.name)
			
||||||| .r4
			ds1() {
				var sd1 = {
					name: this.$route.name,
					url: this.$route.path
				}
				this.sets.push(sd1)
				this.sets = this.uniqeByKeys(this.sets, ['name', 'url']);
=======
			ds1(id) {
				console.log(id);
				this.$router.push({
					path: '/loading?id=' + id
				});
				
				localStorage.setItem('tunnelid', id);
				localStorage.setItem('tunnelId', id);
				eventBus.$emit('eventBusId', id);
//				localStorage.setItem('tunnelName', id);
//				var sd1 = {
//					name: this.$route.name,
//					url: this.$route.path
//				}
//				this.sets.push(sd1)
//				this.sets = this.uniqeByKeys(this.sets, ['name', 'url']);
>>>>>>> .r23
				this.indexhide = true;
			},
			
			distinct(arr) {
				var self = arr;
				var list = self.concat().sort();
				list.sort(function(a, b) {

					if(_.isEqual(a, b)) {
						var ind = self.indexOf(a);
						self.splice(ind, 1);
					}
				});
				return self;
			},
			exit() {
				localStorage.setItem('status',2);
				this.$router.push({
					path: '/'
				})
			},
			obj2key(obj, keys) { //对象数组去重
				var n = keys.length,
					key = [];
				while(n--) {
					key.push(obj[keys[n]]);
				}
				return key.join('|');
			},
			uniqeByKeys(array, keys) { //对象数组去重
				var arr = [];
				var hash = {};
				for(var i = 0, j = array.length; i < j; i++) {
					var k = this.obj2key(array[i], keys);
					if(!(k in hash)) {
						hash[k] = true;
						arr.push(array[i]);
					}
				}
				return arr;
			},

		}
	}
</script>