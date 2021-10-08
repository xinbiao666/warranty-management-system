<template>
    <div class="notice-detail-main">
      <div class="notice-title">欢迎使用校园报修管理系统</div>
      <div class="notice-author">
        发布人:&nbsp;&nbsp;<span>系统管理员</span>&nbsp;&nbsp;&nbsp;&nbsp;发布时间:&nbsp;&nbsp;<span>2021-6-6</span>
      </div>
      <div class="notice-text">
        <p>各位老师、同学：</p>
        <p>大家好！</p>
        <p>我校网络教学综合平台系统已经开通，欢迎各位老师、同学积极应用网络平台开展教学活动。</p>
        <p>网络教学综合平台是为师生开展网络辅助教学服务的支撑平台，该系统支持教师与学生进行网上互动式教学活动，它能向学生提供网络辅助学习支持功能，如浏览所选课程相应的课程辅导材料，进行网上提问、在线测试、讨论式学习等等；它能向教师提供网上教学支持功能，如发布选课课程信息、布置作业、制作课件、网上答疑、在线测试、讨论式学习、并永久保留各项网上学习痕迹和各项统计消息等等从而拓展教学空间，扩大师生视野。
        </p>
        <p>欢迎大家开展网络教学活动，尽享信息化教学的乐趣！</p>
      </div>
      <div class="goback-button">
        <el-button type="primary" class="goback-button" @click="goback">返回</el-button>
      </div>
    </div>
</template>
<script>
export default {
  name: 'noticeDetail',
  data () {
    return {}
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.notice-detail-main{
  width: 80%;
  height: 650px;
  margin:0 auto;
  background-color: #fdfafa;
  .notice-title {
    height: 40px;
    width: 100%;
    text-align: center;
    line-height: 40px;
    font-size: 26px;
    margin: 15px 0;
  }
  .notice-author {
    width: 100%;
    text-align: center;
    line-height: 40px;
    font-size: 10px;
  }
  .notice-text {
    width: 90%;
    height: 400px;
    background-color: #fff;
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 20px;
    p{
      margin: 10px 0;
    }
  }
  .goback-button{
    width: 80px;
    margin:20px auto 0 auto;
  }
}

</style>
