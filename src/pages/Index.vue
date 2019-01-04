<template>
<div class='app'>
  <div class='section'>
    <Upload/>
  <CityPicker/>
  </div>
    <footer class='footer'> <span>实付<b>￥399</b></span><span id='payment'>立即支付</span></footer>
  </div>
</template>

<script>
import Upload from '@/components/Upload';
import CityPicker from '@/components/cityPicker';
export default {
    data(){
    return {
    }
  },
  components: {
    Upload,
    CityPicker
  }
}
</script>
<style lang="">
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
body,html{
    width:100%;
    height:100%;
    overflow:hidden;
}
.app {
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.section{
  flex:1;
  overflow-y:scroll;
}
.footer{
  width:100%;
  height:40px;
  line-height:40px;
  display:flex;
  padding: 0 10px;
  justify-content: space-between;
}
.footer  span b{
    color:#F84642; 
}
.footer #payment{
    width: 30%;
    text-align: center;
    color:  #fff;
    background:#999999;
}

</style>
