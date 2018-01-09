<template>
    <div class="tx-actionsheet">
        <div class="tx-acctionsheet-array">
              <ul class="tx-acctionsheetul" v-for="(item,index) in actions" v-if="index!=0">
                 <li class="tx-acctionsheetli" @click="emitMethod(item.method)">{{item.title}}</li>
              </ul>
              <a v-show="cancelShow" class="tx-acctionsheeta">取消</a>
        </div>
        <div class="tx-actionsheet-modal">

        </div>
    </div>
</template>

<script>
      export  default {
        props:{
          actions:{
            type:Array,
            required:true
          }
        },
        mounted(){
          this.cancelShow = this.actions[0].canclebtn;
        },
        methods:{
          emitMethod(methodname){
            methodname();
          }
        },
        data(){
          return {
            cancelShow:false
          }
        }
      }
</script>

<style>
     .tx-actionsheet-modal{
       z-index:2020;
       position: fixed;
       left:0;
       top:0;
       width: 100%;
       height: 100%;
       opacity: .5;
       background: #000;
     }
      .tx-acctionsheet-array{
        position: fixed;
        z-index:2021;
        bottom: 0;
        width: 100%;
        margin:0px;
        background-color: #e0e0e0;
      }
      .tx-acctionsheetul{
        margin: 0px;
        padding: 0px;
        list-style: none;
        width: 100%;
        background-color: #fff;
      }
      .tx-acctionsheetli{
        display: block;
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size:18px;
        color: #333;
        background-color: #fff;
        border-bottom: 1px solid #e0e0e0;
        text-align: center;
        font-family: Helvetica Neue,Helvetica,STHeiTi,Arial,sans-serif;
      }
      .tx-acctionsheeta{
        display: block;
        width: 100%;
        height: 45px;
        line-height: 45px;
        font-size: 18px;
        color: #333;
        background-color: #fff;
        text-align: center;
        margin-top: 6px;
      }
</style>
