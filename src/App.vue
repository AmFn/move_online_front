<template>
  <div id="app">
    <el-header>
      
    <el-menu
      :default-active="this.$route.path"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      router
      background-color="#fff"
      text-color="#333"
      active-text-color="#0084ff"
    >

      <el-menu-item>   <img src="https://s3.bmp.ovh/imgs/2022/03/c84e1643110f6b6f.png" class="image" width="100%" height="100%"></el-menu-item>
     
      <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name" style="float:right">

        
        <template slot="title">
          <span> {{ item.navItem }}</span>
        </template>
      </el-menu-item>


    </el-menu>
    </el-header>



    <el-main class="detailed-content">

      <router-view />
    </el-main>
  </div>
</template>


<script>
export default {
  data() {
    return {
      navList: [
        { name: "/", navItem: "首页" },
        { name: "/enquiry", navItem: "一键询价" },

        { name: "/aftermarket", navItem: "售后服务" },
        { name: "/about", navItem: "联系我们" },
      ],
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
