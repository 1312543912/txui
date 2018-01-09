<template>
     <div v-show="show" class="tx-message">
        <!--alert展示控制-->
        <div v-show="alertShow" class="tx-message-content">
          <p class="tx-message-title">{{title}}</p>
          <div class="tx-message-message">
            <p>{{message}}</p>
          </div>
          <div class="tx-message-btn">
            <!--<p>{{flagButton}}</p>-->
            <button @click="messageAlert()">确定</button>
          </div>
        </div>
        <!--confirm展示控制-->
        <div v-show="messageShow" class="tx-message-content">
          <p class="tx-message-title">{{title}}</p>
          <div class="tx-message-message">
            <p>{{message}}</p>
          </div>
          <div class="tx-message-btn">
            <button class="cancel" @click="messageCancel">取消</button>
            <button class="confirm" @click="messageConfirm">确定</button>
          </div>
        </div>
        <!--promp展示控制-->
        <div v-show="promptShow" class="tx-message-content">
          <p class="tx-message-title">{{title}}</p>
          <div class="tx-message-message">
             <input :type="type"  v-model="value" :placeholder="placeholder"/>
          </div>
          <div class="tx-message-btn">
            <button class="cancel" @click="promptCancel">取消</button>
            <button class="confirm" @click="promptConfirm">确定</button>
          </div>
        </div>
    </div>
</template>
<script>
     export  default {
        data(){
          return {
            title:"",
            message:"",
            //为prompt提供的参数
            placeholder:"",
            type:"text",
            value:"",
            oldvalue:"",
            //
            flagButton:true,
            //展示最大的显示div
            show:true,
            //alert展示控制
            alertShow:false,
            //message展示控制
            messageShow:false,
            //promp展示控制
            promptShow:false,
            //回掉函数控制
            callback:null
          }
        },
       created(){
          console.log("tx-messagebox");
         this.show = true;
       },
       mounted(){
       },
       methods:{
         messageAlert(){
           this.show = false;
           this.alertShow = false;
           var callback = this.callback;
           callback();
         },
         messageCancel(){
           this.show = false;
           this.messageShow = false;
           var callback = this.callback;
           callback("false");
         },
         messageConfirm(){
           this.show = false;
           this.messageShow = false;
           var callback = this.callback;
           callback("true");
         },
         promptCancel(){
           this.show = false;
           this.promptShow = false;
           var callback = this.callback;
           callback(this.oldvalue,false);
         },
         promptConfirm(){
           this.show = false;
           this.promptShow = false;
           var callback = this.callback;
           callback(this.value,true);
         }
       }
     }
</script>
<style scoped>
        .tx-message{
          z-index : 2018;
          position: fixed;
          left: 0;
          top:0;
          width:100%;
          height: 100%;
          opacity: .5;
          background: #000;
        }
        .tx-message-content{
          position: fixed;
          top:50%;
          left: 50%;
          transform: translate3d(-50%,-50%,0);
          background-color: #fff;
          width: 85%;
          border-radius: 6px;
          font-size: 16px;
          overflow: hidden;
          backface-visibility: hidden;
          transition: .2s;
        }
        .tx-message-message{
          color: #999;
          margin: 0;
          text-align: center;
          line-height: 36px;
          border-bottom: 1px solid #ddd;
        }
        .tx-message-title{
          text-align: center;
          font-size: 16px;
          font-weight: 700;
          color: #333;
        }
        .tx-message-btn{
          display: flex;
          height: 40px;
          line-height: 40px;
        }
        .tx-message-btn >button{
          line-height: 35px;
          display: block;
          background-color: #fff;
          -webkit-box-flex: 1;
          flex: 1;
          margin:0;
          border:0;
          color: #26a2ff;
          font-size: 16px;
        }
        .tx-message-btn .cancel{
          color: black;
          border-right: 1px solid #ddd;
        }
        .tx-message-message input{
          border: 1px solid #dedede;
          border-radius: 5px;
          height: 20px;
          padding: 4px 5px;
          width: 70%;
          -webkit-appearance: none;
          outline: none;
          margin: 20px 0;
        }
</style>
