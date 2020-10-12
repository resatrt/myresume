<template>
  <div id="app">
    <h1>个人简历</h1>
    <div v-if="phone" class="phoneWrapper">
      <Aside :choice="phone"/>
    </div>
    <div v-else class="wrapper">
      <Aside class="aside"/>
      <Experience class="experience"/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
}

@import "reset";
.wrapper {
  display: flex;
  //flex-shrink: 1;
  & > .aside {
    width: 27vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    min-height: 100vh;
    overflow: scroll;
  }

  & > .experience {
    border-left: 2px solid rgba(168, 167, 161, 0.91);
    width: 73vw;
  }
}

h1 {
  text-align: center;
  padding: 8px 0 0 0;
}

.phoneWrapper {
  width: 100vw;
  height: 100vh;
}


</style>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Aside from '@/components/Aside.vue';
import Experience from '@/components/Experience.vue';


@Component({
  components: {Experience, Aside}
})
export default class App extends Vue {
  phone = true;
  screenWidth = document.body.clientWidth;

  mounted() {
    if (this.screenWidth > 500) {
      this.phone = false;
    }

    window.onresize = () => {
      return (() => {
        this.screenWidth = document.body.clientWidth;
      })();
    };
  }
}
</script>