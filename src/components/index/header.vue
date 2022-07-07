<template>
  <header @mouseleave='isShow=false'>
    <div class='header-content'>
      <h1 class='content-logo'>
        <img src="../../../public/image/logo.png">
      </h1>
      <div class='content-nav'>
        <ul>
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/course">课程</router-link></li>
          <li><router-link to="/">会员</router-link></li>
        </ul>
      </div>
      <div class='search-buy-login'>
        <div class='content-search'>
          <input type="" placeholder="请输入要搜索的课程">
          <el-icon color='#808080' :size='22'>
            <search style="width: 22px; height:22px;"/>
          </el-icon>
        </div>
        <div class='content-shopping' @click="goCar()">
          <el-icon color='#808080' :size='24'><shopping-cart style="width: 24px; height:24px;"/></el-icon>
        </div>
        <div class='content-login' v-if="!isLogin" @click="login()">登录 / 注册</div>
        <div class="content-login-success" v-else>
          <div style="cursor: pointer">我的课程</div>
          <div @mouseenter='isShow=true'>
            <img
                class="avator"
                :src="userInfo.avatar"
                alt=""
                v-if="userInfo.avatar"
            />
            <img v-else class="avator" src='public/image/Avat62.png'/>
          </div>
        </div>
        <!-- 划过头像显示  -->
        <div class="user-info" v-if='isShow'>
          <div class="user-info-top">
            <div class="u-i-t-top">
              <img
                  class="avator"
                  :src="userInfo.avatar"
                  alt=""
                  v-if="userInfo.avatar"
              />
              <img class="avator" src='public/image/Avat62.png' v-else />
              <div class="avator-info">
                <p>{{userInfo.nickName}}</p>
              </div>
            </div>
            <div class="u-i-i-bottom">
              <div>
                <router-link to="/">
                  <div class="info-item">
                    <img src="public/image/header/course.png"/>
                    <p>我的课程</p>
                  </div>
                </router-link>
              </div>
              <div>
                <router-link to="/">
                  <div class="info-item">
                    <img src="public/image/header/order.png" />
                    <p>订单中心</p>
                  </div>
                </router-link>
              </div>
              <div>
                <router-link to="/">
                  <div class="info-item">
                    <img src="public/image/header/mess.png"/>
                    <p>我的消息</p>
                  </div>
                </router-link>
              </div>
              <div>
                <router-link to="/">
                  <div class="info-item">
                    <img src="public/image/header/setting.png"/>
                    <p>个人设置</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <div class="user-info-bottom">
            <div class="logout" @click='outLogin'>退出登录</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Search , ShoppingCart} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import {onBeforeMount, ref} from "vue";
import { getInfo } from "../../common/api/index";
import { logout } from "../../common/api/login";
import { useUserStore } from "../../store/user";
import {ElMessage} from "element-plus";

const router = useRouter();
const isShow = ref(false);//展示头像下的选项框
const isLogin = ref(false);//登录状态
const userInfo = ref({});//登录信息
const login = ()=>{
  router.push("/login");
}
const outLogin = ()=>{
  logout().then((res)=>{
    if(res.meta.code === '200'){
      isLogin.value = false;
      ElMessage({
        showClose: true,
        message: '退出成功',
        type: 'success',
      })
      //清除token
      useUserStore().token = "";
      //刷新页面
      router.go(0);
    }
  })
}
//进入购物车页面
const goCar = ()=>{
  router.push({
    path:'/car'
  })
}
onBeforeMount(()=>{
  getInfo().then((res)=>{
    let userStore = useUserStore();
    if(res.meta.code === '200') {
      isLogin.value = true;
      userInfo.value = res.data.data;
      userStore.setUserInfo(res.data.data);
    }else {
      ElMessage({
        message:res.meta.msg,
        type:'error',
      })
    }
  }).catch((error)=>{
    console.log(error)
  })
})
</script>


<style scoped>
header{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 5px 6px rgba(0,0,0,0.16);
}
.header-content{
  position: relative;
  display: flex;
  justify-content: space-around;
  width:1200px;
}
.content-logo{
  width:160px;
  height: 55px;
  margin:10px 0;
  cursor: pointer;
}
.content-logo img{
  height: 100%;
}
.content-nav{
  width: 300px;
  height: 75px;
}
.content-nav ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 75px;
}
.content-nav ul li{
  font-size:18px;
  color:#808080;
  cursor: pointer;
}
.content-nav ul li a{
  font-size:18px;
  color:#808080;
  cursor: pointer;
  text-decoration: none;
}
.search-buy-login{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 650px;
}
.content-search{
  display: flex;
  align-items: center;
  padding:5px 10px;
  width: 350px;
  height: 35px;
  background: #F0F2F4;
  border-radius: 8px;
}
.content-search input{
  padding:0 10px;
  width:430px;
  height: 40px;
  border:0;
  border-radius: 8px;
  background: #F0F2F4;
  color:#808080;
  font-size:16px;
  outline: none;
}
.content-login a{
  font-size: 18px;
  color:#808080;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
}
.content-login-success {
  height: 53px;
  color: #808080;
  text-align: center;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #707070;
}
.avator {
  height: 53px;
  width: 53px;
  cursor: pointer;
  border-radius: 50%;
}
.user-info {
  width: 200px;
  height: 194px;
  background-color: #fff;
  border: 1px solid rgba(248, 250, 252, 1);
  box-shadow: 0px 5px 15px 3px #888888;
  position: absolute;
  top: 75px;
  right: -40px;
  z-index: 999;
  display: block;
  border-radius: 10px;
}
.user-info-top {
  display: flex;
  width: 100%;
  height: 160px;
  border-bottom: 1px solid rgba(248, 250, 252, 1);
  flex-direction: column;
}
.u-i-t-top {
  display: flex;
  height: 80px;
  width: 100%;
  align-items: center;
}
.u-i-t-top img {
  width: 40px;
  height: 40px;
  margin: 0 10px;
  cursor: pointer;
}
.avator-info {
  width: 120px;
  height: 60px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
}
/*有会员了之后高度微调*/
.avator-info p {
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}
.u-i-i-bottom {
  display: flex;
  height: 100px;
  width: 200px;
  margin-top: 10px;
  flex-wrap: wrap;
  justify-content: space-around;
}
.u-i-i-bottom a{
  text-decoration: none;
}
.info-item {
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #333333;
  border-radius: 3px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1) !important;
}
.info-item img {
  width: 14px;
  height: 16px;
}
.user-info-bottom {
  position: relative;
  width: 100%;
  height: 30px;
}
.logout {
  line-height: 30px;
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #93999f;
  cursor: pointer;
}
/*vip开始*/
.vip{
  display: flex;
  flex-direction: row;
  /*flex-wrap: wrap;*/
  width: 100%;
  height: 30px;
  margin-left: -105px;
  margin-top: 18px;
  font-size: 12px;
  line-height:30px;
}
.vipImg{
  width: 15px;
  height: 15px;
  margin-right: 12px;
}
.vipImg img{
  width: 100% !important;
  height: 100% !important;
}
.vipName{
  color: #93999F;
}
.endTime{
  padding-left: 2px;
  color:#FF0000 ;
  position: absolute;
  top: 45px;
  left: 73px;
  font-size: 12px;
}

</style>