<template>
        <div>
            <button>fsfdsafsa</button>
            <p>afsdfasf</p>
            <p>afsdfasf</p>
            <p>afsdfasf</p>
            <p>afsdfasf</p>
            <button @click="showaction">点击actionsheet</button>
            <txActionSheet :actions="data"  v-show="sheetVisiable"></txActionSheet>
        </div>
</template>

<script>
      import txActionSheet from '@/components/direction/ActionSheet/tx-actionsheet'
      export  default {
        data(){
          return {
            sheetVisiable:false,
            data:[
              {canclebtn:true,allclick:true},
              {title:"相册",method:this.clickXiangce},
              {title:"拍照",method:this.clickPaiZhao}
            ]
          }
        },
        methods:{
          clickXiangce(){
              console.log("clickXiangce");
              this.sheetVisiable = false;
          },
          clickPaiZhao(){
              console.log("clickPaiZhao");
            this.sheetVisiable = false;
          },
          showaction(){
            this.sheetVisiable = true;
          }
        },
        components:{
          txActionSheet
        }
      }
</script>

<style>

</style>
