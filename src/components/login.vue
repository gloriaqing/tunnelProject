<style scoped="scoped">
	@import '../../static/css/login.css';

  .textInfo{margin-top: -100px;text-align: center;color: #fff;font-size: 36px;}
  .subTitle{display:block;letter-spacing: 3px;color: #000;font-size: 45px;}
  .loginBtn{width:152px;
	height:48px;
	margin-top:-20px;
	border-radius:20px;
	background-color: rgb(67,157,245);
	border:none;
	color:white;
	font-size: 20px;
	letter-spacing: 7px;
	outline:none;}
</style>
<template>
  <div>
    <div class="box">
      <img :src="bg" style="width: 100%;" />
      <div class="box-a">
        <div class="litt">
          <!--<img src="../assets/images/drop1_03.png" />-->
        </div>
        <div class="littDrop" id="drop">
          <!--<img src="../assets/images/drop2_03.png" />-->
        </div>

        <div class="m-2">
          
          <div class="m-2-1">
            <form onsubmit="return false">
           <div class="m-2-2" style="margin-top: 20px;">
            <h2 class="subTitle" style="">隧道施工信息化云平台</h2>
          </div>
              <!--<Input icon='ios-person-outline' style="width: 300px;" type="text" placeholder="用户名"></Input>-->
              <div class="m-2-2">
                <div class="includImg" style="position: relative;">
                  <img src="../assets/img/icon person1.svg" />
                  <input  ref="input" v-model="userName" type="text" placeholder="用户名" />
                </div>
              </div>
              <div class="m-2-2">
                <div class="includImg" style="position: relative;">
                  <img style="width:20px;top:10px;margin-left: 10px;" src="../assets/img/passw.svg" />
                  <input v-model="psw" type="password" placeholder="密码"/>
                </div>

              </div>
              <div class="m-2-2">
                <div>
                  <!--<img class="ss" style="width:20px;top:10px;margin-left: 10px;" src="../assets/images/valid_03.png" />
                  <input v-model="valid" style="width: 290px;padding-left: 40px;margin-right: -12px;" type="text" placeholder="验证码" />
                  <img @click="newImg" style="width: 200px;height: 47px;border-radius: 3px;margin-top: -1px;"
                       src="http://192.168.8.102/captcha.jpg"  />-->
                  <div style="display: flex;width: 605px;margin: 0 auto;">
                    <p style="cursor: pointer;" @click="modal1 = true" class="forgetPass">忘记密码?
                    </p>
                    <span @click="autoLogin"
                          style="display: contents;margin-right: 52px;margin-top: 12px;font-weight: 100;">
			               					 <Checkbox style="margin-bottom: 0;display: contents;"
                                         v-model="single">下次自动登录</Checkbox> </span>
                  </div>
                </div>
              </div>
              <div class="m-2-2">
                <button  class="loginBtn"  @keyup.enter="goMain"  @click="goMain">登录</button>                             	
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
    <Modal
      v-model="modal1"
      title="提示"
      @on-ok="ok"
      @on-cancel="cancel">
      <p style="color: red;">请致电管理员,让管理员把密码给您</p>

    </Modal>
  </div>
</template>
<script>
  
  export default{
  	
    data(){

      return{
        bg:require('../../static/img/1.jpg'),
        single:false,userName:'',psw:'',valid:'',modal1:false
      }

    },
    mounted() {
	    this.$refs['input'].focus()
	   
	  },
    created(){
    	//回车登录
    	
    	
//  	document.onkeydown=function(e){    		
//				var key=window.event.keyCode;
//				if(key==13&&localStorage.getItem('username')!=null&&localStorage.getItem('psw')!=null){
//					th.$http({
//          method:"post",
//          url:Server + 'sys/login',
//          data:{"username":th.userName,"password":th.psw,captcha:th.valid}
//        }).then(res=>{
//          console.log(res)
//          if(res.data.code==0){
//            localStorage.setItem('token',res.data.token)
//
//            th.$Modal.success({
//              title: '提示',
//              content: '<p>登录成功</p>',
//              onOk: () => {
//              },
//              onCancel: () => {
//              },
//              okText: '确定',
//              cancelText: '取消'
//            });
//            th.$router.push({path:'/gps'})
//				}
//        })
//      }				
//		}
     //自动登录
      
	  	if(localStorage.getItem('loginAuto')=='false'){
         
	      this.userName=localStorage.getItem('username');
	      this.psw=localStorage.getItem('psw');
        }
    },
    methods:{
      ok(){},
      cancel(){},
      forGetPass(){
//				this.modal1=true
      },
      newImg(){
        this.$http({
          method:"get",
          url:Server + 'captcha.jpg'}).then(res=>{
          console.log(res)
        })
      },
      autoLogin(){
        localStorage.setItem('loginAuto',this.single)
        this.userName=localStorage.getItem('username')
        this.psw=localStorage.getItem('psw')
//      if(localStorage.getItem('loginAuto')=='false'){
////					this.userName='admin';
////					this.psw='admin';
//
//        this.$http({
//          method:"post",
//          url:Server + 'sys/login',
//          data:{"username":localStorage.getItem('username'),
//            "password":localStorage.getItem('psw')}
//        }).then(res=>{
//          console.log(res)
//          localStorage.setItem('token',res.data.token)
//          this.$router.push({path:'/gps'})
//        })
//      }
      },
      
      goMain(){
//    	this.$router.push({path:'/tunnelGeneral'})
//    	this.$router.push({path:'/gps'})
//		localStorage.setItem('token','4d17ff441492f4bd2f5bebe1832b2bc6')
//		this.$router.push({path:'/view'})
      	localStorage.setItem('username',this.userName);
        localStorage.setItem('psw',this.psw)
				if(this.userName==''||this.psw==''){
					this.$Modal.warning({
		                title: '提示',
		                content: '<p>手机号码或密码不能为空</p>',
		                onOk: () => {
		                },
		                onCancel: () => {
		                },
		                okText: '确定',
		                cancelText: '取消'
		              });
				}
        if(this.username!=''&&this.psw!=''){
          this.$http({
            method:"post",
            url:Server + 'sys/login',
            data:{"username":this.userName,"password":this.psw,captcha:this.valid}
          }).then(res=>{
            console.log(res)
            if(res.data.code==1){
            	this.$router.push({path:'/tunnelGeneral'})
              localStorage.setItem('token',res.data.data.token)
              this.$Modal.success({
                title: '提示',
                content: '<p>登录成功</p>',
                onOk: () => {
                	
                },
                onCancel: () => {
                },
                okText: '确定',
                cancelText: '取消'
              });
              this.$router.push({path:'/tunnelGeneral'})
            }else if(res.data.msg=='账号或密码不正确'){
              this.$Modal.warning({
                title: '提示',
                content: '<p>账号或密码不正确</p>',
                onOk: () => {
                },
                onCancel: () => {
                },
                okText: '确定',
                cancelText: '取消'
              });
            }else{
               this.$Modal.warning({
                title: '提示',
                content: '<p>登录失败</p>',
                onOk: () => {
                },
                onCancel: () => {
                },
                okText: '确定',
                cancelText: '取消'

              });
            }


          })
        }
      }
    }
  }
</script>
