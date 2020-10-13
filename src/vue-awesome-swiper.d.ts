declare module 'vue-awesome-swiper' {
  import { Vue } from "vue/types/vue"
  import SwiperClass, { SwiperOptions } from 'swiper'
  import { PluginObject } from "vue"

  export const Swiper: SwiperClass

  export const install: PluginObject<SwiperOptions>

  export class swiper extends Vue {
    swiper: SwiperClass
  }
  export class swiperSlide extends Vue {}
}