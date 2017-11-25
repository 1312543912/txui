import  Vue from 'vue'
import  txmessagebox from  '@/components/direction/messagebox/tx-messagebox'
let MessageBox = Vue.extend(txmessagebox);
let instance;
//生成组件
instance = new MessageBox({
})
var message = function(options){
  console.log(options);
  instance.message = options;
  // if(typeof options === 'string'){
  //   options = {
  //     message: options
  //   }
  // }
  //组件需要挂载在dom元素上
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  return instance.vm;
}
//message中alert事件
message.alert = function (value,callback) {
    instance.title = value.title;
    instance.message = value.message;
    instance.flagButton = value.showButton;
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    instance.callback = callback;
    return instance.vm;
}
export  default  message;
