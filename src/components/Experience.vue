<template>
  <div :class="phone?'exWrapperPhone':'exWrapper' ">
    <main class="main">
      <span>项目经验</span>
      <section class="section">
        <h4 class="programName">本地记账</h4>
        <!--        <HomeSwiper choice='a'/>-->
        <SwiperContent choice="a" class="swiper"/>
        <div class="pWrapper">
          <span class="title">项目介绍</span><span class="title">:</span><br>
          <p><span class="span"></span> 使用Vue实现了一个本地记账功能的项目，包含 <span>记账</span> 、<span>标签</span>、<span>统计</span>等页面，实现了
            <span>添加/删除记录</span> 、<span>标签</span>，<span>分类统计</span>和<span>图表显示</span>等功能。以VueCLI创建项目模板，Vuex实现全局数据状态管理，使用Vue-Router进行前端路由切换及传参，echarts插件实现数据可视化。
          </p>
          <span class="title"> 技术栈</span><span class="title">:</span><br>
          <span> VueCLI/vue2/Vuex/Vue-Router/ES6/SCSS/TypeScript/echarts</span><br>
          <span class="title">项目预览</span><span class="title">:</span><br>
          <img class="jpg"  src="../assets/images/vue.png" alt="二维码">
        </div>
      </section>
      <section class="section">
        <h4 class="programName"> 酷图 </h4>

        <SwiperContent choice="b"/>
        <div class="pWrapper">
          <span class="title">项目介绍</span><span class="title">:</span><br>
          <p><span class="span"></span> 使用React脚手架快速搭建的一个ajax异步请求，使用 <span>Axios插件</span> 与mock api
            完成的一个随机图片获取的项目，使用了tailwind css插件来简化css( <span>不推荐使用，违背语义化</span> )，使用 <span>react-spring</span> 插件实现过渡动画
          </p>
          <span class="title"> 技术栈</span><span class="title">:</span><br>
          <span> react/hooks/react-router-dom//ES6/react-spring</span><br>
          <span class="title">项目预览</span><span class="title">:</span><br>
          <img class="jpg"  src="../assets/images/react.png" alt="二维码">
          <br>
        </div>
      </section>
      <section class="section pika">
        <h4 class="programName">皮卡丘</h4>
        <img src="../assets/images/9.png" alt="图片9"/>
        <div class="pWrapper">
          <span class="title">项目介绍</span><span class="title">:</span><br>
          <p><span class="span"></span> 使用jQuery和JS实现的一个简单的动态生成皮卡丘的项目
          </p>
          <span class="title">项目预览</span><span class="title">:</span><br>
          <img class="jpg" src="../assets/images/pikaqiu.png" alt="二维码">
          <br>
        </div>
      </section>
      <section class="section">
        <h4 class="programName">番茄闹钟小程序</h4>
        <div class="pWrapper">
          <span class="title">项目介绍</span><span class="title">:</span><br>
           <p ><span class="span"></span>使用微信开发者工具开发的一个番茄工作法的闹钟</p>
          <img class="jpg" src="../assets/images/gh_f67f42cbc665_344的副本.jpg" alt="二维码">
        </div>

      </section>
      <section class="section4">
        <p>专业技能</p>
        <ul>
          <li>熟悉HTML,CSS,JavaScript,了解TypeScript,熟悉ES6常用语法</li>
          <li>熟悉使用Vue-Cli快速开发项目，了解Vuex/Vue-router/Axios等Vue全家桶</li>
          <li>了解前端工程化，了解Webpack</li>
          <li>了解SCSS</li>
        </ul>
      </section>
      <section class="section5">
        <p>工作经历</p>
        <div class="spanWrapper">
          <span>时间：2016-5 —— 2017-6</span><br>
          <span>公司：</span><span>杭州炬华科技股份有限公司</span><br>
          <span>岗位：</span><span>技术支持工程师</span><br>
<!--          <span>工作内容：</span><br>-->
<!--          <span>1.负责河南省内表计、终端、协议转换器等的售后服务工作；</span><br>-->
<!--          <span>2.负责产品运行信息的收集、反馈与处置和运行故障的处理；</span><br>-->
<!--          <span>3.负责供货检测的跟踪，及时处理、反馈检测过程中出现的各种问题；</span><br>-->
<!--          <span>4.负责集中器新程序现场测试、远程测试及升级；</span><br>-->
<!--          <span>5.负责公司部门和大区经理安排的商务和其他工作。</span>-->
        </div>
        <hr class="hr">
        <div class="spanWrapper">
          <span>时间：2013-11 —— 2015-6</span><br>
          <span>公司：</span><span>北京博纳电气股份有限公司</span><br>
          <span>岗位：</span><span>技术支持工程师</span><br>
<!--          <span>工作内容：</span><br>-->
<!--          <span>1.负责湖北省内表计、终端等设备的售后服务工作；</span><br>-->
<!--          <span>2.负责产品运行信息的收集、反馈与处置和运行故障的处理；</span><br>-->
<!--          <span>3.负责供货检测的跟踪，及时处理、反馈检测过程中出现的各种问题；</span><br>-->
<!--          <span>4.负责集中器新程序现场测试、远程测试及升级；</span><br>-->
<!--          <span>5.负责公司部门和大区经理安排的商务和其他工作。</span>-->
        </div>
      </section>
    </main>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import SwiperContent from '@/components/SwiperContent.vue';

@Component({
  components: {SwiperContent}
})

export default class Experience extends Vue {
  @Prop() phone?: boolean;
}
</script>

<style lang='scss' scoped>
.jpg{
  width: 200px;
  height: 200px;
}

.exWrapperPhone {
  padding: 16px 0;

  > .main {
    overflow: auto;

    > span {
      font-size: 20px;
      color: #45A3DE;
      font-family: Impact, Charcoal, sans-serif;
      font-weight: bolder;
      padding-bottom: 8px;
    }

    > .section {
      border-bottom: 2px solid #d9d8d5;
      box-shadow: 0 6px 2px -3px rgba(168, 167, 161, 0.91);
      padding-top: 8px;

      > span {
        padding: 8px 0;
      }

      .programName {
        padding: 5px 0;
      }

      .pWrapper {
        padding-bottom: 5px;

        > .title {
          font-size: 20px;
          font-weight: bold;
          color: dimgray;

        }

        > p {
          line-height: 27px;
          font-size: 16px;

          > .span {
            padding-left: 2rem;
            display: inline-block;
          }

          > span {
            background-color: #FEE642;
          }
        }
      }
    }
  }

  .section.pika {

    > img {
      max-width: 100%;
    }
  }

  .section4 {
    padding-top: 13px;
    padding-left: 10px;

    > p {
      font-size: 20px;
      color: #45A3DE;
      font-family: Impact, Charcoal, sans-serif;
      font-weight: bolder;
      padding-bottom: 8px;
    }

    > ul > li {
      list-style: disc outside none;
      margin-left: 1rem;
    }
  }

  .section5 {
    padding-top: 13px;
    max-width: 100vw;

    > .spanWrapper {
      padding: .5rem 0;
      line-height: 28px;
    }

    > p {
      font-size: 20px;
      color: #45A3DE;
      font-family: Impact, Charcoal, sans-serif;
      font-weight: bolder;
      padding-bottom: 8px;
    }

    > .spanWrapper {
      padding: .5rem 0;
    }
  }
}

.exWrapper {
  padding: 16px 0;

  > .main {
    overflow: auto;
    padding: 0 1rem;

    > span {
      font-size: 20px;
      color: #45A3DE;
      font-family: Impact, Charcoal, sans-serif;
      font-weight: bolder;
      padding-bottom: 8px;
    }

    > .section {
      border-bottom: 2px solid #d9d8d5;
      box-shadow: 0 6px 2px -3px rgba(168, 167, 161, 0.91);
      padding-top: 8px;

      > span {
        padding: 8px 0;
      }

      .programName {
        padding: 5px 0;
      }

      .pWrapper {
        padding-bottom: 5px;

        > .title {
          font-size: 20px;
          font-weight: bold;
          color: dimgray;

        }

        > p {
          line-height: 27px;
          font-size: 16px;

          > .span {
            padding-left: 2rem;
            display: inline-block;
          }

          > span {
            background-color: #FEE642;
          }
        }
      }
    }
  }

  .section.pika {
    > img {
      max-width: 100%;
    }
  }

  .section4 {
    padding-top: 13px;
    padding-left: 10px;

    > p {
      font-size: 20px;
      color: #45A3DE;
      font-family: Impact, Charcoal, sans-serif;
      font-weight: bolder;
      padding-bottom: 8px;
    }

    > ul > li {
      list-style: disc outside none;
    }
  }

  .section5 {
    padding-top: 13px;
    max-width: 100vw;

    > p {
      font-size: 20px;
      color: #45A3DE;
      font-family: Impact, Charcoal, sans-serif;
      font-weight: bolder;
      padding-bottom: 8px;
    }

    > .spanWrapper {
      padding: .5rem 0;
    }
  }
}


</style>