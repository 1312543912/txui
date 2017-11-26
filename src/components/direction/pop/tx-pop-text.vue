<template lang="html">
	<div>
	<!-- <button @click="txvisible()" class="tx-button">12564</button> -->
    <txPop :position="position"  :popDirection="popDirection" :buttonValue="buttonValue">
   		<span>pop</span>
    </txPop>
    </div>
</template>

<script> 
import txPop from '@/components/direction/pop/tx-pop'
export default {
  name: '',
  data() {
  	return {
  		position: 'txMiddle', // 弹出框的位置，（txTop、txMiddle、txBottom）
  		buttonValue:'弹出up', // 点出弹出框的按钮上的文本
  		popDirection: 'down', // 弹出框出现的运动方式（toleft、toright、up、down），不给默认为down
  		//visible: false
  	}
  },
  components:{
    txPop
  },
  created(){
  	//console.log(this.position);
  	//console.log(this.visible);
  },
  methods: {
  	// txvisible(){
  	// 	console.log(this.visible);
  	// 	this.visible = true;
  	// }
  }
}
</script>

<style lang="css">
  
</style>