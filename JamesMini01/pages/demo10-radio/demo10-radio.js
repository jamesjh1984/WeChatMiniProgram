// pages/demo10-radio/demo10-radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender: ""
  },
  handleChange(e){
    // console.log(e);
    let gender = e.detail.value;
    this.setData({
      gender
    })
  }
})