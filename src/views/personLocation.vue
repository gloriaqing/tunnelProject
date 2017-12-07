<template>
	<div class="container">
		<div class="row">
			<div class="col-md-4" style="padding: 15px;">
				<h3 style="padding: 30px;">隧道人员列表</h3>
				<form class="form-inline">
				  <div class="form-group" style="margin-left: 10%;">
				    <Input ref="name">
			        	<span slot="prepend">人员姓名</span>
			    	</Input>
				  </div>
				  <button v-if="show" type="button" class="btn btn-primary" @click="serach">搜索</button>
				  <span v-else></span>
				</form>
				<div class="row">
					<div class="col-md-8 col-md-offset-1">
						<Table style="font-size: 16px;" :border="true" :stripe="true" height="200" :columns="columns" :data="users"></Table>
					</div>
				</div>

			</div>
			<div class="col-md-5" style="padding: 15px;">
				<div class="row" style="padding: 30px;">
					<div class="col-md-3">
						<span class="span">综合情况</span>
					</div>
					<div class="col-md-5 col-md-offset-4">
						<span class="span" v-model="time">{{time}}</span>
					</div>
				</div>
				<div class="row" style="padding-left: 30px;">
					<div class="col-md-3">
						<p style="font-size: 14px;padding-top: 5px;" v-model="personNum">洞内人数:{{personNum}}</p>
						<p style="font-size: 14px;padding-top: 5px;" v-model="allStation">基站个数:{{allStation}}</p>
						<!--<p style="font-size: 14px;padding-top: 5px;color: red;" v-model="exceptionStation">故障基站个数:{{exceptionStation}}</p>-->
					</div>
				</div>
				<div class="row" style="padding-left: 35px;padding: 15px;">
					<table class="table persontable">
						<tr>
							<td><div class="sm">左线</div></td>
							<td v-model="ldongkou">洞口:{{ldongkou}}</td>
							<td v-model="lerchentaiche">二衬台车:{{lerchentaiche}}</td>
							<td v-model="lzhangzimian">掌子面:{{lzhangzimian}}</td>
						</tr>
						<tr>
							<td><div class="sm">右线</div></td>
							<td v-model="rdongkou">洞口:{{rdongkou}}</td>
							<td v-model="rerchentaiche">二衬台车:{{rerchentaiche}}</td>
							<td v-model="rzhangzimian">掌子面:{{rzhangzimian}}</td>
						</tr>
					</table>
				</div>
			</div>

		</div>
		
		<div class="row">
			<div class="col-md-1 line">
				<h4>左线</h4>
			</div>
			
			<div class="col-md-9 backimg" style="height: 200px;">
				<!--<img src="../../static/img/worker.png"  v-for="(person,index) in leftPerson" style="position: absolute;" v-bind:style="{ top: person.top +90+ 'px', left: person.left +150+ 'px' }" />
				<span v-for="(person,index) in personList" class="glyphicon glyphicon-user" style="position: absolute;" aria-hidden="true" v-bind:style="{ top: person.top + 'px', left: person.left + 'px' }"></span>
				--><div v-for="(person,index) in leftPerson" class="person" v-bind:style="{ top: person.coordinateY +90+ 'px', left: person.coordinateX +150+ 'px' }"></div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-1 line">
				<h4>右线</h4>
			</div>
			<div class="col-md-9 backimg" style="height: 200px;">
				<div v-for="(person,index) in rightPerson" class="person" v-bind:style="{ top: person.coordinateY +90+ 'px', left: person.coordinateX +150+ 'px' }"></div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				show:true,
				allStation:'',exceptionStation:'',users:[],
				personNum:'N/A',
				ldongkou:'N/A',lerchentaiche:'N/A',lzhangzimian:'N/A',
				rdongkou:'N/A',rerchentaiche:'N/A',rzhangzimian:'N/A',
				location:[],leftPerson:[],rightPerson:[],
				personList:[{coordinateY:23,coordinateX:100},{coordinateY:56,coordinateX:200},{coordinateY:46,coordinateX:150}],
				columns:[{title:'姓名',key:'real_name',align:'center'},{title:'工号',key:'client_id',align:'center'}],
				data:[{client_id:'001',real_name:'王璐'},{client_id:'002',real_name:'王晓路'},{client_id:'003',real_name:'小路'},
				{client_id:'001',real_name:'王璐'},{client_id:'002',real_name:'王晓路'},{client_id:'003',real_name:'小路'}],
				time:''
			}
		},
		mounted(){
			this.getTime(),
			this.changeLocation(),
			this.getPersonInTunnel()
		},
		methods:{
			serach(){
				var th = this;
				var key = this.$refs.name.currentValue;
				console.log(key);
				var len = th.users.length;
				var reg = new RegExp(key);
				var arr = [];
				if(key == '' && key == null){
					for(var i=0;i<len;i++){
						arr.push(th.users[i]);
					}
				};
				if(key != '' || key != null){
					for(var i=0;i<len;i++){
					    if(th.users[i].match(reg)){
					        arr.push(th.users[i]);
					    }
					};
				};
				th.users = arr;
					
				
//				for(var i=0;i<th.users.length;i++){
//					if(key == th.users[i].real_name){
//						th.users = th.users[i]
//					}
//				};
//				if(th.users.length !=0){
//					console.log(th.users);
//					th.$Message.success('成功查询到数据')
//				}else{
//					th.$Message.warning('尚未查询到相应数据')
//				}
			},
			getPersonInTunnel(){
				var th = this;
				th.$http({
					method:'post',
					url:Server + 'tunnel/location/getInfos',
					data:{
						"tunnelId":localStorage.getItem('tunnelid')
					},
					headers:{
						"Content-Type":"application/json",
						"token":localStorage.getItem('token')
					}
				}).then(function(obj){
					th.allStation = obj.data.data.allStation;
					th.exceptionStation = obj.data.data.exceptionStation;
					if(obj.data.data.users.length == 0){
						th.users = [{client_id:'N/A',real_name:'N/A'}];
						th.show = false;
					}else{
						th.users = obj.data.data.users;						
					}

				})
			},
			changeLocation(){
				var th = this;
				var length = th.personList.length;
				var sk = new WebSocket(Socket + 'websocket');
				sk.onopen = function(){
					console.log("链接成功");
					sk.send(localStorage.getItem('tunnelid'));
					th.$http({
						method:'post',
						url:Server + 'tunnel/location/get',
						data:{
							"tunnelId":localStorage.getItem('tunnelid')
						},
						headers:{
							"Content-Type":"application/json",
							"token":localStorage.getItem('token')
						}
					}).then(function(obj){
						console.log(obj);
						console.log("获取人员定位成功");
					});
					sk.onmessage = function(data){
						console.log(data);
						var socketdata = eval('(' + data.data + ')');
						//th.location = parseJSON(data);
						var loca = socketdata.location;
						console.log('定位信息',loca);
						th.personNum = loca.length;
						var leftData = [];
						var rightData = [];
						var lddongkou = [];
						var lderchentaiche = [];
									var ldzhangzimian = [];
									var rddongkou = [];
									var rderchentaiche = [];
									var rdzhangzimian = [];
						for(var i=0;i<loca.length;i++){
							if(loca[i].locationLine == 0){
								leftData.push(loca[i]);
								if(loca[i].locationAddress == 0){//0是洞口
									
									lddongkou.push(loca[i]);
									
								}else if(loca[i].locationAddress == 1){//1是二衬台车
									
									lderchentaiche.push(loca[i]);
									console.log('人数2---'+lddongkou.length);
								}else{//3是掌子面
									ldzhangzimian.push(loca[i]);
								};
							};
							if(loca[i].locationLine == 1){
								rightData.push(loca[i]);
								if(loca[i].locationAddress == 0){//0是洞口
									rddongkou.push(loca[i]);
								}else if(loca[i].locationAddress == 1){//1是二衬台车
									rderchentaiche.push(loca[i]);
								}else{//3是掌子面
									rdzhangzimian.push(loca[i]);
								};
							};
							
						};
						th.ldongkou = lddongkou.length;
									th.lerchentaiche = lderchentaiche.length;
									th.lzhangzimian = ldzhangzimian.length;
									th.rdongkou = rddongkou.length;
									th.rerchentaiche = rderchentaiche.length;
									th.rzhangzimian = rdzhangzimian.length;
						th.leftPerson = leftData;
						console.log('左线',leftData);
						th.rightPerson = rightData;
						
//						if(loca.length == 0){
//							th.$Message.warning('当前隧道内没有工作人员')
//						};
					};
				};
			if(th.$route.path != '/personLocation'){
				console.log('当前socket断开')
				sk.close();
			}else{
				console.log('当前socket应该连接')
			}
//				sk.close();
				sk.onclose = function(){
					th.$Message.error('与服务器连接断开，请重新连接');
					console.log("断开链接")
				};
				
			},
			getTime(){
				var date = new Date();
				this.time = date.getFullYear()+'.'+(date.getMonth()+1)+'.'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
			}
		}
	}
</script>

<style>
	.span{
		font-size: 16px;
		color: #428BCA;
	}
	.persontable td{
		font-size: 14px;
		padding: 5px;
		padding-left: 20px;
	}
	.sm{
		background-color: #3A3E4A;
		color: white;
		height: 20px;
		width: 70%;
		border-radius: 3px;
		text-align: center;
		line-height: 20px;
		font-size: 14px;
	}
	#workface{
		
	}
	.line h4{
		margin-top: 50%;
		height: 35px;
		width: 70px;
		border-radius: 3px;
		line-height: 35px;
		text-align: center;
		background-color: #222222;
		color: white;
	}
	.backimg{
		background-image: url(../../static/img/bg.jpg);
		background-repeat: no-repeat;
	}
	.person{
		background-image: url(../../static/img/worker.png);
		background-repeat: no-repeat;
		height: 16px;width: 16px;background-color: #ff0000;position: absolute;
		border-radius: 50%;
	}
</style>