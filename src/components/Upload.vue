<template>
<div class='section'>
     <ul class='list'>
        <li>订单提交</li>
        <li>填写收货地址</li>
        <li>正在办理</li>
        <li>办理完成</li>
     </ul>
    <div class='box'>
       <p>已有<span>26534</span>个用户在车轮补换驾照成功</p>
       <ul class='list1'>
        <li>官方发证</li>
        <li>业内低价</li>
        <li>足不出户</li>
     </ul>
   </div>
  <ul class='lis'>
    <li v-for="(item, index) in list" :key="index" @click="click(item)">
      <img v-if="item.src" :src="item.src">
      <img v-else class="add" :src="addImg">
      <p>{{item.desc}}</p>
    </li>
    <div v-show="showMask" class="mask">
      <img :src="current.demo">
      <div>
        <button @click="upload(1)">拍照</button>
        <button @click="upload(2)">相册</button>
        <button @click="cancels">取消</button>
      </div>
    </div>
  </ul>
  
    <ul class='lists'>
        <li><span>服务类型</span><span  @click='spans'>{{names}}</span></li>
    
        <li><span>服务费</span><span id='span'>￥399</span></li>
        <li><span>优惠</span><span>登录后查看优惠></span></li>
        <p class='p'><u>常见问题?</u>    <img class='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EQ5iDY47z30ON46MojOBYX61V7gtP1Bz6Z8G9PLU9mis-9tF7A'></p>
     </ul>
     <div>
    <van-popup v-model="popuoshow" position="bottom">
      <van-picker :columns="columns" @cancel="cancel"  @confirm='confirm' show-toolbar />
    </van-popup>
     </div>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
import add from '@/assets/add.png'
import axios  from 'axios'
import {uploadImg} from '@/api/index'
export default {
  data(){
    return {
      current: {},
      showMask: false,
      columns: ['换驾照', '补驾照'],
      typeArray:[],
      popuoshow:false,
      names:"换驾照"
    }
  },
  computed: {
    ...mapState({
      list: state=>state.upload.list
    }),
    addImg(){
      return add;
    }
  },
  methods: {
    ...mapMutations({
      updateList: 'upload/updateList'
    }),
    click(item){
      this.current = item;
      this.showMask = true;
    },
    cancels(){
      this.showMask = false;
    },
    async upload(type){
      let res = await uploadImg(type);
      let index = this.list.findIndex(item=>item==this.current);
      console.log('index...', index);
      this.updateList({
        index,
        // src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0Y2n2xn9ITpxCjsgTlzrrQBHCgotxO3R-yBGqkG9TJjAhkxH_w",
        src: res.data.url
      })
      this.showMask = false;
    },
    confirm(value){
      this.popuoshow=false;
      this.names=value;
    },
    cancel(){
      this.popuoshow=false;
    },
    spans(){
      this.popuoshow=true;
    }
  }
}
</script>

<style lang="scss" scoped>
.list{
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-around;
    list-style: none;
    display: flex;
}
.list li{
    flex: 1;
    font-size: 14px;
    text-align: center;
    color: #3AAFFE;
}
.box{
    width: 100%;
    height: 120px;
    background: #FEE741;
    text-align: center;
}
.box p{
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #F8641E;
    padding-top: 10px;
    background: #FEE741;
}
.box p span{
    font-size: 22px;
}
.list1{
    width: 80%;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-around;
    list-style: none;
    display: flex;
    background: #FD6A02;
    margin: 10px auto;
    border-radius: 20px;
}
.list1 li{
    flex: 1;
    font-size: 14px;
    text-align: center;
    color: #EEFF00;
}

.lis{
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: space-around;
}
.lis li{
    flex: 1;
    text-align: center;
    margin-top: 6px;
  img{
    border-radius: 10px;
    width: 40px;
    height:  40px;
    border: 1px solid #c0c0c0;
  }
  p{
  font-size:14px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    margin-bottom: 10px;
    background: #fff;
    color:#c0c0c0;
  }
}
.add{
  width: 10px;
  height:  10px;
  padding: 4px;
}
.mask{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, .5);
  display: flex;
  z-index:999;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  img{
    width: 90%;
    margin-top: 20%;
  }
  div{
    display: flex;
    width: 90%;
    flex-direction: column;
    align-items: center;

    button{
      width: 100%;
      height: 40px;
      font-size: 12px;
      letter-spacing: .1rem;
      border-radius: 10px;
      color: #3aafc0;
    }
    button:first-child{
      border-radius: 10px;
      margin: 4px 0;
    }
    button:nth-child(2){
      border-radius:10px;
          margin: 4px 0;
    }
    button:last-child{
      margin: 4px 0;
    }
  }
}
.lists{
    width: 100%;
    margin-top:6px;
}
.lists li{
    height: 50px;
    color: #595D60;
    line-height: 50px;
    border-bottom: 1px  solid #ccc;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
}
.lists li span:nth-child(2){
    color: #A9A9A9;
}
#span{
    color: #E34F4B;
}
p{
    width: 100%;
    height: 96px;
    line-height: 96px;
    text-align: center;
    color:  #3AAFFE;
    position: relative;
    background: #EEEEEE;
}
.img{
    width: 60px;
    height: 60px;
    position: absolute;
    right: 10px;
}
</style>