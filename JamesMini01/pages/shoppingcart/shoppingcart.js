// pages/shoppingcart/shoppingcart.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num:0
    },

    // input输入框事件的函数
    handleInput(e){
        console.log(e);
        this.setData({
            num: e.detail.value
        })
    },

    // +-按钮的事件
    handleTap(e){
        console.log(e);
        const input=e.currentTarget.dataset.input;
        console.log('input: ' + input);
        this.setData({
            num: this.data.num + input
        })
    }
})