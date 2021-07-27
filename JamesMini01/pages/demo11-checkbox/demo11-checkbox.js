// pages/demo11-checkbox/demo11-checkbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:0,
        name:"Apple",
        value:"Apple"
      },
      {
        id:1,
        name:"Google",
        value:"Google"
      },
      {
        id:2,
        name:"Microsoft",
        value:"Microsoft"
      }
    ],
    checkedList:[]
  },
  handleItemChange(e){
    // console.log(e);
    const checkedList=e.detail.value;
    this.setData({
      checkedList
    })
  }
})