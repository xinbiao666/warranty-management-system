<template>
    <div>
        <el-carousel trigger="click" height="500px">
            <el-carousel-item v-for="item in carouselImg" :key="item.indexOfImg">
            <img :src="item.imgPath" class="carousel-img-style">
            </el-carousel-item>
        </el-carousel>
        <div class="notice-split">通知公告</div>
        <div class="notice-container">
            <el-row :gutter="20">
              <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }">
                  <img :src="require('../../assets/img/inform.jpg')" class="notice-image">
                  <div style="padding: 14px;">
                      <span>欢迎使用校园报修管理系统</span>
                      <div class="notice-container-bottom">
                      <p class="notice-text">{{ notice }}</p>
                      <el-button type="primary" class="notice-button" size="mini">查看详情</el-button>
                      </div>
                  </div>
                  </el-card>
              </el-col>
              <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }">
                  <img :src="require('../../assets/img/inform.jpg')" class="notice-image">
                  <div style="padding: 14px;">
                      <span>欢迎使用校园报修管理系统</span>
                      <div class="notice-container-bottom">
                      <p class="notice-text">{{ notice }}</p>
                      <el-button type="primary" class="notice-button" size="mini" @click="gotoNoticeDetail">查看详情</el-button>
                      </div>
                  </div>
                  </el-card>
              </el-col>
              <el-col :span="6">
                  <el-card :body-style="{ padding: '0px' }">
                  <img :src="require('../../assets/img/inform.jpg')" class="notice-image">
                  <div style="padding: 14px;">
                      <span>欢迎使用校园报修管理系统</span>
                      <div class="notice-container-bottom">
                      <p class="notice-text">{{ notice }}</p>
                      <el-button type="primary" class="notice-button" size="mini">查看详情</el-button>
                      </div>
                  </div>
                  </el-card>
              </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
  name: 'homePage',
  data () {
    return {
      carouselImg: [
        {
          indexOfImg: 1,
          imgPath: require('../../assets/img/focus1.jpg')
        }, {
          indexOfImg: 2,
          imgPath: require('../../assets/img/focus2.jpg')
        }, {
          indexOfImg: 3,
          imgPath: require('../../assets/img/focus3.jpg')
        }
      ],
      notice: '各位老师、同学：\n' +
        '大家好！\n' +
        '我校报修管理系统已经开通，欢迎各位老师、同学积极应用网络平台开展教学活动。\n' +
        '网络教学综合平台是为师生开展网络辅助教学服务的支撑平台，该系统支持教师与学生进行网上互动式教学活动，它能向学生提供网络辅助学习支持功能，如浏览所选课程相应的课程辅导材料，进行网上        提问、在线测试、讨论式学习等等；它能向教师提供网上教学支持功能，如发布选课课程信息、布置作业、制作课件、网上答疑、在线测试、讨论式学习、并永久保留各项网上学习痕迹和各项统计消息等        等从而拓展教学空间，扩大师生视野。\n' +
        '欢迎大家开展网络教学活动，尽享信息化教学的乐趣！'
    }
  },
  methods: {
    gotoNoticeDetail () {
      this.$router.push('/notice/detail')
    }
  }
}
</script>
<style lang="less" scoped>
.el-carousel{
    margin-top:5px;
    .carousel-img-style{
    width: 100%;
    height: 100%;
  }
}
    .notice-split{
    width: 100px;
    margin: 0px auto;
    padding: 10px 0;
    border-bottom: 2px solid #ccc;
    text-align: center;
    font-weight: 600;
    font-size: 25px;
  }
    .notice-container{
    padding:10px 0;
    .notice-image{
      width: 100%;
    }
    .notice-container-bottom{
      margin:5px 0;
      .notice-text{
        font-size: 13px;
        color: #999;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        color: #929191;
      }
      .notice-button{
        margin:10px 0;
        float:left;
      }
    }

  }
</style>
