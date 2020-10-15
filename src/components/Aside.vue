<template>
  <div id="test" :class="choice?'newPhone':'asideWrapper'">
    <div class="base">
      <Box class="pictureBox box">
        <div class="picture">
        </div>
      </Box>
      <Box field-name="基本信息" class="box">
        <div>
          <span>姓名</span><span>:</span><span>江大河</span> <br>
          <span>性别</span><span>:</span><span>男</span> <br>
          <span>学历</span><span>:</span><span>大专 —— 十堰职业技术学院</span><br>
          <span class="space">毕业时间 ： 2012年</span><br>
          <span class="space">本科 —— 华中农业大学</span><br>
          <span class="space">毕业时间 ： 2019年</span>
        </div>
      </Box>
      <Box field-name="联系方式" class="box">
        <div class="svgWrapper">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-phone"></use>
            </svg>
            <span>:</span>
            <span>18142007566</span>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-email"></use>
            </svg>
            <span>:</span>
            <span>jiangdahe@outlook.com</span>
          </div>
        </div>
      </Box>
      <Experience v-show="choice" phone="true"/>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import Box from '@/components/Box.vue';
import Experience from '@/components/Experience.vue';

@Component({
  components: {Experience, Box}
})

export default class Aside extends Vue {
  @Prop() choice!: boolean;

  mounted() {
    // if (this.choice) {
    //   this.$nextTick(function () {
    //     document.getElementById('test')?.classList.add('newPhone');
    //     document.getElementById('test')?.classList.remove('asideWrapper');
    //   });
    // }
  }
}

</script>

<style lang='scss' scoped>
.asideWrapper {
  padding: 12px;

  > .base > .box > div > span {
    padding-right: 12px;
  }

  > .base > .box > div > .space {
    padding-left: 72px;
  }

  > .base > .pictureBox > .picture {
    background: no-repeat center/80% url("../../public/img/背景的副本.png");
    width: 13vw;
    height: 13vw;
    margin: 0 auto;
  }

  > .base > .box > div > div {
    display: flex;
    align-items: center;
    padding-top: 5px;

    > svg {
      width: 30px;
      height: 35px;
    }

    > span {
      margin-bottom: 5px;
      top: 6px;

    }

  }

  > .base > .box > .svgWrapper {
    padding: 5px;
  }
}

.icon {
  width: 2em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.newPhone {
  padding: 67px 1rem 0 1rem;

  > .base > .box > div > span {
    padding-right: 16px;
  }

  > .base > .box > .picture {
    margin-left: 20px;
  }

  > .base > .box > div > span:nth-child(13) {
    padding-left: 72px;
  }

  > .base > .box > div > span:nth-child(15) {
    padding-left: 72px;
  }

  > .base > .box > div > span:nth-child(17) {
    padding-left: 72px;
  }

  > .base > .pictureBox > .picture {
    background: no-repeat center/80% url("../../public/img/背景的副本.png");
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    margin: 0 auto;
  }

  > .base > .box > div > div {
    display: flex;
    align-items: center;
    padding-top: 5px;

    > svg {
      width: 30px;
      height: 25px;
      margin-right: 5px;
    }

    > span {
      font-size: 18px;
      margin-bottom: 5px;
      top: 6px;
      padding: 0 5px;

    }
  }

  > .base > .box > .svgWrapper {
    display: flex;
    flex-direction: column;

  }
}

</style>