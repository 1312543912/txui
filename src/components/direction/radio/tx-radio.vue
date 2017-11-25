<template>
    <div>
      <div v-if="options[0]" class="radio-title">{{options[0].title}}</div>
      <div v-for="(option,index) in options" v-if="index!=0" class="radio-content" @click="changeSel(option.value,option.disabled)">
        <span class="raido-input"   :class="{'radio-disable':option.disabled,'radio-default':option.value==options[0].selected}" :value="option.value" :name="options[0].name">
              <span class="radio-selected"  v-show="option.value==options[0].selected"></span>
        </span>
        <span class="radio-label">{{option.label}}</span>
      </div>
    </div>

</template>

<script>
       export  default {
         name:"",
         props:{
           title:Array,
           options:{
             type:Array,
             required:true
           }
         },
         methods:{
           changeSel(value,flag){
             if(!flag){
               this.options[0].selected = value;
               this.currentValue = value;
               this.$emit('change',this.currentValue,this.options[0].name);
             }
           }
         }
         ,
         data(){
           return {
             option:"",
             currentValue:''
           }
         },
       }

</script>

<style scoped>
        .radio-title{
          margin: 12px;
          font-size: 12px;
          color: rgb(136,136,136);
          font-family: "Helvetica Neue",Helvetica,STHeiTi,Arial,sans-serif;
        }
        .radio-disable{
          background-color: rgb(204,204,204) !important;
        }
        .radio-content{
          display: flex;
          align-items: center;
          height: 48px;
          background-color: #ffffff;
          padding: 0 8px;
          box-sizing: border-box;
          border-bottom: 1px solid rgb(217,217,217);
        }
        .radio-label{
          margin-left: 12px;
        }
        .raido-input{
          height: 20px;
          width: 20px;
          border-radius: 10px;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ccc;
        }
        .radio-default{
          background-color: deepskyblue;
        }
        .radio-selected{
          background-color: #ffffff;
          animation:mymove 0.1s ease-in forwards;
          -webkit-animation:mymove 0.1s ease-in forwards; /* Safari 和 Chrome */
        }
        @keyframes mymove
        {
          from {
            width: 0px;
            height: 0px;
            border-radius: 0px;
          }
          50%{
            width: 4px;
            height: 4px;
            border-radius: 50%;
          }
          to {
            width: 8px;
            height: 8px;
            border-radius: 4px;
          }
        }
</style>
