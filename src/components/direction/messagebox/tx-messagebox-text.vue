<template>
  <div>
     <div>
       <button @click="alert()">alert()</button>
     </div>
    <div>
      <button @click="confirm()">confirm()</button>
    </div>
    <div>
      <button @click="prompt()">prompt()</button>
    </div>
  </div>
</template>
<script>
      import messagebox from '@/components/direction/messagebox/messagebox'
      export  default {
        created(){

        },
        methods:{
          alert(){
               messagebox.alert({
                  title:"这是标题alert",
                  message:"您操作成功",
                },function () {
                     console.log("执行alert的回掉函数");
               });
          },
          confirm(){
            console.log("text-confirm");
            messagebox.confirm({
              title:"这是标题confirm",
              message:"您操作成功",
            },function (value) {
              console.log("执行confirm的回掉函数"+value);
            });
          },
          prompt(){
            messagebox.prompt({
              title:"这是标题prompt",
              placeholder:"请输入",
              type:'text',
              value:"",
            },function (value,flag) {
              console.log(flag);
              console.log(value);
            })
          }
        }

      }
</script>
<style scoped>

</style>
