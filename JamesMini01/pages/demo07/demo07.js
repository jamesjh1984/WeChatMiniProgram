// pages/demo07/demo07.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 1. 标签字符串，最常用
    // html:'<div class="J_Ald J_Ald_20140506002 mod" data-id="20140506002" data-spm-ab="5" style="float: left; overflow: hidden; width: 520px; display: block; visibility: visible;"><a href="https://huodong.taobao.com/wow/pm/act/daily/sgj" data-spm="d201405060021"><img src="https://img.alicdn.com/imgextra/i2/6000000004443/O1CN01LU3qnv1igwPbvzfKz_!!6000000004443-0-octopus.jpg"></a></div>'

    // 2. 对象数组
    html:[
      {
        name:"div",
        attrs:{
          class:"my_div",
          style:"color:red;"
        },
        children:[
          {
            name:"p",
            attr:{},
            children:[
              {
                type:"text",
                text:"hello"
              }
            ]
          }
        ]
      }
    ]
  }
})