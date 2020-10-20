<template>
  <div id="app">
    <Layout :choice="phone" >
      <div v-if="phone" class="phoneWrapper">
        <Aside :choice="phone"/>
      </div>
      <div v-else class="wrapper">
        <Aside class="aside"/>
        <Experience class="experience"/>
      </div>
    </Layout>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  width: 100vw;
}

@import "reset";
.wrapper {

  > .aside {
    width: 32%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    min-height: 100vh;
    position: fixed;
    top: 58px;
    left: 0;

  }

  > .experience {
    border-left: 2px solid rgba(168, 167, 161, 0.91);
    max-width: 60%;
    margin-left: 32vw;
    margin-top: 58px;
    padding-right: 11vw;
  }
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
import Layout from '@/components/Layout.vue';

@Component({
  components: {Layout, Experience, Aside}
})
export default class App extends Vue {
  phone = true;
  screenWidth = document.body.clientWidth;

  mounted() {
    if (this.screenWidth > 800) {
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