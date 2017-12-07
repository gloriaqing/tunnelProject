<template>
	<div v-show="gasShow">
			 <div id="chartLineGas" style="width:1000px;height:300px;"></div>
		</div>
</template>

<script>
	var myChart;
	export default{
		data(){
			return{
				gasShow:false
			}
		},
		
		methods:{
			drawLine(){
				myChart = this.$echarts.init(document.getElementById('chartLineGas'));	
				this.$http({
						method:'POST',
						url:Server + "tunnel/collection/twoHundredsCollections",
						headers:{
						"token":localStorage.getItem('token')},
						data:{"tunnelId":localStorage.getItem('tunnelId')}
					}).then(res=>{						
						//this.pageTotalCount=res.data.data.totalCount												
							this.data1=res.data.data
							console.log('data1',this.data1)
							for(var i=0;i<this.data1.length;i++){	
								this.data1[i].collection=JSON.parse(this.data1[i].collection)
								arrDate.push(this.data1[i].collection.gas)
								dates.push(this.data1[i].create_time)	
								redGas.push(1.5)
								yellowGas.push(1)
								//dusts.push(this.data1[i].collection.dust)
							}
							console.log(arrDate)
							console.log(dates)
						for(var i=0;i<300;i++){
							redGas.push(1.5)
							yellowGas.push(1)
						}
					})			    				
				var option = {
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
				
			}
			 
		},
		
			mounted() {

           this.drawLine();
          
        }
		
	}
</script>

<style>
</style>