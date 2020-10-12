declare module 'vue-awesome-swiper' {
  import { Vue } from "vue/types/vue"
  import SwiperClass, { SwiperOptions } from 'swiper'
  import { PluginObject } from "vue"

  export const Swiper: SwiperClass

  export const install: PluginObject<SwiperOptions>

  export class Swiper extends Vue {
    swiper: SwiperClass
  }

  export class SwiperSlide extends Vue {}
}