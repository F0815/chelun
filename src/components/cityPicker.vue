<template>
    <div>
    <ul>
        <li @click='cityclick'>
            <span>当前驾照签发城市</span>
            <span ></span>
        </li>
        <li>
          <span>可补换的签发城市</span>
           <span>请选择补换地</span>
        </li>
    </ul>
    <section>
    <van-popup v-model="showCity" position='bottom'>
     <van-picker :columns="columns" title='选择签发城市' ref='cityPicker'
        @change='citychange' @cancel='cancel' @confirm='confirm' show-toolbar/>
    </van-popup>
    </section>
    </div>
</template>

<script>
import  {mapState,mapActions} from 'vuex'
export default {
    data(){
     return{
         //控制当前驾照
       showCity:false,
        //控制当前驾照
       showCost:false,
       columns:[]
      }
    },
    created() {
      this.getList().then(res=>{
       this.columns=[{
          values: this.cityList.map(item=>item.name)
        },{
          values: this.cityList[0].list.map(item=>item.name)
        }]
      })
    },
    computed:{
      ...mapState({
       cityList:state=>state.cityPicker.cityList
      })
    },
    methods: {
     ...mapActions({
      getList:'cityPicker/getCityList'
     }),
     cityclick(){
          this.showCity=true
     },
     citychange(picker,values){
         let index=this.cityList.findIndex(item=>item.name==values[0]);

         this.$refs.cityPicker.setColumnValues(1,this.cityList[index].list.map(item=>item.name));
     },
     cancel(){
          this.showCity=false
     },
     confirm(values){
     console.log(values)
          this.cancel()
     }
    }
}

</script>