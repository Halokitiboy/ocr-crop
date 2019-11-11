/*
 * @Date: 2019-10-24 10:28:09
 * @Author: xiazhengchun
 * @LastEditTime: 2019-10-24 11:41:38
 */
// pages/takePhoto/takePhoto.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    width: 0,
    height: 0,
    gap:0,
    hasTakePhoto: false,
    src: "",
    logo: "../../assets/imgs/takephoto.jpg",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    that.ctx = wx.createCameraContext()
    // that.canvas = wx.createCanvasContext("image-canvas", this);
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          width: res.windowWidth,
          height: res.windowHeight,
          lineHeight:0.7 * res.windowHeight,
          gap: 0.09 * res.windowHeight,
          margin:0.1 * res.windowWidth
        })
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 拍照
   */
  takePhoto: function() {
    var that = this
    that.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        wx.setStorage({
          key: 'originalImagePath',
          data: res.tempImagePath,
        })
        wx.navigateTo({
          url: 'upload?path=' + res.tempImagePath + '&char=0'
        })
      }
    })
  }


    

})