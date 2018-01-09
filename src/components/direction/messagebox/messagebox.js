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
    instance.alertShow = true;
    instance.show = true;
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    instance.callback = callback;
    return instance.vm;
}
//message中confirm事件
message.confirm = function (value,callback) {
  instance.title = value.title;
  instance.message = value.message;
  instance.messageShow = true;
  instance.show = true;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.callback = callback;
  return instance.vm;
}
//message中prompt事件
message.prompt = function (value,callback) {
  instance.title = value.title;
  instance.placeholder = value.placeholder;
  instance.type = value.type;
  instance.value = value.value;
  instance.oldvalue = value.value;
  instance.promptShow = true;
  instance.show = true;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.callback = callback;
  return instance.vm;
}
export  default  message;
