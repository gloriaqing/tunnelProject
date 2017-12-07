<style scoped="scoped">
	.addM .selectInput{width: 300px;}
	.addM .selectInput .ivu-input{width:300px;height: 40px;}
	.addM .dista{width: 75px;color: #383f49;display: inline-block;}
	.addM .evy{height: 60px;}
	.addM .evy:nth-child(2){position: relative;width:400px}
	.addM .selectDIv .ivu-select-input{height: 40px;}
	.addM .selectInput .ivu-input{width:300px;height: 40px;}
	.addM .addMachine .ivu-select-single .ivu-select-selection{height: 40px;width: 300px;}
	.addM .add1{width:100px;height: 32px;margin-right: 50px;}
	.addM .addMachine table tr th{text-align: center;}	
	.addMachine .ivu-input{height: 40px;}
	.cirAdd{background: rgb(91,175,241);color: #fff;width: 100px;}
	.addM .ivu-input{height: 40px;}
	.addM .valid{display: inherit;margin-left: 7%;color: red;}
	.ivu-modal-footer{border: none !important;}
	.ivu-modal-header{border: none !important;}
	.table thead td{height: 40px;line-height: 30px !important;}
	.table tbody tr:hover{background: #ebf7ff;}
	.table-bordered>thead>tr>td{border-bottom-width: 0px;}
</style>
<template>
	<div style="margin: 30px;">
		<Button @click="addNew" type="success" style="margin-bottom: 20px;" shape="circle" icon="ios-plus">新增</Button>
	<Modal
		  	v-model="addPeople"
	        title="添加人员"
	        height='800px'
	        width="50%"	        
		  	>
	<div class="addM">
		<div class="addMachine" style="margin: 30px 30px;">
			<div class="evy">
				<span class="dista">用户名：</span>
				<Input @on-change='Cname' @on-blur='getRiver' placeholder="请输入用户名"   type="text"
               style="width: 300px;margin-left: 2px" v-model="userName" ></Input>
				<span class="valid" v-model="vName">{{vName}}</span>
			</div>
		
			<div class="evy">
				<span class="dista">密码：</span>
				<Input @on-change='CdeviceName' placeholder="" v-model="psw" class="selectInput" ></Input>
				<span class="valid" v-model="vDeviceName">{{vDeviceName}}</span>
			</div>
			<div class="evy">
				<span class="dista">邮箱：</span>

				<Input @on-change='CdeviId' v-model="email" class="selectInput" ></Input>
				<span class="valid" v-model="vDeviId">{{vDeviId}}</span>

			</div>
			<div class="evy">
				<span class="dista">手机号：</span>
				<Input placeholder="请输入数字" @on-change='CvIp' v-model="phone"  class="selectInput" ></Input>
				<span class="valid" v-model="vIp">{{vIp}}</span>
			</div>
			
			<!--<div class="evy">
				<span class="dista">选择角色：</span>
				<Select  v-model="roleId" @on-change="chosType" style="width: 300px;"
					filterable placeholder="请选择" class="selectDIv">

			        <Option v-for="item in items"  :value="item.id" :key="item.value">{{ item.type }}</Option>
				</Select>

			</div>-->

			<!--<div class="evy">
				<span class="dista">选择部门：</span>
				<!--<Input v-model="state" style="height: 40px;" class="selectInput" ></Input>
				<Select  v-model="depId" @on-change="chosType" style="width: 300px;"
					filterable placeholder="请选择" class="selectDIv">
			        <Option v-for="item in states"  :value="item.value" :key="item.value">{{ item.type }}</Option>
				</Select>
				<span class="valid" v-model="vState">{{vState}}</span>
			</div>	-->		
		</div>
		<div>
			<!--<h4>双击选择经度或者纬度</h4>-->
		
		</div>
		<div style="margin-left: 110px;">
			<button @click='add' style="background: rgb(67,156,244);color: #fff;" class="btn add1">提交</button>
			<button @click="can" class="btn btn-default add1">取消</Button>
		</div>
	</div>
	<div slot='footer'></div>
	</Modal>
	<Modal
		  	v-model="editPeople"
	        title="修改人员"
	        height='800px'
	        width="50%"	        
		  	>
	<div class="addM">
		<div class="addMachine" style="margin: 30px 30px;">
			<div class="evy">
				<span class="dista">用户名：</span>
				<Input @on-change='Cname' @on-blur='getRiver' placeholder="请输入用户名"   type="text"
               style="width: 300px;margin-left: 2px" v-model="userName1" ></Input>
				<span class="valid" v-model="vName">{{vName}}</span>
			</div>
		
			<!--<div class="evy">
				<span class="dista">密码：</span>
				<Input @on-change='CdeviceName' placeholder="" v-model="psw1" class="selectInput" ></Input>
				<span class="valid" v-model="vDeviceName">{{vDeviceName}}</span>
			</div>-->
			<div class="evy">
				<span class="dista">邮箱：</span>

				<Input @on-change='CdeviId' v-model="email1" class="selectInput" ></Input>
				<span class="valid" v-model="vDeviId">{{vDeviId}}</span>

			</div>
			<div class="evy">
				<span class="dista">手机号：</span>
				<Input placeholder="请输入数字" @on-change='CvIp' v-model="phone1"  class="selectInput" ></Input>
				<span class="valid" v-model="vIp">{{vIp}}</span>
			</div>
			
			<!--<div class="evy">
				<span class="dista">选择角色：</span>
				<Select  v-model="roleId" @on-change="chosType" style="width: 300px;"
					filterable placeholder="请选择" class="selectDIv">

			        <Option v-for="item in items"  :value="item.id" :key="item.value">{{ item.type }}</Option>
				</Select>

			</div>-->

			<!--<div class="evy">
				<span class="dista">选择部门：</span>
				<!--<Input v-model="state" style="height: 40px;" class="selectInput" ></Input>
				<Select  v-model="depId" @on-change="chosType" style="width: 300px;"
					filterable placeholder="请选择" class="selectDIv">
			        <Option v-for="item in states"  :value="item.value" :key="item.value">{{ item.type }}</Option>
				</Select>
				<span class="valid" v-model="vState">{{vState}}</span>
			</div>			-->
		</div>
		<div>
			<!--<h4>双击选择经度或者纬度</h4>-->
		<div id="container" style="width: 600px; height: 300px; overflow: visible;top: 170px;left:460px"></div>
		</div>
		<div style="margin-left: 110px;">
			<button @click='editP' style="background: rgb(67,156,244);color: #fff;" class="btn add1">提交</button>
			<button @click="editCan" class="btn btn-default add1">取消</Button>
		</div>
	</div>
	<div slot='footer'></div>
	</Modal>
	<table class="table table-bordered table-hover">
	    <thead style="background: #f8f8f9;height: 40px;font-weight: 600;">
		     <tr>			
			<!--<td><Checkbox v-model="allData.parCheck" @on-change="allSelect"></Checkbox></td>-->
		      <td>创建时间</td>
		      <td >用户名</td>
		     
				<!--<td>正文</td>-->
		      <td>电子邮箱</td>
		      <td>手机号</td>
			  <td style="width: 150px;">操作</td>
		     </tr>
	    </thead>
	    <tbody>
		     <tr v-for ="(user,index) in getUsers">	
			<!--<td><Checkbox  @on-change="singleSelect(user)" v-model="user.isCheck" :id="user.id"></Checkbox></td>-->
			 <td>{{user.createTime}}</td>					      
				<td>{{user.username}}</td>
		      <td>
				{{user.email}}
			</td>
		      <td>{{user.mobile}}</td>
		      <td style="display: flex;">
			<Tooltip content="编辑" placement="top-start">
				<Button style="margin-right: 5px;" @click="edit(user)" type="primary" icon="edit" size="small"></Button>
									</Tooltip>
				<Tooltip content="删除" placement="top-start">
					<Button @click="del(user)" type="error" icon="trash-a" size="small"></Button>
					</Tooltip>
			</td>
	      	</tr>
	     </tbody>
       </table>
	</div>
</template>

<script>
//	import
	var status;
	var ph=/^[0-9]*$/;
	var ipP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
	var mC16=/^[0-9ABCDEF]*$/;
//	var ip=(2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?;
	import { mixin as clickaway } from 'vue-clickaway';
	export default{
		mixins: [ clickaway ],
		data(){
			return{
				vName:'',vDeviceName:'',vDeviId:'',vIp:'',vMac:'',vState:'',vSj:'',vSw:'',
				name:'',items:[],state:'',jing:'',wei:'',pull:false,lists:[],
				states:[{type:'正常',value:1},{type:'异常',value:2},{type:'故障',value:3}]
				,type:'',addPeople:false, allData: {parCheck: false},
				userName:'',psw:'',mobile:'',email:'',roleId:'',depId:'',phone:'',getUsers:[],editPeople:false,
				userName1:'',psw1:'',phone1:'',email1:''
			}

		},
		created(){
			this.refresh()
		},
		methods:{
			editP(){
				if(this.userName1!=''&&this.email1!=''&&this.phone1!=''){
				 this.$http({
	                method: 'post',
	                url: Server + 'sys/user/update',
	                headers: {
	                  "token": localStorage.getItem('token')
	                },
	                data: {"userId": this.userId,
                			"username": this.userName1,
//						  "password": this.psw1,
						  "email": this.email1,
						  "mobile": this.phone1,
						  "roleId": 1,
						  "deptId":1,
	                }
	              }).then(res => {
		              	console.log(res)
		              	if(res.data.code==0){
			          		this.$Modal.success({
				                title: '提示',
				                content: '<p>修改用户成功</p>',
				                onOk: () => {
				                	this.editPeople=false
				                	this.refresh()
				                },
				                onCancel: () => {
				                },
				                okText: '确定',
				                cancelText: '取消'
				            });
			          	}
		        })
	           }else if(this.userName1==''||this.email1==''||this.phone1==''){
	           		this.$Modal.warning({
		                title: '提示',
		                content: '<p>输入框不能为空</p>',
		                onOk: () => {
		                	
		                },
		                onCancel: () => {
		                },
		                okText: '确定',
		                cancelText: '取消'
		            });
	           }
			},
			edit(user){
				console.log(user)
				this.editPeople=true
				this.userId=user.userId
				this.userName1=user.username
				this.psw1=''
				this.phone1=user.mobile
				this.email1=user.email
			},
			editCan(user){
				this.editPeople=false
			},
			del(user) {
        		console.log(user)

		        this.$Modal.confirm({
		          title: '提示',
		          content: '<p>确认删除？</p>',
		          onOk: () => {
		            setTimeout(() => {
//		              var dataN = JSON.stringify({"userIds": [user.userId]})
		              this.$http({
		                method: 'post',
		                url: Server + 'sys/user/delete',
		                headers: {
		                  "token": localStorage.getItem('token')
		                },
		                data: {"userIds": [user.userId]}
		              }).then(res => {
		                  if(res.data.code==1){
		
		                    this.$Modal.success({
		                      title: '提示',
		                      content: '<p>删除成功</p>',
		                      onOk:()=>{
								
		                        	this.refresh()
		                        
		                      },
		                      okText: '确定',
		                      cancelText: '取消'
		                    })
		
		                  }else{
		                  	this.$Modal.warning({
		                      title: '提示',
		                      content: '<p>删除失败</p>',
		                      onOk:()=>{
								
		                        
		                      },
		                      okText: '确定',
		                      cancelText: '取消'
		                    })
		                  }
		              })
		            }, 500);
		          },
		          onCancel: () => {
		          },
		          okText: '确定',
		          cancelText: '取消'
		
		        })
			},
			refresh(){				
				this.$http({
					method:'post',
					url:Server + 'sys/user/list',
					headers:{
					"token":localStorage.getItem('token')},
					data:{
	//					"token":"a1d2ab35bd843304bb302e7b6e127be0",
						"page":1,
						"limit":10000
						
					}
					}).then(res=>{
						console.log(res)
						this.getUsers=res.data.data.list
					})
			},
			addNew(){
				this.addPeople=true
				this.userName=''
				this.email=''
				this.phone=''
				this.psw=''
			},
			allSelect(value){ //全选

				console.log(value)
				ifTrue=value
		        this.getUers.forEach(item => {
		            item.isCheck = this.allData.parCheck
		        })

		        for(var i=0;i<this.getUers.length;i++){
		        	allId.push(this.getUers[i].id)
		        }



			},

			 singleSelect(user) { //反选
				
		        console.log(user.id)
		        
		        allId2.push(user.id)
		        console.log(allId2)
		        var selectData = this.getUers.filter(item => {
		            return item.isCheck == true
		        })
		        selectData.length == this.getUers.length ? this.allData.parCheck = true : this.allData.parCheck = false;
		    },
			Cname(){
//				if(this.ect1!=''){
//					this.vName=''
//				}else{
//					this.vName='河道名称不能为空'
//				}
			},
			getRiver(){
//				if(this.ect1!=''){
//					this.vName=''
//				}else{
//					this.vName='河道名称不能为空'
//				}
			},
			CdeviceName(){
//				if(this.name!=''){
//					this.vDeviceName=''
//				}else{
//					this.vDeviceName='设备名称不能为空'
//				}
			},
			CdeviId(){
//				console.log(ph.test(32))
//				if(!ph.test(this.deviceId)){
//					this.vDeviId='请输入数字类型'
//				}if(ph.test(this.deviceId)){
//					this.vDeviId=''
//				}
			},
			CvIp(){
				if(!ph.test(this.phone)){
					this.vIp='请输入合法的ip地址'
				}else if(ph.test(this.phone)){
					this.vIp=''
				}
			},
			
			
			
		      can(){ //取消按钮
		        console.log(34)
		       	this.addPeople=false
//		        this.ect1=''
//		        this.name=''
//		        this.deviceId=''
//		        this.ip=''
//		        this.mac=''
//		        this.state=''
//		        this.s_j=''
//		        this.s_w=''
		      },
			away(){
				this.pull=false
			},
			showList(){
				console.log(3)
				this.$http({
					method:'post',
					url:Server + 'sw/river/queryAll',
					headers:{
					"token":localStorage.getItem('token')},
					data:{
	//					"token":"a1d2ab35bd843304bb302e7b6e127be0",
						"page":1,
						"limit":10000,
						"sidx":"name",
						"order":"asc",
						"key":this.ect1
					}
					}).then(res=>{
						console.log(res)
					this.lists=res.data.river.list

				})
				this.pull=true
			},
			
			chosType(val){
				
			},
			valid(){
				//vName:'',vDeviceName:'',vDeviId:'',vIp:'',vMac:'',vState:'',vSj:'',vSw:''

			},
			add(){				
				if(this.userName!=''&&this.psw!=''&&this.email!=''&&this.phone!=''){
				
					this.$http({
						method:'post',
						url:Server + 'sys/user/save',
						data:{
							 "username": this.userName,
							  "password": this.psw,
							  "email": this.email,
							  "mobile": this.phone,
							  "roleId": 1,
							  "deptId":1, 
							  
						},
						headers:{
					"token":localStorage.getItem('token')},
					}).then(res=>{
						console.log(res)
						if(res.data.code==1){
							this.$Modal.success({
			                    title: '提示',
			                    content: '<p>添加人员成功</p>',
			                    onOk: () => {
//			                    	this.$router.push({path:'/machine'})
									this.addPeople=false
									this.refresh()
			                    },
			                    onCancel: () => {
			                    },
			                    okText: '确定',
			                    cancelText: '取消'
			              });
						}else{
							this.$Modal.warning({
			                    title: '提示',
			                    content: '<p>添加失败</p>',
			                    onOk: () => {
			                    },
			                    onCancel: () => {
			                    },
			                    okText: '确定',
			                    cancelText: '取消'
		              		});
						}
	
					})
				}else{					
					this.$Modal.warning({
	                    title: '提示',
	                    content: '<p>输入框不能为空</p>',
	                    onOk: () => {
	                    },
	                    onCancel: () => {
	                    },
	                    okText: '确定',
	                    cancelText: '取消'
              		});
				}
			}
		}	
	}
</script>

