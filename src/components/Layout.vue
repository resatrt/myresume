<template>
  <div class="layoutWrapper">
    <h1 :class="choice ? 'iphone ' : 'pc'">个人简历</h1>
    <slot/>
  </div>

</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Layout extends Vue {
  @Prop() choice!: true;
}
</script>

<style lang='scss' scoped>
.pc {
  text-align: center;
  padding: 8px 0 0 0;
  background: #d4d3d1;
  z-index: 100;
  overflow: hidden;
  color: #45A3DE;
  position: fixed;
  width: 100%;

}

.iphone {
  text-align: center;
  padding: 8px 0;
  background: #d4d3d1;
  overflow: hidden;
  color: #45A3DE;
  position: fixed;
  width: 100%;
  z-index: 100;
}

.layoutWrapper {
  display: flex;
  flex-direction: column;
}
</style>