<template>
	<div class="container">
		<div class="row">
			<div class="col-md-3 col-md-offset-3" style="margin-top: 15px;">
				开始时间
				<DatePicker ref="start_time" type="date" placeholder="" style="width: 200px"></DatePicker>
			</div>-
			<div class="col-md-3" style="margin-top: 15px;">
				结束时间
				<DatePicker ref="end_time" type="date" placeholder="" style="width: 200px"></DatePicker>
			</div>
			<div class="col-md-2" style="margin-top: 15px;">
				<Button type="primary" icon="ios-search" @click="search">搜索</Button>
			</div>
		</div>
		<div class="row">
			<div class="col-md-11" style="margin-top: 15px;">
				<Table border :columns="columns" :data="data"></Table>
				<br />
				<Page :total="total*1" @on-change="change($event)" @on-page-size-change="changelimit($event)" show-total show-sizer style="text-align: center;"></Page>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return{
				total:'',
				date:'',dateList:[{name:'实时',value:'1'},{name:'日',value:'2'},{name:'周',value:'3'},{name:'月',value:'4'}],
<<<<<<< .mine
				columns:[{title:'卡号',key:'passnumber',width:60},{title:'姓名',key:'user_name'},{title:'部门',key:'department'},{title:'职务',key:'position'},
				{title:'初次进洞',key:'sb_time'},{title:'末次出洞',key:'xb_time'},{title:'洞口',key:'positon'},{title:'进入次数',key:'time'},
				{title:'日期',key:'sb_time'}],
				data:[]
||||||| .r4
				columns:[{title:'卡号',key:'code'},{title:'姓名',key:'name'},{title:'部门',key:'part'},{title:'职务',key:'position'},
				{title:'初次进洞',key:'in'},{title:'末次出洞',key:'out'},{title:'洞口',key:'cave'},{title:'进入次数',key:'times'},
				{title:'日期',key:'time'}],
				data:[{code:'001',name:'王璐',part:'土方',position:'普工',in:'07:33',out:'18:23',cave:'左洞',times:'3',time:'2017-12-12'},
				{code:'001',name:'王璐',part:'土方',position:'普工',in:'07:33',out:'18:23',cave:'左洞',times:'3',time:'2017-12-12'},
				{code:'001',name:'王璐',part:'土方',position:'普工',in:'07:33',out:'18:23',cave:'左洞',times:'3',time:'2017-12-12'},
				{code:'001',name:'王璐',part:'土方',position:'普工',in:'07:33',out:'18:23',cave:'左洞',times:'3',time:'2017-12-12'}]
=======
				columns:[{title:'卡号',key:'passnumber',width:80},{title:'姓名',key:'user_name',width:80},
				{title:'部门',key:'department',width:80},{title:'职务',key:'position',width:80},
				{title:'初次进洞',key:'sb_time'},{title:'末次出洞',key:'xb_time'},
				{title:'工作位置',key:'positon',width:120},{title:'进入次数',key:'time',width:100},
				{title:'日期',key:'sb_time'}],
				data:[]
>>>>>>> .r23
			}
		},
		
		mounted(){
			this.getTotal(),
			this.getAttend()
		},
		methods:{
			change(e){
				var th = this;
				var start_time = this.$refs.start_time.visualValue;
				var end_time = this.$refs.end_time.visualValue;
				th.$http({
					method:'post',
					url:Server + 'tunnel/staff/attend',
					data:{
						"tunnel_id":localStorage.getItem('tunnelid'),
						"start_time":start_time,
						"end_time":end_time,
						"pageNum":e,
						"limit":"10"
					},
					headers:{
						"Content-Type":"application/json",
						"token":localStorage.getItem('token')
					}
				}).then(function(obj){
					var data = obj.data.data.list;
					th.data = data;
					th.total = obj.data.data.total;
				})
			},
			changelimit(e){
				var th = this;
				var start_time = this.$refs.start_time.visualValue;
				var end_time = this.$refs.end_time.visualValue;
				th.$http({
					method:'post',
					url:Server + 'tunnel/staff/attend',
					data:{
						"tunnel_id":localStorage.getItem('tunnelid'),
						"start_time":start_time,
						"end_time":end_time,
						"pageNum":"1",
						"limit":e
					},
					headers:{
						"Content-Type":"application/json",
						"token":localStorage.getItem('token')
					}	
				}).then(function(obj){
					var data = obj.data.data.list;
					th.data = data;
					th.total = obj.data.data.total;
				})
			},
			search(){
				var start_time = this.$refs.start_time.visualValue;
				var end_time = this.$refs.end_time.visualValue;
				var th = this;
				th.$http({
					method:'post',
					url:Server + 'tunnel/staff/attend',
					data:{
						"tunnel_id":localStorage.getItem('tunnelid'),
						"start_time":start_time,
						"end_time":end_time,
						"pageNum":"1",
						"limit":"10"
					},
					headers:{
						"Content-Type":"application/json",
						"token":localStorage.getItem('token')
					}
				}).then(function(obj){
					var data = obj.data.data.list;
//					for(var i=0;i<data.length;i++){
//						var time = data[i].create_date.substring(0,10);
//						data[i].date = time;
//					};
					if(data.length == 0){
						th.$Message.warning('未查询到任何数据')
					}else{
						th.$Message.success('成功查询到'+obj.data.data.total+'条数据')
					}
					th.data = data;
					th.total = obj.data.data.total;
				})
			},
			getAttend(){
				var th = this;
				th.$http({
					method:'post',
					url:Server + 'tunnel/staff/attend',
					data:{
						"tunnel_id":localStorage.getItem('tunnelid'),
						"start_time":"",
						"end_time":"",
						"pageNum":"1",
						"limit":"10"
					},
					headers:{
						"Content-Type":"application/json",
						"token":localStorage.getItem('token')
					}
				}).then(function(obj){
					console.log(obj.data.data.list);
					var data = obj.data.data.list;
//					for(var i=0;i<data.length;i++){
//						var time = data[i].create_date.substring(0,10);
//						data[i].date = time;
//					};
					th.data = data;
					th.total = obj.data.data.total;
				})
			},
			getTotal(){
				this.total = this.data.length;
			},
			getByDate(value){
				console.log(value);
			}
		}
		
	}
</script>

<style>
</style>