<template>
  <div class="about">
    <h1>banners</h1>
  </div>
</template>
<script>
export default {
 
  mounted(){
    this. getdata()
  },
  methods: {
    getdata(){
      this.rq.requests.get('/app/address/search_address').then(res=>{
    console.log(res)
})

    }
  },
}
</script>