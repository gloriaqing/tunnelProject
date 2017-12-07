<template>
	<div class="container">
		<div class="row">
			<div class="col-md-6">
				<h3 v-model="tunnelName">{{tunnelName}}</h3>
				<div style="font-size: 16px;margin-top: 15px;">
					<Table style="font-size: 16px;" :border="true" :stripe="true" :show-header="false" width="120px" :columns="columns1" :data="data1"></Table>
				</div>

			</div>
			<div class="col-md-5">
				<h3>每日进尺</h3>
				<div id="charts" style="width: 100%; height: 300px;"></div>
			</div>

		</div>
		<br />
		<hr />
		<br />
		<div class="row">
			<div v-show="huajiao" class="col-md-11" style="font-size: 16px;">

				<Row :gutter="32">
					<Col span="24" class="demo-tabs-style1 font" style="background: #e3e8ee;padding:16px;">
					<Tabs type="card">
						<TabPane label="隧道概况">{{tunnelinfo}}</TabPane>
						<TabPane label="水文与地质条件">第四系粉质黏土、碎石土、角砾土、块石土及粉质黏土夹粉土粉砂,奥陶系下统向阳组叶岩、砂质叶岩夹泥质砂岩泥岩,泥盆系下统青山组灰岩,喜山期煌斑岩,华力西期辉长岩,喜山期碱性玄武岩等11种。由于位于区域活动性断裂 洱海大断裂带内,隧道直接穿越的区域较大断层有一条,位于右K364+960和左幅K36+ 940附近。断层带附近岩体破碎,其发育对隧道围岩稳定不利。隧道区地下水类型主要为第四系松散岩类孔隙水、基岩裂隙水、构造裂隙水及岩溶水,围岩局部地下水丰富。</TabPane>
						<TabPane label="地震烈度及气象条件">花椒箐隧道横穿洱海断陷盆地外围低中山~中山段，隧道进出口两段有冲沟发育，终端埋深大，围岩以强、弱风化的灰岩、辉长岩为主，其中强风化的围岩段较多，加之受隧道周边多条断层的影响强烈，隧道终端多出侵入岩、喷出岩发育，与灰岩相互穿插，断层破碎带及岩性接触带很发育。</TabPane>
						<TabPane label="洞口与洞门">
							<img src="../../static/img/huajiaodoor.png" />
						</TabPane>
						<TabPane label="初步支护设计">
							<img src="../../static/img/huajiaotable.png" />
						</TabPane>
						<TabPane label="监控测量">施工测量采用全站仪和激光扫描仪
超前地质预报：隧道围岩地质复杂，在施工中必须加强超前地质预报工作，确保施工安全</TabPane>
						<TabPane label="防排水设计">（1）隧道拱部及边墙满铺400g/m²土工布+PVC-N ( 1 )型塑料防水板组成复合防水层;明洞采用400g/ m²土工布+PVC-N (11)型防水板+400g/ m²土工布组成复合防水层。
（2）二次衬砌采用抗渗混凝土浇筑,保证二次衬砌抗渗等级不低于P8.
（3）施工缝采用带注浆管的遇水膨胀止水条,沉降缝处采用中埋式橡胶止水带,在衬砌结构变化处设沉降缝。</TabPane>
						<TabPane label="施工方法">根据花椒箐隧道的工程地质、水文地质条件及地面环境条件，花椒箐隧道出口V级围岩采用台阶法施工。上半断面高度6.42m（不包括预留沉降量），下半断面高度1.94m，上下台阶的距离为25~30m，每循环进尺1.2米。下断面开挖时应左右错开开挖，错开间距不得小于5m，单侧开挖不能超过2.4m。</TabPane>
					</Tabs>
					</Col>
				</Row>
			</div>
			
			<div v-show="shuanglong" class="col-md-11" style="font-size: 16px;">

				<Row :gutter="32">
					<Col span="24" class="demo-tabs-style1 font" style="background: #e3e8ee;padding:16px;">
					<Tabs type="card">
						<TabPane label="隧道概况">双龙山隧道位于云南省剑川县甸南镇玉华村，抵触山区，远离村落，交通情况较差，双龙山隧道布置形式为分离式。车行横洞2处，时空长度42.6m,人行横洞3处，施工长度55.49m，紧急停车带2处，施工长度80m。</TabPane>
						<TabPane label="水文与地质条件">双龙山隧道施工区域地表水受季节影响较大，主要赋存与山间凹地，冲沟之中，地下水发育，主要以第四系松散沉积物空隙水，风化带基岩裂隙水为主。</TabPane>
						<TabPane label="地震烈度及气象条件">双龙山隧道施工区域大的构造单一以杨子淮地台（I）的二级构造单元丽江台缘褶带（II），线路范围内的构造以近南北构造占绝对优势，构成主题构造格架，以断裂构造为主，褶皱构造次之，地层多呈单斜产出，但受断裂构造影响，底呈产状变化较大。区域内新构造运动明显，主要活动构造有金沙江—援疆断裂带、丽江—金棉北东向断裂带、剑川断裂带以及后期走滑断裂，属发震构造，新构造活跃地段。丽江附近常发地震，均与走滑构造有关。</TabPane>
						<TabPane label="洞口与洞门">
							<img src="../../static/img/shuanglongdoor.jpg" />
						</TabPane>
						<TabPane label="初步支护设计">
							<img src="../../static/img/shuanglongtable.png" />
						</TabPane>
						<TabPane label="监控测量">（1）施工测量采用全站仪和激光扫描仪
（2）超前地质预报：隧道围岩地质复杂，在施工中必须加强超前地质预报工作，确保施工安全</TabPane>
						<TabPane label="防排水设计">(1)开工前,作好洞口的防排水系统,完善洞顶、洞口(下坡施工时)截水沟,防止雨水冲刷洞口或灌入洞内。
(2)施工期间,洞内出水可通过仰拱内的中心水沟自然排出洞外。
(3)对永久防排水结构,严格按照设计及有关施工规范施做防排水结构。洞身采用铺设防水板和无纺土工布组成防水层防水,防水层铺设采用无锚钉铺设技术,接缝按双缝热熔焊接
(4)在二次衬砌施做以前要保证隧道结构不渗漏水,否则需采取进一步的措施,加强防排水结构的完善,宗盖保证满足不渗漏的要求</TabPane>
						<TabPane label="施工方法">总体施工工序：施工准备→测量放线→洞门→洞口注浆加固→地质超前预报→洞身开挖→初期支护→变形沉降→二次衬砌→水沟、电缆沟→路面工程→装饰→竣工交验。</TabPane>
					</Tabs>
					</Col>
				</Row>
			</div>
			
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				huajiao:false,shuanglong:false,
				tunnelName:'暂无数据',
				columns1: [{
						title: '1',
						key: 'name',
						width: '150',
						className: 'font'
					},
					{
						title: '2',
						key: 'data',
						className: 'font'
					}
				],
				data1: [{
						name: '隧道长度(KM)',
						data: '暂无数据'
					},
					{
						name: '计划周期',
						data: '暂无数据'
					},
					{
						name: '阶段',
						data: '暂无数据'
					},
					{
						name: '区间里程 ',
						data: '暂无数据'
					},
					{
						name: '围岩类别',
						data: '暂无数据'
					},
					{
						name: '斜井个数',
						data: '暂无数据'
					},
					{
						name: '通道个数',
						data: '暂无数据'
					}
				],
				tunnelinfo: '大理和丽江是云南的旅游胜地，大丽路是G214线在云南境内的重要剬，其路网地位显著。花椒箐隧道位于新建大丽高速公路土建第7合同段，为一座分离式隧道，是整个项目的控制型工程，花椒箐隧道为云南时建及已建的最长高速公路隧道。隧道按高速公路80km/h速度标准进行设计，内轮廓净空宽度为11m，高度为7.1m，采用r=5.5m的单心圆曲墙式衬砌断面。'
			}
		},
		mounted() {
			this.drow(),
			this.getId(),
			this.getTunnelInfo()
		},
		methods: {
			getTunnelInfo(){
				var th = this;
				var id = localStorage.getItem('tunnelid');
				th.$http({
					method:'get',
					url:Server + 'tunnel/tunnel/'+id+'/get',
					headers:{
						"Content-Type":"application/json",
						"token":localStorage.getItem('token')
					}
				}).then(function(obj){
					var data = obj.data.data;
					th.tunnelName = obj.data.data.name;
					if(obj.data.data.name == '花椒箐隧道'){
						th.huajiao = true;
						th.shuanglong = false;
					};
					if(obj.data.data.name == '双龙山隧道'){
						th.shuanglong = true;
						th.huajiao = false;
					};
					th.data1[0].data = data.length;
					th.data1[1].data = data.sstarttime+'—'+data.sendtime;
					th.data1[2].data = data.state;
					th.data1[3].data = data.interval;
					th.data1[4].data = data.rockType;
					th.data1[5].data = data.inclined;
					th.data1[6].data = data.path;
					console.log(obj.data.data);
				})
			},
			getId(){
				var th = this; 
				var id = this.$route.query.id;
				console.log("id"+id);
			},
			drow() {
				console.log(echarts);
				var charts = echarts.init(document.getElementById('charts'));
				var option = {
					color: ['#3398DB'],
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						show:true,
						data: ['掘进长度']
					},
					grid: {
						top:'10%',
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: ['12-1', '12-2', '12-3', '12-4', '12-5', '12-6', '12-7'],
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
						name: '掘进长度/米',
						type: 'bar',
						barWidth: '40%',
						data: [3, 5, 4, 7, 4, 5, 4]
					}]
				};
				charts.setOption(option);
			}
		}
	}
</script>

<style>
	h3 {
		padding: 15px;
	}
	
	.font {
		font-size: 16px;
	}
	
	.demo-tabs-style1>.ivu-tabs-card>.ivu-tabs-content {
		height: 400px;
		margin-top: -16px;
	}
	
	.demo-tabs-style1>.ivu-tabs-card>.ivu-tabs-content>.ivu-tabs-tabpane {
		background: #fff;
		padding: 16px;
	}
	
	.demo-tabs-style1>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab {
		border-color: transparent;
	}
	
	.demo-tabs-style1>.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active {
		border-color: #fff;
	}
	
	.demo-tabs-style2>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab {
		border-radius: 0;
		background: #fff;
	}
	
	.demo-tabs-style2>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active {
		border-top: 1px solid #3399ff;
	}
	
	.demo-tabs-style2>.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab-active:before {
		content: '';
		display: block;
		width: 100%;
		height: 1px;
		background: #3399ff;
		position: absolute;
		top: 0;
		left: 0;
	}
</style>