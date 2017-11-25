<template>
   <div>
       <txRadio  :options="options"   @change="change"></txRadio>
       <txRadio  :options="options1"   @change="change"></txRadio>
   </div>
</template>

<script>
       import  txRadio from '@/components/direction/radio/tx-radio'
       export  default {
         name:"",
         components:{
           txRadio
         },
         methods:{
           change(now,name){
             console.log(now);
             console.log(name);
           }
         },
         data(){
           return {
             options1:[
               {
                 title:"性别",
                 name:"sexgroup1",
                 selected:"woman"
               },
               {
                 label: '男',
                 value: 'man',
                 disabled: true
               },
               {
                 label: '女',
                 value: 'woman'
               },
               {
                 label: '不确定',
                 value: 'no'
               }
             ],
             options : [
              {
                 title:"性别",
                 name:"sexgroup",
                 selected:"woman"
              },
             {
               label: '男',
               value: 'man',
               disabled: true
             },
             {
               label: '女',
               value: 'woman'
             },
             {
               label: '不确定',
               value: 'no'
             }
           ]
           }
         },
         watch:{
           select(nV,oV){
             console.log(nV);
             console.log(oV);
           }
         }
         ,
         directives:{
             option:{
               inserted:function (el,binding) {
//                 console.log(binding.value);
                 console.log(el);
                 console.log(binding.value);
               }
             }
         }
       }

</script>

<style scoped>

</style>
