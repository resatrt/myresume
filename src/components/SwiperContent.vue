<template>
  <swiper v-if="choice==='a'" :options="swiperOption1" class="swiper-container " ref="mySwiper">
    <swiper-slide class="swiper-slide">
      <img src="../assets/images/1.png" alt="图片">
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <img src="../assets/images/3.png" alt="图片2">
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <img src="../assets/images/2.png" alt="图片3">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <swiper v-else-if="choice==='b'" :options="swiperOption2" class="swiper-container " ref="mySwiper">
    <swiper-slide class="swiper-slide">
      <img src="../assets/images/4.png" alt="图片">
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <img src="../assets/images/5.png" alt="图片2">
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <img src="../assets/images/6.png" alt="图片3">
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <img src="../assets/images/7.png" alt="图片4">
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <img src="../assets/images/8.png" alt="图片5">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script lang='js'>

import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    swiper,
    swiperSlide
  },
  props: ['choice'],

  data() {
    return {
      swiperOption1: {
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
        }
      },
      swiperOption2: {
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
        }
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper);
    this.swiper.slideTo(0, 1000, false)
  }
}
</script>

<style lang="scss">
.my-bullet {
  width: 1.3rem;
  height: 1.3rem;
  display: inline-block;
  border-radius: 50%;
  background: #B7B6B9;

  &:nth-child(2n) {
    margin: 0 2rem;
  }
}

.my-bullet-active {
  background: #FD882E;
}
</style>

<style lang='scss' scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: 100vw;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;

  > img {
    max-width: 100%;
  }


}


</style>