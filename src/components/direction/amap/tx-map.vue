<template>
      <div id="mainContent">
            <div class="top">
                  <p class="topTitle">场站资源</p>
                  <p class="topSpecial">TERMINA_RESOURCES</p>
            </div>
            <div class="middleContent">
                  <div class="middleLeft">
                        <div class="middleLeftTop">
                              <p class="thingTitle">
                                <span class="selected">仓储信息</span>
                                <span class="unselected">铁路局模式</span>
                              </p>
                        </div>
                        <div class="middleLeftBottom">
                              <div class="options">
                                <span class="optionTitle">选择城市</span>
                                <select class="select" id="city">
                                  <option value="116.404*39.915">北京</option>
                                  <option value="121.399696*31.045601" >城市1</option>
                                </select>
                              </div>
                              <div class="options">
                                <span class="optionTitle">选择园区</span>
                                <select class="select">
                                   <option>乌鲁木齐</option>
                                   <option>乌鲁木齐</option>
                                    <option>乌鲁木齐</option>
                                </select>
                               </div>
                          <div class="options">
                            <span class="optionTitle">选择园区</span>
                            <select class="select">
                              <option>乌鲁木齐</option>
                              <option>乌鲁木齐</option>
                              <option>乌鲁木齐</option>
                            </select>
                          </div>
                          <div class="options">
                            <span class="optionTitle">选择园区</span>
                            <select class="select">
                              <option>乌鲁木齐</option>
                              <option>乌鲁木齐</option>
                              <option>乌鲁木齐</option>
                            </select>
                          </div>
                          <div class="options">
                            <span class="optionTitle">选择园区</span>
                            <select class="select">
                              <option>乌鲁木齐</option>
                              <option>乌鲁木齐</option>
                              <option>乌鲁木齐</option>
                            </select>
                          </div>
                          <div class="options">
                            <span class="optionTitle">选择园区</span>
                            <select class="select">
                              <option>乌鲁木齐</option>
                              <option>乌鲁木齐</option>
                              <option>乌鲁木齐</option>
                            </select>
                          </div>
                          <div class="options">
                            <span class="optionTitle">选择园区</span>
                            <select class="select">
                              <option>乌鲁木齐</option>
                              <option>乌鲁木齐</option>
                              <option>乌鲁木齐</option>
                            </select>
                          </div>
                          <div class="options">
                            <span class="optionTitle"> </span>
                            <span class="successBtn">预约成功</span>
                          </div>
                        </div>
                  </div>
                  <div class="middleRight" id="mapContent">

                  </div>

            </div>
            <div class="bottom"></div>
      </div>
</template>


<script>
     export  default {
       data(){
         return {
           //精度  纬度   不赋值默认是天安门,需要改变就改变这两个值
           jingdu:"116.404",
           weidu:"39.915",


           //信息窗口的json配置
           windowjson:"<p>fsads</p><img src='http://ourjs.github.io/static/2015/arrow.png'/>",
           //配置窗口宽高
           windowheight:100,
           windowwidth:250,
           windowtitle:"hello",

           //地图map
           map:{},
           //地图初始点
           point:{},
           //初始化地图级别
           type:"BMAP_NAVIGATION_CONTROL_LARGE"
         }
       },
       methods:{
         //当select框发生改变时候    调用这个方法传入经纬度
         changJingWei(jing,wei){
            this.map.panTo(new BMap.Point(jing,wei));
            this.initWindow(this.windowjson);
         },
         //初始化地图方法
         initMap(){
           this.map = new BMap.Map("mapContent");
           // 创建地图实例
           this.point = new BMap.Point(this.jingdu, this.weidu);
          // 创建点坐标
           this.map.centerAndZoom(this.point, 15);
           // 初始化地图，设置中心点坐标和地图级别
           var opts = {type: this.type}
           this.map.addControl(new BMap.NavigationControl(opts));
         },
         //初始化地图信息窗口
         initWindow(mapjson){
           var opts = {
             width : this.windowwidth,     // 信息窗口宽度
             height: this.windowheight,     // 信息窗口高度
             title : this.windowtitle  // 信息窗口标题
           }
           var infoWindow = new BMap.InfoWindow(mapjson, opts);  // 创建信息窗口对象
           this.map.openInfoWindow(infoWindow, this.map.getCenter());      // 打开信息窗口
         }
       },
       mounted(){
         this.initMap();
         this.initWindow(this.windowjson);
         //以下注释代码没用   你可以测试看看了解这个过程  删除不影响
         var _this = this;
         //模拟用户点击改变地点
//         setTimeout(function () {
//           _this.changJingWei("","");
//         },5000);
         //监听用户点击切换城市
         $("#city").change(function(item){
           let jing = $("#city").val().split("*")[0];
           let wei = $("#city").val().split("*")[1];
           _this.changJingWei(jing,wei);
         })
       }
     }
</script>

<style>
    .top{
      background-color: #ffffff;
      padding-left: 299px;
      padding-top: 50px;
      padding-bottom: 40px
    }
    .topTitle{
      width: 120px;
      height: 42px;
      color: #111111;
      font-size: 30px;
    }
    .topSpecial{
      height: 20px;
      width: 161px;
      font-size: 14px;
      color: #888888;
    }
    .middleContent{
      background-color: #f5f3f0;
      height: 600px;
    }
  /*中间部分   左面  和   右面*/
    .middleLeft{
      float: left;
      margin-left: 298px;
    }
    .thingTitle{
      width: 300px;
      height: 54px;
      line-height: 54px;
      background-color: #ffffff;
      text-align: left;
      margin-top: 20px;
    }
    .thingTitle>span{
      cursor: pointer;
    }
    .thingTitle>span:nth-of-type(1){
      margin-left: 60px;
    }
    .thingTitle>span:nth-of-type(2){
      margin-left: 30px;
    }
    .selected{
      color: #1B1E21;
      font-size: 16px;
      display: inline-block;
      width: 64px;
      height: 52px;
      line-height: 52px;
      border-bottom: 2px solid #1B1E21;
    }
    .unselected{
      color: #AAAAAA;
      font-size: 16px;
      text-align: center;
      width: 80px;
      height: 52px;
      line-height: 52px;
      display: inline-block;
    }
    .middleLeftBottom{
      width: 300px;
      height: 482px;
      background-color: #ffffff;
      margin-top: 10px;
    }
    .options{
      text-align: left;
      padding-top: 25px;
    }
    .optionTitle{
      display: inline-block;
      width: 56px;
      height: 20px;
      font-size: 14px;
      margin-left: 60px;
    }
    .select{
      /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
      border: solid 1px #DFDFDF;
      /*很关键：将默认的select选择框样式清除*/
      border-radius: 2px;
      width: 130px;
      height: 30px;
      appearance:none;
      -moz-appearance:none;
      -webkit-appearance:none;
      /*在选择框的最右侧中间显示小箭头图片*/
      background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;
      /*为下拉小箭头留出一点位置，避免被文字覆盖*/
      margin-left: 30px;
      padding-left: 10px;
    }
    .successBtn{
      width:120px;
      height: 36px;
      display: inline-block;
      border-radius: 2px;
      margin-left: 30px;
      text-align: center;
      line-height: 36px;
      background-color: #7ED321;
      color: #ffffff;
      cursor: pointer;
    }
    .middleRight{
      float: left;
      height: 600px;
      width: 730px;
      margin-left: 12px;
      border-radius: 2px;
    }
    .bottom{
      height: 100px;
      background-color: #ffffff;
    }
</style>

