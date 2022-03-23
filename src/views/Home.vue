<template>
  <div class="home">
    <!-- <el-row >
  <el-col :span="24"> <div class="banner">
        <div>   
            <el-carousel :interval="4000"  height="300px">
                <el-carousel-item v-for="item in imgList" :key="item.id">
                     <img :src="item.idView" class="image" width="100%" height="100%">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div></el-col>

</el-row> -->
    <el-row type="flex" justify="space-between" class="top-mian">
      <el-col :span="2"></el-col>
      <el-col :span="10">
        <div>
          <el-carousel :interval="4000" height="300px">
            <el-carousel-item v-for="item in imgList" :key="item.id">
              <img
                :src="item.idView"
                class="image"
                width="100%"
                height="100%"
              />
            </el-carousel-item>
          </el-carousel></div
      ></el-col>
      <el-col :span="10">
        <el-row>
          <el-col :span="24"><h1>MOVE_ONLINE</h1></el-col></el-row
        >
        <el-row>
          <el-col :span="24"
            ><div>
              <p align="left">
                通过市场研究和客户需求分析，不断完善收费标准，透明的报价，与优质服务相结合，以口碑赢得客户信赖,通过市场研究和客户需求分析，不断完善收费标准，透明的报价，与优质服务相结合，以口碑赢得客户信赖通过市场研究和客户需求分析，不断完善收费标准，透明的报价，与优质服务相结合，以口碑赢得客户信赖
              </p>
            </div></el-col
          ></el-row
        >
        <el-row class="margin-top-20"
          ><el-col :span="8"> <el-button round>普通搬家</el-button></el-col>
          <el-col :span="8"> <el-button round>企业搬家</el-button></el-col>
          <el-col :span="8"> <el-button round>日式搬家</el-button></el-col>
        </el-row>
      </el-col>

      <el-col :span="2"></el-col>
    </el-row>

  <div class="margin-top-100"><h1>我们的优势</h1></div>
    <el-row class="margin-top-20" type="flex" justify="center" :gutter="12"
      ><el-col :span="2"> </el-col>
      <el-col :span="4"> <el-card shadow="hover"> <span>报价透明</span></el-card></el-col>
      <el-col :span="4"> <el-card shadow="hover">  <span>服务齐全</span></el-card></el-col>
      <el-col :span="4"> <el-card shadow="hover">  <span>定制服务</span></el-card></el-col>
      <el-col :span="4"> <el-card shadow="hover"> <span>快速高效</span></el-card></el-col>
      <el-col :span="4"> <el-card shadow="hover"><span>损坏包赔</span></el-card></el-col>
      <el-col :span="2"> </el-col>
    </el-row>

     <div class="margin-top-100"><h1>多元化服务</h1></div>
    <el-row class="margin-top-20" type="flex" justify="center" :gutter="12"
      ><el-col :span="2"> </el-col>
      <el-col :span="4"> <el-card shadow="hover"> 卡片 </el-card></el-col>
      <el-col :span="4"> <el-card shadow="hover"> 卡片 </el-card></el-col>
      <el-col :span="4"> <el-card shadow="hover"> 卡片 </el-card></el-col>
      <el-col :span="4"> <el-card shadow="hover"> 卡片 </el-card></el-col>
      <el-col :span="4"> <el-card shadow="hover"> 卡片 </el-card></el-col>
      <el-col :span="2"> </el-col>
    </el-row>
  </div>


  
</template>


<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      imgList: [
        {
          id: 0,
          idView: "https://s3.bmp.ovh/imgs/2022/03/749b345b662ab96ss6.jpg",
        },
        {
          id: 1,
          idView: "https://s3.bmp.ovh/imgs/2022/03/749b345bss662ab966.jpg",
        },
        {
          id: 2,
          idView: "https://s3.bmp.ovh/imgs/2022/03/749b345bss662ab966.jpg",
        },
        {
          id: 3,
          idView: "https://s3.bmp.ovh/imgs/2022/03/749bs345b662ab966.jpg",
        },
      ],
    };
  },
  methods: {},
};
</script>


<style>
.top-mian {
  margin-top: 60px;
}

.margin-top-20 {
  margin-top: 20px;
}
.margin-top-30 {
  margin-top: 30px;
}
.margin-top-10 {
  margin-top: 10px;
}
.margin-top-100 {
  margin-top: 100px;
}
.margin-left-30 {
  margin-left: 30px;
}

.margin-left-20 {
  margin-left: 20px;
}
.margin-left-10 {
  margin-left: 10px;
}
</style>
