<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h1>云顶山隧道</h1>
				<div id="wasData"></div>
			</div>
		</div>
		<br /><hr /><br />
		<div class="row">
			<div class="col-md-8">
				<Table style="font-size: 16px;" :columns="columns" :data="data"></Table>
			</div>
			<div class="col-md-3 col-md-offset-1">
				<Collapse v-model="value1">
	        		<Panel name="1">
	           		报警历史
	            	<h4 slot="content" style="background-color: gainsboro;padding: 15px;">
	            		<p><strong>掘进工作面</strong><i style="text-align: right;">3分钟前</i></p>
	            		<span>瓦斯浓度超标</span>
	            	</h4>
	            	<h4 slot="content" style="background-color: gainsboro; margin-top: 15px; padding: 15px;">
	            		<p><strong>掘进工作面</strong><i style="text-align: right;">2小时前</i></p>
	            		<span>瓦斯浓度超标</span>
	            	</h4>
			        </Panel>
			    </Collapse>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				columns:[{title:'线路',key:'code'},
				{title:'地址',key:'address'},
				{title:'采集时刻',key:'time'},
				{title:'类型',key:'type'},
				{title:'单位',key:'unit'},
				{title:'黄色报警',key:'warning'},
				{title:'红色报警',key:'alarm'},
				{title:'值',key:'value'}],
				data:[{code:'左线',address:'掘进工作面',time:'2017-11-23 08:30:10',type:'瓦斯',unit:'%',warning:'1.0',alarm:'1.5',value:'1.0'},
				{code:'左线',address:'掘进工作面',time:'2017-11-23 08:30:10',type:'粉尘',unit:'%',warning:'1.0',alarm:'1.5',value:'1.0'}]
			}
		},
		mounted() {
			this.drawWasData()
		},
		methods: {
			drawWasData() {
				var wasChart = echarts.init(document.getElementById('wasData'));
				var base = +new Date(1968, 9, 3);
				var oneDay = 24 * 3600 * 1000;
				var date = [];

				var data = [Math.random() * 300];

				for(var i = 1; i < 20000; i++) {
					var now = new Date(base += oneDay);
					date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
					data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
				}

				var option = {
					tooltip: {
						trigger: 'axis',
						position: function(pt) {
							return [pt[0], '10%'];
						}
					},
					title: {
						left: 'center',
						text: '大数据量面积图',
					},
					toolbox: {
						feature: {
							dataZoom: {
								yAxisIndex: 'none'
							},
							restore: {},
							saveAsImage: {}
						}
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: date
					},
					yAxis: {
						type: 'value',
						boundaryGap: [0, '100%']
					},
					dataZoom: [{
						type: 'inside',
						start: 0,
						end: 10
					}, {
						start: 0,
						end: 10,
						handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
						handleSize: '80%',
						handleStyle: {
							color: '#fff',
							shadowBlur: 3,
							shadowColor: 'rgba(0, 0, 0, 0.6)',
							shadowOffsetX: 2,
							shadowOffsetY: 2
						}
					}],
					series: [{
						name: '模拟数据',
						type: 'line',
						smooth: true,
						symbol: 'none',
						sampling: 'average',
						itemStyle: {
							normal: {
								color: 'rgb(255, 70, 131)'
							}
						},
						areaStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: 'rgb(255, 158, 68)'
								}, {
									offset: 1,
									color: 'rgb(255, 70, 131)'
								}])
							}
						},
						data: data
					}]
				};
				wasChart.setOption(option);
			}
		}
	}
</script>

<style>
	#wasData {
		width: 100%;
		height: 300px;
	}
</style>