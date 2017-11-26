# pop

> txui is by spring team

### pop使用方法

1、首先，引入pop组件，如：

import txPop from '@/components/direction/pop/tx-pop'



2、注册组件，如：

```vue
components:{
	txPop
}
```


3、引用，在template标签中写入，如：

```vue
<txPop  :position="position" :buttonValue="buttonValue" :popDirection="popDirection">
   	<span>14532637</span>
	...
</txPop>
```



4、在data中设置：

```vue
data() {
  	return {
  		position: 'txTop', // 弹出框的位置，（txTop、txMiddle、txBottom）
  		buttonValue:'弹出up', // 点出弹出框的按钮上的文本
  		popDirection: 'toleft'// 弹出框出现的运动方式（toleft、toright、up、down），不给默认为down 
  		
  	}
  }
```
   		

