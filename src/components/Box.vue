<template>
  <div class="box-wrapper">
    <span class="title">{{ this.fieldName }}</span>
    <slot/>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Box extends Vue {
  @Prop() fieldName?: string;
}
</script>

<style lang='scss' scoped>
.box-wrapper {
  border-bottom: 2px solid gray;
  display: flex;
  flex-direction: column;
  padding: 16px 0;

  & > .title {
    font-size: 20px;
    color:#45A3DE;
    font-family: Impact, Charcoal, sans-serif;
    font-weight: bolder;
    padding-bottom: 8px;
  }
}

.box-wrapper:nth-child(1) {
  padding: 0 0 16px 0;
}

</style>