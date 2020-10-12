<template>
  <swiper v-if="choice==='a'" :options="swiperOption1" class="swiper-container swiper-pagination1" ref="mySwiper">
    <swiper-slide class="swiper-slide">
      <img src="../assets/images/1.png" alt="图片">
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <img src="../assets/images/3.png" alt="图片2">
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <img src="../assets/images/2.png" alt="图片3">
    </swiper-slide>
  </swiper>
  <swiper v-else-if="choice==='b'" :options="swiperOption2" class="swiper-container swiper-pagination2" ref="mySwiper">
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
  </swiper>
</template>

<script lang='js'>

import {Swiper, SwiperSlide} from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: ['choice'],

  data() {
    return {
      swiperOption1: {
        pagination: '.swiper-pagination1',
        // Some Swiper option/callback...

      },
      swiperOption2: {
        pagination: '.swiper-pagination1',
        // Some Swiper option/callback...

      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // console.log('Current Swiper instance object', this.swiper);
    this.swiper.slideTo(0, 1000, false);
  }
};
</script>

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