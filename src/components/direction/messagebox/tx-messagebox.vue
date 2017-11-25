<template>
     <div v-show="show">
          <p>{{title}}</p>
          <p>{{message}}</p>
          <p>{{flagButton}}</p>
          <button @click="messageAlert()">确定</button>
     </div>
</template>
<script>
     export  default {
        data(){
          return {
            title:"",
            message:"",
            flagButton:true,

            show:true,
            callback:null
          }
        },
       mounted(){
       },
       methods:{
         messageAlert(){
           this.show = false;
           var callback = this.callback;
           callback();
         }
       }
     }
</script>
<style scoped>

</style>
