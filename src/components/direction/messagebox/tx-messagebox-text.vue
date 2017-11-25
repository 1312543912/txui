<template>
  <div>

  </div>
</template>
<script>
      import messagebox from '@/components/direction/messagebox/messagebox'
      export  default {
        created(){
          messagebox.alert({
            title:"这是标题11",
            message:"这是提示框，您操作成功",
            showButton:true
          },function () {
               console.log("执行alert的回掉函数");
          });
        }
      }
</script>
<style scoped>

</style>
