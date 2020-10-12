<template>
  <swiper v-if="choice==='a'" ref="mySwiper" :options="swiperOptions" class="swiper-container swiper-pagination1">
    <swiper-slide class="swiper-slide">
      <img src="../assets/images/9.png" alt="">
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <img src="../assets/images/8.png" alt="">
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <img src="../assets/images/7.png" alt="">
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <img src="../assets/images/6.png" alt="">
    </swiper-slide>
    <swiper-slide class="swiper-slide">
      <img src="../assets/images/5.png" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination" ></div>
  </swiper>
</template>

<script lang="js">
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'SwiperTest',
  props:['choice'],
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination1',
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(0, 1000, false)
  }
}
</script>

<style lang="scss">
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