<template lang="html">
    <div class="pop">
        <button @click="popVisible()" class="tx-button">{{btnValue}}</button>

        <div v-show="txVisibility" @click="popCancel()" class="middle-tem">
          <div class="tx-promote" :class="classValue">
            <!-- <div class="top-triangle"></div> -->
              <div @click.stop="popVisible()" class="middle-reminder">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
        <!-- <slot></slot>  -->
    </div>
</template>

<script>
export default {
  name: '',
  props: ['position','popDirection','buttonValue'],
  data() {
    return{
      txVisibility: false,
      classValue: this.position,
      btnValue: this.buttonValue,
      popDirect: this.popDirection
    }
  },
  methods: {
    popVisible(){
       this.txVisibility = true;
    },
    popCancel(){
      this.txVisibility = false;
    }
  },
  created(){
    console.log(this.txVisibility);
  },
  mounted(){
    var txPro=document.querySelector('.tx-promote');
    console.log(this.popDirect);
    if(this.popDirect == "toleft"){
      txPro.style.animation = 'toleft 0.4s linear';
    }else if(this.popDirect == "up"){
      txPro.style.animation = 'up 0.4s linear';
    }else if(this.popDirect == "toright"){
      txPro.style.animation = 'toright 0.4s linear';
    }else{
      txPro.style.animation = 'down 0.4s linear';
    }
  }
}
</script>

<style lang="css">
  *{
    margin: 0;
    padding: 0;
  }
  .pop{
    /*text-align: center;*/
    margin: 0 12px;
    margin-top: 175px;
  }
  .tx-button{
    width: 100%;
    height: 50px;
    color: #656b79;
    background-color: #f6f8fa;
    border: none;
    box-shadow: 0 0 1px #b8bbbf;
    margin-bottom: 20px;
    padding: 0 8px;
    font-size: 20px;
  }
  .middle-tem{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0,0,0,.4);
    
  }
  .tx-promote{
    margin-left: 25%;
    /*margin-top: 50%;*/
    animation: down 0.4s linear;
    /*animation: up 0.4s linear;
    animation: toright 0.4s linear;
    animation: toleft 0.4s linear;*/
  }
  @keyframes down{
    from{
      margin-top: -100%;
    }
    /*to{
      margin-top: 50%;
    }*/
  }
  @keyframes up{
    from{
      margin-top: 200%;
    }
  }
  @keyframes toright{
    from{
      margin-left: -100%;
      /*margin-top: 55%;*/
    }
  }
  @keyframes toleft{
    from{
      margin-left: 200%;
      /*margin-top: 55%;*/
    }
  }

  /*.top-triangle{
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom:15px solid #fff;
    
    margin-left: 60%;
    
  }*/
  .middle-reminder{
    position: relative; 
    width: 200px;
    height: 200px;
    border-radius: 10px;
    background-color: #fff;
    /*margin-left: 25%;*/
    /*top: 103%; */
  }
  .middle-reminder>p{
    color: blue;
    font-size: 20px;
    padding: 10px 0 0 10px;
  }
  .middle-reminder>span{
    padding: 15px 0 0 10px;
  }
  .txTop{
    margin-top: 1%;
  }
  .txMiddle{
    margin-top: 50%;
  }
  .txBottom{
    margin-top: 124%;
  }
</style>