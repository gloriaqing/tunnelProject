
<style>
	.spanNew{text-align: center;display: inline-block;width: 100px;cursor: pointer;
	height: 40px;line-height: 40px;background: #DDDEE1;color: #000;}
	.turnTopic{background: #0095FF;color: #fff;}
	.ivu-table-header thead{width: 100%;}
	table tbody td{height: 48px;line-height: 30px !important;}
	.table tbody tr:hover{background: #ebf7ff;}
	.table thead td{height: 40px;line-height: 30px !important;}
	.table-bordered>thead>tr>td{border-bottom-width: 0px;}
	.table tbody tr:first-child{background: red;}
	.getTrColor{background: red;}
	 .ivu-table .demo-table-info-row td{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-error-row td{
        background-color: red;
        color: #fff;
    }
</style>
<template>
	<div style="margin: 30px;">
		<div>
			<span @click="gas($event)" 
					 v-bind:class="{turnTopic:isTopicA}" class="spanNew">瓦斯</span>
			<span @click="dust($event)" v-bind:class="{turnTopic:isTopicB}"
				 style="margin-left: -3px;" class="spanNew">粉尘</span>
		</div>
		<div v-show="gasShow">
			 <div id="chartLineGas" style="width:1000px;height:300px;"></div>
		</div>
		<div v-show="dustShow">
			<div id="chartLineDust" style="width:1000px;height:300px;"></div>
		</div>
		 </br></br>
		 <div>
			<!--<span @click="alarmRecord($event)" 
					 v-bind:class="{turnTopic:isTopicC}" class="spanNew">报警记录</span>-->
			<span v-bind:class="{turnTopic:isTopicD}"
				 style="margin-left: -3px;" class="spanNew">监测记录</span>					 
		</div></br>		
			 <!--<Table :row-class-name="rowClassName"  border  :columns="columns1" :data="dataTable"></Table>-->		
			 <table v-show="showAlarm" class="table table-bordered table-hover">
					    <thead style="background: #f8f8f9;height: 40px;font-weight: 600;">
						     <tr>		
							<td>采集时刻</td>
						      <td>瓦斯</td>
						      <td >粉尘</td>
						 <td>瓦斯红色预警</td>
						     <td>瓦斯黄色预警</td>								
							 <td>粉尘红色预警</td>
							 <td>粉尘黄色预警</td>								
								
								<!--<td>正文</td>-->
						      
						<!--      <td>类型</td>
							  <td>单位</td>-->
							  <!--<td>状态</td>-->
              <!-- 					<td>黄色报警</td>
							  <td>红色报警</td>-->
						     </tr>
					    </thead>
					    <tbody>
						     <tr v-for ="(user,index) in dataTable">	
							
						      <td>
								{{user.createTime}}
							</td>		
							<td v-bind:class="{getTrColor:isColor}">{{user.gas}}</td>	
							<td>{{user.dust}}</td>	
							<td>{{user.alarmRedGas}}</td>
							<td>{{user.alarmYellowGas}}</td>
							<td>{{user.alarmRedDust}}</td>
							<td>{{user.alarmYellowDust}}</td>
							<!--<td>{{user.alarm}}</td>		      -->
								<!--<td v-model="historyDust">{{historyDust}}</td>-->
						<!--      <td v-model="historyGas">{{historyGas}}</td>-->

							
						<!--      <td>{{user.type}}</td>
						      <td>{{user.itch}}</td>
              <td>{{user.yellowAlarm}}</td>
                <td>{{user.redAlarm}}</td>-->
              </tr>
             </tbody>
             </table>
			<Page style="text-align: center;margin: 30px auto;" @on-change="changePage"
			@on-page-size-change="changePageSize"
			:total="page.totalCount" size="small" :page-size='pageSize'
    	 show-elevator show-sizer show-total></Page>
			<!--<table v-show="showWatch" class="table table-bordered table-hover">
					    <thead style="background: #f8f8f9;height: 40px;font-weight: 600;">
						     <tr>							
						      <td>线路</td>
						      <td >地址</td>
						     
								<!--<td>正文</td>
						      <td>采集时刻</td>
						      <td>类型</td>
							  <td>单位</td>
							  <!--<td>状态</td>
               					<td>黄色报警</td>
							  <td>红色报警</td>
						     </tr>
					    </thead>
					    <tbody>
						     <tr v-for ="(user,index) in data2">						      
								<td>{{user.name}}</td>
						      <td>{{user.age}}</td>

							<!--<td  class="eslipse" >{{user.text}}</td>
						      <td>
								{{user.date}}
							</td>
						      <td>{{user.type}}</td>
						      <td>{{user.itch}}</td>
              <td>{{user.yellowAlarm}}</td>
                <td>{{user.redAlarm}}</td>
              </tr>
             </tbody>
             </table>-->
          
	</div>
</template>

<script>
//	var socket=null;
	var arrDate=[];	
	var option,option2,myChart,myChartDust;
	var ds=[];
	var dates=[];
	var arr=[]
	var dusts=[];
	var safe;
	var redGas=[];
	var yellowGas=[];
	var redDust=[];
	var yellowDust=[];
	var datesDust=[];
	export default{
		data(){
			return{
				isTopicA:true,isTopicB:false,gasShow:true,dustShow:false,isTopicC:true,isTopicD:false,showAlarm:true,
				showWatch:false,isColor:false,
				
				 columns1: [
                   
                    {
                        title: '采集时刻',
                        key: 'createTime'
                    },
                    {
                        title: '瓦斯',
                        key: 'gas'
                    },
                    {
                        title: '粉尘',
                        key: 'dust'
                    },
                    {
                        title: '瓦斯红色预警',
                        key: 'alarmRedGas'
                    },
                    {
                        title: '瓦斯黄色预警',
                        key: 'alarmYellowGas'
                    },
                    {
                        title: '粉尘红色预警',
                        key: 'alarmRedDust'
                    },
                    {
                        title: '粉尘黄色预警',
                        key: 'alarmYellowDust'
                    }
                ],
                data1: [
                    {
                        name: '左线',
                        age: '掘进工作面1',
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03',
                        type:'瓦斯',
                        itch:'%',
                        yellowAlarm:'1.0',
                        redAlarm:'2.0'
                    },
                    {
                        name: '友线',
                        age: '掘进工作面2',
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01',
                         type:'瓦斯',
                          itch:'%',
                          yellowAlarm:'1.2',
                          redAlarm:'3.0'
                    }                   
                ],
                 columns2: [
                   
                    {
                        title: '线路',
                        key: 'name',                   
                    },
                    {
                        title: '地址',
                        key: 'age',                                                
                    },
                    {
                        title: '采集时刻',
                        key: 'date',                                                 
                    },
                    {
                        title: '类型',
                        key: 'type',                                                
                    },
                    {
                        title: '单位',
                        key: 'itch',                                                  
                    },
                    {
                        title: '黄色报警',
                        key: 'yellowAlarm',                                          
                    },
                    {
                        title: '红色报警',
                        key: 'redAlarm',                                             
                    }
                ],
                data2: [
                    {
                        name: '左线',
                        age: '掘进工作面2',
                      
                        date: '2016-10-03',
                        type:'粉尘',
                        itch:'%',
                        yellowAlarm:'1.0',
                        redAlarm:'2.0'
                    },
                    {
                        name: '友线',
                        age: '掘进工作面3',
                       
                        date: '2016-10-01',
                         type:'瓦斯',
                          itch:'%',
                          yellowAlarm:'1.2',
                          redAlarm:'3.0'
                    }                   
                ],message:'',websock: null,gasf:'',dustf:'',historyGas:'',historyDust:'',
                pageSize:10,dataTable:[],page:[],gasDataChart:[],dustDataChart:[]
			}
		},
		
		created(){
		  	  this.getMyTable()	
		  	 
       },
      
		
		methods:{
			chartLineGas(){				
				 myChart = this.$echarts.init(document.getElementById('chartLineGas'));
				console.log(myChart)	
				this.$http({
						method:'POST',
						url:Server + "tunnel/collection/twoHundredsCollections",
						headers:{
						"token":localStorage.getItem('token')},
						data:{"tunnelId":localStorage.getItem('tunnelId')}
					}).then(res=>{						
						//this.pageTotalCount=res.data.data.totalCount	
						//if(res.data.data.length!=0){
							this.gasDataChart=res.data.data
							
							for(var i=0;i<this.gasDataChart.length;i++){	
								this.gasDataChart[i].collection=JSON.parse(this.gasDataChart[i].collection)
								arrDate.push(this.gasDataChart[i].collection.gas)
								dates.push(this.gasDataChart[i].create_time)	
								redGas.push(1.5)
								yellowGas.push(1)
								//dusts.push(this.data1[i].collection.dust)
							}
							console.log(arrDate)
							console.log(dates)
						//}	
						for(var i=0;i<1000;i++){
							redGas.push(1.5)
							yellowGas.push(1)
						}
								    				
				option = {
				    title: {
				        text: '实时数据',
				        left: '50%'
				    },
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'cross'
				        },

				    },
				    legend: {
//				        data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
				    },
				    grid: {
				        left: '10%',
				        right: '0%',
				        bottom: '15%'
				    },

				    xAxis: {
				        type: 'category',
				        data: dates,
				        scale: true,
				        boundaryGap : false,
				        axisLine: {onZero: false},
				        splitLine: {show: false},
				        splitNumber: 20,
				        min: 'dataMin',
				        max: 'dataMax'
				    },
				    yAxis: [
				         {
	                        //第一个（左边）Y轴，yAxisIndex为0
	                         type : 'value',
	                         name : '瓦斯(%)',                             
	                         axisLabel : {
	                             formatter: '{value}%'    //控制输出格式
	                         },
	                          
	                     }
				    ],
				    dataZoom: [
				        {
				            show: true,
				            realtime: true,
				            start: 0,
				            end: 99
				        },
				        {
				            type: 'inside',
				            realtime: true,
				            start: 0,
				            end: 99
				        }
				    ],
				    series: [
				       {
			            name: '瓦斯',
			            type: 'line',
			            data: arrDate,
			            smooth: true,
			            itemStyle: {
					        normal: {
					            color: "#2ec7c9",
					            lineStyle: {
					                color: "#2ec7c9"
					            }
					        }
					    }
					},{
						name: '红色报警值',
			            type: 'line',
			            data: redGas,
			            smooth: true
					},{
						name: '黄色报警值',
			            type: 'line',
			            data: yellowGas,
			            smooth: true,
			            itemStyle: {
					        normal: {
					            color: "yellow",
					            lineStyle: {
					                color: "yellow"
					            }
					        }
					    }
					}
				       ]
				
				}
					myChart.setOption(option)	
				})
				
			},
			chartLineDust(){		
				console.log(document.getElementById('chartLineDust'))
				myChartDust = this.$echarts.init(document.getElementById('chartLineDust'));
				this.$http({
						method:'POST',
						url:Server + "tunnel/collection/twoHundredsCollections",
						headers:{
						"token":localStorage.getItem('token')},
						data:{"tunnelId":localStorage.getItem('tunnelId')}
					}).then(res=>{						
						
						console.log('list123',res)
						//if(res.data.data.lenth!=0){
							this.dustDataChart=res.data.data	
							for(var i=0;i<this.dustDataChart.length;i++){	
								this.dustDataChart[i].collection=JSON.parse(this.dustDataChart[i].collection)
								datesDust.push(this.dustDataChart[i].create_time)
								dusts.push(this.dustDataChart[i].collection.dust)
							}
							console.log(dusts,345)
						//}
						for(var i=0;i<1000;i++){
							redDust.push(16)
							yellowDust.push(8)
						}
					
				option2 = {
				    title: {
				        text: '实时数据',
				        left:'50%',
				    },
				     tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'cross'
				        }

				    },
				    grid: {
				        left: '10%',
				        right: '0%',
				        bottom: '15%'
				    },
				    xAxis: {
				        type: 'category',
				        data: datesDust,
				        scale: true,
				        boundaryGap : false,
				        axisLine: {onZero: false},
				        splitLine: {show: false},
				        splitNumber: 20,
				        min: 'dataMin',
				        max: 'dataMax'
				    },
				    yAxis: [
				        {
	                            //第一个（左边）Y轴，yAxisIndex为0
	                             type : 'value',
	                             name : '粉尘(mg/立方)',                             
	                             axisLabel : {
	                                 formatter: '{value}mg/cm³'    //控制输出格式
	                             }
                         }
				    ],
				    dataZoom: [
				        {
				            show: true,
				            realtime: true,
				            start: 0,
				            end: 99
				        },
				        {
				            type: 'inside',
				            realtime: true,
				            start: 0,
				            end: 99
				        }
				    ],
				    series: [{
				        name: '粉尘',
				        type: 'line',
				        showSymbol: false,
				        hoverAnimation: false,
				        data: dusts,
				        itemStyle: {
					        normal: {
					            color: "blue",
					            lineStyle: {
					                color: "blue"
					            }
					        }
					    }
				    },
				    {
						name: '红色报警值',
			            type: 'line',
			            data: redDust,
			            smooth: true,
			            
					},{
						name: '黄色报警值',
			            type: 'line',
			            data: yellowDust,
			            smooth: true,
			            itemStyle: {
					        normal: {
					            color: "yellow",
					            lineStyle: {
					                color: "yellow"
					            }
					        }
					    }
					}
				    ]
				};
				myChartDust.setOption(option2);
				})
			},
			drawChart(){
				this.chartLineGas()				
				this.chartLineDust()
			},
			changePage(val){
				this.$http({
						method:'POST',
						url:Server + "tunnel/collection/list",
						headers:{
						"token":localStorage.getItem('token')},
						data:{"tunnelId":localStorage.getItem('tunnelId'),"page":val,"limit":10}
					}).then(res=>{
						this.page=res.data.data
						console.log('list',res)
						if(res.data.data.list.lenth!=0){
							this.dataTable=res.data.data.list	
							for(var i=0;i<this.dataTable.length;i++){
								this.dataTable[i].gas=this.dataTable[i].collection.gas
								this.dataTable[i].dust=this.dataTable[i].collection.dust
								this.dataTable[i].alarmRedGas='0.8'							
								this.dataTable[i].alarmYellowGas='0.6'
								this.dataTable[i].alarmRedDust='200'
								this.dataTable[i].alarmYellowDust='150-199'
								
							}
							
						}										
					})
			},
			changePageSize(current){
				this.$http({
						method:'POST',
						url:Server + "tunnel/collection/list",
						headers:{
						"token":localStorage.getItem('token')},
						data:{"tunnelId":localStorage.getItem('tunnelId'),"page":1,"limit":current}
					}).then(res=>{
						this.page=res.data.data
						console.log('list',res)
						if(res.data.data.list.lenth!=0){							
							this.dataTable=res.data.data.list	
							for(var i=0;i<this.dataTable.length;i++){
								this.dataTable[i].gas=this.dataTable[i].collection.gas
								this.dataTable[i].dust=this.dataTable[i].collection.dust
								this.dataTable[i].alarmRedGas='0.8'							
								this.dataTable[i].alarmYellowGas='0.6'
								this.dataTable[i].alarmRedDust='200'
								this.dataTable[i].alarmYellowDust='150-199'
							}
							
	
						}										
					})
			},
			getMyTable(){
				
					this.$http({
						method:'POST',
						url:Server + "tunnel/collection/list",
						headers:{
						"token":localStorage.getItem('token')},
						data:{"tunnelId":localStorage.getItem('tunnelId'),"page":1,"limit":10}
					}).then(res=>{
						console.log('listTable',res)
						this.page=res.data.data
						
						if(res.data.data.list.lenth!=0){
							this.page=res.data.data
							this.dataTable=res.data.data.list	
							for(var i=0;i<this.dataTable.length;i++){
								this.dataTable[i].gas=this.dataTable[i].collection.gas
								this.dataTable[i].dust=this.dataTable[i].collection.dust
								this.dataTable[i].alarmRedGas='0.8'							
								this.dataTable[i].alarmYellowGas='0.6'
								this.dataTable[i].alarmRedDust='200'
								this.dataTable[i].alarmYellowDust='150-199'
								if(this.dataTable[i].gas>'0.8'){
//									this.isColor=true
								}
							}
	
						}										
					})
				
				
			},
		
	        changeLocation(){					  
	        	console.log(localStorage.getItem('tunnelId'))	        	
				
//				var length = th.personList.length;
				var sk = new WebSocket('ws://120.76.240.252:9527/websocket');
				sk.onopen = function(){
					console.log(12223);
					sk.send(localStorage.getItem('tunnelId'))		
					sk.onmessage = function(data){
						
						console.log(JSON.parse(data.data));	
						ds=JSON.parse(data.data)
						
						dates.push(ds.collection.time)
						datesDust.push(ds.collection.time)
						arrDate.push(ds.collection.gas)						
						dusts.push(ds.collection.dust)
						redGas.push(1.5)
						yellowGas.push(1)
						redDust.push(8)
						yellowDust.push(16)
						console.log(arrDate,2)	
//						if(dates.length==500){
//							dates.splice(0,200)
//						}
//						if(arrDate.length==500){
//							arrDate.splice(0,200)
//						}
						if(dates.length<1000&&dusts.length<1000){	//限制500条												
							myChart.setOption({
								yAxis: [
						        {
	                        //第一个（左边）Y轴，yAxisIndex为0
			                         type : 'value',
			                         name : '瓦斯(%)',                             
			                         axisLabel : {
			                             formatter: '{value}%'    //控制输出格式
			                         }
			                     }
						        
						   		 ],
							     xAxis: {
							        type: 'category',
							        data: dates,
							        boundaryGap : false,
							    },
							    series: [{						       					            
									data:arrDate,					            
						        },{
						        	data:redGas
						        },{
						        	data:yellowGas
						        }
							    ]
						    })
							myChartDust.setOption({
								yAxis: [
						         {
	                            //第一个（左边）Y轴，yAxisIndex为0
	                             type : 'value',
	                             name : '粉尘(mg/立方)',                             
	                             axisLabel : {
	                                 formatter: '{value}mg/cm³'    //控制输出格式
	                             }
                         	}
						   		 ],
							     xAxis: {
							        type: 'category',
							        data: datesDust,
							        boundaryGap : false,
							    },
							    series: [{						       					            
									data:dusts,					            
					        	},{
						        	data:redDust
						        },{
						        	data:yellowDust
						        }
							    ]
						    })
//						this.drawChart()
						}
					};
				};
				
				sk.onclose = function(){
					console.log("123")
				}
				
			},	
		
			alarmRecord(event){
				this.isTopicC=true
				this.isTopicD=false
				this.showAlarm=true
				this.showWatch=false
			},
			watchRecord(event){
				this.isTopicC=false
				this.isTopicD=true
				this.showAlarm=false
				this.showWatch=true
			},
			gas(event){
				this.gasShow=true
				this.dustShow=false
				this.isTopicA=true
				this.isTopicB=false
			},
			dust(event){
				this.gasShow=false
				this.dustShow=true
				this.isTopicB=true
				this.isTopicA=false
			},
			rowClassName (row, index) {
				for(var i=0;i<this.dataTable.length;i++){
					 //this.dataTable[i].cellClassName
                if (index===0) {
                	
                    return 'demo-table-error-row';
                }
                return '';
               }
            }
			
		},
		 mounted(){       	
       	 	this.drawChart()        			       
          this.changeLocation()							 
			//th.solid()
			
		},
		
	}
</script>
