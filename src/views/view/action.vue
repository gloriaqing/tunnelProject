<style>
	.firstLay{width: 63px;height: 60px;background: #b3d5de;text-align: center;padding: 10px 0 0;color: #fff;margin-right: 20px;border-radius: 8px;}
	.getAction a{color: #000 !important;}
	.firstLine{width: 400px;margin-right: 70px;border: 1px solid #eee;padding: 10px;float: left;}
	.firstLine2{width: 400px;margin-right: 70px;border: 1px solid #eee;padding: 10px;float: left;}
	.secLine{display: flex;padding: 10px 20px;border: 1px dashed #eee;justify-content: space-between;border-left: none;border-right: none;}
	.secLine:last-child{border: none;}
	.boldName{font-weight: 900;font-size: 18px;width: 80%;word-break: break-all;}
	.notBoldNmae{display: block;font-weight: 100;font-size: 16px;}
	.stateStyle{background: #73d3c8;height: 35px;color: #fff;}
	.cirAdd{background: rgb(91,175,241);color: #fff;width: 100px;}
	.dista{width: 75px;color: #383f49;display:block;}
	.ivu-modal-footer{border: none !important;}
	.ivu-modal-header{border: none !important;}
	.ivu-input{height: 38px;}
	.getEdit{    display: block;
    margin-top: 44px;
    margin-right: 6px;
   }
    .getDel{    display: block;
    margin-top: 43px;}
    .stateStyle2{background: #ed3f14;color: #fff;}
</style>
<template>
	<div style="margin: 30px;" class="getAction">
		
		<Input v-model="searchText" style="width: 200px;margin:0 28px;" placeholder="请输入标题名"></Input>
		<Button @click='search' type="primary" shape="circle" icon="ios-search">搜索</Button>
		<Button @click="addNew" type="success" shape="circle" icon="ios-plus">新增</Button>
    	<!--<button @click='resetSearch' class="btn btn-default">重置</button>-->
    	<!--<Button @click="addNew" class="cirAdd" shape="circle" style="height: 30px;margin-left: 30px;background: rgb(91,175,241);color: #fff;width: 100px;" >新增</Button>-->
	<div style="margin: 30px;">
		<div class="firstLine">
			<h4>施工单位</h4></br>
			<div class="secLine" v-for="item in items">		
				<a class="firstLay">{{item.month}}<span style="display: block;font-size: 20px;">{{item.date}}</span></a>
				<a class="boldName">{{item.title}}<span class="notBoldNmae">{{item.content}}</span></a>
				<div>
					<span class="btn stateStyle" v-if="item.statusType1">{{item.statusType1}}</span>
					<span class="btn stateStyle2" v-else>异常</span>
					<!--<Tooltip content="编辑" placement="top-start">-->
					<div style="display: flex;margin-top: -30px;">
					<Button style="margin-right: 5px;" class="getEdit" @click="edit(item)" type="primary" icon="edit" size="small"></Button>
										<!--</Tooltip>-->
					<!--<Tooltip content="删除" placement="top-start">-->
					<Button @click="del(item)" class="getDel" type="error" icon="trash-a" size="small"></Button>
					</div>
					<!--</Tooltip>-->
				</div>					
				
			</div>
			<Page style="text-align: center;margin: 30px auto;" @on-change="changePage"
			@on-page-size-change="changePageSize"
			:total="pageTotalCount" size="small" :page-size='pageSize'
    	 show-elevator show-sizer show-total></Page>
		</div>
		<div class="firstLine2">
			<h4>监理日志</h4></br>
			<div class="secLine" v-for="item in items2">
			
				<a class="firstLay">{{item.month}}<span style="display: block;font-size: 20px;">{{item.date}}</span></a>
				<a class="boldName">{{item.title}}<span class="notBoldNmae">{{item.content}}</span></a>
			
				<div>
					<span class="btn stateStyle" v-if="item.statusType1">{{item.statusType1}}</span>
					<span class="btn stateStyle2" v-else>异常</span>
					<!--<Tooltip content="编辑" placement="top-start">-->
					<div style="display: flex;margin-top: -30px;">
					<Button style="margin-right: 5px;" class="getEdit" @click="editMana(item)" type="primary" icon="edit" size="small"></Button>
										<!--</Tooltip>-->
					<!--<Tooltip content="删除" placement="top-start">-->
					<Button @click="delMana(item)" class="getDel" type="error" icon="trash-a" size="small"></Button>
					</div>
					<!--</Tooltip>-->
				</div>
				
				<!--<Tooltip content="编辑" placement="top-start">-->
				<!--<img @click="editMana(item)" class="getEdit" width="18px" height="20px" src="../assets/img/edit.svg" />-->
				<!--</Tooltip>-->
				<!--<Tooltip content="删除" placement="top-start">-->
				<!--<img @click="delMana(item)" class="getDel" width="18px" height="20px" src="../assets/img/delete (1).svg" />-->
				<!--</Tooltip>-->
			</div>
			
			<Page style="text-align: center;margin: 30px auto;" @on-change="changePage1"
			@on-page-size-change="changePageSize1"
			:total="pageTotalCount1" size="small" :page-size='pageSize1'
    	 show-elevator show-sizer show-total></Page>
		</div>
	</div>
	 <Modal
		  	v-model="addNews"
	        title="添加日志"
	        height='800px'
	        width="50%"
	        
		  	>
		  	<div style="display: flex;justify-content: space-around;">		  				  
			  	
				<div class="evy">
					<span class="dista">标题&nbsp;&nbsp;：</span>
					<Input v-model="termTitle" style="height: 40px;width: 200px;"  class="selectInput" ></Input>
						<!--<span class="valid" v-model="vMac">{{vMac}}</span>-->
				</div>
				<div class="evy">
					<span class="dista">施工详情&nbsp;&nbsp;：</span>
					<Input  type="textarea" :rows="2" v-model="termContent" style="height: 40px;width: 200px;"  class="selectInput" ></Input>
						<!--<span class="valid" v-model="vMac">{{vMac}}</span>-->
				</div>
			</div></br>
			<div style="display: flex;justify-content: space-around;">
				<div class="evy">
					<span class="dista">施工状态&nbsp;&nbsp;：</span>
					<Select  v-model="termStatus" @on-change="addType" style="width: 200px;"
						filterable placeholder="请选择类型" class="selectDIv">
				        <Option v-for="item in statuslists"  :value="item.typeId" :key="item.typeId">{{ item.type }}</Option>
					</Select>
					<!--<Input v-model="termStatus" style="height: 40px;width: 200px;" class="selectInput" ></Input>-->
						<!--<span class="valid" v-model="vMac">{{vMac}}</span>-->
				</div>
					
				<div class="evy" >
					<span class="dista">类型&nbsp;&nbsp;：</span>
					<Select  v-model="termType" @on-change="chosType" style="width: 200px;"
					filterable placeholder="请选择类型" class="selectDIv">
			        <Option v-for="item in lists"  :value="item.id" :key="item.type">{{ item.type }}</Option>
				</Select>
					<!--<Input v-model="termType" disabled="disabled" style="height: 40px;width: 200px;"  class="selectInput" ></Input>-->
						<!--<span class="valid" v-model="vMac">{{vMac}}</span>-->
				</div>
				 <!--<Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."></Input>-->

			</div></br></br>
			
			
			<div style="text-align: center;padding: 30px 0;">
				<button @click='addAction' style="background: rgb(67,156,244);color: #fff;width:100px;height: 32px;" class="btn add1">提交</button>
				<!--<button @click="reset" style="width:100px;height: 32px;" class="btn btn-default add1" >重置</button>-->
				<button @click="can" style="width:100px;height: 32px;" class="btn btn-default add1">取消</Button>
			</div>
			<div slot='footer'></div>			
		  </Modal>
		  <Modal
		  	v-model="editNews"
	        title="修改日志"
	        height='800px'
	        width="50%"	        
		  	>
		  	<div style="display: flex;justify-content: space-around;">		  				  
			  	
				<div class="evy">
					<span class="dista" >标题&nbsp;&nbsp;：</span>
					<Input v-model="termTitle1" style="height: 40px;width: 200px;"  class="selectInput" ></Input>
						<!--<span class="valid" v-model="vMac">{{vMac}}</span>-->
				</div>
				<div class="evy">
					<span class="dista">施工详情&nbsp;&nbsp;：</span>
					<Input  type="textarea" :rows="2" v-model="termContent1" style="height: 40px;width: 200px;"  class="selectInput" ></Input>
						<!--<span class="valid" v-model="vMac">{{vMac}}</span>-->
				</div>	
			</div></br>
			<div style="display: flex;justify-content: space-around;">
				
				<div class="evy">
					<span class="dista">施工状态&nbsp;&nbsp;：</span>
					<Select  v-model="termStatus1"  @on-change="addType1" style="width: 200px;"
						filterable placeholder="请选择类型" class="selectDIv">
				        <Option v-for="item in statuslists"  :value="item.typeId" :key="item.typeId">{{ item.type }}</Option>
					</Select>
					<!--<Input v-model="termStatus" style="height: 40px;width: 200px;" class="selectInput" ></Input>-->
						<!--<span class="valid" v-model="vMac">{{vMac}}</span>-->
				</div>
				<div class="evy" >
					<span class="dista">类型&nbsp;&nbsp;：</span>
					<Select  v-model="termType1" ref="termType1" @on-change="chosType1" style="width: 200px;"
					filterable placeholder="请选择类型" class="selectDIv">
			        <Option v-for="item in lists"  :value="item.id" :key="item.type">{{ item.type }}</Option>
				</Select>
					<!--<Input v-model="termType" disabled="disabled" style="height: 40px;width: 200px;"  class="selectInput" ></Input>-->
						<!--<span class="valid" v-model="vMac">{{vMac}}</span>-->
				</div>
				 <!--<Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."></Input>-->

			</div></br></br>
			
			<div style="text-align: center;padding: 30px 0;">
				<button @click='editAction' style="background: rgb(67,156,244);color: #fff;width:100px;height: 32px;" class="btn add1">提交</button>
				<!--<button @click="resetEdit" style="width:100px;height: 32px;" class="btn btn-default add1" >重置</button>-->
				<button @click="canEdit" style="width:100px;height: 32px;" class="btn btn-default add1">取消</Button>
			</div>
			<div slot='footer'></div>			
		  </Modal>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				addNews:false,termTitle:'',termAddress:'',termContent:'',termType:'',termStatus:'',items:[],
				lists:[{"type":'施工日志',"id":1},{"type":'监理日志',"id":2}],
				pageTotalCount:0,pageSize:10,pageTotalCount1:0,pageSize1:10,items2:[],searchText:'',editNews:false,
				termTitle1:'',termAddress1:'',termContent1:'',termType1:'',termIds:'',termLevel:'',
				termStatusNullc:'',termStatusNull:'',statuslists:[{type:'正常',typeId:1},{type:'异常',typeId:2}],
				termStatus1:"",isActiveA:false,isActiveB:false,sd1:true,sd2:true
			}
		},
		created(){			 
	          this.refresh()
	          localStorage.setItem('busId','null')
	          eventBus.$on('eventBusId',function(res){		  					  	
			  		localStorage.setItem('busId',res)
		  	})
		},
		methods:{
			addType1(value){
				if(value=='1'){
					this.termStatus1=1	
				}else if(value=='2'){
					this.termStatus1=2	
				}
			},
			addType(value){
				console.log(value)
				if(value=='1'){
					this.termStatus=1	
				}else if(value=='2'){
					this.termStatus=2	
				}
			},
			chosType1(value){
				if(value==1){
					this.termType1=1
				}else if(value==2){
					this.termType1=2
				}
			},
			delMana(user){
				this.$Modal.confirm({
		          title: '提示',
		          content: '<p>确认删除？</p>',
		          onOk: () => {
		            setTimeout(() => {
		              this.$http({
							method:'POST',
							url:Server + 'tunnel/constructionLog/delete',
							headers:{
							"token":localStorage.getItem('token')},
							data:{
								"ids":[user.ids]						
							}
						}).then(res=>{
		                  if(res.data.code==1){
		
		                    this.$Modal.success({
		                      title: '提示',
		                      content: '<p>删除日志成功</p>',
		                      onOk:()=>{
								this.refresh()
		                      },
		                       onCancel:()=>{
		                       		
		                       },
		                      okText: '确定',
		                      cancelText: '取消'
		                    })
						}
		            })  
		         }, 500);  
		       }
				})
			},
			editMana(user){
				console.log(user)
				this.editNews=true
				this.termIds=user.ids
				this.termLevel=user.levels
				this.termTitle1=user.title
				this.termContent1=user.content
				this.termAddress1=user.address	
				this.termType1= user.type
				user.statusType1 == '正常'?this.termStatus1 = '1':this.termStatus1='2'
				
			},
			editAction(){
				
				this.$http({
					method:'POST',
					url:Server + 'tunnel/constructionLog/update',
					headers:{
					"token":localStorage.getItem('token')},
					data:{
						"ids":this.termIds,
						"levels":this.termLevel,
						"title":this.termTitle1,
						"content":this.termContent1,
						"address":'',
						"type":this.termType1,
						"statusType":this.termStatus1
					}
				}).then(res=>{
					console.log(res)
					if(res.data.code==1){
						this.$Modal.success({
				                title: '提示',
				                content: '<p>修改日志成功</p>',
				                onOk: () => {
				                	this.editNews=false
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
				                content: '<p>修改日志失败</p>',
				                onOk: () => {
				                	this.editNews=false
				                	this.refresh()
				                },
				                onCancel: () => {
				                },
				                okText: '确定',
				                cancelText: '取消'
				            });
					}
				})
			},
			canEdit(){
				this.editNews=false
			},
			
			edit(user){
				
				this.editNews=true
				console.log(user)
				this.termIds=user.ids
				this.termLevel=user.levels
				this.termTitle1=user.title
				this.termContent1=user.content
				this.termAddress1=user.address
				this.termType1 = user.type
				user.statusType1 == '正常'?this.termStatus1 = '1':this.termStatus1='2'
				//user.type==1?this.termtype1 = '1':this.termtype1='2'
			},
			del(user){
				this.$Modal.confirm({
		          title: '提示',
		          content: '<p>确认删除？</p>',
		          onOk: () => {
		            setTimeout(() => {
		              this.$http({
							method:'POST',
							url:Server + 'tunnel/constructionLog/delete',
							headers:{
							"token":localStorage.getItem('token')},
							data:{
								"ids":[user.ids]						
							}
						}).then(res=>{
		                  if(res.data.code==1){
		
		                    this.$Modal.success({
		                      title: '提示',
		                      content: '<p>删除日志成功</p>',
		                      onOk:()=>{
								this.refresh()
		                      },
		                       onCancel:()=>{
		                       		
		                       },
		                      okText: '确定',
		                      cancelText: '取消'
		                    })
						}
		            })  
		         }, 500);  
		       }
				})
			},
			search(){
				this.$http({
					method:'POST',
					url:Server + 'tunnel/constructionLog/findList',
					headers:{
					"token":localStorage.getItem('token')},
					data:{
//					"token":"a1d2ab35bd843304bb302e7b6e127be0",
						"page":"1",
						"limit":"10",
						"type":"1",
						"title":this.searchText,
						"tunnelId":localStorage.getItem('tunnelId')
					}
				}).then(res=>{
					this.pageTotalCount=res.data.data.totalCount
					this.items=res.data.data.list
					console.log(res.data.data.totalCount)
//					this.items2=res.data.data.list
					for(var i=0;i<this.items.length;i++){
		          		console.log(this.items[i].time.substring(8,10))
		          		this.items[i].date=this.items[i].time.substring(8,10)
		          		this.items[i].month=this.items[i].time.substring(5,7)
		          		if(this.items[i].statusType==1){
		          			this.items[i].statusType1='正常'
		          		}else if(this.items[i].statusType==2){
		          			this.items[i].statusType2='异常'
		          			
		          		}
		          	}
					
				})
				this.$http({
					method:'POST',
					url:Server + 'tunnel/constructionLog/findList',
					headers:{
					"token":localStorage.getItem('token')},
					data:{
//					"token":"a1d2ab35bd843304bb302e7b6e127be0",
						"page":"1",
						"limit":"10",
						"type":"2",
						"title":this.searchText,
						"tunnelId":localStorage.getItem('tunnelId')
					}
				}).then(res=>{	
					this.pageTotalCount1=res.data.data.totalCount
					this.items2=res.data.data.list					
					for(var i=0;i<this.items2.length;i++){
		          		console.log(this.items2[i].time.substring(8,10))
		          		this.items2[i].date=this.items2[i].time.substring(8,10)
		          		this.items2[i].month=this.items2[i].time.substring(5,7)		
		          		if(this.items2[i].statusType==1){
		          			this.items2[i].statusType1='正常'
		          			
		          		}else if(this.items2[i].statusType==2){
		          			this.items2[i].statusType2='异常'
		          			
		          		}
		          	}
					console.log(res.data.data.list)
				})
				
			},
			resetSearch(){
				this.searchText=''
				this.refresh()
			},
			changePage1(val){
				this.$http({
					method:'POST',
					url:Server + 'tunnel/constructionLog/findList',
					headers:{
					"token":localStorage.getItem('token')},
					data:{
	//					"token":"a1d2ab35bd843304bb302e7b6e127be0",
						"page":val,
						"limit":10,
						"levels":0,
		          		"type":2,
		          		"tunnelId":localStorage.getItem("tunnelId")
					}
					}).then(res=>{
						console.log(res.data.data.list)
						this.pageTotalCount1=res.data.data.totalCount
						this.items2=res.data.data.list
						for(var i=0;i<this.items2.length;i++){
			          		console.log(this.items2[i].time.substring(8,10))
			          		this.items2[i].date=this.items2[i].time.substring(8,10)
			          		this.items2[i].month=this.items2[i].time.substring(5,7)		          				          		
			          	}
					})
			},
			changePageSize1(current){
				this.$http({
					method:'POST',
					url:Server + 'tunnel/constructionLog/findList',
					headers:{
					"token":localStorage.getItem('token')},
					data:{
	//					"token":"a1d2ab35bd843304bb302e7b6e127be0",
						"page":1,
						"limit":current,
						"levels":0,
		          		"type":2,
		          		"tunnelId":localStorage.getItem("tunnelId")
					}
					}).then(res=>{
						
						this.pageTotalCount1=res.data.data.totalCount
						this.items2=res.data.data.list
						for(var i=0;i<this.items2.length;i++){
			          		console.log(this.items2[i].time.substring(8,10))
			          		this.items2[i].date=this.items2[i].time.substring(8,10)
			          		this.items2[i].month=this.items2[i].time.substring(5,7)		          				          		
			          	}
					})
			},
			changePage(val){
				this.$http({
					method:'POST',
					url:Server + 'tunnel/constructionLog/findList',
					headers:{
					"token":localStorage.getItem('token')},
					data:{
	//					"token":"a1d2ab35bd843304bb302e7b6e127be0",
						"page":val,
						"limit":10,
						"levels":0,
		          		"type":1,
		          		"tunnelId":localStorage.getItem("tunnelId")
					}
					}).then(res=>{
						console.log(res.data.data.list)
						this.pageTotalCount=res.data.data.totalCount
						this.items=res.data.data.list
						for(var i=0;i<this.items.length;i++){
			          		console.log(this.items[i].time.substring(8,10))
			          		this.items[i].date=this.items[i].time.substring(8,10)
			          		this.items[i].month=this.items[i].time.substring(5,7)		          				          		
			          	}
					})
			},
			changePageSize(current){				
					this.$http({
					method:'POST',
					url:Server + 'tunnel/constructionLog/findList',
					headers:{
					"token":localStorage.getItem('token')},
					data:{
	//					"token":"a1d2ab35bd843304bb302e7b6e127be0",
						"page":1,
						"limit":current,
						"levels":0,
		          		"type":1,
		          		"tunnelId":localStorage.getItem("tunnelId")
					}
					}).then(res=>{
						
						this.pageTotalCount=res.data.data.totalCount
						this.items=res.data.data.list
						for(var i=0;i<this.items.length;i++){
			          		console.log(this.items[i].time.substring(8,10))
			          		this.items[i].date=this.items[i].time.substring(8,10)
			          		this.items[i].month=this.items[i].time.substring(5,7)		          				          		
			          	}
					})
			},	
			chosType(value){
				console.log(value)
				if(value==1){
					this.termType=1
				}else if(value==2){
					this.termType=2
				}
			},
			Dtype(){
				
			},
			
			can(){
				this.addNews=false
				
			},
			addAction(){
				if(this.termTitle!=''&&this.termContent!=''&&this.termType!=''&&this.termStatus!=''){
					this.$http({
			            method:"post",
			            headers:{"token":localStorage.getItem('token')},
			            url:Server + 'tunnel/constructionLog/save',
			            data:{"tunnelId":localStorage.getItem('tunnelId'),"title":this.termTitle,
			            "content":this.termContent,"type":this.termType,
			            "statusType":this.termStatus
			            }
			          }).then(res=>{
			          	console.log(res)
			          	if(res.data.code==1){
			          		this.$Modal.success({
				                title: '提示',
				                content: '<p>添加日志成功</p>',
				                onOk: () => {
				                	this.addNews=false
				                	this.refresh()
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
		                content: '<p>请输入内容</p>',
		                onOk: () => {              	
		                },
		                onCancel: () => {
		                },
		                okText: '确定',
		                cancelText: '取消'
		            });
				}
				
			},
			refresh(){
				
//				this.$http({
//		            method:"post",
//		            headers:{"token":localStorage.getItem('token')},
//		            url:Server + 'tunnel/constructionLog/findType',	
////		            data:{"tunnelId":localStorage.getItem('tunnelId')}
//		          }).then(res=>{
//		          	console.log(res)
//		          	this.lists=res.data.data
//		          	console.log(this.lists)
//		          })
				this.$http({
		            method:"post",
		            headers:{"token":localStorage.getItem('token')},
		            url:Server + 'tunnel/constructionLog/findList',
		          data:{
		          	"page":1,
		          	"limit":10,		          	
		          	"type":1,
		          	"tunnelId":localStorage.getItem('tunnelId')
//					"tunnelId":busId	
		          }
		          }).then(res=>{
//		          	console.log(res)
		          	this.pageTotalCount=res.data.data.totalCount
		          	this.items=res.data.data.list
		          	for(var i=0;i<this.items.length;i++){
		          		
		          		this.items[i].date=this.items[i].time.substring(8,10)
		          		this.items[i].month=this.items[i].time.substring(5,7)	
		          		if(this.items[i].statusType==1){
		          			this.items[i].statusType1='正常'		
		          			
		          			this.isActiveA=false
		          		}else if(this.items[i].statusType==2){
		          			this.items[i].statusType2='异常'
//		          			
		          		}
		          	}
		          	
		          })
		          this.$http({ //获取监理日志的借口
		            method:"post",
		            headers:{"token":localStorage.getItem('token')},
		            url:Server + 'tunnel/constructionLog/findList',
		          data:{
		          	"page":1,
		          	"limit":10,
		          	
		          	"type":2,
		          	"tunnelId":localStorage.getItem('tunnelId')
//					"tunnelId":busId
		          }
		          }).then(res=>{
//		          	console.log(res)
		          	this.pageTotalCount1=res.data.data.totalCount
		          	this.items2=res.data.data.list
		          	for(var i=0;i<this.items2.length;i++){
		          		
		          		this.items2[i].date=this.items2[i].time.substring(8,10)
		          		this.items2[i].month=this.items2[i].time.substring(5,7)
		          		if(this.items2[i].statusType==1){
		          			this.items2[i].statusType1='正常'
		          			
		          			
		          		}else if(this.items2[i].statusType==2){
		          			this.items2[i].statusType2='异常'
		          			
		          		}
		          		
		          	}
		          })
			},
			addNew(){
				this.addNews=true
				this.termTitle='';
				this.termAddress='';
				this.termContent='';
				this.termType='';
			}
		}
	}
</script>

