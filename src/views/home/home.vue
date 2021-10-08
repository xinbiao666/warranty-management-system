<template>
  <el-container>
    <el-header>
      <div class="header">珠海科技学院报修管理系统</div>
    </el-header>
    <el-main>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
        <el-menu-item class="school-logo"><img :src="require('../../assets/img/logo.png')"></el-menu-item>
        <el-menu-item index="/home/index">首页</el-menu-item>
        <el-menu-item index="2">报修服务</el-menu-item>
        <el-menu-item index="3">个人信息</el-menu-item>
        <el-menu-item index="4">通知公告</el-menu-item>
        <el-submenu index="" class="handle-slide-down">
          <template slot="title">用户</template>
          <el-menu-item>查看消息</el-menu-item>
          <el-menu-item>历史记录</el-menu-item>
          <el-menu-item @click="showLoginFormDialog">请登录</el-menu-item>
        </el-submenu>
        <el-menu-item class="login-button"><el-button type="primary" size="mini" @click="showLoginFormDialog">去登陆</el-button></el-menu-item>
      </el-menu>
      <router-view></router-view>
    </el-main>
    <pageFooter></pageFooter>
    <el-dialog
      title="登录"
      :visible.sync="loginFormVisible"
      width="50%">
      <el-form :model="loginRuleForm" :rules="loginRules" ref="loginFormRef" label-width="100px">
        <el-form-item label="学号/工号" prop="userid">
          <el-input v-model="loginRuleForm.userid"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginRuleForm.password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="hideLoginFormDialog">取 消</el-button>
        <el-button type="primary" @click="loginFormVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
// import homePage from '../../components/homePage/index.vue'
import pageFooter from '../../components/pageFooter/index.vue'
export default {
  name: 'home',
  components: {
    // homePage,
    pageFooter
  },
  data () {
    const checkUserid = (rules, value, callback) => {
      const rep = /^[0-9]+$/
      if (value === '') {
        callback(new Error('请输入学号/工号！'))
      } else if (!rep.test(value)) {
        return callback(new Error('学号/工号必须是数字！'))
      } else if (value.length < 4 || value.length > 8) {
        callback(new Error('请输入4到8位数字！'))
      } else {
        callback()
      }
    }
    return {
      loginFormVisible: false,
      activeIndex: '/home/index',
      loginRuleForm: {
        userid: '',
        password: ''
      },
      loginRules: {
        userid: [
          { required: true, validator: checkUserid, trigger: 'blur' }
        ],
        password: [
          { required: true, trigger: 'blur', message: '请输入密码！' }
        ]
      }
    }
  },
  methods: {
    handleSelect (key) {
      if (key) {
        this.activeIndex = key
      }
      console.log(this.activeIndex)
    },
    showLoginFormDialog () {
      this.loginFormVisible = true
    },
    hideLoginFormDialog () {
      this.$refs.loginFormRef.resetFields()
      this.loginFormVisible = false
    }
  }
}
</script>

<style scoped lang="less">
.el-header{
  width: 100%;
  height: 70px!important;
  background-color: #409eff;
}
.header{
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  line-height: 70px;
  font-family: "楷体";
  color: #ffff;
}
.el-main{
  width: 80%;
  background-color: #fdfafa;
  margin:0 auto;
  padding:0 20px;
  .handle-slide-down{
    float:right;
  }
  .login-button{
    float:right;
  }
  .school-logo{
    img{
      width: 40px;
      height: 40px;
    }
  }
}
</style>
